// import react 
import { useState } from "react"
// import ./index.module.css
import styles from "./index.module.css"
// export function Dropdown
export default function Dropdown({array})
{
    // these are the states of status and seen 
    const[status,setStatus]=useState("") 
    const[seen,setSeen]=useState(false)


    // function are created
    function toggle(s){
        setStatus(s.target.innerText)
        setSeen(false)
    }
    return(
    <>
        <div className={styles.container}>
            <p>Should you use a dropdown ?</p>
        </div>

        <div className={styles.dp_menu}>

            <div onMouseEnter={() => setSeen(true)}> select <i class="fa-solid fa-angles-down fa-bounce" style={{color: "#353131"}}></i>
            </div>

        </div>

            {seen?<div className={styles.dp_menu}>
               
                {array.map((item)=>
                    <p onClick={toggle}>{item}</p> 
                )}
                
            </div>:undefined}
                 
            <br/> 

            <div className={styles.box}>
                <h2>Status :{status} </h2>
            </div>
    
    </>
    )
}