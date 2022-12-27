
import React, { useState } from "react"
import db from "../firebase";
import { Link } from "react-router-dom";

function Loginform() {

    const [val, setValue] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handlevalue = (e, key) => {
        setValue ({ ...val, [key]: e.target.value })
    }

    const updateData = () => {
    }

    const addDocs = async (e) => {
        e.preventDefault()
        const docRef = await
            db.collection("userData").add({
                name: val.name,
                email: val.email,
                phone: val.phone
            })
        setValue({})
        console.log("Document written with ID: ", docRef.id);
        alert("store successfully")
    }

    return (
        < div className="style">
            <h1 className="text-center p-3">LOGIN</h1>
            <form
                onSubmit={addDocs}>
                <div className="form-group m-3">
                    <label>Name</label>
                    <input type="text" required value={val?.name ?? ""} onChange={(e) => handlevalue(e, 'name')} className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group m-3">
                    <label>Email address</label>
                    <input type="email" required value={val?.email ?? ""} onChange={(e) => handlevalue(e, 'email')} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group m-3">
                    <label>Contact</label>
                    <input type="tel" required pattern="[0-9]{10}" value={val?.phone ?? ""} onChange={(e) => handlevalue(e, 'phone')} className="form-control" placeholder="Enter phone no." />
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
            <Link  to="/show">SHOW DATA LIST</Link>

        </div>
    )
}

export default Loginform



