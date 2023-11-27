import axios from "axios";
import session from "../utils/session";

// export const baseURL = `${process.env.REACT_APP_PUBLIC_URL}`;

export const baseURL = `https://apitest.vinesia.com/`;

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const customAxios = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: `Bearer ${session.get("token")}`,
  },
});

// Step-2: Create request, response & error handlers
const requestHandler = (request: any) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  //   document.body.classList.add("loading-indicator");

  request.headers.Authorization = `Bearer ${session.get("token")}`;
  return request;
};

const responseHandler = (response: any) => {
  //   document.body.classList.remove("loading-indicator");
  // console.log("Log From Response Handler ", response);
  if (response.status === 401 || response.status === 403) {
    session.clear();
    // toast.error("Please Login to Proceed");
  }
  return response;
};

function ErrorHandler(error: any) {
  // const { clear } = useSession();
  // const dispatch = useDispatch();
  return error;
  //   document.body.classList.remove("loading-indicator");
  // toast.error(error.message);
  // console.log("Error From Error Handler ", error);
  if (error?.response.status === 401 || error?.response.status === 403) {
    session.clear();
    // dispatch(logoutAction());
    // toast.error("Please Login to Proceed");
  }
  return Promise.reject(error);
}

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => ErrorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => ErrorHandler(error)
);

// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;
