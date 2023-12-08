import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function Addcart() {
    const [data, setData] = useState([])
    const [total, setTotal] = useState()
    useEffect(() => {
        fetch("https://ecommerce-app-api-mqow.onrender.com/addcart")
            .then((go) => {
                return go.json()
            })
            .then((resp) => {
                setData(resp)

                const total = resp.reduce((og, item) => og + parseFloat(item.price), 0)
                setTotal(total)
            })
    }, [])
    const Delete = (id) => {
        fetch("https://ecommerce-app-api-mqow.onrender.com/addcart/" + id, {
            method: "DELETE"
        })
            .then(() => {
                // alert("Removed successfully")
            })
        window.location.reload()

    }




    return (
        <div >
            <Link to="/app">
                <h1 style={{ textAlign: "center " }}>GO BACK TO HOME PAGE</h1>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">img</th>
                        <th scope="col">size</th>
                        <th scope="col">price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">

                    {data.map((item) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td><img src={item.img} alt="k" height="60px" width="50%" /></td>
                            <td>{item.size}</td>
                            <td>{item.price}</td>
                            <button className="btn btn-danger" onClick={() => { Delete(item.id) }}>Remove</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />

            <h2 style={{ marginLeft: "1100px" }}>Total:{total}</h2>
        </div>
    )
}
export default Addcart;