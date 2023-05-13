import logo from "../../imgs/logo.webp"
import icon1 from "../../imgs/github.webp"
import icon2 from "../../imgs/twitter.webp"
import icon3 from "../../imgs/telegram.webp"
import icon4 from "../../imgs/facebook.webp"
import icon5 from "../../imgs/tiktok.webp"
import icon6 from "../../imgs/youtube.webp"
import icon7 from "../../imgs/reddit@2x.webp"
import icon8 from "../../imgs/medium.webp"
import icon9 from "../../imgs/discord.webp"
import FireDAOFooterStyle from "./FireDAOFooterStyle";
const FireDAOFooter = () => {

    return (
        <FireDAOFooterStyle>
            <div className="footer">
                <div className="left">
                    <img className="logo" src={logo} alt=""/>
                    <div className="link-list">
                        <div className="link-item">
                            <img className="icon" src={icon1} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon2} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon3} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon4} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon5} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon6} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon7} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon8} alt=""/>
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon9} alt=""/>
                        </div>

                    </div>
                    <div className="copyright">
                        Copyright ©FireDAO
                    </div>
                </div>
                <div className="right">
                    <div className="link-box">
                        <div className="link-col">
                            <div className="link-row title">
                                Holy Fire Altar
                            </div>
                            <div className="link-row">
                                Mint Passport
                            </div>
                            <div className="link-row">
                                Mint FireSeed
                            </div>
                            <div className="link-row">
                                Mint FireSoul
                            </div>
                            <div className="link-row">
                                Pass FireSeed
                            </div>
                            <div className="link-row">
                                My Passport
                            </div>
                            <div className="link-row">
                                PID List
                            </div>
                            <div className="link-row">
                                FID List
                            </div>
                            <div className="link-row">
                                SBT List
                            </div>
                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                SBB
                            </div>
                            <div className="link-row">
                                General
                            </div>
                            <div className="link-row">
                                DeFi
                            </div>
                            <div className="link-row">
                                DAOs
                            </div>
                            <div className="link-row">
                                NFT
                            </div>
                            <div className="link-row">
                                Metaverse
                            </div>
                            <div className="link-row">
                                SocilFi
                            </div>
                            <div className="link-row">
                                GameFi
                            </div>
                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                FDT Square
                            </div>
                            <div className="link-row">
                                OG Pool
                            </div>
                            <div className="link-row">
                                Seed Pool
                            </div>
                            <div className="link-row">
                                Consensus Pool
                            </div>
                            <div className="link-row">
                                FLM Pool
                            </div>
                            <div className="link-row">
                                Uniswap Pool
                            </div>
                            <div className="link-row">
                                FDT Release
                            </div>
                            <div className="link-row">
                                FLM Release
                            </div>
                            <div className="link-row">
                                FDT Holder
                            </div>
                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Operation
                            </div>
                            <div className="link-row">
                                Guild
                            </div>
                            <div className="link-row">
                                Citynode
                            </div>
                            <div className="link-row">
                                LP Mining
                            </div>
                            <div className="link-row">
                                FDT Mining
                            </div>
                            <div className="link-row">
                                Soul Airdrop
                            </div>
                            <div className="link-row">
                                FireLock
                            </div>
                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Treasury
                            </div>
                            <div className="link-row">
                                Source
                            </div>
                            <div className="link-row">
                                Distribution
                            </div>
                            <div className="link-row">
                                Community Vault
                            </div>
                            <div className="link-row">
                                Repurchase&Burn
                            </div>
                            <div className="link-row">
                                FireSeed Competition
                            </div>
                            <div className="link-row">
                                Citynode Competition
                            </div>
                            <div className="link-row">
                                Incentive Fund
                            </div>
                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Governance
                            </div>
                            <div className="link-row">
                                FID Reputation
                            </div>
                            <div className="link-row">
                                Referendum
                            </div>
                            <div className="link-row">
                                Create Proposal
                            </div>
                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Forum
                            </div>
                            <a href="http://47.98.46.3:9527/index.php#c1" target="_blank">
                                <div className="link-row">
                                    Tokenomics
                                </div>
                            </a>

                            <div className="link-row">
                                Guild
                            </div>
                            <div className="link-row">
                                Citynode
                            </div>
                            <div className="link-row">
                                Governance
                            </div>
                            <div className="link-row">
                                Communication
                            </div>
                            <div className="link-row">
                                Local
                            </div>
                            <div className="link-row">
                                Management
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FireDAOFooterStyle>
    )

}
export default FireDAOFooter
