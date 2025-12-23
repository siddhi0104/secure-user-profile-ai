const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Secure User Profile API running");
});

const authRoutes = require("./src/routes/authRoutes");
app.use("/auth", authRoutes);

const profileRoutes = require("./src/routes/profileRoutes");
app.use("/profile", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
