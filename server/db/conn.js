const mongoose = require("mongoose");

const DB = "mongodb+srv://student:student123@cluster0.ydxh5au.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connection start')).catch((error) => console.log(error.message));