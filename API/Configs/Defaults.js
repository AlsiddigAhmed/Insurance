module.exports = {
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || "localhost",
  DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/Insurance_app",
  JWT_SECRET: process.env.JWT_SECRET || "jkdfnkjngjkdfgvncjvkdsjfkrddkfd"
};
