import React from "react";
import LoginModal from "@/components/auth/LoginModal";
import { useSelector } from "react-redux";
import Popup from "../popup/page";

export default function GroupOFModal() {
  const loginModalState: any = useSelector<any>(
    (state) => state?.modalState?.loginModal
  );
  const videoModaState :any = useSelector<any>(
    (state) => state?.modalState?.videoModal
  );
  console.log("videoModel", videoModaState);

  console.log("Login State ", loginModalState);
  return (
    <div>
      {loginModalState?.isVisible && <LoginModal />}
      {videoModaState?.isVisible && <Popup/>}
    </div>
  );
}
