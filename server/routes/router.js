const express = require("express");
const router = express.Router();
const student = require("../models/userSchema");

// router.get("/", (req, res) => {
//     console.log("connect");
// });

router.post("/register", async(req, res) => {
   // console.log(req.body);
   const {first,middle,last,cls,div,roll,add1,add2,city,pin,phone} = req.body;

   if(!first || !middle || !last || !cls || !div || !roll|| !add1 || !add2 || !city || !pin || !phone){
    res.status(422).json("Plz fill the data");
   }
   try {

    const prestudent = await student.findOne({ roll:roll });
    console.log(prestudent);

    if(prestudent) {
        res.status(422).json("this student is already present");
    } else {
        const addstudent = new student({
            first,middle,last,cls,div,roll,add1,add2,city,pin,phone
        });

        await addstudent.save();
        res.status(201).json(addstudent);
        console.log(addstudent);
    }

   } catch (error) {
    res.status(422).json(error)
   }
})

router.get('/getdata', async(req, res) => {
    try {
        const studentdata = await student.find();
        res.status(201).json(studentdata)
        console.log(studentdata);
    } catch (error) {
        res.status(422).json(error)
    }
})

router.get('/getstudent/:id', async(req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;

        const studentindividual = await student.findById({ _id:id });
        console.log(studentindividual);
        res.status(201).json(studentindividual)

    } catch (error) {
        res.status(422).json(studentindividual)
    }
})

router.patch("/updatestudent/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const updatedstudent = await student.findByIdAndUpdate(id, req.body, {
            new: this.trace
        });

        console.log(updatedstudent);
        res.status(201).json(updatedstudent);

    } catch (error) {
        res.status(422).json(error);
    }
})

router.delete("/deletestudent/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedstudent = await student.findByIdAndDelete({ _id:id })
        console.log(deletedstudent);
        res.status(201).json(deletedstudent);

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;