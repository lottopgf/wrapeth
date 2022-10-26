import { chain, configureChains } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import gnosisLogo from 'public/gnosis-logo.png';
import { Chain } from 'types';

const xdai: Chain = {
  id: 100,
  name: 'Gnosis Chain',
  network: 'gnosis',
  iconUrl: gnosisLogo.src,
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'xDai',
    symbol: 'XDAI',
  },
  rpcUrls: {
    default: 'https://rpc.gnosischain.com',
  },
  blockExplorers: {
    default: { name: 'BlockScout', url: 'https://blockscout.com/poa/xdai' },
  },
  testnet: false,
};

export const { chains, provider } = configureChains(
  [
    chain.mainnet,
    xdai,
    chain.polygon,
    chain.arbitrum,
    chain.optimism,
    chain.goerli,
    chain.sepolia,
  ],
  [
    infuraProvider({ apiKey: process.env.REACT_APP_RPC_KEY }),
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_KEY }),
    jsonRpcProvider({
      rpc: (chain: any) => ({
        http: chain.rpcUrls.default,
      }),
    }),
  ],
);
