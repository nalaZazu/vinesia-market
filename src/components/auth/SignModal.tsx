import React, { useState } from "react";
import ModalContainer from "@/components/modal/ModalContainer";
import { useForm } from "react-hook-form";
// import { login } from "../services/Account";
import { useDispatch } from "react-redux";
import { loginAction } from "@/redux/account";
import { handleAllModals } from "@/redux/modalVisibility";

export default function SignModal({}) {
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
        signModal: { isVisible: false },
      })
    );
  };
  const onSubmit = (data: any) => {
    // dispatch(loginAction({ token: "Loremipsumdolorsitametconsectetur" }));
    // hideModal();
  };
  const openRegisterModal = () => {
    dispatch(
      handleAllModals({
        isLoading: false,
        signModal: { isVisible: false },
      })
    );
  };

  return (
    <ModalContainer hideModal={hideModal} title="SigUp">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-around">
          <div>
            <label
              htmlFor="fname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="First Name"
              {...register("fname", { required: true })}
            />
            {errors.fname && <p className="text-red-800 mb-1">Required</p>}
          </div>
          <div>
            <label
              htmlFor="lname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Last Name"
              {...register("lname", { required: true })}
            />
            {errors.lname && <p className="text-red-800 mb-1">Required</p>}
          </div>
        </div>
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
          onClick={openRegisterModal}
          className="w-full text-white bg-bgsecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <button
            onClick={openRegisterModal}
            className="text-blue-700 ms-2 hover:underline dark:text-blue-500"
          >
            Create account
          </button>
        </div> */}
      </form>
    </ModalContainer>
  );
}
