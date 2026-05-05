import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Backend() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is Node.js?",
      options: [
        "JavaScript runtime",
        "Framework",
        "Database",
        "Library",
      ],
      answer: 0,
    },
    {
      q: "What is Express.js?",
      options: [
        "Node.js framework",
        "Database",
        "Frontend library",
        "Language",
      ],
      answer: 0,
    },
    {
      q: "Which module handles server?",
      options: ["http", "fs", "path", "os"],
      answer: 0,
    },
    {
      q: "Which function creates server?",
      options: ["createServer()", "makeServer()", "startServer()", "initServer()"],
      answer: 0,
    },
    {
      q: "Which method handles GET request?",
      options: ["app.get()", "app.post()", "app.put()", "app.delete()"],
      answer: 0,
    },
    {
      q: "Which method handles POST request?",
      options: ["app.post()", "app.get()", "app.put()", "app.delete()"],
      answer: 0,
    },
    {
      q: "Which method handles PUT request?",
      options: ["app.put()", "app.get()", "app.post()", "app.delete()"],
      answer: 0,
    },
    {
      q: "Which method handles DELETE request?",
      options: ["app.delete()", "app.get()", "app.post()", "app.put()"],
      answer: 0,
    },
    {
      q: "Which method starts server?",
      options: ["app.listen()", "app.run()", "app.start()", "app.init()"],
      answer: 0,
    },
    {
      q: "Which object handles request?",
      options: ["req", "res", "app", "server"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which object sends response?",
      options: ["res", "req", "app", "server"],
      answer: 0,
    },
    {
      q: "Which method sends response?",
      options: ["res.send()", "res.get()", "res.post()", "res.write()"],
      answer: 0,
    },
    {
      q: "Which method sends JSON?",
      options: ["res.json()", "res.send()", "res.write()", "res.end()"],
      answer: 0,
    },
    {
      q: "Which middleware parses JSON?",
      options: ["express.json()", "bodyParser", "jsonParser", "app.json()"],
      answer: 0,
    },
    {
      q: "Which concept handles middleware?",
      options: ["Middleware", "Routing", "Database", "UI"],
      answer: 0,
    },
    {
      q: "Which method uses middleware?",
      options: ["app.use()", "app.get()", "app.post()", "app.listen()"],
      answer: 0,
    },
    {
      q: "Which concept handles routing?",
      options: ["Router", "Middleware", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which method creates router?",
      options: ["express.Router()", "app.router()", "createRouter()", "router()"],
      answer: 0,
    },
    {
      q: "Which concept handles async code?",
      options: ["Async/Await", "Sync", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which module handles file system?",
      options: ["fs", "http", "path", "os"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which module handles paths?",
      options: ["path", "fs", "http", "os"],
      answer: 0,
    },
    {
      q: "Which concept manages packages?",
      options: ["npm", "node", "express", "js"],
      answer: 0,
    },
    {
      q: "Which file stores dependencies?",
      options: ["package.json", "index.js", "server.js", "config.json"],
      answer: 0,
    },
    {
      q: "Which command installs package?",
      options: ["npm install", "npm add", "npm get", "npm fetch"],
      answer: 0,
    },
    {
      q: "Which concept handles errors?",
      options: ["Error Handling", "Routing", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which middleware handles errors?",
      options: ["Error Middleware", "Router", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which concept handles environment variables?",
      options: ["dotenv", "env", "config", "node"],
      answer: 0,
    },
    {
      q: "Which concept handles CORS?",
      options: ["CORS", "Auth", "Token", "DB"],
      answer: 0,
    },
    {
      q: "Which concept handles authentication?",
      options: ["Auth", "CORS", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which concept handles tokens?",
      options: ["JWT", "Session", "Cookie", "DB"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept handles sessions?",
      options: ["Session", "JWT", "Token", "DB"],
      answer: 0,
    },
    {
      q: "Which concept stores cookies?",
      options: ["Cookies", "Session", "JWT", "DB"],
      answer: 0,
    },
    {
      q: "Which concept connects DB?",
      options: ["Mongoose", "Express", "React", "Node"],
      answer: 0,
    },
    {
      q: "Which DB is used in MERN?",
      options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"],
      answer: 0,
    },
    {
      q: "Which concept handles models?",
      options: ["Schema", "Router", "Middleware", "UI"],
      answer: 0,
    },
    {
      q: "Which concept handles validation?",
      options: ["Validation", "Routing", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which concept logs requests?",
      options: ["Logging", "Routing", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which concept handles security?",
      options: ["Helmet", "CORS", "JWT", "All"],
      answer: 3,
    },
    {
      q: "Which concept handles rate limiting?",
      options: ["Rate Limit", "Routing", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Caching", "Scaling", "Clustering", "All"],
      answer: 3,
    },
  ],

  5: [
    {
      q: "Which concept builds REST API?",
      options: ["REST", "SOAP", "GraphQL", "All"],
      answer: 0,
    },
    {
      q: "Which concept structures app?",
      options: ["MVC", "OOP", "DAO", "Singleton"],
      answer: 0,
    },
    {
      q: "Which concept handles microservices?",
      options: ["Microservices", "Monolithic", "MVC", "Layered"],
      answer: 0,
    },
    {
      q: "Which concept handles async requests?",
      options: ["Event Loop", "Thread", "Process", "None"],
      answer: 0,
    },
    {
      q: "Which concept improves scalability?",
      options: ["Horizontal Scaling", "Vertical", "Both", "None"],
      answer: 2,
    },
    {
      q: "Which concept handles background jobs?",
      options: ["Queue", "API", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept handles deployment?",
      options: ["Deployment", "UI", "DB", "API"],
      answer: 0,
    },
    {
      q: "Which concept monitors server?",
      options: ["Monitoring", "Routing", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which concept logs errors?",
      options: ["Logging", "Routing", "DB", "UI"],
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

  return (
    <div className={step === "quiz" ? "quiz-fullscreen" : "quiz-layout"}>
      {step !== "quiz" && <Sidebar />}

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

export default Backend;