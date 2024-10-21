import { defineChain } from 'viem'

export const MantleSepolia = /*#__PURE__*/ defineChain({
  id: 5003,
  name: 'Mantle Sepolia',
  network: 'mantle',
  nativeCurrency: {
    decimals: 18,
    name: 'Mantle Token',
    symbol: 'MNT',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.mantle.xyz'],
    },
    public: {
      http: ['https://rpc.sepolia.mantle.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'MantleChain',
      url: 'https://explorer.sepolia.mantle.xyz/',
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 4584012,
    },
  },
})


