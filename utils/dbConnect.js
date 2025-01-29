import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

export default async function dbConnect() {
    console.log("trying")
    if(mongoose.connection.readyState >= 1) {
        return;
    }
    try{
        const db = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${db.connection.host}`);
    }catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}