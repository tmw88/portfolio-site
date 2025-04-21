// backend/lib/mongodb.js

const mongoose = require("mongoose");

let isConnected = false;

async function connectToDB() {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB connected successfully");

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

module.exports = connectToDB;
