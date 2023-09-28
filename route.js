const express= require('express')
const app = express.Router();
const hmodel = require('./Database/Heart')
const model= require('./Database/Model')
const diamodel = require('./Database/Dia')
const jwt = require('jsonwebtoken')

const cors = require('cors');
app.use(cors({
    origin: '*'
}));


app.use(express.json())


app.get('/',(req,res)=>{
    console.log("hello world")
})


app.post('/register',async (req,res) =>{
   
    const {name,email,password,cpassword} = req.body;
  
    let exist = await model.findOne({email})
  
    if(exist){
       
         return res.json({msg:'email already exists'});
  
    }
    if(password !== cpassword)
    {
         return res.json({msg:'password do not matches'})
    }

    let data = new model({
     name : name,
     email:email,
     password:password,
     cpassword:cpassword,
          
    })
  
    await data.save().then(
      (da) =>{ return res.status(200).json({msg:"registered successfully"}) }
  
    ).catch( (err) =>{
      console.log(err);
    }
    )
    
  
  })

  
  app.post('/login',async(req,res)=>{
  
        const {email,password} = req.body;
  
        if(!(email && password))
        {
          return res.send("input is required");
        }
  
        const user = await model.findOne({email})
         console.log(user);
        if(user==null)
        {
          return res.send("user not found");
        }
  
        if(email!=user.email)
        {
          res.send("Email does not match");
        }
        if(password!=user.password)
        {
          res.send("password does not match");
        }
  
        let payload = {
          user:{
             id:user.id
          }
        }
        const token = jwt.sign(payload,"Mini",{expiresIn:9999999999999},(err,token)=>{
           if(err)
           {
            res.send(err);
           }
           else
           {
               res.json({"token":token})
           }
        })
  
        
  
  })
  
  app.post('/heartdata',async(req,res)=>{
      
        const {age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal,result,userid} = req.body

        const data   = new  hmodel({
          userid:userid,
          age:age,
          sex:sex,
          cp:cp,
          trestbps:trestbps,
          chol:chol,
          fbs:fbs,
          restecg:restecg,
          thalach:thalach,
          exang:exang,
          oldpeak:oldpeak,
          slope:slope,
          ca:ca,
          thal:thal,
          result:result
        })

        await data.save();

          return res.send("heart data is saved")

  })

  app.post('/diabetisdata',async(req,res)=>{
 
     const {Preg,glu,bp,skt,ins,bmi,dpf,age,result,userid} = req.body;

         const data = await diamodel({
          userid:userid,
          Preg:Preg,
          glu:glu,
          bp:bp,
          skt:skt,
          ins:ins,
          bmi:bmi,
          dpf:dpf,
          age:age,
          result:result,
         })

         await data.save();

         res.send("diabetis data is saved")

  })


  app.get('/getuserId/:token',async(req,res)=>{
      const token = req.params.token;
      const payload = jwt.verify(token,"Mini");
      console.log(payload.user.id);
      const result = await model.findOne({_id:payload.user.id}).then((r)=>
         res.json(r)
      ).catch((err)=>{
        console.log(err);
      })
  })

  
module.exports = app