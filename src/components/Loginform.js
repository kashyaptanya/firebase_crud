
import React, { useEffect, useState } from "react"
import db from "../firebase";

function Loginform() {

    const [val, setValue] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const [userData, setUserData] = useState([]);

    const handlevalue = (e, key) => {
        setValue(prev => ({ ...prev, [key]: e.target.value }))
    }
    useEffect(() => {
        db.collection("userData").onSnapshot((snapshot) => {
            setUserData(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))    
            );
        });
        console.log({ userData });
    }, []);

    const deleteData = (id) => {
        db.collection("userData").doc(id).delete();
    };

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
            <div className="table table-hover">
                <table>
                    <tr>
                        <th scope="col">*</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">CONTACT</th>
                        <th scope="col">TRASH</th>
                    </tr>

                    {userData?.map(({ id, data }) => (
                        <tr key={id}>
                            <th scope="row">*</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td><button className="btn btn-primary" onClick={()=>{
                                deleteData(id)
                            }} >DELETE</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
export default Loginform



