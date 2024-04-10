import { Chain, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const degen: Chain = {
  id: 666666666,
  network: 'degen',
  name: 'Degen',
  nativeCurrency: {
    decimals: 18,
    name: 'DEGEN',
    symbol: 'DEGEN',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.degen.tips'],
    },
    public: {
      http: ['https://rpc.degen.tips'],
    },
  },
};

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [degen],
  [publicProvider()],
);
