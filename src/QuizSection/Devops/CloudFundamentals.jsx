import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function CloudFundamentals () {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is DevOps?",
      options: [
        "Development + Operations",
        "Only Development",
        "Only Testing",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is main goal of DevOps?",
      options: [
        "Faster delivery",
        "Better collaboration",
        "Automation",
        "All",
      ],
      answer: 3,
    },
    {
      q: "Which cloud provider is popular?",
      options: ["AWS", "Azure", "Google Cloud", "All"],
      answer: 3,
    },
    {
      q: "Which service runs virtual machines?",
      options: ["EC2", "S3", "Lambda", "IAM"],
      answer: 0,
    },
    {
      q: "Which service stores files?",
      options: ["S3", "EC2", "Lambda", "RDS"],
      answer: 0,
    },
    {
      q: "Which service runs serverless code?",
      options: ["Lambda", "EC2", "S3", "RDS"],
      answer: 0,
    },
    {
      q: "Which tool is used for version control?",
      options: ["Git", "Docker", "Kubernetes", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which tool builds CI/CD pipeline?",
      options: ["Jenkins", "Git", "Docker", "S3"],
      answer: 0,
    },
    {
      q: "Which concept automates deployment?",
      options: ["CI/CD", "Caching", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept manages infrastructure?",
      options: ["IaC", "CI/CD", "Caching", "Scaling"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which tool creates containers?",
      options: ["Docker", "Git", "Jenkins", "AWS"],
      answer: 0,
    },
    {
      q: "Which tool manages containers?",
      options: ["Kubernetes", "Docker", "Git", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which concept runs apps in containers?",
      options: ["Containerization", "Virtualization", "Scaling", "Caching"],
      answer: 0,
    },
    {
      q: "Which concept manages services in cloud?",
      options: ["Orchestration", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which pipeline step builds code?",
      options: ["Build", "Test", "Deploy", "Monitor"],
      answer: 0,
    },
    {
      q: "Which pipeline step tests code?",
      options: ["Test", "Build", "Deploy", "Monitor"],
      answer: 0,
    },
    {
      q: "Which pipeline step deploys app?",
      options: ["Deploy", "Build", "Test", "Monitor"],
      answer: 0,
    },
    {
      q: "Which pipeline step monitors app?",
      options: ["Monitor", "Build", "Test", "Deploy"],
      answer: 0,
    },
    {
      q: "Which concept scales resources?",
      options: ["Auto Scaling", "Caching", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept distributes traffic?",
      options: ["Load Balancer", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which tool defines infrastructure as code?",
      options: ["Terraform", "Git", "Docker", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which AWS service monitors apps?",
      options: ["CloudWatch", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which concept logs system activity?",
      options: ["Logging", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept monitors performance?",
      options: ["Monitoring", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept secures access?",
      options: ["Authentication", "Caching", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept controls permissions?",
      options: ["Authorization", "Authentication", "Encryption", "Caching"],
      answer: 0,
    },
    {
      q: "Which concept encrypts data?",
      options: ["Encryption", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which protocol secures data transfer?",
      options: ["HTTPS", "HTTP", "FTP", "SMTP"],
      answer: 0,
    },
    {
      q: "Which concept stores secrets?",
      options: ["Secrets Manager", "IAM", "S3", "EC2"],
      answer: 0,
    },
    {
      q: "Which concept isolates network?",
      options: ["VPC", "CDN", "Cache", "DNS"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept reduces downtime?",
      options: ["High Availability", "Caching", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles failures?",
      options: ["Fault Tolerance", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Caching", "Scaling", "Clustering", "All"],
      answer: 3,
    },
    {
      q: "Which concept distributes global content?",
      options: ["CDN", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles backups?",
      options: ["Backup", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept recovers systems?",
      options: ["Disaster Recovery", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which architecture uses small services?",
      options: ["Microservices", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which concept uses events?",
      options: ["Event-driven Architecture", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which concept improves deployment speed?",
      options: ["CI/CD", "Caching", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept manages configurations?",
      options: ["Configuration Management", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept improves scalability?",
      options: ["Horizontal Scaling", "Vertical Scaling", "Both", "None"],
      answer: 2,
    },
    {
      q: "Which concept manages distributed systems?",
      options: ["Cluster", "Cache", "Scale", "Encode"],
      answer: 0,
    },
    {
      q: "Which concept improves reliability?",
      options: ["Redundancy", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept reduces cost?",
      options: ["Pay-as-you-go", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept improves automation?",
      options: ["DevOps", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept integrates development and ops?",
      options: ["DevOps", "Testing", "UI", "Database"],
      answer: 0,
    },
    {
      q: "Which concept deploys faster?",
      options: ["Continuous Delivery", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept tests continuously?",
      options: ["Continuous Testing", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept builds continuously?",
      options: ["Continuous Integration", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept monitors continuously?",
      options: ["Continuous Monitoring", "Manual", "Static", "None"],
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
        <h1 className="level-title"> Cloud Fundamentals</h1>

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

export default CloudFundamentals   ;