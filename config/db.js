import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aradhy033:<db_password>@cluster0.updsr.mongodb.net/Foodiee').then(() => console.log("DB Connected"))
}