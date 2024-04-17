const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',   
    user:'root',
    password:'Asif@123',
    database: 'slashash'
})

db.connect((err)=>{
    if(err) console.log(`error connecting ${err}`);
    else console.log(`Connected to DB`)
})


module.exports = {
    db
}