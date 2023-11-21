import React, { useState } from "react";
import ModalContainer from "@/components/modal/ModalContainer";
import { useForm } from "react-hook-form";
// import { login } from "../services/Account";
import { useDispatch } from "react-redux";
import { loginAction } from "@/redux/account";
import { handleAllModals } from "@/redux/modalVisibility";
import { getJWTToken, login } from "@/services/Account";
import WagmiAuth from "@/wagmiAuth/app/page";
export default function LoginModal({}) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(
      handleAllModals({
        isLoading: false,
        loginModal: { isVisible: false },
      })
    );
  };
  const handleSignupModal = () => {
    dispatch(handleAllModals({ signupModal: { isVisible: true } }));
    hideModal();
  };
  const onSubmit = (data: any) => {
    let postData = {
      message: {
        domain: "wine-auth.vercel.app",
        address: "0x1D5B4c24F6dC8f1f4ddedfD20CF37aEB5f1502f4",
        statement: "Sign in with Ethereum to the app.",
        uri: "https://wine-auth.vercel.app",
        version: "1",
        chainId: 1,
        nonce: "4waszA4ZeDL0ps5bo",
        issuedAt: "2023-11-21T12:44:25.780Z",
      },
      signature:
        "0x6e84e437526239e6d70d5b4adcfda237c8ca4a71d22ac05328f335a629db50b66c52b1fc28f3a72749b36246dcaac3c03f835341b2d1d499efd1c8bb08121fa31b",
    };
    getJWTToken(postData)
      .then((res:any) => {
        console.log("JWT Token REsponse ", res);
        login(res?.data?.access_token)
          .then((logRes) => {
            console.log("Log From Login ", logRes);
          })
          .catch((errLogin) => {
            console.log("Err login ", errLogin);
          });
      })
      .catch((err:any) => {
        console.log("jwt Token Error ", err);
      });
    dispatch(loginAction({ token: "Loremipsumdolorsitametconsectetur" }));
    // hideModal();
  };
  const openRegisterModal = () => {
    hideModal();
    handleSignupModal();
  };

  return (
    <ModalContainer hideModal={hideModal} title="Login">
      {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            {...register("email", {
              required: "Must be Valid Email",
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors?.email && (
            <p className="text-red-800 mb-1">Valid Email Required</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-800 mb-1">Required</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="text-red-800 mb-1">Min Length should be 6</p>
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex items-start"></div>
          <a
            href="#"
            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-bgsecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <button
            onClick={openRegisterModal}
            className="text-blue-700 ms-2 hover:underline dark:text-blue-500"
          >
            Create account
          </button>
        </div>
      </form> */}
      <WagmiAuth />
    </ModalContainer>
  );
}
