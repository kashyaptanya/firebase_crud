import db from "../firebase";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router";

function List() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

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
    const updateData = () => {
     navigate("/update")
    }

    return (
        <div className="text-center style">
            <h1>DATA</h1>
            <a href="http://localhost:3000">HOME</a>
            <div className="table table-hover m-5 ">
                <table>
                    <tr>
                        <th scope="col">*</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">CONTACT</th>
                        <th scope="col">TRASH</th>
                        <th scope="col">UPDATE</th>

                    </tr>

                    {userData?.map(({ id, data }) => (
                        <tr key={id}>
                            <th scope="row">*</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td><button className="btn btn-primary" onClick={() => {
                                deleteData(id)
                            }} >DELETE</button></td>
                            <td><button className="btn btn-primary" onClick={() => {
                                updateData(id)
                            }} >UPDATE</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
export default List