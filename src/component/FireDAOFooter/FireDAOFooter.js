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

                </div>
                <div className="right">
                    <div className="link-box">
                        <div className="link-col">
                            <div className="link-row title">
                                Holy Fire Altar
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                SBB
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                FDT Square
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Operation
                            </div>


                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Treasury
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Governance
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Ecological Forum
                            </div>

                        </div>
                    </div>
                    <div className="link-list">
                        <a href="https://www.firedao.co/fdpaperen.pdf" target="_blank" className="link">
                            White Paper
                        </a>
                        <a href="https://www.firedao.co/faq.html" target="_blank" className="link">
                            FAQ
                        </a>
                        <a href="https://forum.firedao.co/" target="_blank" className="link">
                            Forum
                        </a>
                        <a href="https://docs.firedao.co/" target="_blank" className="link">
                            Docs
                        </a>
                    </div>
                    <div className="copyright">
                        Copyright ©FireDAO
                    </div>
                </div>
            </div>
        </FireDAOFooterStyle>
    )

}
export default FireDAOFooter
