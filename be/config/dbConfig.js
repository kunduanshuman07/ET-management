import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ETSheet');
        console.log("ETSheet Database connected");
    } catch (error) {
        console.error(error);
    }

}

export default connectDB;