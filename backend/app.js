// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const employeeRoutes = require('./Routes/employeeRoutes')
// const ejs = require('ejs')


// const app = express()
// // app.use(cors())



// const PORT = process.env.PORT || 5000;
// // app.set('view engine','ejs')

// dotenv.config()

// app.use(bodyParser.json())

// // client side rendering
// app.get('/mango',(req,res)=>{
//     res.json({fruit:"mango"})
// })


// // server side rendering
// // app.get("/grapes",(req,res)=>{
// //     res.render('samplePage')
// // })


// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("Mongodb connected success")
// })
// .catch((error)=>{
//     console.log(`${error}`)
// })

// app.use('/employees',employeeRoutes)
// app.listen(PORT, () => console.log(`Server start and running at ${PORT}`));
