var guestDB = require('../model/mealpal_guest');


function guestController(name, phone){
    let res = {
        status:'',
        message:''
    };
    if(name.length < 2 || phone.length < 10 || phone.length > 11){
        res.status = 400;
        res.message = "Invalid entry"
    } else{
        guestDB.insertData(name, phone);
        res.status = 201;
        res.message = "Success"
    }
    return res;

}
module.exports = {guestController};