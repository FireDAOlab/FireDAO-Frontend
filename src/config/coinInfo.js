import addressMap from "../api/addressMap";
const fireSeed = {
    type:"ERC1155",
    address: addressMap["MintFireSeed"].address,
    symbol: "FireSeed",
    image: "https://firedao.mypinata.cloud/ipfs/QmaSURn3ERygvB6spQXBjrhkMhgRDRjGgqyo8m8WXvbZL1?pinataGatewayToken=56JDDIrkxPZKrpQ9Bw6ToqJuSz_qcSIr5m48sLAlRDEcxkAIiUrlvl3MemfWshTm&_gl=1*1snd041*_ga*MTUzNjEzNTkyNi4xNjc3NTcxNjIy*_ga_5RMPXG14TE*MTY4ODgwMzg1OC4yLjEuMTY4ODgwMzkzMy42MC4wLjA.",
}
const FDTOg = {
    name:"FDT-OG",
    type:"ERC20",
    address: addressMap["MintFireSeed"].address,
    symbol: "FireSeed",
    image: "https://firedao.mypinata.cloud/ipfs/QmaSURn3ERygvB6spQXBjrhkMhgRDRjGgqyo8m8WXvbZL1?pinataGatewayToken=56JDDIrkxPZKrpQ9Bw6ToqJuSz_qcSIr5m48sLAlRDEcxkAIiUrlvl3MemfWshTm&_gl=1*1snd041*_ga*MTUzNjEzNTkyNi4xNjc3NTcxNjIy*_ga_5RMPXG14TE*MTY4ODgwMzg1OC4yLjEuMTY4ODgwMzkzMy42MC4wLjA.",
}
export default {
    fireSeed,
    FDTOg
}