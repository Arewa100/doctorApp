import style from "../styles/main.module.css"
import NavExtension from "./NavExtension"
import CustomButton from "../reusables/CustomButton"

const Main = ()=> {

    return(
        <>
        <div className={style.mainBackground}>
            <NavExtension/>

            <div className={style.infoDiv}>
                <div className={style.select}>
                    <h1>select symptoms</h1>
                </div>
                <div className={style.flexCheckBox}>
                    <p> 1. Missed period</p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>2. ⁠Cough</p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>3. ⁠Cold feet</p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>4. Cold hands </p><input type="checkbox" className="checkbox"/>
                </div>


                <div className={style.flexCheckBox}>
                    <p>5. ⁠Cramps</p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>5. ⁠Cramps</p><input type="checkbox" className="checkbox"/>
                </div>
                
                <div className={style.flexCheckBox}>
                    <p>6. ⁠Delayed start to urination</p><input type="checkbox" className="checkbox"/>
                </div>


                <div className={style.flexCheckBox}>
                    <p>6. ⁠Delayed start to urination</p><input type="checkbox" className="checkbox"/>
                </div>
                
                <div className={style.flexCheckBox}>
                    <p>7. ⁠Difficult defecation</p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>8. ⁠Feeling I’ll</p><input type="checkbox" className="checkbox"/>
                </div>
                

                <div className={style.flexCheckBox}>
                    <p>8. ⁠Feeling I’ll</p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>9. ⁠fever</p><input type="checkbox" className="checkbox"/>
                </div>
                <div className={style.flexCheckBox}>
                    <p>10. ⁠forgetfulness </p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>11. ⁠Heartburn</p><input type="checkbox" className="checkbox"/>
                </div>
                
                <div className={style.flexCheckBox}>
                    <p>12. ⁠increased appetite </p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>12. ⁠increased appetite </p><input type="checkbox" className="checkbox"/>
                </div>
                
                <div className={style.flexCheckBox}>
                    <p>13. ⁠itching eyes </p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>13. ⁠itching eyes </p><input type="checkbox" className="checkbox"/>
                </div>

                <div className={style.flexCheckBox}>
                    <p>14. ⁠Mouth ulcers</p><input type="checkbox" className="checkbox"/>
                </div>
                
            </div>

            <div className={style.result}>
                <div className={style.resultText}>
                    <h1>result</h1>

                </div>

                <div className={style.results}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque 
                        perspiciatis molestias eveniet quos itaque animi, minus ex 
                        illum dolores, dicta, enim nostrum reprehenderit ullam
                         repudiandae in. Eum nobis eaque quidem.
                    </p>
                </div>
                
                <div className={style.nextButtons}>
                    <CustomButton style={style.nextAndback} type="submit" textContent="back"/>
                    <CustomButton style={style.nextAndback} type="submit" textContent="next"/>
                </div>
                
            </div>

            
        </div>
        </>
    )
}


export default Main