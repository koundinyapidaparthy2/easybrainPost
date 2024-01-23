import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome From Post")
})

app.get("/post",(req,res)=>{
    res.send("Welcome From Post from port " + PORT)
})

app.listen(PORT,()=>{
    console.log("This was listening in Port " + PORT)
})