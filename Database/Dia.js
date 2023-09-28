const mongoose = require('mongoose')
// input_d = (Preg,glu,bp,skt,ins,bmi,dpf,age)
const diabetis = mongoose.Schema({
      userid:{
        type:String
      },
      Preg:{
        type:String
      },
      glu:{
        type:String
      },
      bp:{
        type:String
      },
      skt:{
        type:String
      },
      ins:{
        type:String
      },
      bmi:{
         type:String
      },
      dpf:{
          type:String
      },
      age:{
        type:String
      },
      result:{
        type:String
      }


})


const dia = mongoose.model('diab',diabetis)
module.exports = dia;
