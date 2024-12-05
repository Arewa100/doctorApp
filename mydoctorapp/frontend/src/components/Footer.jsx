import style from '../styles/footer.module.css'
import Logo from '../reusables/Logo'
import instagram from "../assets/image/instagram.svg"
import facebook from "../assets/image/facebook.svg"
import linkenin from "../assets/image/linkenin.svg"
import youtube from "../assets/image/youtube.svg"
const Footer = ()=> {
    return(
        <>
        <div className={style.footer}>
            <div className={style.externalDiv}>
                <div className={style.outerDiv}>
                    <div className={style.whoWeAreDiv}>
                        <p>WHO WE ARE</p>
                        <p>PARTNERS</p>
                        <p>LEGAL & PRIVACY</p>
                    </div>
                </div>

                <div className={style.aboutUsDiv}>
                    <a href="#" className={style.about}>About Us</a>
                    <a href="#" className={style.partner}>Become a partner</a>
                    <a href="#" className={style.privacy}>Privacy policy & terms of use</a>
                </div>
    
                <div className={style.logoDiv}>
                    <div className={style.logo}>
                        <Logo/>
                        <div className={style.theIcons}>
                            <div className={style.iconsDiv}>
                                <img src={linkenin} alt="instagram icon" />
                                <img src={facebook} alt="facebook icon" />
                                <img src={instagram} alt="instagram icon" />
                                <img src={youtube} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Footer