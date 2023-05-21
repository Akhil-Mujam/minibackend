const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mini:UNtxxIFDFaZYvHw8@cluster0.ligpuzz.mongodb.net/?retryWrites=true&w=majority").then(
    data => console.log("database connected..")
)
.catch(   
    err => console.log("error")
)