import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function BackendFund() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
      1: [
        {
          q: "What is backend development?",
          options: [
            "UI design",
            "Server-side logic",
            "Frontend styling",
            "None",
          ],
          answer: 1,
        },
        {
          q: "Which language is used for backend?",
          options: ["Java", "Python", "Node.js", "All"],
          answer: 3,
        },
        {
          q: "Which framework is backend?",
          options: ["Spring Boot", "React", "HTML", "CSS"],
          answer: 0,
        },
        {
          q: "Which server handles requests?",
          options: ["Backend Server", "Browser", "UI", "None"],
          answer: 0,
        },
        {
          q: "Which protocol is used in backend?",
          options: ["HTTP", "FTP", "SMTP", "All"],
          answer: 3,
        },
        {
          q: "Which method gets data?",
          options: ["GET", "POST", "PUT", "DELETE"],
          answer: 0,
        },
        {
          q: "Which method sends data?",
          options: ["POST", "GET", "READ", "FETCH"],
          answer: 0,
        },
        {
          q: "Which method updates data?",
          options: ["PUT", "GET", "POST", "DELETE"],
          answer: 0,
        },
        {
          q: "Which method deletes data?",
          options: ["DELETE", "PUT", "GET", "POST"],
          answer: 0,
        },
        {
          q: "Which format is used for APIs?",
          options: ["JSON", "XML", "HTML", "CSS"],
          answer: 0,
        },
      ],

      2: [
        {
          q: "What is API?",
          options: [
            "Application Programming Interface",
            "App Program Internet",
            "Application Process Integration",
            "None",
          ],
          answer: 0,
        },
        {
          q: "Which API type is common?",
          options: ["REST", "SOAP", "GraphQL", "All"],
          answer: 3,
        },
        {
          q: "Which status code means success?",
          options: ["200", "404", "500", "301"],
          answer: 0,
        },
        {
          q: "Which status code means not found?",
          options: ["404", "200", "500", "201"],
          answer: 0,
        },
        {
          q: "Which status code means server error?",
          options: ["500", "200", "404", "301"],
          answer: 0,
        },
        {
          q: "Which tool tests APIs?",
          options: ["Postman", "Git", "Docker", "Node"],
          answer: 0,
        },
        {
          q: "Which header sends data type?",
          options: ["Content-Type", "Authorization", "Accept", "Token"],
          answer: 0,
        },
        {
          q: "Which header sends token?",
          options: ["Authorization", "Content-Type", "Accept", "Data"],
          answer: 0,
        },
        {
          q: "Which concept secures API?",
          options: ["Authentication", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept controls access?",
          options: ["Authorization", "Authentication", "Caching", "Encoding"],
          answer: 0,
        },
      ],

      3: [
        {
          q: "Which concept stores data?",
          options: ["Database", "API", "UI", "Server"],
          answer: 0,
        },
        {
          q: "Which DB is relational?",
          options: ["MySQL", "MongoDB", "Firebase", "Redis"],
          answer: 0,
        },
        {
          q: "Which DB is NoSQL?",
          options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"],
          answer: 0,
        },
        {
          q: "Which concept maps objects to DB?",
          options: ["ORM", "API", "UI", "Server"],
          answer: 0,
        },
        {
          q: "Which concept connects backend to DB?",
          options: ["JDBC", "API", "UI", "Server"],
          answer: 0,
        },
        {
          q: "Which concept handles errors?",
          options: ["Exception Handling", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept improves performance?",
          options: ["Caching", "Scaling", "Clustering", "All"],
          answer: 3,
        },
        {
          q: "Which concept handles sessions?",
          options: ["Session Management", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept manages cookies?",
          options: ["Cookies", "Session", "Cache", "DB"],
          answer: 0,
        },
        {
          q: "Which concept handles async calls?",
          options: ["Async Programming", "Sync", "Static", "None"],
          answer: 0,
        },
      ],

      4: [
        {
          q: "Which architecture separates concerns?",
          options: ["MVC", "OOP", "DAO", "Singleton"],
          answer: 0,
        },
        {
          q: "Which architecture uses services?",
          options: ["Microservices", "Monolithic", "MVC", "Layered"],
          answer: 0,
        },
        {
          q: "Which concept validates input?",
          options: ["Validation", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept logs backend activity?",
          options: ["Logging", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept monitors backend?",
          options: ["Monitoring", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept handles deployment?",
          options: ["Deployment", "UI", "DB", "API"],
          answer: 0,
        },
        {
          q: "Which concept handles scaling?",
          options: ["Scaling", "Caching", "Encoding", "Clustering"],
          answer: 0,
        },
        {
          q: "Which concept balances load?",
          options: ["Load Balancer", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept ensures uptime?",
          options: ["High Availability", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept handles failures?",
          options: ["Fault Tolerance", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
      ],

      5: [
        {
          q: "Which concept improves security?",
          options: ["Encryption", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept manages tokens?",
          options: ["JWT", "Session", "Cookie", "DB"],
          answer: 0,
        },
        {
          q: "Which concept protects APIs?",
          options: ["OAuth", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept handles rate limiting?",
          options: ["Rate Limiting", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept improves scalability?",
          options: ["Horizontal Scaling", "Vertical", "Both", "None"],
          answer: 2,
        },
        {
          q: "Which concept handles distributed systems?",
          options: ["Distributed Systems", "Local", "Static", "None"],
          answer: 0,
        },
        {
          q: "Which concept handles background jobs?",
          options: ["Queue", "API", "UI", "DB"],
          answer: 0,
        },
        {
          q: "Which concept improves performance?",
          options: ["Optimization", "Storage", "UI", "DB"],
          answer: 0,
        },
        {
          q: "Which concept logs requests?",
          options: ["Logging", "Scaling", "Caching", "Encoding"],
          answer: 0,
        },
        {
          q: "Which concept builds scalable backend?",
          options: ["Microservices", "Monolithic", "MVC", "None"],
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

    return(
    <div className = { step === "quiz" ? "quiz-fullscreen" : "quiz-layout"} >
    { step !== "quiz" && <Sidebar />
}

<div className="quiz-main">
  <h1 className="level-title">CORE JAVA QUIZ</h1>

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
    </div >
  );
}

export default BackendFund;