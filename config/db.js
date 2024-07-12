import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://tanujkumar191001:9866611921@cluster0.2bqstiq.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}