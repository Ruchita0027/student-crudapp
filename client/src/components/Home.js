import React, { useEffect, useState } from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [getstudentdata, setStudentData] = useState([]);
    console.log(getstudentdata);

    const getdata = async (e) => {

        const res = await fetch('/getdata', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error");
        } else {
            setStudentData(data);
            console.log("get data");
        }

    }

    useEffect(() => {
        getdata();
    }, [])

    const deletestudent = async (id) => {
        const res2 = await fetch(`deletestudent/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log(deletedata);
        } else {
            console.log("student deleted");
            getdata();
        }

    }

    return (

        <>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success!</strong> Student added successfully!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className='mt-5'>
                <div className='container'>
                    <div className='add_btn mt-2 mb-3'>
                        <NavLink to='/register' className='btn2'>Add Student</NavLink>
                    </div>
                    <table class="table">
                        <thead className='text'>
                            <tr className='heading'>
                                <th scope='col'>ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Class</th>
                                <th scope="col">Div</th>
                                <th scope="col">Roll No.</th>
                                <th scope='col'>View/Edit/Update</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getstudentdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr className='text'>
                                                <th scope='row'>{id + 1}</th>
                                                <td>{element.first}</td>
                                                <td>{element.cls}</td>
                                                <td>{element.div}</td>
                                                <td>{element.roll}</td>
                                                <td className='icons'>
                                                    <NavLink style={{ color: "rgb(250, 75, 62)" }} to={`view/${element._id}`}><RemoveRedEyeOutlinedIcon /></NavLink>
                                                    <NavLink style={{ color: "rgb(250, 75, 62)" }} to={`edit/${element._id}`}><BorderColorOutlinedIcon /></NavLink>
                                                    <DeleteOutlineOutlinedIcon onClick={() => deletestudent(element._id)} />
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home