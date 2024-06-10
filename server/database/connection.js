const mongoose = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL ||
  "mongodb+srv://hammererrenaud:my1pKdEYAjyoRofv@p-11.l8bbggd.mongodb.net/?retryWrites=true&w=majority&appName=p-11";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
