import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectonInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("Connected to the database:", connectonInstance.connection.name)

    } catch (error) {
        console.error("ERROR:",error);
        process.exit(1)
    }
}
export default connectDB; 