import BigNumber from "bignumber.js";

const ZeroAddress = '0x0000000000000000000000000000000000000000';
const MaxUint256 = BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').toFixed(0);
const ETHDecimals = 18
const FDTDecimals = 18
const USDTDecimals = 18
const Network = {
  '0xaa36a7': {
    chainId: '0xaa36a7',
    chainType: '2',
    chainName: 'ETH sepolia',
    shortName: 'ETH',
    rpcUrls: ['https://rpc.sepolia.org'],
    blockExplorerUrls: ['https://sepolia.etherscan.io'],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  '0x13881': {
    chainId: '0x13881',
    chainType: '2',
    chainName: 'Mumbai',
    shortName: 'MATIC',
    rpcUrls: ['https://polygon-mumbai.blockpi.network/v1/rpc/public'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
};
export { Network, ZeroAddress,MaxUint256 ,ETHDecimals,FDTDecimals,USDTDecimals };
