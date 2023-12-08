
import { useState } from "react";

function Empty1({one,two,on,off}){
 const [color,setColor]=useState(one)
 const [java,setJava]=useState(on)

 const Ten=()=>{
    let a=color==one ?  two:one
    setColor(a)

    let b=java==on ? off:on
    setJava(b)
 }
    return(
        <div>
         <h1>{color}</h1>
         <button  onClick={Ten}>{java}</button>
        </div>
    )
}
export default Empty1;