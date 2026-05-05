import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Pipelines() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is CI?",
      options: [
        "Continuous Integration",
        "Continuous Improvement",
        "Code Integration",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is CD?",
      options: [
        "Continuous Delivery",
        "Continuous Deployment",
        "Both",
        "None",
      ],
      answer: 2,
    },
    {
      q: "What is CI/CD?",
      options: [
        "Automation pipeline",
        "Database",
        "Programming language",
        "OS",
      ],
      answer: 0,
    },
    {
      q: "Which tool is used for CI/CD?",
      options: ["Jenkins", "Docker", "Git", "All"],
      answer: 3,
    },
    {
      q: "Which step builds code?",
      options: ["Build", "Test", "Deploy", "Monitor"],
      answer: 0,
    },
    {
      q: "Which step tests code?",
      options: ["Test", "Build", "Deploy", "Monitor"],
      answer: 0,
    },
    {
      q: "Which step deploys app?",
      options: ["Deploy", "Build", "Test", "Monitor"],
      answer: 0,
    },
    {
      q: "Which step monitors app?",
      options: ["Monitor", "Build", "Test", "Deploy"],
      answer: 0,
    },
    {
      q: "Which concept integrates code frequently?",
      options: ["CI", "CD", "DevOps", "None"],
      answer: 0,
    },
    {
      q: "Which concept delivers code automatically?",
      options: ["CD", "CI", "DevOps", "None"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which tool is used for version control?",
      options: ["Git", "Docker", "Kubernetes", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which tool automates pipeline?",
      options: ["Jenkins", "Git", "Docker", "AWS"],
      answer: 0,
    },
    {
      q: "Which tool builds containers?",
      options: ["Docker", "Git", "Jenkins", "AWS"],
      answer: 0,
    },
    {
      q: "Which tool orchestrates containers?",
      options: ["Kubernetes", "Docker", "Git", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which concept triggers build on commit?",
      options: ["Webhook", "Trigger", "Hook", "All"],
      answer: 3,
    },
    {
      q: "Which concept tests automatically?",
      options: ["Automation Testing", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures code quality?",
      options: ["Code Review", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept manages pipeline stages?",
      options: ["Pipeline", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept stores artifacts?",
      options: ["Artifact Repository", "DB", "File", "UI"],
      answer: 0,
    },
    {
      q: "Which concept deploys automatically?",
      options: ["Continuous Deployment", "Manual", "Static", "None"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which concept delivers code safely?",
      options: ["Continuous Delivery", "Deployment", "Integration", "None"],
      answer: 0,
    },
    {
      q: "Which concept isolates environments?",
      options: ["Environment Separation", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which environment is for testing?",
      options: ["Staging", "Production", "Dev", "None"],
      answer: 0,
    },
    {
      q: "Which environment is live?",
      options: ["Production", "Staging", "Dev", "Test"],
      answer: 0,
    },
    {
      q: "Which concept handles rollback?",
      options: ["Rollback", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept deploys gradually?",
      options: ["Canary Deployment", "Full", "Manual", "None"],
      answer: 0,
    },
    {
      q: "Which concept switches traffic?",
      options: ["Blue-Green Deployment", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept tests features?",
      options: ["Feature Flags", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles config?",
      options: ["Configuration Management", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept secures pipeline?",
      options: ["Secrets Management", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept monitors pipeline?",
      options: ["Monitoring", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept logs pipeline?",
      options: ["Logging", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept ensures reliability?",
      options: ["High Availability", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles failures?",
      options: ["Fault Tolerance", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept improves speed?",
      options: ["Caching", "Scaling", "Clustering", "All"],
      answer: 3,
    },
    {
      q: "Which concept parallelizes builds?",
      options: ["Parallel Execution", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept runs scripts?",
      options: ["Pipeline Script", "Code", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which file defines pipeline?",
      options: ["Jenkinsfile", "Dockerfile", "config.json", "app.js"],
      answer: 0,
    },
    {
      q: "Which concept uses YAML pipelines?",
      options: ["GitHub Actions", "Docker", "Git", "Node"],
      answer: 0,
    },
    {
      q: "Which concept automates workflows?",
      options: ["Automation", "Manual", "Static", "None"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept integrates DevOps practices?",
      options: ["CI/CD", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept improves delivery speed?",
      options: ["Automation", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept reduces errors?",
      options: ["Automation", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures continuous testing?",
      options: ["Continuous Testing", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures continuous monitoring?",
      options: ["Continuous Monitoring", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept improves collaboration?",
      options: ["DevOps", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept deploys frequently?",
      options: ["Continuous Deployment", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept integrates tools?",
      options: ["Pipeline Integration", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept handles microservices deployment?",
      options: ["CI/CD", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures fast feedback?",
      options: ["CI", "Manual", "Static", "None"],
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
        <h1 className="level-title">OS Fundamentals</h1>

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

export default Pipelines;