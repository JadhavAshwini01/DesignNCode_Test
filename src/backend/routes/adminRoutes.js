const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ADMIN LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const sql = "SELECT * FROM admins WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Admin login successful",
      admin: {
        id: result[0].id,
        email: result[0].email
      }
    });
  });
});
router.get("/dashboard-stats/:companyId", (req, res) => {
  const { companyId } = req.params;

  const stats = {};

  db.query(
    "SELECT COUNT(*) AS activeProjects FROM projects WHERE company_id=? AND status='active'",
    [companyId],
    (err, pRes) => {
      if (err) return res.status(500).json({ message: "DB error" });

      stats.activeProjects = pRes[0].activeProjects;

      db.query(
        "SELECT IFNULL(SUM(budget),0) AS totalBudget FROM projects WHERE company_id=?",
        [companyId],
        (err, bRes) => {
          if (err) return res.status(500).json({ message: "DB error" });

          stats.totalBudget = bRes[0].totalBudget;

          res.json(stats);
        }
      );
    }
  );
});

module.exports = router;
