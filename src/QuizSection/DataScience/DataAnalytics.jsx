import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function DataAnalytics() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is Data Analytics?",
      options: [
        "Storing data",
        "Analyzing data for insights",
        "Deleting data",
        "None",
      ],
      answer: 1,
    },
    {
      q: "Which tool is used for data analysis?",
      options: ["Excel", "Python", "SQL", "All"],
      answer: 3,
    },
    {
      q: "Which library is used in Python for analysis?",
      options: ["Pandas", "NumPy", "Matplotlib", "All"],
      answer: 3,
    },
    {
      q: "Which process cleans data?",
      options: ["Data Cleaning", "Clustering", "Encoding", "Scaling"],
      answer: 0,
    },
    {
      q: "Which chart shows data trends?",
      options: ["Line Chart", "Pie Chart", "Table", "Text"],
      answer: 0,
    },
    {
      q: "Which chart shows categories?",
      options: ["Bar Chart", "Line Chart", "Scatter", "Histogram"],
      answer: 0,
    },
    {
      q: "Which chart shows distribution?",
      options: ["Histogram", "Bar", "Line", "Pie"],
      answer: 0,
    },
    {
      q: "Which query language is used?",
      options: ["SQL", "HTML", "CSS", "JS"],
      answer: 0,
    },
    {
      q: "Which function calculates average?",
      options: ["AVG()", "SUM()", "COUNT()", "MAX()"],
      answer: 0,
    },
    {
      q: "Which function counts rows?",
      options: ["COUNT()", "SUM()", "AVG()", "MIN()"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which function finds total?",
      options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
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
      q: "Which clause filters data?",
      options: ["WHERE", "SELECT", "FROM", "GROUP"],
      answer: 0,
    },
    {
      q: "Which clause groups data?",
      options: ["GROUP BY", "WHERE", "ORDER BY", "SELECT"],
      answer: 0,
    },
    {
      q: "Which clause sorts data?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"],
      answer: 0,
    },
    {
      q: "Which join combines tables?",
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
  ],

  3: [
    {
      q: "Which method handles missing data?",
      options: ["fillna()", "dropna()", "Both", "None"],
      answer: 2,
    },
    {
      q: "Which method shows first rows?",
      options: ["head()", "tail()", "info()", "describe()"],
      answer: 0,
    },
    {
      q: "Which method shows last rows?",
      options: ["tail()", "head()", "info()", "describe()"],
      answer: 0,
    },
    {
      q: "Which method gives dataset info?",
      options: ["info()", "describe()", "head()", "tail()"],
      answer: 0,
    },
    {
      q: "Which method gives statistics?",
      options: ["describe()", "info()", "head()", "tail()"],
      answer: 0,
    },
    {
      q: "Which chart shows relationship?",
      options: ["Scatter Plot", "Bar Chart", "Pie Chart", "Histogram"],
      answer: 0,
    },
    {
      q: "Which concept finds patterns?",
      options: ["Analytics", "Storage", "Cleaning", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept uses past data to predict?",
      options: ["Predictive Analytics", "Descriptive", "Diagnostic", "None"],
      answer: 0,
    },
    {
      q: "Which concept explains why something happened?",
      options: ["Diagnostic Analytics", "Predictive", "Descriptive", "None"],
      answer: 0,
    },
    {
      q: "Which concept shows past trends?",
      options: ["Descriptive Analytics", "Predictive", "Diagnostic", "None"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which tool is used for dashboards?",
      options: ["Power BI", "Excel", "Tableau", "All"],
      answer: 3,
    },
    {
      q: "Which concept transforms data?",
      options: ["ETL", "SQL", "API", "UI"],
      answer: 0,
    },
    {
      q: "Which concept extracts data?",
      options: ["Extract", "Transform", "Load", "Store"],
      answer: 0,
    },
    {
      q: "Which concept loads data?",
      options: ["Load", "Extract", "Transform", "Clean"],
      answer: 0,
    },
    {
      q: "Which concept organizes data?",
      options: ["Data Modeling", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept stores structured data?",
      options: ["Database", "File", "Cloud", "API"],
      answer: 0,
    },
    {
      q: "Which concept handles big data?",
      options: ["Hadoop", "Excel", "SQL", "Pandas"],
      answer: 0,
    },
    {
      q: "Which concept processes data fast?",
      options: ["Spark", "Excel", "SQL", "Pandas"],
      answer: 0,
    },
    {
      q: "Which concept visualizes insights?",
      options: ["Data Visualization", "Storage", "Cleaning", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept tracks KPIs?",
      options: ["Dashboard", "Table", "Chart", "Graph"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept improves decision making?",
      options: ["Analytics", "Storage", "Cleaning", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept uses real-time data?",
      options: ["Real-time Analytics", "Batch", "Static", "Manual"],
      answer: 0,
    },
    {
      q: "Which concept automates analysis?",
      options: ["Automation", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures data quality?",
      options: ["Data Validation", "Storage", "Cleaning", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept protects data?",
      options: ["Data Security", "Cleaning", "Sorting", "Storage"],
      answer: 0,
    },
    {
      q: "Which concept handles large datasets?",
      options: ["Big Data", "Small Data", "Static", "Manual"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Optimization", "Storage", "Cleaning", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept predicts trends?",
      options: ["Predictive Analytics", "Descriptive", "Diagnostic", "None"],
      answer: 0,
    },
    {
      q: "Which concept finds root cause?",
      options: ["Diagnostic Analytics", "Predictive", "Descriptive", "None"],
      answer: 0,
    },
    {
      q: "Which concept suggests actions?",
      options: ["Prescriptive Analytics", "Predictive", "Descriptive", "None"],
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

export default DataAnalytics;