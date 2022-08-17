const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use("view-engine", "ejs");

app.get("/", (req, res)=>{
    let date = new Date();
    let today = date.getDay();
    let day = "";

    if(today=== 6 || today === 0){
        day = "Weekend";
    }
    else{
        day = "Weekday";
    }
    res.render("list", {kindOfDay: day});
})

app.listen(`${port}`, ()=>{
    console.log(`Server started at port ${port}`);
})