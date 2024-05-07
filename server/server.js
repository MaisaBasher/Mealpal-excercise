const express = require("express");
const cors = require("cors");
var db = require('./model/mealpal_guest');

db.createDB();
const app = express();
app.use(cors());
app.listen(8081,()=> {
console.log("listening");
})
