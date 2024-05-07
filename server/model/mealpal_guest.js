const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
function createDB(){
    db.connect((err)=>{
        if (err) throw new Error(err);
        console.log("connected");
        db.query('CREATE DATABASE IF NOT EXISTS MEALPAL', (err)=>{
            if(err) throw new Error(err);
            console.log("Database created");
            db.changeUser({database: 'MEALPAL'},(err)=>{
                if(err) throw new Error(err);
                createTable();
            })

        })
    })
}

function createTable(){
    db.query(
        'CREATE TABLE IF NOT EXISTS guests(name VARCHAR(45),phone VARCHAR(11))'
    , (err) => {
        if(err) throw new Error(err);
        console.log("Table created");
    })
}
function inserData(name, phone){
    db.query(
        'INSERT INTO guests (name, phone) VALUES(?,?)', [name, phone]
    , (err) => {
        if(err) throw new Error(err);
        console.log("Table created");
    })

}
module.exports = {db, createDB, inserData};