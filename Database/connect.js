const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://miniproject:odwOGDJvaFIK7wwX@cluster0.lu1eimu.mongodb.net/?retryWrites=true&w=majority").then(
    data => console.log("database connected..")
)
.catch(   
    err => console.log("error")
)


