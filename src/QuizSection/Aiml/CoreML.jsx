import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function CoreML() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
   1: [
    {
      q: "What does ML stand for?",
      options: [
        "Machine Learning",
        "Model Learning",
        "Memory Learning",
        "Machine Logic",
      ],
      answer: 0,
    },
    {
      q: "Which language is most used in ML?",
      options: ["Java", "Python", "C++", "HTML"],
      answer: 1,
    },
    {
      q: "Which library is used for ML in Python?",
      options: ["NumPy", "Pandas", "Scikit-learn", "All"],
      answer: 3,
    },
    {
      q: "Which type of ML uses labeled data?",
      options: ["Unsupervised", "Supervised", "Reinforcement", "None"],
      answer: 1,
    },
    {
      q: "Which type of ML uses unlabeled data?",
      options: ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"],
      answer: 1,
    },
    {
      q: "Which is an example of supervised learning?",
      options: ["Clustering", "Regression", "Grouping", "Segmentation"],
      answer: 1,
    },
    {
      q: "Which is an example of unsupervised learning?",
      options: ["Classification", "Regression", "Clustering", "Prediction"],
      answer: 2,
    },
    {
      q: "Which algorithm is used for classification?",
      options: ["KNN", "K-Means", "PCA", "Apriori"],
      answer: 0,
    },
    {
      q: "Which algorithm is used for clustering?",
      options: ["KNN", "K-Means", "Linear Regression", "Decision Tree"],
      answer: 1,
    },
    {
      q: "Which term means model accuracy?",
      options: ["Precision", "Error", "Loss", "Bias"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which algorithm is used for regression?",
      options: ["KNN", "Linear Regression", "K-Means", "Naive Bayes"],
      answer: 1,
    },
    {
      q: "Which algorithm is based on probability?",
      options: ["Naive Bayes", "KNN", "K-Means", "SVM"],
      answer: 0,
    },
    {
      q: "Which algorithm uses hyperplane?",
      options: ["Decision Tree", "SVM", "KNN", "K-Means"],
      answer: 1,
    },
    {
      q: "Which algorithm is tree-based?",
      options: ["Decision Tree", "SVM", "KNN", "Regression"],
      answer: 0,
    },
    {
      q: "Which technique reduces overfitting?",
      options: ["Regularization", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which metric is used for classification?",
      options: ["Accuracy", "MSE", "RMSE", "MAE"],
      answer: 0,
    },
    {
      q: "Which metric is used for regression?",
      options: ["Accuracy", "Precision", "MSE", "Recall"],
      answer: 2,
    },
    {
      q: "Which term means underfitting?",
      options: ["High bias", "High variance", "Perfect model", "Overfit"],
      answer: 0,
    },
    {
      q: "Which term means overfitting?",
      options: ["High bias", "High variance", "Low error", "Balanced"],
      answer: 1,
    },
    {
      q: "Which technique splits dataset?",
      options: ["Train-Test Split", "Scaling", "Encoding", "Clustering"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which method scales data?",
      options: ["Normalization", "Classification", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which method converts categorical data?",
      options: ["Encoding", "Scaling", "Regression", "Clustering"],
      answer: 0,
    },
    {
      q: "Which library is used for deep learning?",
      options: ["TensorFlow", "NumPy", "Pandas", "Matplotlib"],
      answer: 0,
    },
    {
      q: "Which library is used for visualization?",
      options: ["Matplotlib", "TensorFlow", "Scikit-learn", "Keras"],
      answer: 0,
    },
    {
      q: "Which algorithm uses neighbors?",
      options: ["KNN", "SVM", "Tree", "Regression"],
      answer: 0,
    },
    {
      q: "Which technique improves model performance?",
      options: ["Cross-validation", "Encoding", "Scaling", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept handles missing data?",
      options: ["Imputation", "Scaling", "Encoding", "Normalization"],
      answer: 0,
    },
    {
      q: "Which function activates neurons?",
      options: ["Activation Function", "Loss Function", "Optimizer", "Layer"],
      answer: 0,
    },
    {
      q: "Which algorithm is ensemble method?",
      options: ["Random Forest", "KNN", "SVM", "K-Means"],
      answer: 0,
    },
    {
      q: "Which method reduces dimensionality?",
      options: ["PCA", "KNN", "Regression", "Clustering"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept is bias + variance tradeoff?",
      options: ["Model balance", "Optimization", "Learning rate", "Gradient"],
      answer: 0,
    },
    {
      q: "Which algorithm uses gradient descent?",
      options: ["Regression", "KNN", "K-Means", "Naive Bayes"],
      answer: 0,
    },
    {
      q: "Which loss function is used in regression?",
      options: ["MSE", "Accuracy", "Precision", "Recall"],
      answer: 0,
    },
    {
      q: "Which loss is used in classification?",
      options: ["Cross-Entropy", "MSE", "MAE", "RMSE"],
      answer: 0,
    },
    {
      q: "Which concept adjusts weights?",
      options: ["Backpropagation", "Forward pass", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which algorithm is boosting method?",
      options: ["AdaBoost", "KNN", "SVM", "Regression"],
      answer: 0,
    },
    {
      q: "Which algorithm is bagging method?",
      options: ["Random Forest", "SVM", "KNN", "Regression"],
      answer: 0,
    },
    {
      q: "Which metric balances precision and recall?",
      options: ["F1 Score", "Accuracy", "MSE", "RMSE"],
      answer: 0,
    },
    {
      q: "Which curve evaluates classification?",
      options: ["ROC Curve", "Line Graph", "Bar Chart", "Pie Chart"],
      answer: 0,
    },
    {
      q: "Which technique prevents overfitting?",
      options: ["Dropout", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept is used in neural networks?",
      options: ["Layers", "Nodes", "Weights", "All"],
      answer: 3,
    },
    {
      q: "Which optimizer improves learning?",
      options: ["Adam", "KNN", "Tree", "PCA"],
      answer: 0,
    },
    {
      q: "Which network is used for images?",
      options: ["CNN", "RNN", "MLP", "SVM"],
      answer: 0,
    },
    {
      q: "Which network is used for sequences?",
      options: ["RNN", "CNN", "MLP", "Tree"],
      answer: 0,
    },
    {
      q: "Which model generates text?",
      options: ["Transformer", "KNN", "Tree", "Regression"],
      answer: 0,
    },
    {
      q: "Which concept is transfer learning?",
      options: [
        "Using pre-trained model",
        "Training from scratch",
        "Deleting data",
        "Scaling data",
      ],
      answer: 0,
    },
    {
      q: "Which framework is used for NLP?",
      options: ["Transformers", "NumPy", "Pandas", "Matplotlib"],
      answer: 0,
    },
    {
      q: "Which technique improves generalization?",
      options: ["Regularization", "Clustering", "Encoding", "Scaling"],
      answer: 0,
    },
    {
      q: "Which model handles large language tasks?",
      options: ["LLM", "KNN", "SVM", "Tree"],
      answer: 0,
    },
    {
      q: "Which concept trains model on feedback?",
      options: ["Reinforcement Learning", "Supervised", "Unsupervised", "None"],
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

export default CoreML;