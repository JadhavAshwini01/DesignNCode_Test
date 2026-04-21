const db = require("../config/db");

/* SAVE QUIZ RESULT */
const saveQuizResult = (req, res) => {
  const { email, quizName, score, total, passed } = req.body;

  if (!email || !quizName) {
    return res.status(400).json({ message: "Missing data" });
  }

  const sql = `
    INSERT INTO quiz_results_student (student_email, quiz_name, score, total, passed)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [email, quizName, score, total, passed],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "DB error", err });
      }
      res.json({ message: "Quiz saved successfully" });
    }
  );
};

module.exports = { saveQuizResult };