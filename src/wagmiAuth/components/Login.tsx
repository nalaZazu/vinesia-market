"use client";

import { recoverMessageAddress } from "viem";
import { type Address, useSignMessage, useAccount, useNetwork } from "wagmi";

import { SiweMessage } from "siwe";
import { useEffect, useState } from "react";
import { getJWTToken, getProfile, login as loginApi } from "@/services/Account";
import { useSelector } from "react-redux";

export function Login() {
  const isAuthenticated = useSelector<any>(
    (state) => state?.account?.isAuthenticated
  );
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  const [token, setToken] = useState();

  async function login() {
    const chainId = chain?.id;
    if (!address || !chainId) return;

    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the app.",
      uri: window.location.origin,
      version: "1",
      chainId,
      nonce: "",
    });

    const signature = await signMessageAsync({
      message: message.prepareMessage(),
    });

    // const verifyRes = await fetch('http://localhost:3010/auth/verify', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ message, signature }),
    // })
    // if (!verifyRes.ok) throw new Error('Error verifying message')
    // const resp = await verifyRes.json()
    getJWTToken({ message, signature }).then(async (resp: any) => {
      setToken(resp?.data.access_token);
      console.log("JWT Token ", resp);
      await getProfile().then((profileRes: any) => {
        console.log("Profile Respoce  ", profileRes);
      });
      // await loginApi(resp?.data?.access_token).then((loginRes) => {
      //   console.log("login Res ", loginRes);
      // });
    });
  }

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log("Get Profile Called From Login ");

  //     getProfile().then((profileRes: any) => {
  //       console.log("Profile Respoce  ", profileRes);
  //     });
  //   }
  // }, [isAuthenticated]);

  return (
    <div>
      <button onClick={login}>Login</button>
      JWT Token: {token}
    </div>
  );
}
