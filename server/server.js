const env = require("./src/config/environments/env");
const express = require("express");
const server = require("./src/app");
const connectDB = require("./src/config/database/db");
const { initScheduler } = require("./src/services/schedule.service");
const PORT = env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
    initScheduler();
  } catch (error) {
    console.error(`Server startup failed: ${error.message}`);
    process.exit(1);
  }
};

startServer();