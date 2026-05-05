const express = require("express");
const router = express.Router();
const db = require("../config/db");

/* =====================================================
   ADMIN LOGIN
===================================================== */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@designncode.com" && password === "admin123") {
    return res.json({ message: "Admin login successful" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

/* =====================================================
   DASHBOARD STATS (🔥 FIXED QUERY)
===================================================== */
router.get("/dashboard-stats", (req, res) => {
  const sql = `
    SELECT 
      (SELECT COUNT(*) FROM students) AS totalStudents,
      (SELECT COUNT(*) FROM companies) AS totalCompanies,
      (SELECT COALESCE(SUM(budget),0) FROM projects) AS totalRevenue
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Stats Error:", err);
      return res.status(500).json({ message: "DB error" });
    }

    res.json(result[0]);
  });
});

module.exports = router;