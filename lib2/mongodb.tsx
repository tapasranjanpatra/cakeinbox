
import mongoose from "mongoose";

export const connectMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:",error);
    }
};
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@tapasranjanpatra




// import mongoose, { Mongoose } from 'mongoose';

// let cachedDb: {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// } = {
//   conn: null,
//   promise: null,
// };

// const MONGODB_URI = process.env.MONGODB_URI || 'your-mongodb-uri';

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// export const connectMongoDB = async (): Promise<Mongoose> => {
//   if (cachedDb.conn) {
//     return cachedDb.conn;
//   }

//   if (!cachedDb.promise) {
//     cachedDb.promise = mongoose.connect(MONGODB_URI, {
//       // useNewUrlParser:true, // Deprecated, but still can be used for compatibility
//       // useUnifiedTopology:true,
//       // Add any other options you need here
//     }).then(mongooseInstance => {
//       return mongooseInstance;
//     }).catch(err => {
//       console.error('Error connecting to MongoDB:', err);
//       throw err;
//     });
//   }
  
//   cachedDb.conn = await cachedDb.promise;
//   console.log("Connected to MongoDB");
//   return cachedDb.conn;
// };

// export default connectMongoDB;
