const express = require("express");
const cors = require("cors");
var db = require('./model/mealpal_guest');
var guestController = require('./controller/guestController')
const app = express();
app.use(express.json());
app.use(cors());

db.createDB();

//Api Setup 
app.post('/', (req,res)=>{
    const out = guestController.guestController(req.body.name, req.body.phone);
    res.status(out.status);
    return res.json(out.message);
})

app.listen(8081,()=> {
console.log("listening");
})
