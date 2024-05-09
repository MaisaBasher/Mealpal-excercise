const express = require("express");
const cors = require("cors");
var db = require('./model/mealpal_guest');
var guestController = require('./controller/guestController')

db.createDB();
const app = express();
app.use(express.json());
app.use(cors());


app.post('/', (req,res)=>{
    //db.insertData(req.body.name, req.body.phone);
    const out = guestController.guestController(req.body.name, req.body.phone);
    res.status(out.status);
    // res.statusText(out.message);
    console.log(res.body)
    return res.json(out.message);
})

app.listen(8081,()=> {
console.log("listening");
})
