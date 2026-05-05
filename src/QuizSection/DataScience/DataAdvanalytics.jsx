import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function DataAdvanalytics() {
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
        "Study of data",
        "Data analysis and insights",
        "Data storage",
        "None",
      ],
      answer: 1,
    },
    {
      q: "Which library is used for data analysis?",
      options: ["Pandas", "NumPy", "Matplotlib", "All"],
      answer: 3,
    },
    {
      q: "Which library is used for visualization?",
      options: ["Matplotlib", "Pandas", "NumPy", "Scikit"],
      answer: 0,
    },
    {
      q: "Which process cleans data?",
      options: ["Data Cleaning", "Clustering", "Encoding", "Scaling"],
      answer: 0,
    },
    {
      q: "Which step splits data?",
      options: ["Train-Test Split", "Clustering", "Encoding", "Scaling"],
      answer: 0,
    },
    {
      q: "Which type predicts values?",
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
      q: "Which concept handles missing data?",
      options: ["Imputation", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which measure shows average?",
      options: ["Mean", "Variance", "Mode", "Range"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which measure shows spread?",
      options: ["Variance", "Mean", "Mode", "Median"],
      answer: 0,
    },
    {
      q: "Which method removes outliers?",
      options: ["Z-score", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which chart shows distribution?",
      options: ["Histogram", "Line", "Bar", "Pie"],
      answer: 0,
    },
    {
      q: "Which chart shows relationship?",
      options: ["Scatter", "Bar", "Pie", "Histogram"],
      answer: 0,
    },
    {
      q: "Which technique scales data?",
      options: ["Normalization", "Encoding", "Clustering", "Regression"],
      answer: 0,
    },
    {
      q: "Which technique encodes categorical data?",
      options: ["Encoding", "Scaling", "Clustering", "Regression"],
      answer: 0,
    },
    {
      q: "Which algorithm is for clustering?",
      options: ["KMeans", "Regression", "Tree", "SVM"],
      answer: 0,
    },
    {
      q: "Which algorithm is for classification?",
      options: ["LogisticRegression", "KMeans", "PCA", "Clustering"],
      answer: 0,
    },
    {
      q: "Which method reduces dimensions?",
      options: ["PCA", "KNN", "Tree", "Regression"],
      answer: 0,
    },
    {
      q: "Which metric checks classification?",
      options: ["Accuracy", "MSE", "RMSE", "MAE"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which metric checks regression?",
      options: ["MSE", "Accuracy", "Precision", "Recall"],
      answer: 0,
    },
    {
      q: "Which method avoids overfitting?",
      options: ["Regularization", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which method improves model validation?",
      options: ["Cross-validation", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which technique selects features?",
      options: ["Feature Selection", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which technique creates new features?",
      options: ["Feature Engineering", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which model is ensemble?",
      options: ["Random Forest", "KNN", "SVM", "Regression"],
      answer: 0,
    },
    {
      q: "Which boosting method?",
      options: ["XGBoost", "KNN", "SVM", "Tree"],
      answer: 0,
    },
    {
      q: "Which method balances data?",
      options: ["SMOTE", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept evaluates model?",
      options: ["Validation", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which technique handles time data?",
      options: ["Time Series", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which model predicts sequences?",
      options: ["ARIMA", "KNN", "SVM", "Tree"],
      answer: 0,
    },
    {
      q: "Which concept detects anomalies?",
      options: ["Anomaly Detection", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which method finds patterns?",
      options: ["Association Rules", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept visualizes data insights?",
      options: ["EDA", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which method handles big data?",
      options: ["Spark", "NumPy", "Pandas", "Matplotlib"],
      answer: 0,
    },
    {
      q: "Which concept stores data warehouse?",
      options: ["Data Warehouse", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept streams data?",
      options: ["Streaming", "Batch", "Static", "Manual"],
      answer: 0,
    },
    {
      q: "Which tool visualizes dashboards?",
      options: ["Tableau", "NumPy", "Pandas", "Matplotlib"],
      answer: 0,
    },
    {
      q: "Which tool handles pipelines?",
      options: ["Airflow", "NumPy", "Pandas", "Matplotlib"],
      answer: 0,
    },
    {
      q: "Which concept automates ML?",
      options: ["AutoML", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept deploys models?",
      options: ["MLOps", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept monitors models?",
      options: ["Model Monitoring", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles pipelines?",
      options: ["Data Pipeline", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept ensures reproducibility?",
      options: ["Version Control", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept manages experiments?",
      options: ["MLflow", "NumPy", "Pandas", "Matplotlib"],
      answer: 0,
    },
    {
      q: "Which concept improves scalability?",
      options: ["Distributed Computing", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept handles real-time analytics?",
      options: ["Streaming Analytics", "Batch", "Static", "Manual"],
      answer: 0,
    },
    {
      q: "Which concept improves decision making?",
      options: ["Predictive Analytics", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept finds trends?",
      options: ["Analytics", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept is advanced analytics?",
      options: ["ML + Statistics", "Storage", "UI", "Networking"],
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

export default DataAdvanalytics;