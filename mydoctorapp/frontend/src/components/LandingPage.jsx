import style from "../styles/landingpage.module.css"
import NavBar from "./NavBar"
import doctorImage from '../assets/image/doctorImage.svg'
import Footer from "./Footer"
import man from "../assets/image/man.svg"
import CustomButton from "../reusables/CustomButton"
import { useNavigate } from "react-router-dom"

const LandingPage = ()=> {


    const navigate = useNavigate()

    const handleClick = ()=> {
        navigate("/signup")
    }

    return(
        <>
        <div className={style.landingpage}>
            <NavBar/>
                <div className={style.doctorPicsDiv}>
                    <img src={doctorImage} alt="doctor pics" />
                </div>

                <div className={style.bodySection}>
                    <div className={style.whatWeCanDoOuterDiv}>
                        <div className={style.whatWeDo}>
                            <div>
                                <img src={man} alt="man pointing" />
                            </div>

                            <div className={style.text}>
                                <h1>WHAT <span>WE </span> DO ?</h1>
                                <div className={style.contentBox}>
                                    <p>Our application checks patients symptoms and matches it with possible illness.</p>
            
                                    <CustomButton style={style.getStarted} type="submit" textContent="GET STARTED" onClick={handleClick}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
        </>
    )
}

export default LandingPage