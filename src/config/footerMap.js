import fireIcon1 from "../imgs/fire_icon1.webp";
import fireIcon2 from "../imgs/fire_icon2.webp";
import fireIcon7 from "../imgs/fire_icon7.webp";
import fireIcon3 from "../imgs/fire_icon3.webp";
import fireIcon4 from "../imgs/fire_icon4.webp";
import fireIcon5 from "../imgs/fire_icon5.webp";
import fireIcon6 from "../imgs/fire_icon6.webp";
import React from "react";

function getItem(label, key,  children, type) {
    return {
        key,
        
        children,
        label,
        type,
    };
}
export default  [
    getItem('Holy Fire Altar', 'Holy Fire Altar', [
        getItem('Mint Passport', 'MintPassport'),
        getItem('Mint FireSeed', 'MintFireSeed'),
        getItem('Mint FireSoul', 'MintFireSoul'),
        getItem('My FireSeed', 'PassFireSeed'),
        getItem('My Passport', 'MyPassport'),
        getItem('PID Airdrop', 'PidAirdrop'),
        getItem('PID List', 'PIDList'),
        getItem('FID List', 'FIDList'),
        getItem('SBT List', 'SBTList'),
        // getItem('Reputation', 'Reputation'),
    ]),



    getItem('FDT Square', 'FDTSquare',  [
        getItem('OG Pool', 'OGPool'),
        getItem('Seed Pool', 'SeedPool'),
        getItem('Consensus Pool', 'ConsensusPool'),
        getItem('FLM Pool', 'FLMPool'),
        
        getItem('Uniswap Pool', 'UniswapPool'),
        getItem('FDT Release', 'FDTRelease'),
        getItem('FLM Release', 'FLMRelease'),
        getItem('FDT Holder', 'FDTHolder'),
        getItem('FDT-OG', 'FDTOgToFdt'),
        getItem('Auto Reflow LP', 'AutoReflowLP'),
        getItem('Seed Donation', 'SeedDonation'),
    ]),
    getItem('Operation', 'Operation',  [
        getItem('Guild', 'Guild'),
        getItem('Citynode', 'Citynode'),
        getItem('LP Mining', 'LPMining'),
        getItem('FDT Mining', 'FDTMining'),
        getItem('Soul Airdrop', 'Soul Airdrop'),
        getItem('FireLock', 'FireLock'),
        getItem('FLM Airdrop', 'FLMAirdrop'),
        getItem('Forum FLM Airdrop', 'ForumFLMAirdrop'),
    ]),
    getItem('Treasury', 'Treasury',[
        getItem('Source', 'Source'),
        getItem('Distribution', 'Distribution'),
        getItem('Community Vault', 'CommunityVault'),
        getItem('Repurchase&Burn', 'RepurchaseAndBurn'),
        getItem('FireSeed Competition', 'FireSeedCompetition'),
        getItem('Citynode Competition', 'CitynodeCompetition'),
        getItem('Incentive Fund', 'IncentiveFund'),
    ]),
    getItem('Governance', 'Governance', [
        getItem('FID Reputation', 'FIDReputation'),
        getItem('Referendum', 'Referendum'),
        getItem('Create Proposal', 'Create Proposal'),
    ]),
    getItem('Ecological Forum', 'EcologicalForum',[
        getItem('Tokenomics', 'Tokenomics'),
        getItem('Guild', 'EcologicalForumGuild'),
        getItem('Citynode', 'EcologicalForumCitynode'),
        getItem('Governance', 'EcologicalForumGovernance'),
        getItem('Communication', 'Communication'),
        getItem('Local', 'Local'),
        getItem('Management', 'Management'),
    ]),
    getItem('SBB Square', 'SBBSquare', [
        getItem('General', 'General'),
        getItem('DeFi', 'DeFi'),
        getItem('DAOs', 'DAOs'),
        getItem('NFT', 'NFT'),
        getItem('Metaverse', 'Metaverse'),
        getItem('SocilFi', 'SocilFi'),
        getItem('GameFi', 'GameFi'),
    ]),
]