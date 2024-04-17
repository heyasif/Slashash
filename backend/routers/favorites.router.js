const express = require("express");
const { db } = require("../config/db");


//importing express router
const favQuoteRouter = express.Router();   


//get quotes route
favQuoteRouter.get("/", (req, res) => {
    try {  
        const query = `SELECT * FROM favourites`
        db.query(query, [], (err, result) => {
            if(err) res.status(200).json({msg: "Error while getting quotes", err})
            else res.status(200).json({msg: "Here are your favourites quotes!", result})
        })
    } catch (err) {
        res.status(400).json({msg: "Error getting quotes", err})
    }
})




//exporting Router
module.exports = {
    favQuoteRouter
}