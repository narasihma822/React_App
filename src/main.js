// import { signOut,getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { Link,useNavigate } from "react-router-dom";
// function Main(){



    
//     const navigate=useNavigate()


//     const firebaseConfig = {
//         apiKey: "AIzaSyBmbt0GWdLp3LfPsR0foJZMFQysZfJmkmo",
//         authDomain: "narasimha-4cf38.firebaseapp.com",
//         projectId: "narasimha-4cf38",
//         storageBucket: "narasimha-4cf38.appspot.com",
//         messagingSenderId: "931387859079",
//         appId: "1:931387859079:web:f9e2c4cc056cbf78c51822",
//         measurementId: "G-FP2FFCJCJL"
//       };

   


//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth() 
    
//     const submitData=(event)=>{
//         event.preventDefault()

//         signOut(auth)  

//         .then(()=>{
//             alert("logged out Successfully")
//             navigate("/login")
           
//         })
//         .catch((err)=>{
//             alert("Error", err)
//         })


//     }
//     return(
//         <div>
//             <h1>Welocme to Dashboard...!</h1>
//             <form onSubmit={submitData}>
//                 <button type="submit">Logout</button>
//             </form>
//         </div>
//     )
// }
// export default Main;


import { signOut,getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { Link,useNavigate } from "react-router-dom";


function Main(){


    const navigate=useNavigate()
    const firebaseConfig = {
        apiKey: "AIzaSyBmbt0GWdLp3LfPsR0foJZMFQysZfJmkmo",
        authDomain: "narasimha-4cf38.firebaseapp.com",
        projectId: "narasimha-4cf38",
        storageBucket: "narasimha-4cf38.appspot.com",
        messagingSenderId: "931387859079",
        appId: "1:931387859079:web:f9e2c4cc056cbf78c51822",
        measurementId: "G-FP2FFCJCJL"
    };
    const app=initializeApp(firebaseConfig)
    const auth = getAuth()

    const SubmitData=(event)=>{

        event.preventDefault()

        signOut(auth)
        .then(()=>{
            alert("log out succesfully")
             navigate("/login")
        })
        .catch(()=>{
            alert("error")
        })
    }
    return(
        <div className="you">
            <h1 style={{textAlign:"center"}}><b>Welocme To Gtyde GYM</b></h1>
            <b >you are in now gtyde gym</b>
            <br/>
            <b >what do you want <br/>
            How can i help you</b>
            <br/> <br/>
            <form onSubmit={SubmitData}>
                <button type="submit" style={{backgroundColor:"lightseagreen"}}> logout</button>
            </form>
        </div>
    )
}
export default Main;