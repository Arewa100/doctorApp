import CustomButton from "../reusables/CustomButton"
import style from "../styles/navbar.module.css"
import Logo from "../reusables/Logo"
import { useNavigate } from "react-router-dom"

const NavExtension = ()=> {

    const pages = ["home"]
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
                        <CustomButton style={style.signup} type="submit" textContent="View" onClick={handlClick} value="view"/>
                        <CustomButton style={style.signup} type="submit" textContent="Login Out" onClick={handlClick} value="home"/>
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}

export default NavExtension