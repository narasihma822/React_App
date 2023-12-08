





import { useEffect, useState } from "react";
import {Link} from "react-router-dom"




function EmpData(event) { 


    const [data,setData]=useState([])

    useEffect(()=>{
        fetch("https://ecommerce-app-api-mqow.onrender.com/subscription")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.log(resp)
          
            setData(resp)
        })
    },[])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h3>Employe Management System</h3>
                </div>
                <div className="card-body">
                  
                       <Link to="/EmpForm" className="btn btn success">Add New (+)</Link>
                    
                    <table class="table table-bordred">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">City</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item)=>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.city}</td>
                                    <p className="btn btn-success">EDIT</p>
                                    <p className="btn btn-danger">DELETE</p>
                                </tr>


                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    ) 
}

export default EmpData;