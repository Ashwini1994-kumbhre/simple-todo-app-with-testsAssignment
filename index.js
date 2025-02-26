const express = require("express");

const app = express();

app.use(express.json());

app.listen(8080 ,()=>{
    connectToDo();
    console.log("server started")
})
