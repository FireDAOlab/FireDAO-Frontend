import erc20Abi from "../abi/erc20.json";
import MintPassPort from "../abi/MintPassPort.json";
import firelockFactory from "../abi/firelockFactory.json";
import fireLock from "../abi/fireLock.json";
import firelockFee from "../abi/firelockFee.json"
import MintFireSeed from "../abi/fireSeed.json";
import MintFireSoul from "../abi/MintFireSoul.json";
import Reputation from "../abi/Reputation.json";
import develop from "../env.js"
import airdrop from "../abi/airdrop.json";
import PrivateExchangePoolOG from "../abi/PrivateExchangePoolOG.json";
import TreasuryDistribution from "../abi/treasuryDistribution.json"
let CONTRACTS
if(develop.ENV==="production"){
    CONTRACTS = {
        erc20:{address:"0x46B85F2E50BFB50F4F78d29e98E679a859d5F839",abi:erc20Abi},
        user:{address:"0x4fF9283d50DFdFC8F18b555E944e269a32FD1551",abi:MintPassPort},
        fireLockFactory:{address:"0x315ED6Ce2A015f211Db9B834f25Ed1788cbC239f",abi:firelockFactory},
        fireLock:{address:"0x87f76e152889e487f07aA737581d3D7522AA65CE",abi:fireLock},
        MintFireSeed:{address:"0xb760e434cdc25baab700386df0c76f6256189db4",abi:MintFireSeed},
        mintFireSoul:{address:"0x038Fe4C89C1f0c08C88BB6c6013EF0f3AcB241A9",abi:MintFireSoul},
        Reputation:{address:"0xe34D37Dbc21987E5C49E9ac7B32ee2A560293ABb",abi:Reputation},
        SBT001:{address:"0xa6096Fb5541396e38bC86A0E6e912EBE9cB6f65a",abi:erc20Abi},
        SBT003:{address:"0x058C32ff6e93fd5d58598f6540063d7c00a2c49B",abi:erc20Abi},

        airdrop:{address:"0xcB9F989490a2084944323C727d159A4D4baA07C9",abi:airdrop},

        WETH:{address:"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",abi:erc20Abi}
    };
}else if(develop.ENV==="testproduction"){
    CONTRACTS = {
        erc20:{address:"0x46B85F2E50BFB50F4F78d29e98E679a859d5F839",abi:erc20Abi},
        user:{address:"0xfA1b3014BC44Fe6EF74D51384307E5563B2b205D",abi:MintPassPort},
        fireLockFactory:{address:"0x315ED6Ce2A015f211Db9B834f25Ed1788cbC239f",abi:firelockFactory},
        fireLock:{address:"0x87f76e152889e487f07aA737581d3D7522AA65CE",abi:fireLock},
        MintFireSeed:{address:"0xb760e434cdc25baab700386df0c76f6256189db4",abi:MintFireSeed},
        mintFireSoul:{address:"0x038Fe4C89C1f0c08C88BB6c6013EF0f3AcB241A9",abi:MintFireSoul},
        Reputation:{address:"0xe34D37Dbc21987E5C49E9ac7B32ee2A560293ABb",abi:Reputation},
        SBT001:{address:"0xa6096Fb5541396e38bC86A0E6e912EBE9cB6f65a",abi:erc20Abi},
        SBT003:{address:"0x058C32ff6e93fd5d58598f6540063d7c00a2c49B",abi:erc20Abi},
        airdrop:{address:"0xcB9F989490a2084944323C727d159A4D4baA07C9",abi:airdrop},
        WETH:{address:"0x5D0C84105D44919Dee994d729f74f8EcD05c30fB",abi:erc20Abi}
    };
}else if(develop.ENV==="dev"){
    CONTRACTS = {
        erc20:{address:"0x46B85F2E50BFB50F4F78d29e98E679a859d5F839",abi:erc20Abi},
        user:{address:"0x293dB4d98E2D904fA5E209D2313cEF5526Ee9879",abi:MintPassPort},
        fireLockFactory:{address:"0xa1608e29E35b25720BD7084bB703b77F31512195",abi:firelockFactory},
        fireLock:{address:"0x87f76e152889e487f07aA737581d3D7522AA65CE",abi:fireLock},
        firelockFee:{address:"0x0bd13018556f643BC0c53ee119087dC4393FF7c8",abi:firelockFee},
        MintFireSeed:{address:"0x5AC124e2d36F404007C7682D5c1a993d45b9a758",abi:MintFireSeed},
        mintFireSoul:{address:"0x41710a9BE962395bCC7390E7AC3596f0b90B43Ce",abi:MintFireSoul},
        Reputation:{address:"0x87a0941bBdE86Cf5C5b3DC68da4A2018a49BFaaB",abi:Reputation},
        SBT001:{address:"0xa6096Fb5541396e38bC86A0E6e912EBE9cB6f65a",abi:erc20Abi},
        SBT003:{address:"0x058C32ff6e93fd5d58598f6540063d7c00a2c49B",abi:erc20Abi},
        airdrop:{address:"0xcB9F989490a2084944323C727d159A4D4baA07C9",abi:airdrop},
        PrivateExchangePoolOG:{address:"0xDC7B5f481Fe2d53733c49586130082D04f2b3EAE",abi: PrivateExchangePoolOG},
        TreasuryDistribution:{address:"0x689b1290020D6b04658f0A6300b39373c596c260",abi:TreasuryDistribution},



        WETH:{address:"0x5D0C84105D44919Dee994d729f74f8EcD05c30fB",abi:erc20Abi},
        FDT:{address:"0x0486e93d84Cb7c272Ff6c302AD2A807F1D3B568c",abi:erc20Abi},


    };
}else{
    CONTRACTS = {
        erc20:{address:"0x46B85F2E50BFB50F4F78d29e98E679a859d5F839",abi:erc20Abi},
        user:{address:"0x40f3E9B064aC303fe04748E437F0936c019AD239",abi:MintPassPort},
        fireLockFactory:{address:"0x315ED6Ce2A015f211Db9B834f25Ed1788cbC239f",abi:firelockFactory},
        fireLock:{address:"0x87f76e152889e487f07aA737581d3D7522AA65CE",abi:fireLock},
        MintFireSeed:{address:"0x96A14e2424F38452d4dB4e3f6a67A96Fa8016cad",abi:MintFireSeed},
        mintFireSoul:{address:"0x038Fe4C89C1f0c08C88BB6c6013EF0f3AcB241A9",abi:MintFireSoul},
        Reputation:{address:"0x87a0941bBdE86Cf5C5b3DC68da4A2018a49BFaaB",abi:Reputation},
        SBT001:{address:"0xa6096Fb5541396e38bC86A0E6e912EBE9cB6f65a",abi:erc20Abi},
        SBT003:{address:"0x058C32ff6e93fd5d58598f6540063d7c00a2c49B",abi:erc20Abi},

        WETH:{address:"0x5D0C84105D44919Dee994d729f74f8EcD05c30fB",abi:erc20Abi}
    };
}

export default CONTRACTS
