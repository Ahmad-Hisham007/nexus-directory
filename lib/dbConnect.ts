// import { MongoClient } from "mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }

// const mongoDBUri: string = process.env.MONGODB_URI;

// const options = {};

// let client: MongoClient;

// const globalWithMongo = global as typeof globalThis & {
//   _mongoClientPromise: Promise<MongoClient>;
// };
// if (!globalWithMongo._mongoClientPromise) {
//   client = new MongoClient(mongoDBUri, options);
//   globalWithMongo._mongoClientPromise = client.connect();
// }
// const clientPromise: Promise<MongoClient> = globalWithMongo._mongoClientPromise;

// export default clientPromise;

// For Mongoose
import mongoose, { Mongoose } from "mongoose";
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const mongoDBUri: string = process.env.MONGODB_URI;

interface GlobalMongoose {
  mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

declare global {
  var mongoose: GlobalMongoose["mongoose"];
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opt = {
      bufferCommands: false,
      dbName: "nexus-directory",
    };
    cached.promise = mongoose.connect(mongoDBUri, opt).then((m) => {
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
};
