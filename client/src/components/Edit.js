import React, { useState, useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'

const Edit = () => {

    const [getstudentdata, setStudentData] = useState([]);
    console.log(getstudentdata);

    const navigate = useNavigate("");

    const [ inpval, setINP ] = useState({
        first: "", 
        middle: "",
        last: "",
        cls: "",
        div: "",
        roll: "",
        add1: "",
        add2: "",
        city: "",
        pin: "",
        phone: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]:value
            }
        })
    }

    const {id} = useParams("");
    console.log(id);

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
            setINP(data);
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    const updatestudent = async (e) => {
        e.preventDefault();

        const {first, middle, last, cls, div, roll, add1, add2, city, pin, phone} = inpval;

        const res2 = await fetch(`/updatestudent/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first, middle, last, cls, div, roll, add1, add2, city, pin, phone
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2) {
            alert("Fill the data")
        } else {
            alert("data added successfully");
            navigate.push("/")
        }
    }

  return (
    <div classNameName='container' style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}>
            <form className='mt-4'>
                <div className='row'>
                <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text" value={inpval.first} onChange={setdata} name="first" className="form-control" placeholder='First Name' />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text" value={inpval.middle} onChange={setdata} name="middle" className="form-control" placeholder='Middle Name' />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text" value={inpval.last} onChange={setdata} name="last" className="form-control" placeholder='Last Name' />
                    </div> 
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text" value={inpval.cls} onChange={setdata} name="cls" className="form-control" placeholder='Enter Class' />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text"value={inpval.div} onChange={setdata} name="div" className="form-control" placeholder='Enter Division' />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="number" value={inpval.roll} onChange={setdata} name="roll" className="form-control" placeholder='Enter Roll Number in Digits' />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text" value={inpval.add1} onChange={setdata} name="add1" className="form-control" placeholder='Address Line 1' />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text" value={inpval.add2} onChange={setdata} name="add2" className="form-control" placeholder='Address Line 2' />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="text" value={inpval.city} onChange={setdata} name="city" className="form-control" placeholder='City' />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="number" value={inpval.pin} onChange={setdata} name="pin" className="form-control" placeholder='Pincode' />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <input style={{ height: 50, marginBottom: 12 }} type="number" value={inpval.phone} onChange={setdata} name="phone" className="form-control" placeholder='Phone No.' />
                    </div>
                    <button type="submit" onClick={updatestudent} className="btn" style={{ color: "white", backgroundColor: "rgb(250, 75, 62)", fontWeight: 600, borderRadius: 3, height: 40, width: "70%", marginRight: "auto", marginLeft: "auto", borderRadius: 10 }}>Submit</button>
                </div>
            </form>
        </div>
  )
}

export default Edit