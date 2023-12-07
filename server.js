const express=require("express");
const dotEnv=require("dotenv").config();
const cors=require("cors");

const route=require("./route/route");
// const mongoose=require("./mongoos");

const app=express();
app.use(express.json());

app.use(cors({
    origin:"http://127.0.0.1:5502"
}))

app.use("/api/server",require("./route/route"));
const port=process.env.PORT;
const mongoos=require("mongoose");
mongoos.connect("mongodb://localhost:27017/project")
.then(()=>{
    console.log("Mongodb got connected");
})
.catch(()=>{
    console.log("error");
})
app.listen(port,()=>{
    console.log(`The server started on port ${port}`);
})
