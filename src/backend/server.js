const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ROUTES */
const companyRoutes = require("./routes/companyRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");

app.use("/api/company", companyRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);

/* TEST */
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});