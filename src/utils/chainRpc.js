const networkSettings = {
    1: {
     chainId: `0x${parseInt(1, 10).toString(16)}`,
     chainName: 'Ethereum Mainnet',
     nativeCurrency: {
       name: 'ETHEREUM',
       symbol: 'ETH',
       decimals: 18,
     },
     rpcUrls: ['https://rpc.ankr.com/eth'],
     blockExplorerUrls: ['https://etherscan.io/'],
   },
     56: {
       chainId: `0x${parseInt(56, 10).toString(16)}`,
       chainName: 'BSC Mainnet',
       nativeCurrency: {
         name: 'Binance Coin',
         symbol: 'BNB',
         decimals: 18,
       },
       rpcUrls: ['https://bsc-dataseed.binance.org'],
       blockExplorerUrls: ['https://bscscan.com/'],
     },
     97: {
       chainId: `0x${parseInt(97, 10).toString(16)}`,
       chainName: 'Binance Smart Chain Testnet',
       nativeCurrency: {
         name: 'Binance Coin',
         symbol: 'tBNB',
         decimals: 18,
       },
       rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
       blockExplorerUrls: ['https://testnet.bscscan.com/'],
     },
     4002: {
      chainId: `0x${parseInt(4002, 10).toString(16)}`,
      chainName: 'Fantom Testnet',
      nativeCurrency: {
        name: 'FTM',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.ankr.com/fantom_testnet'],
      blockExplorerUrls: ['https://testnet.ftmscan.com/'],
    },
     80001: {
       chainId: `0x${parseInt(80001, 10).toString(16)}`,
       chainName: 'Mumbai',
       nativeCurrency: {
         name: 'Mumbai',
         symbol: 'MATIC',
         decimals: 18,
       },
       rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
       blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
     },
     128: {
       chainId: `0x${parseInt(128, 10).toString(16)}`,
       chainName: 'HECO Mainnet',
       nativeCurrency: {
         name: 'Huobi Token',
         symbol: 'HT',
         decimals: 18,
       },
       rpcUrls: ['https://http-mainnet.hecochain.com'],
       blockExplorerUrls: ['https://hecoinfo.com/'],
     },
     43114: {
       chainId: `0x${parseInt(43114, 10).toString(16)}`,
       chainName: 'Avalanche C-Chain',
       nativeCurrency: {
         name: 'AVAX',
         symbol: 'AVAX',
         decimals: 18,
       },
       rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
       blockExplorerUrls: ['https://snowtrace.io/'],
     },
     137: {
       chainId: `0x${parseInt(137, 10).toString(16)}`,
       chainName: 'Polygon Mainnet',
       nativeCurrency: {
         name: 'MATIC',
         symbol: 'MATIC',
         decimals: 18,
       },
       rpcUrls: ['https://polygon-rpc.com'],
       blockExplorerUrls: ['https://polygonscan.com/'],
     },
     250: {
       chainId: `0x${parseInt(250, 10).toString(16)}`,
       chainName: 'Fantom Opera',
       nativeCurrency: {
         name: 'FTM',
         symbol: 'FTM',
         decimals: 18,
       },
       rpcUrls: ['https://rpc.ftm.tools'],
       blockExplorerUrls: ['https://ftmscan.com/'],
     },
     1666600000: {
       chainId: `0x${parseInt(1666600000, 10).toString(16)}`,
       chainName: 'Harmony One',
       nativeCurrency: {
         name: 'ONE',
         symbol: 'ONE',
         decimals: 18,
       },
       rpcUrls: ['https://api.s0.t.hmny.io/'],
       blockExplorerUrls: ['https://explorer.harmony.one/'],
     },
     42161: {
       chainId: `0x${parseInt(42161, 10).toString(16)}`,
       chainName: 'Arbitrum One',
       nativeCurrency: {
         name: 'ETH',
         symbol: 'ETH',
         decimals: 18,
       },
       rpcUrls: ['https://arb1.arbitrum.io/rpc'],
       blockExplorerUrls: ['https://arbiscan.io/'],
     },
     42220: {
       chainId: `0x${parseInt(42220, 10).toString(16)}`,
       chainName: 'Celo',
       nativeCurrency: {
         name: 'CELO',
         symbol: 'CELO',
         decimals: 18,
       },
       rpcUrls: ['https://forno.celo.org'],
       blockExplorerUrls: ['https://explorer.celo.org/'],
     },
     1285: {
       chainId: `0x${parseInt(1285, 10).toString(16)}`,
       chainName: 'Moonriver',
       nativeCurrency: {
         name: 'Moonriver',
         symbol: 'MOVR',
         decimals: 18,
       },
       rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
       blockExplorerUrls: ['https://moonriver.moonscan.io/'],
     },
     25: {
       chainId: `0x${parseInt(25, 10).toString(16)}`,
       chainName: 'Cronos',
       nativeCurrency: {
         name: 'CRO',
         symbol: 'CRO',
         decimals: 18,
       },
       rpcUrls: ['https://evm-cronos.crypto.org'],
       blockExplorerUrls: ['https://cronos.crypto.org/explorer/'],
     },
   };


const getRpc = (chainId) => {
    return networkSettings[chainId].rpcUrls[0]
}  

module.exports = { getRpc }