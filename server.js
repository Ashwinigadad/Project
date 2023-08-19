const express=require("express");
const dotEnv=require("dotenv").config();
const cors=require("cors");
const route=require("./route/routecontrol");

const app=express();
app.use(express.json());

app.use(cors({
    origin:"http://192.168.20.146:5500"
}))
app.use("/api/server",require("./route/routecontrol"));
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`The server started on port ${port}`);
})
