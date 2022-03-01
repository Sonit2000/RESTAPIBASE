const express = require('express')
const cors = require('cors')
const  app = express();
const mongoose =  require('mongoose')
var bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const authRoute = require("./routes/author")
const bookRoute = require("./routes/book")

app.use(bodyParser.json({limit:"500mb"}))
app.use(cors())
app.use(morgan("common"))

dotenv.config()
// * Connect Database
mongoose.connect((process.env.MONGOODB_URL),()=>{
    console.log("Connect to MongooDb")
})

app.listen(8000,()=>{
    console.log("Server is running ....")
})
//Routes
app.use("/v1/author",authRoute)
app.use("/v1/book",bookRoute)