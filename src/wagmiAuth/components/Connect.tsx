"use client";

import { BaseError } from "viem";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import coinbaseIcon from "@/assets/icon/coinbase.png";
import walletConnectIcon from "@/assets/icon/wallet_connect_icon.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getJWTToken, getProfile } from "@/services/Account";
import { SiweMessage } from "siwe";
import { type Address, useSignMessage, useNetwork } from "wagmi";
import session from "@/services/utils/session";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@/redux/account";
import { handleAllModals } from "@/redux/modalVisibility";

export function Connect() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector<any>(
    (state) => state?.account?.isAuthenticated
  );
  console.log("Is Authenticated ", isAuthenticated);

  const { connector, isConnected, isConnecting, isReconnecting } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const icons: any = {
    "coinbase wallet": coinbaseIcon,
    walletconnect: walletConnectIcon,
  };
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  const [token, setToken] = useState();

  async function login() {
    setLoading(true);
    // debugger;
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
    await getJWTToken({ message, signature }).then(async (resp: any) => {
      setToken(resp?.data.access_token);
      dispatch(loginAction(resp?.data));
      dispatch(
        handleAllModals({
          loginModal: {
            isVisible: false,
          },
        })
      );
      setLoading(false);
      console.log("JWT Token ***", resp);

      // await loginApi(resp?.data?.access_token).then((loginRes) => {
      //   console.log("login Res ", loginRes);
      // });
    });
    // await getProfile().then((profileRes: any) => {
    //   console.log("Profile Respoce  ", profileRes);
    // });
  }

  useEffect(() => {
    if (isConnected && !isAuthenticated) {
      login();
    }
  }, [isConnected]);
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     getProfile().then((profileRes: any) => {
  //       console.log("Profile Respoce  ", profileRes);
  //     });
  //   }
  // }, [isAuthenticated]);

  console.log("is connected ", isConnected);

  return (
    <div>
      <div>
        {isConnected && (
          <button onClick={() => disconnect()}>
            Disconnect from {connector?.name}
          </button>
        )}

        {(isConnecting || loading) && <div>Connecting ...</div>}

        {isReconnecting && <div>Reconnecting ...</div>}
        <div>
          {connectors
            .filter((y: any) => y.ready && y.id !== connector?.id)
            .map((x) => (
              <button
                className="px-3 py-2 bg-gray-500 w-full my-2 text-white flex items-center shadow"
                key={x.id}
                onClick={() => connect({ connector: x })}
              >
                {icons[x?.name?.toLowerCase()] && (
                  <Image
                    width={30}
                    src={icons[x.name?.toLowerCase()]}
                    alt={x?.name}
                  />
                )}
                <span className="ps-3">{x.name}</span>
                {isLoading && x.id === pendingConnector?.id && " (connecting)"}
              </button>
            ))}
        </div>
      </div>

      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  );
}
