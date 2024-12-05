import CustomButton from "../reusables/CustomButton"
import style from "../styles/navbar.module.css"
import Logo from "../reusables/Logo"
import { useNavigate } from "react-router-dom"
const NavBar = ()=> {

    const pages = ["login", "signup"]
    const navigate = useNavigate();

    const handlClick = (event)=> {
        const currentButton = event.target.value;
        pages.filter((page)=> {
            if(page.includes(currentButton.toLowerCase())) {
                navigate(`/${page}`)
            }
        }) 
    }


    return(
        <>
        <div className={style.externalDiv}>
             <div className={style.navbar}>
                <div>
                    <Logo/>
                </div>
                <div className={style.buttonAndHomeDiv}>

                    <ul className={style.homeNav}>
                        <li className={style.home}><a href="#">HOME</a></li>
                        <li><a href="#">CONSULTANT</a></li>
                        <li><a href="#">FEEDBACK</a></li>
                    </ul>

                    <div className={style.buttons}>
                        <CustomButton style={style.signup} type="submit" textContent="Sign up" onClick={handlClick} value="signup"/>
                        <CustomButton style={style.signup} type="submit" textContent="Login" onClick={handlClick} value="login"/>
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}

export default NavBar