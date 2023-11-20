import React from "react";
import LoginModal from "@/components/auth/LoginModal";
import { useSelector } from "react-redux";
import Popup from "../popup/page";
import SignModal from "../auth/SignModal";

export default function GroupOFModal() {
  const loginModalState: any = useSelector<any>(
    (state) => state?.modalState?.loginModal
  );
  const signModalState: any = useSelector<any>(
    (state) => state?.modalState?.signModal
  );
  console.log("signModel" , signModalState);
  
  const videoModaState: any = useSelector<any>(
    (state) => state?.modalState?.videoModal
  );
  console.log("videoModel", videoModaState);

  console.log("Login State ", loginModalState);
  return (
    <div>
      {loginModalState?.isVisible && <LoginModal />}
      {signModalState?.isVisible && <SignModal />}
      {videoModaState?.isVisible && <Popup />}
    </div>
  );
}
