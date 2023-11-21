import { configureChains, createConfig } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { DedicatedWalletConnector } from '@magiclabs/wagmi-connector';



import { publicProvider } from 'wagmi/providers/public'
import { LoginType, MagicCustomConnector } from './connectors/MagicConnector'

const walletConnectProjectId = 'b339ed4d7a45e8a5c350e565f9ac1c51'
const magicLinkApiKey = 'pk_live_36148059370BB25E'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli] : [])],
  [
    publicProvider(),
  ],
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: walletConnectProjectId,
      },
    }),

    new MagicCustomConnector({
      options: {
        apiKey: magicLinkApiKey, //required
      },
    }, LoginType.Social, 'google')

    // new DedicatedWalletConnector({
    //   options: {
    //     apiKey: magicLinkApiKey, //required
    //     oauthOptions : {
    //       providers: ['google', 'twitter', 'apple'],          
    //     },
    //     enableSMSLogin: true,
    //     enableEmailLogin: true,
    //     customHeaderText: 'Vinesia Login'
    //     //...Other options
    //   },
    // })
  ],
  publicClient,
  webSocketPublicClient,
})
