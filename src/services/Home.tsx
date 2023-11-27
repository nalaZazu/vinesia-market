import { DELETE, GET, PATCH, POST } from "./Adapter/base";

export const getHomePage = () => {
  return GET(`/`);
};

//invoices/show/1
