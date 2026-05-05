import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Corecloud() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is cloud computing?",
      options: [
        "Using local servers",
        "Delivering services over internet",
        "Offline storage",
        "Manual computing",
      ],
      answer: 1,
    },
    {
      q: "Which is a cloud provider?",
      options: ["AWS", "Azure", "Google Cloud", "All"],
      answer: 3,
    },
    {
      q: "Which service provides virtual machines?",
      options: ["IaaS", "PaaS", "SaaS", "None"],
      answer: 0,
    },
    {
      q: "Which service provides platform for development?",
      options: ["IaaS", "PaaS", "SaaS", "None"],
      answer: 1,
    },
    {
      q: "Which service provides software to users?",
      options: ["IaaS", "PaaS", "SaaS", "None"],
      answer: 2,
    },
    {
      q: "Which model allows shared public access?",
      options: ["Public Cloud", "Private Cloud", "Hybrid", "None"],
      answer: 0,
    },
    {
      q: "Which model is internal to organization?",
      options: ["Private Cloud", "Public", "Hybrid", "None"],
      answer: 0,
    },
    {
      q: "Which model combines both?",
      options: ["Hybrid Cloud", "Public", "Private", "None"],
      answer: 0,
    },
    {
      q: "Which cloud stores data?",
      options: ["Storage", "Compute", "Network", "Database"],
      answer: 0,
    },
    {
      q: "Which cloud runs applications?",
      options: ["Compute", "Storage", "Network", "Security"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which concept scales resources automatically?",
      options: ["Auto Scaling", "Caching", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept distributes traffic?",
      options: ["Load Balancer", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept stores frequently used data?",
      options: ["Caching", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept ensures uptime?",
      options: ["High Availability", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept handles failures?",
      options: ["Fault Tolerance", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Caching", "Scaling", "Clustering", "All"],
      answer: 3,
    },
    {
      q: "Which concept reduces latency?",
      options: ["CDN", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept stores backups?",
      options: ["Backup", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept recovers from disaster?",
      options: ["Disaster Recovery", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept manages cost?",
      options: ["Pay-as-you-go", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which concept secures data?",
      options: ["Encryption", "Caching", "Scaling", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept verifies identity?",
      options: ["Authentication", "Authorization", "Encryption", "Caching"],
      answer: 0,
    },
    {
      q: "Which concept controls access?",
      options: ["Authorization", "Authentication", "Encryption", "Caching"],
      answer: 0,
    },
    {
      q: "Which protocol is secure?",
      options: ["HTTPS", "HTTP", "FTP", "SMTP"],
      answer: 0,
    },
    {
      q: "Which concept logs activities?",
      options: ["Logging", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept monitors system?",
      options: ["Monitoring", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept manages keys?",
      options: ["KMS", "IAM", "Storage", "Compute"],
      answer: 0,
    },
    {
      q: "Which concept manages identity?",
      options: ["IAM", "KMS", "Storage", "Compute"],
      answer: 0,
    },
    {
      q: "Which concept protects network?",
      options: ["Firewall", "Caching", "Scaling", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept isolates resources?",
      options: ["VPC", "CDN", "Cache", "DNS"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept handles containers?",
      options: ["Containers", "VMs", "Storage", "Network"],
      answer: 0,
    },
    {
      q: "Which tool creates containers?",
      options: ["Docker", "Git", "Node", "React"],
      answer: 0,
    },
    {
      q: "Which system manages containers?",
      options: ["Kubernetes", "Docker", "Git", "Node"],
      answer: 0,
    },
    {
      q: "Which concept runs code without server?",
      options: ["Serverless", "VM", "Container", "Network"],
      answer: 0,
    },
    {
      q: "Which concept breaks app into small services?",
      options: ["Microservices", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which concept automates deployment?",
      options: ["CI/CD", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept defines infra using code?",
      options: ["IaC", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which tool is IaC?",
      options: ["Terraform", "Git", "Node", "React"],
      answer: 0,
    },
    {
      q: "Which concept handles messaging?",
      options: ["Queue", "Storage", "Compute", "Network"],
      answer: 0,
    },
    {
      q: "Which concept handles DNS?",
      options: ["DNS", "CDN", "Cache", "VPC"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which scaling adds more machines?",
      options: ["Horizontal", "Vertical", "Both", "None"],
      answer: 0,
    },
    {
      q: "Which scaling upgrades machine?",
      options: ["Vertical", "Horizontal", "Both", "None"],
      answer: 0,
    },
    {
      q: "Which concept distributes load globally?",
      options: ["CDN", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept ensures reliability?",
      options: ["Fault Tolerance", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept isolates workloads?",
      options: ["Virtualization", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves flexibility?",
      options: ["Elasticity", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept reduces downtime?",
      options: ["High Availability", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves performance globally?",
      options: ["CDN", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept manages secrets?",
      options: ["Secrets Manager", "IAM", "Storage", "Compute"],
      answer: 0,
    },
    {
      q: "Which concept is core of cloud?",
      options: ["On-demand resources", "Offline", "Manual", "Static"],
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

export default Corecloud;