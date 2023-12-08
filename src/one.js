


// function One(props){
//       const {x,y,z,n,p}=props
//     return(
//         <div>
//             <p>ID:{x}</p>
//             <p>Name:{y}</p>
//             <p>State:{z}</p>
//             <p>Mobile:{n}</p>
//             <p>Country:{p}</p>
//         </div>
//     )
// }
// export default One;





// import { useState } from "react";

// function One({blue,on,off,yellow}){
//    const [four,setfour]=useState(blue)
//    const [onn,setOnn]=useState(on)
//    const[nine,setNine]=useState(off)

//    const Run=()=>{
//     let g=four==blue?yellow:blue
//     setfour(g)

//     let s=onn==on?off:onn
//     setOnn(s)
//    }
   
//     return(
//         <div style={{backgroundColor:four , width:"300px", height:"300px", borderRadius:"50%"}}>
//             <button onClick={Run}>{onn}</button>

//         </div>
//     )
// }
// export default One;



import { useState } from "react";

function One({name,on,off,empty}){
   const [four,setfour]=useState(name)
   const [onn,setOnn]=useState(on)
//    const[nine,setNine]=useState(off)

   const Run=()=>{
    let s=onn==on?off:on
    setOnn(s)

    let g=four==name ? empty:name
    setfour(g)
   }
   
    return(
        <div>
            <p>{four}</p>
            <button onClick={Run}>{onn}</button>

        </div>
    )
}
export default One;



 