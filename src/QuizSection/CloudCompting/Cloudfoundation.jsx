import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Cloudfoundation() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
const javaQuestions = {
  1: [
    {
      q: "What is Cloud Computing?",
      options: [
        "Storing data on local system",
        "Using internet-based computing services",
        "Running only offline apps",
        "None",
      ],
      answer: 1,
    },
    {
      q: "Which company provides cloud services?",
      options: ["AWS", "Google Cloud", "Azure", "All"],
      answer: 3,
    },
    {
      q: "Which service model provides infrastructure?",
      options: ["IaaS", "PaaS", "SaaS", "None"],
      answer: 0,
    },
    {
      q: "Which service model provides platform?",
      options: ["IaaS", "PaaS", "SaaS", "None"],
      answer: 1,
    },
    {
      q: "Which service model provides software?",
      options: ["IaaS", "PaaS", "SaaS", "None"],
      answer: 2,
    },
    {
      q: "Which cloud stores files?",
      options: ["S3", "EC2", "Lambda", "RDS"],
      answer: 0,
    },
    {
      q: "Which service runs virtual machines?",
      options: ["EC2", "S3", "Lambda", "CloudFront"],
      answer: 0,
    },
    {
      q: "Which service runs serverless code?",
      options: ["Lambda", "EC2", "S3", "RDS"],
      answer: 0,
    },
    {
      q: "Which service manages database?",
      options: ["RDS", "EC2", "S3", "IAM"],
      answer: 0,
    },
    {
      q: "Which model uses internet access?",
      options: ["Cloud", "Local", "Offline", "Manual"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which deployment model is public?",
      options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "None"],
      answer: 0,
    },
    {
      q: "Which deployment model is internal?",
      options: ["Private Cloud", "Public Cloud", "Hybrid", "None"],
      answer: 0,
    },
    {
      q: "Which deployment model mixes both?",
      options: ["Hybrid Cloud", "Public", "Private", "None"],
      answer: 0,
    },
    {
      q: "Which cloud provides CDN?",
      options: ["CloudFront", "EC2", "S3", "IAM"],
      answer: 0,
    },
    {
      q: "Which service controls access?",
      options: ["IAM", "S3", "EC2", "RDS"],
      answer: 0,
    },
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
      q: "Which concept stores data temporarily?",
      options: ["Caching", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept ensures availability?",
      options: ["High Availability", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves fault tolerance?",
      options: ["Redundancy", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which service monitors resources?",
      options: ["CloudWatch", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which service handles logs?",
      options: ["CloudWatch", "S3", "EC2", "RDS"],
      answer: 0,
    },
    {
      q: "Which service queues messages?",
      options: ["SQS", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which service sends notifications?",
      options: ["SNS", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which service handles DNS?",
      options: ["Route 53", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which concept secures data?",
      options: ["Encryption", "Caching", "Scaling", "Clustering"],
      answer: 0,
    },
    {
      q: "Which protocol secures communication?",
      options: ["HTTPS", "HTTP", "FTP", "SMTP"],
      answer: 0,
    },
    {
      q: "Which concept manages keys?",
      options: ["KMS", "IAM", "S3", "EC2"],
      answer: 0,
    },
    {
      q: "Which concept manages identity?",
      options: ["IAM", "S3", "EC2", "RDS"],
      answer: 0,
    },
    {
      q: "Which concept ensures secure access?",
      options: ["Authentication", "Caching", "Scaling", "Clustering"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept reduces latency?",
      options: ["CDN", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Caching", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept manages containers?",
      options: ["Kubernetes", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which tool creates containers?",
      options: ["Docker", "Git", "VS Code", "Postman"],
      answer: 0,
    },
    {
      q: "Which concept handles microservices?",
      options: ["Microservices Architecture", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which concept uses serverless computing?",
      options: ["Lambda", "EC2", "S3", "RDS"],
      answer: 0,
    },
    {
      q: "Which concept improves deployment?",
      options: ["CI/CD", "Caching", "Scaling", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept manages infrastructure as code?",
      options: ["IaC", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which tool is used for IaC?",
      options: ["Terraform", "Git", "Node", "React"],
      answer: 0,
    },
    {
      q: "Which concept handles version control?",
      options: ["Git", "Docker", "AWS", "Cloud"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept reduces cost in cloud?",
      options: ["Pay-as-you-go", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept ensures disaster recovery?",
      options: ["Backup", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves reliability?",
      options: ["Fault Tolerance", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves global access?",
      options: ["CDN", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept manages secrets?",
      options: ["Secrets Manager", "IAM", "S3", "EC2"],
      answer: 0,
    },
    {
      q: "Which concept handles event-driven apps?",
      options: ["Event-driven Architecture", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which concept improves scalability?",
      options: ["Horizontal Scaling", "Vertical Scaling", "Both", "None"],
      answer: 2,
    },
    {
      q: "Which concept manages workloads efficiently?",
      options: ["Load Balancing", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves monitoring?",
      options: ["Logging", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept improves security?",
      options: ["Zero Trust", "Caching", "Scaling", "Clustering"],
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

export default Cloudfoundation;