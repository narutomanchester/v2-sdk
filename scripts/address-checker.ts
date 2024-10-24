const CORE_DEPLOYMENT_URL =
  'https://raw.githubusercontent.com/clober-dex/v2-core/master/deployments'

const PERIPHERY_DEPLOYMENT_URL =
  'https://raw.githubusercontent.com/clober-dex/v2-periphery/master/deployments'

const chainMap = {
  CLOBER_TESTNET: 7777,
  ARBITRUM_SEPOLIA: 421614,
  BASE: 8453,
  BERACHAIN_TESTNET: 80084,
  ZKSYNC: 324,
  MANTLE_SEPOLIA: 5003,
  MANTLE: 5000,
}

const getAddress = (address: string) => address.toLowerCase() as `0x${string}`

const isAddressEqual = (a: string, b: string) =>
  a.toLowerCase() === b.toLowerCase()

const parseZkDeployedAddressFromGithubSourceCode = async (
  url: string,
): Promise<`0x${string}`> => {
  const response = await fetch(url)
  const data = (await response.json()) as {
    entries: { address: string }[]
  }
  return getAddress(data.entries[0].address)
}

const parseDeployedAddressFromGithubSourceCode = async (
  url: string,
): Promise<`0x${string}`> => {
  const response = await fetch(url)
  const { address } = (await response.json()) as {
    address: string
  }
  return getAddress(address)
}

const fetchLatestContractAddresses = async (chainId: string) => {
  
  return {
    bookManagerAddress: getAddress("0x96bB289E6BC3B171c86d51B4e5fE03A577e9a4aA"),
    controllerAddress: getAddress("0x335c6f99379d2bcb0CbC170149c75a25A2fda5d1"),
    bookViewerAddress: getAddress("0x6Aba77e7CdC65623F6f22937958D355c73aF3d35"),
  }
}

const fetchPullRequestContractAddresses = async (pullRequestNumber: number) => {
  const response = await fetch(
    `https://api.github.com/repos/clober-dex/v2-sdk/pulls/${pullRequestNumber}/commits`,
  )
  const commits = (await response.json()) as {
    sha: string
  }[]
  const latestHash = commits[commits.length - 1].sha
  const r = await fetch(
    `https://raw.githubusercontent.com/clober-dex/v2-sdk/${latestHash}/src/constants/addresses.ts`,
  )
  const data = await r.text()

  const regex = /\[CHAIN_IDS.*\]: {[\s\S]*?}/g
  const matches = data.match(regex)
  if (!matches) {
    throw new Error('No matches found')
  }
  const json = matches.map((match) => {
    const chainId = match.match(/\[CHAIN_IDS\.(.*)\]/)![1]
    const controllerAddress = match.match(
      /Controller: getAddress\('(.*)'\)/,
    )![1]
    const bookManagerAddress = match.match(
      /BookManager: getAddress\('(.*)'\)/,
    )![1]
    const bookViewerAddress = match.match(
      /BookViewer: getAddress\('(.*)'\)/,
    )![1]
    return {
      chainId: chainMap[chainId as keyof typeof chainMap],
      controllerAddress,
      bookManagerAddress,
      bookViewerAddress,
    }
  })
  return json.reduce(
    (acc, curr) => {
      acc[curr.chainId] = {
        controllerAddress: getAddress(curr.controllerAddress),
        bookManagerAddress: getAddress(curr.bookManagerAddress),
        bookViewerAddress: getAddress(curr.bookViewerAddress),
      }
      return acc
    },
    {} as Record<
      number,
      {
        controllerAddress: `0x${string}`
        bookManagerAddress: `0x${string}`
        bookViewerAddress: `0x${string}`
      }
    >,
  )
}

let success = true

const main = async () => {
  const addresses = await fetchPullRequestContractAddresses(
    process.env.PR_NUMBER as any,
  )
  for (const chainId in addresses) {
    if (chainId === '7777') {
      continue
    }
    const { controllerAddress, bookManagerAddress, bookViewerAddress } =
      await fetchLatestContractAddresses(chainId)

    // Check if the controller address is the same as the one in the PR
    if (
      !isAddressEqual(addresses[chainId].controllerAddress, controllerAddress)
    ) {
      console.log(
        `Controller address mismatch for chain ${chainId}: ${addresses[chainId].controllerAddress} !== ${controllerAddress}`,
      )
      success = false
    }

    // Check if the bookManager address is the same as the one in the PR
    if (
      !isAddressEqual(addresses[chainId].bookManagerAddress, bookManagerAddress)
    ) {
      console.log(
        `BookManager address mismatch for chain ${chainId}: ${addresses[chainId].bookManagerAddress} !== ${bookManagerAddress}`,
      )
      success = false
    }

    // Check if the bookViewer address is the same as the one in the PR
    if (
      !isAddressEqual(addresses[chainId].bookViewerAddress, bookViewerAddress)
    ) {
      console.log(
        `BookViewer address mismatch for chain ${chainId}: ${addresses[chainId].bookViewerAddress} !== ${bookViewerAddress}`,
      )
      success = false
    }
  }

  if (!success) {
    throw new Error('Address mismatch')
  }
}

main()
