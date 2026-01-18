import mongoose from "mongoose";

const conncetToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDb.");
    } catch (error) {
        console.log("Erro to conncting MongoDb", error.message);
    }
}

export default conncetToMongoDb;