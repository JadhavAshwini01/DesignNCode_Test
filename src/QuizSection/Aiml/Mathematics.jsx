import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Mathematics() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "Which branch of math is most used in ML?",
      options: ["Linear Algebra", "Geometry", "Trigonometry", "Arithmetic"],
      answer: 0,
    },
    {
      q: "What is a matrix?",
      options: [
        "Single number",
        "Table of numbers",
        "Line of numbers",
        "Function",
      ],
      answer: 1,
    },
    {
      q: "What is a vector?",
      options: ["Scalar", "Array of values", "Matrix", "Graph"],
      answer: 1,
    },
    {
      q: "What is a scalar?",
      options: ["Array", "Single value", "Matrix", "Vector"],
      answer: 1,
    },
    {
      q: "Which math is used in optimization?",
      options: ["Calculus", "Geometry", "Algebra", "Logic"],
      answer: 0,
    },
    {
      q: "Which concept measures slope?",
      options: ["Derivative", "Integral", "Mean", "Variance"],
      answer: 0,
    },
    {
      q: "Which concept measures uncertainty?",
      options: ["Probability", "Algebra", "Geometry", "Calculus"],
      answer: 0,
    },
    {
      q: "Which measure represents average?",
      options: ["Mean", "Variance", "Mode", "Range"],
      answer: 0,
    },
    {
      q: "Which measure shows spread?",
      options: ["Mean", "Variance", "Mode", "Median"],
      answer: 1,
    },
    {
      q: "Which operation flips matrix rows/columns?",
      options: ["Transpose", "Inverse", "Add", "Multiply"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which measure is square root of variance?",
      options: ["Mean", "Std Dev", "Median", "Range"],
      answer: 1,
    },
    {
      q: "Which concept is used in regression?",
      options: ["Optimization", "Clustering", "Sorting", "Searching"],
      answer: 0,
    },
    {
      q: "Which algorithm minimizes loss?",
      options: ["Gradient Descent", "KNN", "Tree", "Clustering"],
      answer: 0,
    },
    {
      q: "Which matrix operation finds reverse?",
      options: ["Inverse", "Transpose", "Add", "Multiply"],
      answer: 0,
    },
    {
      q: "Which concept calculates distance?",
      options: ["Euclidean Distance", "Mean", "Variance", "Mode"],
      answer: 0,
    },
    {
      q: "Which distribution is bell-shaped?",
      options: ["Normal Distribution", "Uniform", "Poisson", "Random"],
      answer: 0,
    },
    {
      q: "Which theorem is used in probability?",
      options: ["Bayes Theorem", "Pythagoras", "Newton", "Gauss"],
      answer: 0,
    },
    {
      q: "Which function is minimized in ML?",
      options: ["Loss Function", "Activation", "Layer", "Optimizer"],
      answer: 0,
    },
    {
      q: "Which concept handles likelihood?",
      options: ["Probability", "Geometry", "Algebra", "Matrix"],
      answer: 0,
    },
    {
      q: "Which concept splits dataset?",
      options: ["Train-Test Split", "Clustering", "Encoding", "Scaling"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which operation gives vector length?",
      options: ["Norm", "Dot Product", "Cross Product", "Sum"],
      answer: 0,
    },
    {
      q: "Which product gives scalar output?",
      options: ["Dot Product", "Cross Product", "Matrix", "Tensor"],
      answer: 0,
    },
    {
      q: "Which product is element-wise?",
      options: ["Hadamard", "Dot", "Cross", "Matrix"],
      answer: 0,
    },
    {
      q: "Which method reduces dimensions?",
      options: ["PCA", "KNN", "Tree", "Regression"],
      answer: 0,
    },
    {
      q: "Which concept finds eigenvalues?",
      options: ["Eigen Decomposition", "Regression", "Clustering", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept is used in covariance?",
      options: ["Statistics", "Algebra", "Geometry", "Logic"],
      answer: 0,
    },
    {
      q: "Which matrix is identity?",
      options: ["Diagonal 1 matrix", "Zero matrix", "Random matrix", "Inverse"],
      answer: 0,
    },
    {
      q: "Which concept is used in PCA?",
      options: ["Eigenvectors", "Mean", "Mode", "Range"],
      answer: 0,
    },
    {
      q: "Which math handles distributions?",
      options: ["Statistics", "Geometry", "Algebra", "Logic"],
      answer: 0,
    },
    {
      q: "Which concept finds correlation?",
      options: ["Covariance", "Mean", "Mode", "Range"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept is bias-variance tradeoff?",
      options: ["Model balance", "Optimization", "Gradient", "Loss"],
      answer: 0,
    },
    {
      q: "Which method finds optimal parameters?",
      options: ["Optimization", "Clustering", "Sorting", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept is partial derivative?",
      options: ["Multi-variable calculus", "Algebra", "Geometry", "Logic"],
      answer: 0,
    },
    {
      q: "Which concept is chain rule used for?",
      options: ["Backpropagation", "Clustering", "Sorting", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept uses gradients?",
      options: ["Gradient Descent", "KNN", "Tree", "SVM"],
      answer: 0,
    },
    {
      q: "Which concept normalizes data?",
      options: ["Normalization", "Clustering", "Encoding", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept standardizes data?",
      options: ["Standardization", "Clustering", "Encoding", "Sorting"],
      answer: 0,
    },
    {
      q: "Which concept reduces overfitting?",
      options: ["Regularization", "Clustering", "Sorting", "Encoding"],
      answer: 0,
    },
    {
      q: "Which norm is L2?",
      options: ["Euclidean", "Manhattan", "Infinity", "None"],
      answer: 0,
    },
    {
      q: "Which norm is L1?",
      options: ["Manhattan", "Euclidean", "Infinity", "None"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept is convex function?",
      options: [
        "Single global minimum",
        "Multiple minima",
        "No minima",
        "Infinite",
      ],
      answer: 0,
    },
    {
      q: "Which optimization avoids local minima?",
      options: ["Global Optimization", "Clustering", "Sorting", "Encoding"],
      answer: 0,
    },
    {
      q: "Which method approximates derivatives?",
      options: ["Numerical Methods", "Clustering", "Sorting", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept is gradient vector?",
      options: [
        "Direction of steepest ascent",
        "Loss value",
        "Data",
        "Matrix",
      ],
      answer: 0,
    },
    {
      q: "Which theorem is used in ML classification?",
      options: ["Bayes Theorem", "Newton Law", "Pythagoras", "Gauss"],
      answer: 0,
    },
    {
      q: "Which concept is entropy?",
      options: [
        "Measure of randomness",
        "Mean",
        "Variance",
        "Distance",
      ],
      answer: 0,
    },
    {
      q: "Which concept is cross-entropy?",
      options: [
        "Loss function",
        "Activation",
        "Layer",
        "Optimizer",
      ],
      answer: 0,
    },
    {
      q: "Which concept is KL divergence?",
      options: [
        "Difference between distributions",
        "Mean",
        "Variance",
        "Distance",
      ],
      answer: 0,
    },
    {
      q: "Which concept is singular value decomposition?",
      options: ["Matrix factorization", "Clustering", "Sorting", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept is Hessian matrix?",
      options: [
        "Second-order derivatives",
        "First derivative",
        "Matrix",
        "Vector",
      ],
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

export default Mathematics;