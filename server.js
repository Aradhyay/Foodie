import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

connectDB();
app.use("/api/food", foodRouter)

app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// mongodb+srv://aradhy033:<db_password>@cluster0.updsr.mongodb.net/?