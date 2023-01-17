const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    middle: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    cls: {
        type: String,
        required: true
    },
    div: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    add1: {
        type: String,
        required: true
    },
    add2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

const student = new mongoose.model("student", userSchema);

module.exports = student;