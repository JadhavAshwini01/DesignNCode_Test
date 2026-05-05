import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function DataHandling() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is data handling?",
      options: [
        "Storing data",
        "Managing and processing data",
        "Deleting data",
        "None",
      ],
      answer: 1,
    },
    {
      q: "What is a database?",
      options: [
        "Collection of data",
        "Program",
        "Language",
        "Framework",
      ],
      answer: 0,
    },
    {
      q: "Which language is used for databases?",
      options: ["SQL", "HTML", "CSS", "JS"],
      answer: 0,
    },
    {
      q: "Which command retrieves data?",
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
      answer: 0,
    },
    {
      q: "Which command inserts data?",
      options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
      answer: 0,
    },
    {
      q: "Which command updates data?",
      options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
      answer: 0,
    },
    {
      q: "Which command deletes data?",
      options: ["DELETE", "INSERT", "SELECT", "UPDATE"],
      answer: 0,
    },
    {
      q: "Which clause filters records?",
      options: ["WHERE", "SELECT", "FROM", "GROUP"],
      answer: 0,
    },
    {
      q: "Which clause sorts data?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"],
      answer: 0,
    },
    {
      q: "Which clause groups data?",
      options: ["GROUP BY", "WHERE", "ORDER BY", "SELECT"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which function counts rows?",
      options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
      answer: 0,
    },
    {
      q: "Which function calculates average?",
      options: ["AVG()", "SUM()", "COUNT()", "MIN()"],
      answer: 0,
    },
    {
      q: "Which function calculates total?",
      options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
      answer: 0,
    },
    {
      q: "Which function finds maximum?",
      options: ["MAX()", "MIN()", "SUM()", "AVG()"],
      answer: 0,
    },
    {
      q: "Which function finds minimum?",
      options: ["MIN()", "MAX()", "SUM()", "AVG()"],
      answer: 0,
    },
    {
      q: "Which keyword combines tables?",
      options: ["JOIN", "UNION", "GROUP", "ORDER"],
      answer: 0,
    },
    {
      q: "Which join returns matching rows?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL"],
      answer: 0,
    },
    {
      q: "Which join returns all left rows?",
      options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL"],
      answer: 0,
    },
    {
      q: "Which join returns all right rows?",
      options: ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "FULL"],
      answer: 0,
    },
    {
      q: "Which join returns all rows?",
      options: ["FULL JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which key uniquely identifies record?",
      options: ["Primary Key", "Foreign Key", "Unique Key", "Index"],
      answer: 0,
    },
    {
      q: "Which key links tables?",
      options: ["Foreign Key", "Primary Key", "Unique Key", "Index"],
      answer: 0,
    },
    {
      q: "Which concept avoids duplication?",
      options: ["Normalization", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which normal form removes redundancy?",
      options: ["1NF", "2NF", "3NF", "All"],
      answer: 3,
    },
    {
      q: "Which database type is relational?",
      options: ["SQL", "NoSQL", "File", "API"],
      answer: 0,
    },
    {
      q: "Which database type is non-relational?",
      options: ["NoSQL", "SQL", "Excel", "CSV"],
      answer: 0,
    },
    {
      q: "Which DB stores JSON-like data?",
      options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"],
      answer: 0,
    },
    {
      q: "Which DB is relational?",
      options: ["MySQL", "MongoDB", "Firebase", "Redis"],
      answer: 0,
    },
    {
      q: "Which concept improves query speed?",
      options: ["Indexing", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept groups similar data?",
      options: ["Clustering", "Indexing", "Scaling", "Encoding"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept ensures ACID?",
      options: ["Transaction", "Query", "Table", "Index"],
      answer: 0,
    },
    {
      q: "Which ACID property ensures all or nothing?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      answer: 0,
    },
    {
      q: "Which ACID ensures valid state?",
      options: ["Consistency", "Atomicity", "Isolation", "Durability"],
      answer: 0,
    },
    {
      q: "Which ACID ensures isolation?",
      options: ["Isolation", "Atomicity", "Consistency", "Durability"],
      answer: 0,
    },
    {
      q: "Which ACID ensures persistence?",
      options: ["Durability", "Atomicity", "Consistency", "Isolation"],
      answer: 0,
    },
    {
      q: "Which concept controls concurrency?",
      options: ["Locking", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which level prevents dirty reads?",
      options: ["Read Committed", "Read Uncommitted", "Repeatable", "Serializable"],
      answer: 0,
    },
    {
      q: "Which level is strictest?",
      options: ["Serializable", "Read Committed", "Repeatable", "Uncommitted"],
      answer: 0,
    },
    {
      q: "Which concept logs DB changes?",
      options: ["Transaction Log", "Cache", "Index", "Cluster"],
      answer: 0,
    },
    {
      q: "Which concept backs up data?",
      options: ["Backup", "Index", "Cache", "Cluster"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept improves performance?",
      options: ["Query Optimization", "Storage", "Cleaning", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept partitions data?",
      options: ["Sharding", "Indexing", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept replicates data?",
      options: ["Replication", "Sharding", "Indexing", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles big data DB?",
      options: ["Distributed DB", "Local DB", "File", "API"],
      answer: 0,
    },
    {
      q: "Which concept manages DB schema?",
      options: ["Schema Design", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept ensures data integrity?",
      options: ["Constraints", "Index", "Cache", "Cluster"],
      answer: 0,
    },
    {
      q: "Which constraint ensures uniqueness?",
      options: ["UNIQUE", "NOT NULL", "PRIMARY", "FOREIGN"],
      answer: 0,
    },
    {
      q: "Which constraint prevents null?",
      options: ["NOT NULL", "UNIQUE", "PRIMARY", "FOREIGN"],
      answer: 0,
    },
    {
      q: "Which concept scales database?",
      options: ["Horizontal Scaling", "Vertical", "Both", "None"],
      answer: 2,
    },
    {
      q: "Which concept handles large traffic DB?",
      options: ["Distributed Systems", "Local DB", "File", "API"],
      answer: 0,
    },
  ],
};

  const questions = activeLevel !== null ? javaQuestions[activeLevel] : [];
  const q = questions[currentQ];

  /* ===== SUBMIT ===== */
  const submitQuiz = () => {
    let score = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    if (score >= 6) {
      alert("✅ Passed!");

      if (activeLevel === unlockedLevel) {
        setUnlockedLevel(unlockedLevel + 1);
      }

      setStep("levels");
      setActiveLevel(null);
    } else {
      alert("❌ Failed!");
    }

    setCurrentQ(0);
    setAnswers({});
  };

  return (
    <div className={step === "quiz" ? "quiz-fullscreen" : "quiz-layout"}>
      {step !== "quiz" && <Sidebar />}

      <div className="quiz-main">
        <h1 className="level-title">COLLECTIONS QUIZ</h1>

        {/* ===== LEVELS ===== */}
        {step === "levels" && (
          <div className="level-grid">
            {[1, 2, 3, 4, 5].map((level) => {
              const isLocked = level > unlockedLevel;

              return (
                <div
                  key={level}
                  className={`level-card ${isLocked ? "locked" : "unlocked"}`}
                  onClick={() => {
                    if (!isLocked) {
                      setActiveLevel(level);
                      setStep("quiz");
                    }
                  }}
                >
                  <h3>Quiz {level}</h3>

                  {isLocked ? (
                    <span className="lock">🔒 Locked</span>
                  ) : (
                    <span className="unlock">🚀 Start</span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ===== QUIZ ===== */}
        {step === "quiz" && q && (
          <div className="exam-container">

            {/* LEFT */}
            <div className="exam-left">
              <h3>Core Java Quiz - Level {activeLevel}</h3>

              <p className="question">
                Q{currentQ + 1}. {q.q}
              </p>

              <div className="options">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`option ${
                      answers[currentQ] === i ? "selected" : ""
                    }`}
                    onClick={() =>
                      setAnswers({ ...answers, [currentQ]: i })
                    }
                  >
                    {opt}
                  </div>
                ))}
              </div>

              <div className="buttons">
                <button
                  className="btn prev"
                  disabled={currentQ === 0}
                  onClick={() => setCurrentQ(currentQ - 1)}
                >
                  Previous
                </button>

                {currentQ < questions.length - 1 ? (
                  <button
                    className="btn next"
                    onClick={() => setCurrentQ(currentQ + 1)}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="btn submit"
                    onClick={submitQuiz}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="exam-right">
              <div className="q-header">
                <FormatListBulletedIcon className="q-icon" />
                <h4>Questions</h4>
              </div>

              <div className="question-grid">
                {questions.map((_, i) => {
                  let status = "not";

                  if (answers[i] !== undefined) {
                    status = "answered";
                  } else if (i === currentQ) {
                    status = "current";
                  }

                  return (
                    <div
                      key={i}
                      className={`q-number ${status}`}
                      onClick={() => setCurrentQ(i)}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default DataHandling;