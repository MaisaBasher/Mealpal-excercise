var guestDB = require('../model/mealpal_guest');

/*
    Parameters:
        Name: string
        Phone: String
    Description: Checks if the guest data is valid 
    Return: Json status
*/

function guestController(name, phone){
    let res = {
        status:'',
        message:''
    };
    if(name.split(" ").length < 2 || phone.length < 10 || phone.length > 11){
        res.status = 400;
        res.message = "Invalid entry";
        if(name.split(" ").length < 2)
            res.message += " name";
        if(phone.length < 10 || phone.length > 11)
            res.message += " phone"; 
            
    } else{
        guestDB.insertData(name, phone);
        res.status = 201;
        res.message = "Success"
    }
    return res;

}
module.exports = {guestController};