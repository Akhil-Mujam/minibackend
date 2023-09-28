const mongoose = require('mongoose')

const dat = mongoose.Schema({

       userid:{
             type:String
       },
       age:{
              type:String
              
       },
       sex:{
              type:String
              
       },
       cp:{
              type:String
              
       },
       trestbps:{
              type:String
              
       },
       chol:{
              type:String
              
       },
       fbs:{
              type:String
              
       },
       restecg:{
              type:String
              
       },
       thalach:{
              type:String
              
       },
       exang:{
              type:String
              
       },
       oldpeak:{
              type:String
              
       },
       slope:{
              type:String
              
       },
       ca:{
              type:String
              
       },
       thal:{
              type:String
              
       },
       result:{
              type:String
              
       },

  
})

const Heart = mongoose.model('hrt',dat)
module.exports = Heart;