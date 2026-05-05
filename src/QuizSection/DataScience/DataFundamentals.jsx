import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function DataFundamentals() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
      1: [
        {
          q: "What is Data Science?",
          options: [
            "Storing data",
            "Analyzing data for insights",
            "Deleting data",
            "None",
          ],
          answer: 1,
        },
        {
          q: "Which language is widely used in Data Science?",
          options: ["Python", "HTML", "CSS", "C"],
          answer: 0,
        },
        {
          q: "Which library is used for data handling?",
          options: ["Pandas", "React", "Spring", "Node"],
          answer: 0,
        },
        {
          q: "Which library is used for numerical operations?",
          options: ["NumPy", "Flask", "Django", "Bootstrap"],
          answer: 0,
        },
        {
          q: "Which library is used for visualization?",
          options: ["Matplotlib", "NumPy", "Pandas", "Scikit"],
          answer: 0,
        },
        {
          q: "Which step cleans data?",
          options: ["Data Cleaning", "Clustering", "Encoding", "Scaling"],
          answer: 0,
        },
        {
          q: "Which type predicts numbers?",
          options: ["Regression", "Classification", "Clustering", "None"],
          answer: 0,
        },
        {
          q: "Which type predicts categories?",
          options: ["Classification", "Regression", "Clustering", "None"],
          answer: 0,
        },
        {
          q: "Which type groups data?",
          options: ["Clustering", "Regression", "Classification", "None"],
          answer: 0,
        },
        {
          q: "Which step splits data?",
          options: ["Train-Test Split", "Clustering", "Encoding", "Scaling"],
          answer: 0,
        },
      ],

      2: [
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
          q: "Which method shows dataset info?",
          options: ["info()", "describe()", "head()", "tail()"],
          answer: 0,
        },
        {
          q: "Which method shows statistics?",
          options: ["describe()", "info()", "head()", "tail()"],
          answer: 0,
        },
        {
          q: "Which method handles missing values?",
          options: ["fillna()", "dropna()", "Both", "None"],
          answer: 2,
        },
        {
          q: "Which concept measures average?",
          options: ["Mean", "Variance", "Mode", "Range"],
          answer: 0,
        },
        {
          q: "Which concept measures spread?",
          options: ["Variance", "Mean", "Mode", "Median"],
          answer: 0,
        },
        {
          q: "Which chart shows distribution?",
          options: ["Histogram", "Bar", "Line", "Pie"],
          answer: 0,
        },
        {
          q: "Which chart shows relationship?",
          options: ["Scatter Plot", "Bar Chart", "Pie Chart", "Histogram"],
          answer: 0,
        },
        {
          q: "Which concept reduces overfitting?",
          options: ["Regularization", "Clustering", "Scaling", "Encoding"],
          answer: 0,
        },
      ],

      3: [
        {
          q: "Which method scales data?",
          options: ["Normalization", "Clustering", "Encoding", "Regression"],
          answer: 0,
        },
        {
          q: "Which method encodes categorical data?",
          options: ["Encoding", "Scaling", "Clustering", "Regression"],
          answer: 0,
        },
        {
          q: "Which algorithm is used for classification?",
          options: ["Logistic Regression", "KMeans", "PCA", "Clustering"],
          answer: 0,
        },
        {
          q: "Which algorithm is used for clustering?",
          options: ["KMeans", "Regression", "Tree", "SVM"],
          answer: 0,
        },
        {
          q: "Which method reduces dimensions?",
          options: ["PCA", "KNN", "Tree", "Regression"],
          answer: 0,
        },
        {
          q: "Which metric is used for classification?",
          options: ["Accuracy", "MSE", "RMSE", "MAE"],
          answer: 0,
        },
        {
          q: "Which metric is used for regression?",
          options: ["MSE", "Accuracy", "Precision", "Recall"],
          answer: 0,
        },
        {
          q: "Which concept avoids overfitting?",
          options: ["Cross-validation", "Scaling", "Encoding", "Clustering"],
          answer: 0,
        },
        {
          q: "Which concept selects features?",
          options: ["Feature Selection", "Clustering", "Scaling", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept creates new features?",
          options: ["Feature Engineering", "Clustering", "Scaling", "Encoding"],
          answer: 0,
        },
      ],

      4: [
        {
          q: "Which concept explores data?",
          options: ["EDA", "Scaling", "Encoding", "Clustering"],
          answer: 0,
        },
        {
          q: "Which concept handles big data?",
          options: ["Big Data", "Small Data", "Static", "Manual"],
          answer: 0,
        },
        {
          q: "Which tool processes big data?",
          options: ["Hadoop", "Excel", "SQL", "Pandas"],
          answer: 0,
        },
        {
          q: "Which tool processes fast data?",
          options: ["Spark", "Excel", "SQL", "Pandas"],
          answer: 0,
        },
        {
          q: "Which concept visualizes data?",
          options: ["Data Visualization", "Storage", "Cleaning", "Sorting"],
          answer: 0,
        },
        {
          q: "Which concept handles pipelines?",
          options: ["Data Pipeline", "Clustering", "Scaling", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept automates ML?",
          options: ["AutoML", "Clustering", "Scaling", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept deploys models?",
          options: ["MLOps", "Clustering", "Scaling", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept stores data?",
          options: ["Database", "UI", "API", "Design"],
          answer: 0,
        },
        {
          q: "Which concept manages experiments?",
          options: ["MLflow", "NumPy", "Pandas", "Matplotlib"],
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
          q: "Which concept predicts trends?",
          options: ["Predictive Analytics", "Descriptive", "Diagnostic", "None"],
          answer: 0,
        },
        {
          q: "Which concept explains past?",
          options: ["Descriptive Analytics", "Predictive", "Diagnostic", "None"],
          answer: 0,
        },
        {
          q: "Which concept explains why?",
          options: ["Diagnostic Analytics", "Predictive", "Descriptive", "None"],
          answer: 0,
        },
        {
          q: "Which concept suggests actions?",
          options: ["Prescriptive Analytics", "Predictive", "Descriptive", "None"],
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
          q: "Which concept handles real-time data?",
          options: ["Streaming", "Batch", "Static", "Manual"],
          answer: 0,
        },
        {
          q: "Which concept improves scalability?",
          options: ["Distributed Computing", "Storage", "Cleaning", "Sorting"],
          answer: 0,
        },
        {
          q: "Which concept is core of data science?",
          options: ["Data + Algorithms", "UI", "Storage", "Networking"],
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

    return(
    <div className = { step === "quiz" ? "quiz-fullscreen" : "quiz-layout"} >
    { step !== "quiz" && <Sidebar />
}

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
              className={`option ${answers[currentQ] === i ? "selected" : ""
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
    </div >
  );
}

export default DataFundamentals;