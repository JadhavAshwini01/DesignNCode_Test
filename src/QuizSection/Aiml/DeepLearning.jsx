import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function DeepLearning() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "What is Deep Learning?",
        options: [
          "Subset of Machine Learning",
          "Database system",
          "Programming language",
          "Operating system",
        ],
        answer: 0,
      },
      {
        q: "Deep Learning is based on?",
        options: ["Neural Networks", "Trees", "Graphs", "Arrays"],
        answer: 0,
      },
      {
        q: "Basic unit of neural network?",
        options: ["Node", "Layer", "Edge", "Weight"],
        answer: 0,
      },
      {
        q: "Which layer receives input?",
        options: ["Input layer", "Hidden layer", "Output layer", "Final layer"],
        answer: 0,
      },
      {
        q: "Which layer gives output?",
        options: ["Input", "Hidden", "Output", "Middle"],
        answer: 2,
      },
      {
        q: "Which function activates neuron?",
        options: ["Activation Function", "Loss Function", "Optimizer", "Layer"],
        answer: 0,
      },
      {
        q: "Which library is used for deep learning?",
        options: ["TensorFlow", "NumPy", "Pandas", "HTML"],
        answer: 0,
      },
      {
        q: "Which library is high-level DL API?",
        options: ["Keras", "NumPy", "Pandas", "Matplotlib"],
        answer: 0,
      },
      {
        q: "Which network is used for images?",
        options: ["CNN", "RNN", "SVM", "KNN"],
        answer: 0,
      },
      {
        q: "Which network is used for sequences?",
        options: ["RNN", "CNN", "Tree", "KNN"],
        answer: 0,
      },
    ],

    2: [
      {
        q: "Which function introduces non-linearity?",
        options: ["Activation", "Loss", "Optimizer", "Layer"],
        answer: 0,
      },
      {
        q: "Which activation is most common?",
        options: ["ReLU", "Sigmoid", "Tanh", "Softmax"],
        answer: 0,
      },
      {
        q: "Which activation is used in output layer for classification?",
        options: ["ReLU", "Softmax", "Tanh", "Linear"],
        answer: 1,
      },
      {
        q: "Which loss is used in classification?",
        options: ["Cross-Entropy", "MSE", "MAE", "RMSE"],
        answer: 0,
      },
      {
        q: "Which loss is used in regression?",
        options: ["MSE", "Cross-Entropy", "Accuracy", "Precision"],
        answer: 0,
      },
      {
        q: "Which process updates weights?",
        options: ["Backpropagation", "Forward pass", "Scaling", "Encoding"],
        answer: 0,
      },
      {
        q: "Which algorithm optimizes weights?",
        options: ["Gradient Descent", "KNN", "Tree", "Clustering"],
        answer: 0,
      },
      {
        q: "Which term means learning speed?",
        options: ["Learning rate", "Epoch", "Batch", "Loss"],
        answer: 0,
      },
      {
        q: "Which term means one full cycle of training?",
        options: ["Epoch", "Batch", "Iteration", "Cycle"],
        answer: 0,
      },
      {
        q: "Which term is subset of data?",
        options: ["Batch", "Epoch", "Loss", "Layer"],
        answer: 0,
      },
    ],

    3: [
      {
        q: "Which network handles image features?",
        options: ["CNN", "RNN", "MLP", "SVM"],
        answer: 0,
      },
      {
        q: "Which network handles time series?",
        options: ["RNN", "CNN", "Tree", "Regression"],
        answer: 0,
      },
      {
        q: "Which RNN variant solves vanishing gradient?",
        options: ["LSTM", "CNN", "MLP", "Tree"],
        answer: 0,
      },
      {
        q: "Which unit is used in LSTM?",
        options: ["Cell", "Layer", "Node", "Edge"],
        answer: 0,
      },
      {
        q: "Which technique prevents overfitting?",
        options: ["Dropout", "Clustering", "Scaling", "Encoding"],
        answer: 0,
      },
      {
        q: "Which method normalizes data inside network?",
        options: ["BatchNorm", "Scaling", "Encoding", "Clustering"],
        answer: 0,
      },
      {
        q: "Which network is fully connected?",
        options: ["MLP", "CNN", "RNN", "Tree"],
        answer: 0,
      },
      {
        q: "Which term means forward data pass?",
        options: ["Forward Propagation", "Backpropagation", "Training", "Testing"],
        answer: 0,
      },
      {
        q: "Which technique reduces dimensions?",
        options: ["Autoencoder", "KNN", "Tree", "Regression"],
        answer: 0,
      },
      {
        q: "Which network generates data?",
        options: ["GAN", "CNN", "RNN", "SVM"],
        answer: 0,
      },
    ],

    4: [
      {
        q: "Which network uses attention mechanism?",
        options: ["Transformer", "CNN", "RNN", "MLP"],
        answer: 0,
      },
      {
        q: "Which model is used in NLP tasks?",
        options: ["Transformer", "CNN", "Tree", "KNN"],
        answer: 0,
      },
      {
        q: "Which concept is vanishing gradient?",
        options: [
          "Gradients become very small",
          "Data loss",
          "Model crash",
          "Overfitting",
        ],
        answer: 0,
      },
      {
        q: "Which concept is exploding gradient?",
        options: [
          "Gradients become very large",
          "Loss decreases",
          "Accuracy increases",
          "Model stops",
        ],
        answer: 0,
      },
      {
        q: "Which optimizer is widely used?",
        options: ["Adam", "KNN", "Tree", "PCA"],
        answer: 0,
      },
      {
        q: "Which technique clips gradients?",
        options: ["Gradient Clipping", "Scaling", "Encoding", "Dropout"],
        answer: 0,
      },
      {
        q: "Which method improves training stability?",
        options: ["Batch Normalization", "Clustering", "Encoding", "Scaling"],
        answer: 0,
      },
      {
        q: "Which layer extracts features in CNN?",
        options: ["Convolution", "Pooling", "Dense", "Output"],
        answer: 0,
      },
      {
        q: "Which layer reduces size?",
        options: ["Pooling", "Dense", "Input", "Output"],
        answer: 0,
      },
      {
        q: "Which concept handles sequence attention?",
        options: ["Self-Attention", "Clustering", "Scaling", "Encoding"],
        answer: 0,
      },
    ],

    5: [
      {
        q: "Which model powers modern AI like ChatGPT?",
        options: ["Transformer", "CNN", "RNN", "KNN"],
        answer: 0,
      },
      {
        q: "Which architecture is used in GPT?",
        options: ["Transformer", "CNN", "Tree", "SVM"],
        answer: 0,
      },
      {
        q: "Which concept is pre-training + fine-tuning?",
        options: ["Transfer Learning", "Clustering", "Scaling", "Encoding"],
        answer: 0,
      },
      {
        q: "Which model generates realistic images?",
        options: ["GAN", "CNN", "RNN", "MLP"],
        answer: 0,
      },
      {
        q: "Which network processes sequential text?",
        options: ["Transformer", "CNN", "Tree", "KNN"],
        answer: 0,
      },
      {
        q: "Which technique improves generalization?",
        options: ["Regularization", "Clustering", "Encoding", "Scaling"],
        answer: 0,
      },
      {
        q: "Which framework is used for DL?",
        options: ["TensorFlow", "Spring", "React", "Node"],
        answer: 0,
      },
      {
        q: "Which API simplifies DL coding?",
        options: ["Keras", "NumPy", "Pandas", "Matplotlib"],
        answer: 0,
      },
      {
        q: "Which concept trains model on rewards?",
        options: ["Reinforcement Learning", "Supervised", "Unsupervised", "None"],
        answer: 0,
      },
      {
        q: "Which model handles multimodal AI?",
        options: ["Transformer", "Tree", "KNN", "Regression"],
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
    </div>
  );
}

export default DeepLearning;