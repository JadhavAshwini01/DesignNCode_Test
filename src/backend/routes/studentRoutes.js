const express = require("express");
const router = express.Router();
const db = require("../config/db");

/* =====================================================
   1️⃣ REGISTER STUDENT (NO OTP)
===================================================== */
router.post("/register", (req, res) => {
  const {
    fullName,
    email,
    phone,
    college,
    course,
    skillLevel,
    github,
    password,
    confirmPassword
  } = req.body;

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const sql = `
    INSERT INTO students
    (full_name, email, phone, college, course, skill_level, github, password)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fullName, email, phone, college, course, skillLevel, github, password],
    (err) => {
      if (err) {
        console.error("DB ERROR:", err);

        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ message: "Student already registered" });
        }

        return res.status(500).json({ message: "Database error" });
      }

      res.json({ message: "Student registered successfully 🎉" });
    }
  );
});

/* =====================================================
   2️⃣ ADD STUDENT FOR RATING
===================================================== */
router.post("/add", (req, res) => {
  const { student_name, project_name, status } = req.body;

  const sql = `
    INSERT INTO ratestudents
    (student_name, project_name, status)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [student_name, project_name, status], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }

    res.json({
      id: result.insertId,
      student_name,
      project_name,
      status,
      rating: null
    });
  });
});

/* =====================================================
   3️⃣ UPDATE STUDENT RATING
===================================================== */
router.put("/rate/:id", (req, res) => {
  const { rating } = req.body;
  const { id } = req.params;

  const sql = `UPDATE ratestudents SET rating=? WHERE id=?`;

  db.query(sql, [rating, id], (err) => {
    if (err) {
      return res.status(500).json({ message: "DB error" });
    }

    res.json({ message: "Rating updated successfully ⭐" });
  });
});

/* =====================================================
   4️⃣ GET ALL STUDENTS
===================================================== */
router.get("/all", (req, res) => {
  db.query("SELECT * FROM ratestudents ORDER BY created_at DESC", (err, result) => {
    if (err) {
      return res.status(500).json({ message: "DB error" });
    }
    res.json(result);
  });
});

module.exports = router;