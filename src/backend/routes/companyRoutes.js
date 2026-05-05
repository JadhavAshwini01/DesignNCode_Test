const express = require("express");
const router = express.Router();
const db = require("../config/db");

/* =====================================================
   1️⃣ COMPANY REGISTER
===================================================== */
router.post("/register", (req, res) => {
  const {
    companyName,
    hrName,
    email,
    phone,
    website,
    location,
    industry,
    password
  } = req.body;

  if (!companyName || !hrName || !email || !password) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const sql = `
    INSERT INTO companies
    (company_name, hr_name, email, phone, website, location, industry, password)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [companyName, hrName, email, phone, website, location, industry, password],
    (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ message: "Email already exists" });
        }
        return res.status(500).json({ message: "Database error" });
      }

      res.json({ message: "Company registered successfully 🎉" });
    }
  );
});

/* =====================================================
   2️⃣ COMPANY LOGIN
===================================================== */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM companies WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      company: {
        id: result[0].id,
        companyName: result[0].company_name,
        email: result[0].email
      }
    });
  });
});

/* =====================================================
   3️⃣ ADD PROJECT (🔥 VERY IMPORTANT FIX)
===================================================== */
router.post("/add-project", (req, res) => {
  const {
    companyId,
    title,
    description,
    skillsrequired,
    totalBudget,
    skilllevelrequired
  } = req.body;

  if (!companyId) {
    return res.status(400).json({ message: "Company ID missing" });
  }

  const sql = `
    INSERT INTO projects
    (company_id, title, description, skills, budget, skill_level)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      companyId,
      title,
      description,
      skillsrequired,
      totalBudget,
      skilllevelrequired
    ],
    (err) => {
      if (err) {
        console.error("Project Error:", err);
        return res.status(500).json({ message: "DB error" });
      }

      res.json({ message: "Project added successfully ✅" });
    }
  );
});

module.exports = router;