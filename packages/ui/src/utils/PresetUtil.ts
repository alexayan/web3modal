/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable curly */

interface EvmWindow {
  ethereum?: any
  spotEthWallet?: any
  abc?: any
  okxwallet?: any
}

export const PresetUtil = {
  walletExplorerImage() {
    const fallback = '09a83110-5fc3-45e1-65ab-8f7df2d6a400'
    const presets = {
      _fallback: '09a83110-5fc3-45e1-65ab-8f7df2d6a400',
      brave: '125e828e-9936-4451-a8f2-949c119b7400',
      metaMask: '619537c0-2ff3-4c78-9ed8-a05e7567f300',
      coinbaseWallet: 'f8068a7f-83d7-4190-1f94-78154a12c600',
      ledger: '39890ad8-5b2e-4df6-5db4-2ff5cf4bb300',
      spotEthWallet: '1bf33a89-b049-4a1c-d1f6-4dd7419ee400',
      exodus: '4c16cad4-cac9-4643-6726-c696efaf5200',
      trust: '0528ee7e-16d1-4089-21e3-bbfb41933100',
      core: '35f9c46e-cc57-4aa7-315d-e6ccb2a1d600',
      bitkeep: '3f7075d0-4ab7-4db5-404d-3e4c05e6fe00',
      mathWallet: '26a8f588-3231-4411-60ce-5bb6b805a700',
      opera: '877fa1a4-304d-4d45-ca8e-f76d1a556f00',
      tokenPocket: 'f3119826-4ef5-4d31-4789-d4ae5c18e400',
      tokenary: '5e481041-dc3c-4a81-373a-76bbde91b800',
      '1inch': 'dce1ee99-403f-44a9-9f94-20de30616500',
      phantom: '62471a22-33cb-4e65-5b54-c3d9ea24b900',
      abcWallet: '8d0c93ce-9d18-44ec-6243-4b94ac0c6f00',
      okxwallet: '45f2f08e-fc0c-4d62-3e63-404e72170500'
    } as Record<string, string | undefined>

    return { fallback, presets }
  },

  optimisticWalletId(id: string) {
    if (id.toUpperCase() !== 'INJECTED') return id

    const { ethereum, spotEthWallet, abc, okxwallet }: EvmWindow = window
    // Default to metamask and reccomend it as default install
    if (!ethereum) return 'metaMask'
    if (ethereum.isTrust || ethereum.isTrustWallet) return 'trust'
    if (ethereum.isPhantom) return 'phantom'
    if (ethereum.isBraveWallet) return 'brave'
    if (spotEthWallet) return 'spotEthWallet'
    if (ethereum.isExodus) return 'exodus'
    if (ethereum.isTokenPocket) return 'tokenPocket'
    if (ethereum.isFrame) return 'frame'
    if (ethereum.isPortal) return 'ripoPortal'
    if (ethereum.isTally) return 'tally'
    if (ethereum.isCoinbaseExtension) return 'coinbaseWallet'
    if (ethereum.isAvalanche) return 'core'
    if (ethereum.isBitKeep) return 'bitkeep'
    if (ethereum.isMathWallet) return 'mathWallet'
    if (ethereum.isOpera) return 'opera'
    if (ethereum.isTokenary) return 'tokenary'
    if (ethereum.isOneInchIOSWallet || ethereum.isOneInchAndroidWallet) return '1inchWallet'
    if (ethereum.isKuCoinWallet) return 'kuCoinWallet'
    if (abc) return 'abcWallet'
    if (okxwallet) return 'okxwallet'
    // Have to push metamask check lower, as most other wallets add this
    if (ethereum.isMetaMask) return 'metaMask'

    return 'injected'
  },

  chainExplorerImage() {
    const presets = {
      // Arbitrum
      42161: '600a9a04-c1b9-42ca-6785-9b4b6ff85200',
      // Arbitrum Goerli
      421613: '600a9a04-c1b9-42ca-6785-9b4b6ff85200',
      // Arbitrum Rinkeby
      421611: '600a9a04-c1b9-42ca-6785-9b4b6ff85200',
      // Avalanche
      43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
      // Avalanche Fuji
      43113: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
      // Binance Smart Chain
      56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
      // Binance Smart Testnet
      97: '93564157-2e8e-4ce7-81df-b264dbee9b00',
      // Fantom
      250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
      // Fantom Testnet
      4002: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
      // Ethereum
      1: '692ed6ba-e569-459a-556a-776476829e00',
      // Optimism
      10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
      // Optimism Goerli Testnet
      420: 'ab9c186a-c52f-464b-2906-ca59d760a400',
      // Optimism Kovan Testnet
      69: 'ab9c186a-c52f-464b-2906-ca59d760a400',
      // Polygon
      137: '41d04d42-da3b-4453-8506-668cc0727900',
      // Polygon Mumbai Testnet
      80001: '41d04d42-da3b-4453-8506-668cc0727900'
    } as Record<string, string | undefined>

    return { presets }
  },

  optimisticName(name: string) {
    if (name.toUpperCase() !== 'INJECTED' && name !== 'MetaMask') {
      return name
    }
    if (name === 'MetaMask') {
      return 'MetaMask'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { ethereum, spotEthWallet, abc, okxwallet }: EvmWindow = window
    // Default to metamask and reccomend it as default install
    if (!ethereum) return 'MetaMask'
    if (ethereum.isTrust || ethereum.isTrustWallet) return 'Trust'
    if (ethereum.isPhantom) return 'Phantom'
    if (ethereum.isBraveWallet) return 'Brave'
    if (spotEthWallet) return 'Spot'
    if (ethereum.isExodus) return 'Exodus'
    if (ethereum.isTokenPocket) return 'TokenPocket'
    if (ethereum.isFrame) return 'Frame'
    if (ethereum.isPortal) return 'Ripio Portal'
    if (ethereum.isTally) return 'Tally'
    if (ethereum.isCoinbaseExtension) return 'Coinbase'
    if (ethereum.isAvalanche) return 'Core'
    if (ethereum.isBitKeep) return 'BitKeep'
    if (ethereum.isMathWallet) return 'MathWallet'
    if (ethereum.isOpera) return 'Opera'
    if (ethereum.isTokenary) return 'Tokenary'
    if (ethereum.isOneInchIOSWallet || ethereum.isOneInchAndroidWallet) return '1inch Wallet'
    if (ethereum.isKuCoinWallet) return 'KuCoin Wallet'
    if (abc) return 'ABC Wallet'
    if (okxwallet) return 'OKX Wallet'
    // Have to push metamask check lower, as most other wallets add this
    if (ethereum.isMetaMask) return 'MetaMask'

    return 'Injected'
  }
}
