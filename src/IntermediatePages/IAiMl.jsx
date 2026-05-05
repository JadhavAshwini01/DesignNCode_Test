import { useState, useEffect } from "react";
//import "./IFrontend.css";
import { useNavigate } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";


function IAiMl() {
  const navigate = useNavigate();
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  // ✅ 30 Questions (example, you can expand)

  const aimlQuestions = [
    {
      q: "What is Machine Learning?",
      options: [
        "Programming without data",
        "Learning from data",
        "Database system",
        "Operating system",
      ],
      answer: 1,
    },
    {
      q: "Which library is used for ML in Python?",
      options: ["NumPy", "Scikit-learn", "React", "HTML"],
      answer: 1,
    },
    // 👉 Add up to 30 questions here
  ];

  const questions = aimlQuestions;
  const q = questions[currentQ];


  /* ===== SUBMIT ===== */
  const submitQuiz = () => {
    let score = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    if (score >= 18) {
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
    <div className="quiz-with-panel">

      {/* LEFT SIDE */}
      <div className="quiz-left">

        {/* BACK */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1 className="quiz-heading">
          Intermediate AI & Machine Learning Quiz
        </h1>

        <h2 className="question">{q?.q}</h2>

        <div className="options">
          {q?.options.map((opt, i) => (
            <div
              key={i}
              className={`option-card ${answers[currentQ] === i ? "selected" : ""
                }`}
              onClick={() =>
                setAnswers({ ...answers, [currentQ]: i })
              }
            >
              {opt}
            </div>
          ))}
        </div>

        <div className="next-wrapper">
          <button
            className="next-btn"
            onClick={() => {
              if (currentQ < questions.length - 1) {
                setCurrentQ(currentQ + 1);
              }
            }}
          >
            Next
          </button>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">

        <h3 className="panel-title">Questions</h3>

        <div className="question-grid">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`q-box 
            ${i === currentQ ? "active" : ""}
            ${answers[i] !== undefined ? "answered" : ""}
          `}
              onClick={() => setCurrentQ(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default IAiMl;