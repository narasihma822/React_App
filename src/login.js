
import { useState } from "react";

import { initializeApp } from "firebase/app";
import {  getAuth, signInWithEmailAndPassword } from "firebase/auth"
 import { Link,useNavigate } from "react-router-dom";


function Login() {

    const[email,setEmail]=useState("")
    const[psd,setPsd]=useState("")

     const navigate=useNavigate()

    const SubmitData=(event)=>{

        event.preventDefault()

        let obj={
            email:email,
            password:psd
        }
        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then(()=>{
            alert("log in succesfully")
             navigate("/app")
        })
        .catch(()=>{
            alert("error")
        })
    }


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



    return (
        <div className="container" style={{width:"400px", backgroundColor:"lightgray" , border:"2px solid black" ,borderRadius:"15px", backgroundImage:"url(https://cdn.dribbble.com/users/13055/screenshots/1220061/media/36944dc3c44c985e9c8cdcb8a8b79721.jpg?compress=1&resize=400x300&vertical=top)"}}>
            <div className="card my-5 p-4">
                <div className="card-title" style={{ backgroundImage:"url(https://cdn.dribbble.com/users/13055/screenshots/1220061/media/36944dc3c44c985e9c8cdcb8a8b79721.jpg?compress=1&resize=400x300&vertical=top)"}}>
                    <h2  className="text-center" style={{ color: "blue" }}>Log in</h2>
                </div>
                <div className="card-body" style={{ backgroundImage:"url(https://cdn.dribbble.com/users/13055/screenshots/1220061/media/36944dc3c44c985e9c8cdcb8a8b79721.jpg?compress=1&resize=400x300&vertical=top)"}}>
                    <form onSubmit={SubmitData}>
                        <div class="mb-3">
                            <label class="form-label" style={{ color: "blue" }}>Email</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" required class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" style={{ color: "blue" }}>Password</label>
                            <input value={psd} onChange={e => setPsd(e.target.value)} type="password" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>

                    </form>
                  <div>
                    <a href="/">if you dont have account
                    <Link to="/"> sign up</Link>
                    </a>
                  </div>

                </div>

            </div>

        </div>
    )
}
export default Login;