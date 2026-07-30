const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const partnerRoutes = require("./routes/partnerRoutes");

const app = express();

const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/partners", partnerRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});