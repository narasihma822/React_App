

// import { useState } from "react";

//  

// function Sun(){
//     const[name,setName]=useState("")
//     const[email,setEmail]=useState("")
//     const[psd,setPsd]=useState("")
//     const[cpsd,setCpsd]=useState("")

//     const Change=(s)=>{
//         setName(s.target.value)
//     }
//     const Change1=(s)=>{
//         setEmail(s.target.value)
//     }
//     const Change2=(s)=>{
//         setPsd(s.target.value)
//     }
//     const Change3=(s)=>{
//         setCpsd(s.target.value)
//     }

//     const handlesubmit=()=>{
//         if(name.length<=5){
//             alert("6 charecters ivvu ra rey")
//         }
//         else if(psd!=cpsd){
//             alert("password correct ga ivvu ra ")
//         }
//         else{
//             alert("success......")
//         }
//     }
//     return(
//         <div>
//             <form onSubmit={handlesubmit}>
//                 <input value={name} type="text" placeholder="entere your name..." required onChange={Change}/><br/><br/>
//                 <input value={email} type="email" placeholder="Entere your mail" required onChange={Change1}/><br/><br/>
//                 <input value={psd} type="password" placeholder="entere yor passwor" required onChange={Change2}/><br/><br/>
//                 <input value={cpsd} type="password" placeholder="entere correct password" required onChange={Change3}/><br/><br/>
//                 <input type="submit"/>



//             </form>
//         </div>
//     )
// }
// export default Sun;

// use useEffect------

import React, { useState,useEffect,useContext } from "react";

let a=React.createContext()
function Sun(){
    const [run,setRun]=useState("narashima is abad sex seeker boy equal to ganesh by macha off gugan")

   useEffect(()=>{
   setTimeout(()=>{
    setRun(run)
   })
   })

    return(
        <div>
            <a.Provider value={run}>
         <h1>count:</h1>
         <Gun/>
            </a.Provider>
        </div>
    )
}

function Gun(){
    return(
        <div>
         <h1>karthik is good boy</h1>
         <Cun/>
        </div>
    )
}

function Cun(){
    return(
        <div>
         <h1>karthik is good boy</h1>
         <Nun/>
        </div>
    )
}

function Nun(){
    let k=useContext(a)
    return(
        <div>
         <h1>karthik is good boy {k}</h1>
        </div>
    )
}
export default Sun;

// use context-----

