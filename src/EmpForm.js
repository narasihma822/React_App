import { useState } from "react";
import { Link } from "react-router-dom";





function EmpForm() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")


    const sendData = (e) => {
        e.preventDefault()
        let data = { id, name, email, mobile, city }
        fetch("https://ecommerce-app-api-mqow.onrender.com/subscription ",{
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(()=>{
            alert("Saved succesfully")
        })
        .catch(()=>{
            alert("Error")
        })
    }




    return (
        <div className="container" style={{ width: "500px" }}>
            <div className="card">
                <div className="card-title">
                    <h2>Add New Employee</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input value={id} type="text" onChange={e => setId(e.target.value)} disabled="disabled" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input value={name} type="text" onChange={e => setName(e.target.value)} className="form-control" required id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input value={email} type="email" onChange={e => setEmail(e.target.value)} className="form-control" required id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile No</label>
                            <input value={mobile} type="number" onChange={e => setMobile(e.target.value)} className="form-control" required id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input value={city} type="text" onChange={e => setCity(e.target.value)} className="form-control" required id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Add New</button>
                        <Link to="/" className="btn btn-danger">Back</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default EmpForm;