import { getAddress, zeroAddress } from 'viem'

import { CHAIN_IDS } from './chain'

export const CONTRACT_ADDRESSES: {
  [chain in CHAIN_IDS]: {
    Controller: `0x${string}`
    BookManager: `0x${string}`
    BookViewer: `0x${string}`
    Rebalancer: `0x${string}`
    Strategy: `0x${string}`
    Minter: `0x${string}`
    Operator: `0x${string}`
  }
} = {
  [CHAIN_IDS.CLOBER_TESTNET]: {
    Controller: getAddress('0xfAe4A04fa491DC21F77796394532a1B62d8331BF'),
    BookManager: getAddress('0x4a4eaF7382821da4Fb85e8A8d515f5555383d58A'),
    BookViewer: getAddress('0xA7603C4c895a533E66c30EA76cC6F6A6A0c5cbFe'),
    Rebalancer: getAddress('0xCF556d850277BC579c99C0729F4E72e62C57D811'),
    Strategy: getAddress('0x8aDF62b0b6078EaE5a2D54e9e5DD2AA71F6748C4'),
    Minter: getAddress('0xF2f51B00C2e9b77F23fD66649bbabf8a025c39eF'),
    Operator: getAddress('0x33559576B062D08230b467ea7DC7Ce75aFcbdE92'),
  },
  [CHAIN_IDS.CLOBER_TESTNET_2]: {
    Controller: getAddress('0xE64aCE1bF550E57461cd4e24706633d7faC9D7b0'),
    BookManager: getAddress('0xAA9575d63dFC224b9583fC303dB3188C08d5C85A'),
    BookViewer: getAddress('0x3e22d091F90ae759733B7CB06a6f7b440d84a425'),
    Rebalancer: getAddress('0x6A35651C455898021492d236149Afb7bF354bE1F'),
    Strategy: getAddress('0x888E1fafb5f2574b901142f877D186DE6C5ef89d'),
    Minter: getAddress('0xF2B48E2fc5463A8cD165363d0C7cd14E18449521'),
    Operator: getAddress('0x78FC5635f80441eB3708240C1A1EB7CbFba39B29'),
  },
  [CHAIN_IDS.ARBITRUM_SEPOLIA]: {
    Controller: getAddress('0xE64aCE1bF550E57461cd4e24706633d7faC9D7b0'),
    BookManager: getAddress('0xAA9575d63dFC224b9583fC303dB3188C08d5C85A'),
    BookViewer: getAddress('0x3e22d091F90ae759733B7CB06a6f7b440d84a425'),
    Rebalancer: getAddress('0x6A35651C455898021492d236149Afb7bF354bE1F'),
    Strategy: getAddress('0x888E1fafb5f2574b901142f877D186DE6C5ef89d'),
    Minter: getAddress('0xF2B48E2fc5463A8cD165363d0C7cd14E18449521'),
    Operator: getAddress('0x78FC5635f80441eB3708240C1A1EB7CbFba39B29'),
  },
  [CHAIN_IDS.BASE]: {
    Controller: getAddress('0xe4AB03992e214acfdCD05ccFB5C5C16e3d0Ca371'),
    BookManager: getAddress('0x382CCccbD3b142D7DA063bF68cd0c89634767F76'),
    BookViewer: getAddress('0xbfb608D67340fa54bA31614C293750EeB573c795'),
    Rebalancer: zeroAddress,
    Strategy: zeroAddress,
    Minter: zeroAddress,
    Operator: zeroAddress,
  },
  [CHAIN_IDS.BERACHAIN_TESTNET]: {
    Controller: getAddress('0xce3F3C90970C08Fe451998441b30879560AA6757'),
    BookManager: getAddress('0x874b1B795993653fbFC3f1c1fc0469214cC9F4A5'),
    BookViewer: getAddress('0xb735FdD82497Dd9AbfEEAdc659b960473BF896E0'),
    Rebalancer: zeroAddress,
    Strategy: zeroAddress,
    Minter: zeroAddress,
    Operator: zeroAddress,
  },
  [CHAIN_IDS.MANTLE_SEPOLIA]: {
    Controller: getAddress('0x335c6f99379d2bcb0CbC170149c75a25A2fda5d1'),
    BookManager: getAddress('0x96bB289E6BC3B171c86d51B4e5fE03A577e9a4aA'),
    BookViewer: getAddress('0x6Aba77e7CdC65623F6f22937958D355c73aF3d35'),
    Rebalancer: zeroAddress,
    Strategy: zeroAddress,
    Minter: zeroAddress,
    Operator: zeroAddress,
  },
  [CHAIN_IDS.ZKSYNC]: {
    Controller: getAddress('0x2Bd904F455928833F8E8C706d1cf01Eb5daaee7C'),
    BookManager: getAddress('0xAc6AdB2727F99C309acd511D942c0b2812e03614'),
    BookViewer: getAddress('0x6e717aA9BB48129aeDC408D435Cc54F79E8A747a'),
    Rebalancer: zeroAddress,
    Strategy: zeroAddress,
    Minter: zeroAddress,
    Operator: zeroAddress,
  },
}
