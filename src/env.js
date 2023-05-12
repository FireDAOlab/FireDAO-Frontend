const PinataAPIKey = "7805d53ed842fdfa3b4e"
const PinataAPISecret = "67b78b7fba693f7efeec10a174caab4ffbf642f5bd824b16ffa445a84c5621ab"
const PinataAPIJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\n" +
    "eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZjk3NDM4Yy01MjVlLTQxYjMtOGZhYy1lMThkMTM5N2ZjMWIiLCJlbWFpbCI6ImRkYXJoMTAxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI3ODA1ZDUzZWQ4NDJmZGZhM2I0ZSIsInNjb3BlZEtleVNlY3JldCI6IjY3Yjc4YjdmYmE2OTNmN2VmZWVjMTBhMTc0Y2FhYjRmZmJmNjQyZjViZDgyNGIxNmZmYTQ0NWE4NGM1NjIxYWIiLCJpYXQiOjE2NzU2NDgxODd9.3MbfMlVayQbv8Dz39LFr3ErZHXtm1CD5yr4zS6lqQKI"
const PinataGateWay="https://gateway.pinata.cloud/ipfs"
const PinataToken = "pinataGatewayToken=56JDDIrkxPZKrpQ9Bw6ToqJuSz_qcSIr5m48sLAlRDEcxkAIiUrlvl3MemfWshTm"
const ethScan = "https://goerli-rollup-explorer.arbitrum.io/"
const openSeaNFT = "https://opensea.io/zh-CN/collection/fireseed"

export default {
    Name:"Arbitrum Goerli Testnet",
    ENV: "dev",
    chainId:80001,
    webside:"http://appdev.firedao.online",
    forum: "http://forum01.firedao.online",
    graphUrl:"https://api.thegraph.com/subgraphs/name/henry-maker-commits/",
    graphUrlBase:"https://api.thegraph.com/subgraphs/name/",
    PinataAPIKey,
    PinataAPISecret,
    PinataAPIJWT,
    ethScan,
    PinataGateWay,
    PinataToken,
    openSeaNFT
}
