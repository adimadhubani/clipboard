import express from "express"
import dotenv from "dotenv"
import colors from "colors";
import cors from "cors"
import connectDB from "./config/db.js";
import clipboardRoutes from "./routes/clipboardRoutes.js";
import path from "path"

dotenv.config();

connectDB();
const app=express();

app.use(cors({
  origin:  'http://localhost:5173',
  credentials: true
}));
app.use(express.json());


app.use('/api/clipboard', clipboardRoutes);

const PORT = process.env.PORT || 5001;
const __dirname=path.resolve();


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`.bgCyan.white);
})