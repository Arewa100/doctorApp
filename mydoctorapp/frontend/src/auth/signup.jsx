import React, { useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reusables/CustomButton";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const userDetails = {
    username: "",
    email: "",
    password: "",
};

  
  const [data, setData] = useState(userDetails); 

    function handleChange(event) {
      const { name, value } = event.target;

      setData((preVData)=> {
        return {...preVData, [name]:value}  
      })

    }

    // console.log(data)

    
    const handleSubmit = ()=> {
      console.log('submitted....')
      window.alert("signing up...")
      // setTimeout(()=>{
          // navigate("/")
      // }, 6000)
  }


  return (
    <>
      <div className={style.signUpDiv}>
        <form action="" className={style.form} onSubmit={handleSubmit}>

        <div className={style.header}>
          <h1>sign up</h1>
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
              type="email"
              className={style.input}
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <input
              type="password"
              className={style.input}
              name="password"
              placeholder="Enter Password"
                onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="password"
              className={style.input}
              name="password"
              placeholder="confirm password"
                onChange={handleChange}
              required
            />
          </div>

          <div className={style.checkbox}>
            <input type="checkbox" />
            <p>I accept all terms & condition</p>
          </div>

          <div className={style.submit}>
            <CustomButton style={style.button} type="submit" textContent="sign-up"/>
          </div>

          <div className={style.alreadyHaveAccount}>
            <p>Already have an account?<Link to={'/login'}>login</Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
