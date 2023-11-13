import React from "react";
import LoginModal from "@/components/auth/LoginModal";
import { useSelector } from "react-redux";

export default function GroupOFModal() {
  const loginModalState: any = useSelector<any>(
    (state) => state?.modalState?.loginModal
  );
  const videoModaState = useSelector<any>(
    (state) => state?.modalState?.videoModal
  );
  console.log("videoModel", videoModaState);

  console.log("Login State ", loginModalState);
  return <div>{loginModalState?.isVisible && <LoginModal />}</div>;
}
