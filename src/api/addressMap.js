import erc20Abi from "../abi/erc20.json";
import MintPassPort from "../abi/MintPassPort.json";
import firelockFactory from "../abi/firelockFactory.json";
import fireLock from "../abi/fireLock.json";
import firelockFee from "../abi/firelockFee.json"
import MintFireSeed from "../abi/MintFireSeed.json";
import MintFireSoul from "../abi/MintFireSoul.json";
import Reputation from "../abi/Reputation.json";
import develop from "../env.js"
import airdrop from "../abi/airdrop.json";
import PrivateExchangePoolOG from "../abi/PrivateExchangePoolOG.json";
import PrivateExchangePoolOGV5 from "../abi/PrivateExchangePoolOGV5.json"
import TreasuryDistribution from "../abi/treasuryDistribution.json"
import cityNode from "../abi/cityNode.json"
import Guild from "../abi/Guild.json"
import erc1155 from "../abi/erc1155.json"
import FDT from "../abi/fdt.json"
import fdtOgToFdt from "../abi/fdtOgTOFdt.json"
import FLMPool from "../abi/FLMPool.json";
import FDTLockMining from "../abi/FDTLockMining.json";
import emergencyPool from "../abi/emergencyPool.json"
import normalPool from "../abi/normalPool.json"
import poolManger from "../abi/pooManger.json"
import autolp from "../abi/autolp.json"
import seedDonation from "../abi/seedDonation.json"
import FLMExchange from "../abi/FLMExchange.json"
import FLMAirdrop from "../abi/FLMAirdrop.json"
let CONTRACTS
CONTRACTS = {
    erc20: {address: "0x46B85F2E50BFB50F4F78d29e98E679a859d5F839", abi: erc20Abi},
    user: {address: "0x1853B8d43B9500F60cc68b672642A02eC26667B6", abi: MintPassPort},
    fireLockFactory: {address: "0x1853B8d43B9500F60cc68b672642A02eC26667B6", abi: firelockFactory},
    fireLock: {address: "0x87f76e152889e487f07aA737581d3D7522AA65CE", abi: fireLock},
    firelockFee: {address: "0x0bd13018556f643BC0c53ee119087dC4393FF7c8", abi: firelockFee},
    MintFireSeed: {address: "0x947dA85763B784897B85F43567A5B1f743dd0fe0", abi: MintFireSeed},
    mintFireSoul: {address: "0xEFb981c48870Fe757850e993B77810A887c37b14", abi: MintFireSoul},
    Reputation: {address: "0x87a0941bBdE86Cf5C5b3DC68da4A2018a49BFaaB", abi: Reputation},
    SBT001: {address: "0xa6096Fb5541396e38bC86A0E6e912EBE9cB6f65a", abi: erc20Abi},
    SBT003: {address: "0x058C32ff6e93fd5d58598f6540063d7c00a2c49B", abi: erc20Abi},
    airdrop: {address: "0xcB9F989490a2084944323C727d159A4D4baA07C9", abi: airdrop},
    PrivateExchangePoolOG: {address: "0x65d741A9d21cA93AB8aC202b7e6693AE3656CEFa", abi: PrivateExchangePoolOG},
    PrivateExchangePoolOGV5: {address: "0x20aD181230BB74253e854aCFe47C96C062B8c973", abi: PrivateExchangePoolOGV5},

    TreasuryDistribution: {address: "0xA8FcF03CDEc12CF19767d12aC4c627FF6e5D1c21", abi: TreasuryDistribution},
    Guild: {address: "0xD75a1A6F27993571048C17FD1D346a36DD38E6Bd", abi: Guild},
    cityNode: {address: "0x054dd609360c254b21E39AFDa333317486761D3d", abi: cityNode},
    WETH: {address: "0x7313A220a6220bF83245058a29Eb6187e9964927", abi: erc20Abi},
    FDT: {address: "0x37F361E62c7AebD5C75614Dda1a18fb84f0b99A1", abi: FDT},
    fdtOgToFdt: {address: "0x21212FC679C23bbAa8ae3dDAE43127590331ccA1", abi: fdtOgToFdt},
    FLMPool: {address: "0xF4CFfc4e0D71B26592D3a916160e3Fc6ca58aa62", abi: FLMPool},
    FDTLockMining:{address:"0x8Fe6595636e03dee7b8BDcC23b0533E6Eb26B781",abi:FDTLockMining},
    autolp: {address: "0xEACd7603C3b6BD101636B214EE36887D88d199E9", abi: autolp},

    OGPool: {address: "0xf2b2575DEbb48FC225D2289ed77D246322a60dbF", abi: seedDonation},
    FLMExchange:{address:"0xC63595DBE3dC5B8727f69C64d93990c510cf5AB0",abi:FLMExchange},

    seedDonation: {address: "0xf2b2575DEbb48FC225D2289ed77D246322a60dbF", abi: seedDonation},
    FLMPoolLPAddress:{address:"0x6adf22540e77a100d136ca76a79a39af3b30484a"},

    FLM:{address:"0x3A04051b411912EdF2873e50246c95fba3a90951"},
    FLMAirdrop:{address:"0x6e1d634d8c74dAa36140A006582Dd923949e6A46", abi:FLMAirdrop},
    emergencyPool: {address: "0x251a7c07Ff5b71650DF9FEeB01184FC31a2bD57C", abi: emergencyPool},
    normalPool: {address: "0x44dBD7664A4F89C2598b93a04C3EF7c13FC859bC", abi: normalPool},
    poolManager : {address: "0x59eEeD4C641592a622d1Ee1F960D2e27376BC212", abi: poolManger},
    erc1155: {abi: erc1155},
    FDTOG:{address:"0x37F361E62c7AebD5C75614Dda1a18fb84f0b99A1"}
};
export default CONTRACTS
