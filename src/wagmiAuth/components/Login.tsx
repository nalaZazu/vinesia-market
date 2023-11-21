'use client'

import { recoverMessageAddress } from 'viem'
import { type Address, useSignMessage, useAccount, useNetwork } from 'wagmi'

import { SiweMessage } from 'siwe'
import { useState } from 'react'

export function Login() {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { signMessageAsync } = useSignMessage()
 
  const [token, setToken] = useState()

  async function login() {
    const chainId = chain?.id
    if (!address || !chainId) return

    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce: ''
    });

    const signature = await signMessageAsync({
      message: message.prepareMessage(),
    })

    const verifyRes = await fetch('http://localhost:3010/auth/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, signature }),
    })
    if (!verifyRes.ok) throw new Error('Error verifying message')

    const resp = await verifyRes.json()
    setToken(resp.access_token)
  }

  return (
    <div>
      <button onClick={login}>Login</button>
      JWT Token: {token}
    </div>
  )
}
