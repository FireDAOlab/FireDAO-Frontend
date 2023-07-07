import fireIcon1 from "../imgs/fire_icon1.webp";
import fireIcon2 from "../imgs/fire_icon2.webp";
import fireIcon7 from "../imgs/fire_icon7.webp";
import fireIcon3 from "../imgs/fire_icon3.webp";
import fireIcon4 from "../imgs/fire_icon4.webp";
import fireIcon5 from "../imgs/fire_icon5.webp";
import fireIcon6 from "../imgs/fire_icon6.webp";
import React from "react";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
export default  [
    getItem('Holy Fire Altar', 'Holy Fire Altar',<img className="fireIcon" src={fireIcon1} />, [
        getItem('Mint Passport', 'MintPassport'),
        getItem('PID Airdrop', 'PidAirdrop'),
        getItem('Mint FireSeed', 'MintFireSeed'),
        getItem('Mint FireSoul', 'MintFireSoul'),
        getItem('Pass FireSeed', 'PassFireSeed'),
        getItem('My Passport', 'MyPassport'),
        getItem('PID List', 'PIDList'),
        getItem('FID List', 'FIDList'),
        getItem('SBT List', 'SBTList'),
    ]),
    getItem('SBB Square', 'SBBSquare', <img className="fireIcon" src={fireIcon2} />,[
        getItem('General', 'General'),
        getItem('DeFi', 'DeFi'),
        getItem('DAOs', 'DAOs'),
        getItem('NFT', 'NFT'),
        getItem('Metaverse', 'Metaverse'),
        getItem('SocilFi', 'SocilFi'),
        getItem('GameFi', 'GameFi'),
    ]),


    getItem('FDT Square', 'FDTSquare', <img className="fireIcon" src={fireIcon7} />, [
        getItem('OG Pool', 'OGPool'),
        getItem('Seed Donation', 'SeedDonation'),

        getItem('Seed Pool', 'SeedPool'),
        getItem('Consensus Pool', 'ConsensusPool'),
        getItem('FLM Pool', 'FLMPool'),
        getItem('Uniswap Pool', 'UniswapPool'),
        getItem('FDT Release', 'FDTRelease'),
        getItem('FLM Release', 'FLMRelease'),
        getItem('FDT Holder', 'FDTHolder'),
        getItem('FDT-OG', 'FDTOgToFdt'),
        getItem('Auto Reflow LP', 'AutoReflowLP'),
    ]),
    getItem('Operation', 'Operation', <img className="fireIcon" src={fireIcon3} />, [
        getItem('Guild', 'Guild'),
        getItem('Citynode', 'Citynode'),
        getItem('LP Mining', 'LPMining'),
        getItem('FDT Mining', 'FDTMining'),
        getItem('Soul Airdrop', 'Soul Airdrop'),
        getItem('FireLock', 'FireLock'),
        getItem('Forum FLM Airdrop', 'ForumFLMAirdrop'),
    ]),
    getItem('Treasury', 'Treasury', <img className="fireIcon" src={fireIcon4} />,[
        getItem('Source', 'Source'),
        getItem('Distribution', 'Distribution'),
        getItem('Community Vault', 'CommunityVault'),
        getItem('Repurchase&Burn', 'RepurchaseAndBurn'),
        getItem('FireSeed Competition', 'FireSeedCompetition'),
        getItem('Citynode Competition', 'CitynodeCompetition'),
        getItem('Incentive Fund', 'IncentiveFund'),
    ]),
    getItem('Governance', 'Governance', <img className="fireIcon" src={fireIcon5} />,[
        getItem('FID Reputation', 'FIDReputation'),
        getItem('Referendum', 'Referendum'),
        getItem('Create Proposal', 'Create Proposal'),
    ]),
    getItem('Ecological Forum', 'EcologicalForum', <img className="fireIcon" src={fireIcon6} />,[
        getItem('Tokenomics', 'Tokenomics'),
        getItem('Guild', 'EcologicalForumGuild'),
        getItem('Citynode', 'EcologicalForumCitynode'),
        getItem('Governance', 'EcologicalForumGovernance'),
        getItem('Communication', 'Communication'),
        getItem('Local', 'Local'),
        getItem('Management', 'Management'),
    ]),
]