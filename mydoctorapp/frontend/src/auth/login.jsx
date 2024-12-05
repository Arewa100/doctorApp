import React, { useState } from "react";
import style from '../styles/login.module.css'
import CustomButton from '../reusables/CustomButton';
import { Link, useNavigate} from "react-router-dom";
import axios from "axios"

const Login = ()=> {

    const navigate = useNavigate();

    const userDetails = {
        username: "",
        password: ""
    }

    const [data, setData] = useState(userDetails)

    function handleChange(event) {
        const{name, value} = event.target;
        setData((prevData)=>{
            return {...prevData, [name]:value} 
        })
    }

    console.log(data)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(data)
        try{
          console.log("working")
          const response = await axios.post("http://localhost:9000/api/user/login",data)
          console.log(response.data)
          if(response.data === "Logged in"){
            navigate("/doctor")
          }else {
            alert("Wrong password")
          }
    
        }catch(error){
          console.error(error)
        }
          
      }


    return (
        <>
        <div className={style.loginDiv}>
        
            <form action="" className={style.form} onSubmit={handleSubmit} >

                <div className={style.login}>
                    <h1>Login</h1>
                </div>
                <div>
                    <input
                    type="text"
                    className={style.input}
                    name="username"
                    placeholder="Enter Username"
                        onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <input
                    type="password"
                    className={style.input}
                    name="password"
                    placeholder="Enter password"
                        onChange={handleChange}
                    required
                    />
                </div>
                <div className={style.submit}>
                    <CustomButton style={style.button} type="submit" textContent="login"/>
                </div>

                <div className={style.dontHaveAccount}>
                    <p>Don't have an account?<Link to={'/signup'}>signup</Link></p>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;