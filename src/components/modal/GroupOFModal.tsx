import React from "react";
import LoginModal from "@/components/auth/LoginModal";
import { useSelector } from "react-redux";

export default function GroupOFModal() {
  const loginModalState: any = useSelector<any>(
    (state) => state?.modalState?.loginModal
  );

  console.log("Login State ", loginModalState);
  return <div>{loginModalState?.isVisible && <LoginModal />}</div>;
}
