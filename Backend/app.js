import express from "express";
import  "./lib/dbCon.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();
app.use(cors({
  origin:'http://localhost:3000',
  optionsSuccessStatus: 200 
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/user',userRoutes);

app.get('/',(req,res)=>{
    res.send("Backend")
})


app.listen(3001, () => {
  console.log("Server started");
});
