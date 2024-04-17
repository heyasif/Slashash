const express = require("express");
const cors = require("cors");
const PORT = 9090;


//initialise the app
const app = express();

//homepage
app.get("/", (req, res) => {
    res.status(200).json({msg:"welcome to MySQL"})
})


//listening to the server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})