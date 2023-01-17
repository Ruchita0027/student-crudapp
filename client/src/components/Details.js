import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Details = () => {

    const [getstudentdata, setStudentData] = useState([]);
    console.log(getstudentdata);

    const {id} = useParams("");
    console.log(id);

    const history = useNavigate();

    const getdata = async () => {

        const res = await fetch(`/getstudent/${id}`, {
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
    });

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
                alert("data deleted successfully");
                console.log("student deleted");
                history.push("/");
            }       
    }

  return (
    <div className='container mt-3'>
        <h1 style={{ fontWeight: 400 }}>Welcome</h1>
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
            <div className='add_btn mx-4'>
                        <NavLink to={`/edit/${getstudentdata._id}`}><button style={{ marginRight: 10, color: "rgb(250, 75, 62)", border: "none", height: 40, width: 50 }} ><BorderColorIcon /></button></NavLink>
                        <button onClick={() => deletestudent(getstudentdata._id)} style={{ marginRight: 70, color: "rgb(250, 75, 62)", border: "none", height: 40, width: 50 }} ><DeleteIcon /></button>
                    </div>
                <div className='row'>
                <div className='left_view col-lg-6 col-md-6 col-12'>
                <img src='/profileimg.png' style={{ width : 50 }} alt='profile' />
                    <h4 className='mt-3'>Name: <span>{getstudentdata.first}</span></h4>
                    <h5 className='mt-3'>Class: <span>{getstudentdata.cls}</span></h5>
                    <p className='mt-3'>Div: <span>{getstudentdata.div}</span></p>
                    <p className='mt-3'>Roll No: <span>{getstudentdata.roll}</span></p>
                </div>
                <div className='right_view col-lg-6 col-md-6 col-12'>
                    <p className='cty'>City: <span>{getstudentdata.city}</span></p>
                    <p className='mt-3'>Pincode: <span>{getstudentdata.pin}</span></p>
                    <p className='mt-3'>Address: <span>{getstudentdata.add1}</span></p>
                    <p className='mt-3'>Phone: <span>{getstudentdata.phone}</span> </p>
                </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Details