import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Apicloud() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is an API?",
      options: [
        "Application Programming Interface",
        "App Program Internet",
        "Application Process Integration",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which method is used to fetch data from API?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: 0,
    },
    {
      q: "Which method is used to send data?",
      options: ["GET", "POST", "FETCH", "READ"],
      answer: 1,
    },
    {
      q: "Which format is commonly used in APIs?",
      options: ["XML", "JSON", "HTML", "CSS"],
      answer: 1,
    },
    {
      q: "Which status code means success?",
      options: ["200", "404", "500", "301"],
      answer: 0,
    },
    {
      q: "Which status code means not found?",
      options: ["200", "404", "500", "201"],
      answer: 1,
    },
    {
      q: "Which JavaScript function calls API?",
      options: ["fetch()", "call()", "get()", "request()"],
      answer: 0,
    },
    {
      q: "Which cloud service stores files?",
      options: ["AWS S3", "EC2", "Lambda", "RDS"],
      answer: 0,
    },
    {
      q: "Which cloud service runs servers?",
      options: ["S3", "EC2", "CloudFront", "IAM"],
      answer: 1,
    },
    {
      q: "Which cloud model is most common?",
      options: ["IaaS", "PaaS", "SaaS", "All"],
      answer: 3,
    },
  ],

  2: [
    {
      q: "Which HTTP method updates data?",
      options: ["PUT", "GET", "DELETE", "READ"],
      answer: 0,
    },
    {
      q: "Which HTTP method deletes data?",
      options: ["DELETE", "PUT", "POST", "GET"],
      answer: 0,
    },
    {
      q: "Which tool tests APIs?",
      options: ["Postman", "VS Code", "Chrome", "Git"],
      answer: 0,
    },
    {
      q: "Which header sends auth token?",
      options: ["Authorization", "Content-Type", "Accept", "Token"],
      answer: 0,
    },
    {
      q: "Which API type uses REST?",
      options: ["REST API", "SOAP", "GraphQL", "All"],
      answer: 3,
    },
    {
      q: "Which cloud service manages database?",
      options: ["RDS", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which service runs serverless functions?",
      options: ["Lambda", "EC2", "S3", "CloudWatch"],
      answer: 0,
    },
    {
      q: "Which cloud provides CDN?",
      options: ["CloudFront", "EC2", "RDS", "IAM"],
      answer: 0,
    },
    {
      q: "Which protocol is used in API?",
      options: ["HTTP", "FTP", "SMTP", "TCP"],
      answer: 0,
    },
    {
      q: "Which API returns only required fields?",
      options: ["GraphQL", "REST", "SOAP", "XML"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which method sends partial update?",
      options: ["PATCH", "PUT", "POST", "GET"],
      answer: 0,
    },
    {
      q: "Which API style uses strict schema?",
      options: ["SOAP", "REST", "GraphQL", "JSON"],
      answer: 0,
    },
    {
      q: "Which concept secures APIs?",
      options: ["Authentication", "Clustering", "Scaling", "Caching"],
      answer: 0,
    },
    {
      q: "Which protocol secures HTTP?",
      options: ["HTTPS", "FTP", "SMTP", "TCP"],
      answer: 0,
    },
    {
      q: "Which token is used for auth?",
      options: ["JWT", "HTML", "CSS", "XML"],
      answer: 0,
    },
    {
      q: "Which cloud service monitors apps?",
      options: ["CloudWatch", "S3", "EC2", "RDS"],
      answer: 0,
    },
    {
      q: "Which API improves performance?",
      options: ["Caching", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which cloud model manages platform?",
      options: ["PaaS", "IaaS", "SaaS", "None"],
      answer: 0,
    },
    {
      q: "Which service handles user access?",
      options: ["IAM", "S3", "EC2", "RDS"],
      answer: 0,
    },
    {
      q: "Which API sends data in request body?",
      options: ["POST", "GET", "DELETE", "HEAD"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept limits API usage?",
      options: ["Rate Limiting", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept stores API response?",
      options: ["Caching", "Scaling", "Encoding", "Auth"],
      answer: 0,
    },
    {
      q: "Which cloud auto scales resources?",
      options: ["Auto Scaling", "EC2", "S3", "IAM"],
      answer: 0,
    },
    {
      q: "Which architecture uses small services?",
      options: ["Microservices", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which API gateway manages APIs?",
      options: ["API Gateway", "EC2", "S3", "IAM"],
      answer: 0,
    },
    {
      q: "Which service queues messages?",
      options: ["SQS", "S3", "EC2", "RDS"],
      answer: 0,
    },
    {
      q: "Which service handles notifications?",
      options: ["SNS", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which concept distributes traffic?",
      options: ["Load Balancer", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which API versioning avoids breaking changes?",
      options: ["Versioning", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which method checks API status?",
      options: ["Health Check", "Ping", "Status", "Check"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept ensures API security?",
      options: ["OAuth", "Clustering", "Scaling", "Caching"],
      answer: 0,
    },
    {
      q: "Which architecture is event-driven?",
      options: ["Serverless", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which cloud handles containers?",
      options: ["Kubernetes", "S3", "RDS", "IAM"],
      answer: 0,
    },
    {
      q: "Which tool manages containers?",
      options: ["Docker", "Git", "VS Code", "Postman"],
      answer: 0,
    },
    {
      q: "Which service deploys ML models?",
      options: ["SageMaker", "S3", "EC2", "IAM"],
      answer: 0,
    },
    {
      q: "Which concept improves fault tolerance?",
      options: ["Redundancy", "Scaling", "Caching", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept ensures availability?",
      options: ["High Availability", "Caching", "Scaling", "Auth"],
      answer: 0,
    },
    {
      q: "Which concept distributes global traffic?",
      options: ["CDN", "Scaling", "Auth", "Cache"],
      answer: 0,
    },
    {
      q: "Which cloud model provides software?",
      options: ["SaaS", "PaaS", "IaaS", "None"],
      answer: 0,
    },
    {
      q: "Which concept manages infrastructure as code?",
      options: ["IaC", "Scaling", "Caching", "Auth"],
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

export default Apicloud;