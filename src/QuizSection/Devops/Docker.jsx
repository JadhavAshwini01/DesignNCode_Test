import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Docker() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is Docker?",
      options: [
        "Virtual Machine",
        "Container platform",
        "Database",
        "Programming language",
      ],
      answer: 1,
    },
    {
      q: "What is a container?",
      options: [
        "Lightweight isolated environment",
        "Virtual machine",
        "Database",
        "Server",
      ],
      answer: 0,
    },
    {
      q: "Which command runs container?",
      options: ["docker run", "docker build", "docker start", "docker create"],
      answer: 0,
    },
    {
      q: "Which command builds image?",
      options: ["docker build", "docker run", "docker push", "docker pull"],
      answer: 0,
    },
    {
      q: "Which command pulls image?",
      options: ["docker pull", "docker push", "docker build", "docker run"],
      answer: 0,
    },
    {
      q: "Which command pushes image?",
      options: ["docker push", "docker pull", "docker run", "docker build"],
      answer: 0,
    },
    {
      q: "Which file defines Docker image?",
      options: ["Dockerfile", "docker.yml", "config.json", "image.txt"],
      answer: 0,
    },
    {
      q: "Which command lists containers?",
      options: ["docker ps", "docker list", "docker show", "docker view"],
      answer: 0,
    },
    {
      q: "Which command stops container?",
      options: ["docker stop", "docker kill", "docker remove", "docker pause"],
      answer: 0,
    },
    {
      q: "Which command removes container?",
      options: ["docker rm", "docker delete", "docker remove", "docker stop"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which command lists images?",
      options: ["docker images", "docker list", "docker show", "docker ps"],
      answer: 0,
    },
    {
      q: "Which command removes image?",
      options: ["docker rmi", "docker rm", "docker delete", "docker stop"],
      answer: 0,
    },
    {
      q: "Which command runs container in background?",
      options: ["-d", "-run", "-bg", "-detach"],
      answer: 0,
    },
    {
      q: "Which flag maps ports?",
      options: ["-p", "-d", "-v", "-m"],
      answer: 0,
    },
    {
      q: "Which flag mounts volume?",
      options: ["-v", "-p", "-d", "-m"],
      answer: 0,
    },
    {
      q: "Which concept isolates app?",
      options: ["Container", "VM", "Server", "DB"],
      answer: 0,
    },
    {
      q: "Which command starts stopped container?",
      options: ["docker start", "docker run", "docker init", "docker open"],
      answer: 0,
    },
    {
      q: "Which command restarts container?",
      options: ["docker restart", "docker start", "docker run", "docker open"],
      answer: 0,
    },
    {
      q: "Which command shows logs?",
      options: ["docker logs", "docker show", "docker info", "docker view"],
      answer: 0,
    },
    {
      q: "Which command executes inside container?",
      options: ["docker exec", "docker run", "docker start", "docker open"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which instruction sets base image?",
      options: ["FROM", "RUN", "CMD", "COPY"],
      answer: 0,
    },
    {
      q: "Which instruction runs commands?",
      options: ["RUN", "CMD", "COPY", "ADD"],
      answer: 0,
    },
    {
      q: "Which instruction copies files?",
      options: ["COPY", "RUN", "CMD", "FROM"],
      answer: 0,
    },
    {
      q: "Which instruction sets default command?",
      options: ["CMD", "RUN", "COPY", "ADD"],
      answer: 0,
    },
    {
      q: "Which instruction exposes port?",
      options: ["EXPOSE", "PORT", "OPEN", "MAP"],
      answer: 0,
    },
    {
      q: "Which instruction sets working directory?",
      options: ["WORKDIR", "DIR", "PATH", "SET"],
      answer: 0,
    },
    {
      q: "Which instruction sets environment variable?",
      options: ["ENV", "SET", "VAR", "DEFINE"],
      answer: 0,
    },
    {
      q: "Which concept stores data persistently?",
      options: ["Volume", "Image", "Container", "Layer"],
      answer: 0,
    },
    {
      q: "Which concept shares network?",
      options: ["Docker Network", "Bridge", "Host", "All"],
      answer: 3,
    },
    {
      q: "Which concept layers image?",
      options: ["Layered Architecture", "Stack", "Cluster", "Scale"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which tool manages multi-container apps?",
      options: ["Docker Compose", "Dockerfile", "Docker CLI", "Docker Hub"],
      answer: 0,
    },
    {
      q: "Which file defines multi containers?",
      options: ["docker-compose.yml", "Dockerfile", "config.json", "compose.txt"],
      answer: 0,
    },
    {
      q: "Which command starts compose?",
      options: ["docker-compose up", "docker up", "docker run", "compose start"],
      answer: 0,
    },
    {
      q: "Which command stops compose?",
      options: ["docker-compose down", "docker stop", "docker down", "compose stop"],
      answer: 0,
    },
    {
      q: "Which service stores images?",
      options: ["Docker Hub", "Git", "AWS", "Node"],
      answer: 0,
    },
    {
      q: "Which concept improves scalability?",
      options: ["Containers", "Files", "Code", "UI"],
      answer: 0,
    },
    {
      q: "Which concept supports microservices?",
      options: ["Docker", "Monolithic", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept ensures portability?",
      options: ["Containerization", "VM", "Code", "UI"],
      answer: 0,
    },
    {
      q: "Which concept isolates dependencies?",
      options: ["Containers", "Files", "DB", "UI"],
      answer: 0,
    },
    {
      q: "Which concept improves deployment?",
      options: ["Docker", "Manual", "Static", "None"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept orchestrates containers?",
      options: ["Kubernetes", "Docker", "Git", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which concept scales containers?",
      options: ["Orchestration", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept monitors containers?",
      options: ["Monitoring", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept secures containers?",
      options: ["Security", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept reduces image size?",
      options: ["Alpine Image", "Big Image", "Full OS", "VM"],
      answer: 0,
    },
    {
      q: "Which concept builds optimized images?",
      options: ["Multi-stage Build", "Single Build", "Manual Build", "None"],
      answer: 0,
    },
    {
      q: "Which concept automates deployment?",
      options: ["CI/CD", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept integrates Docker with cloud?",
      options: ["Cloud Deployment", "Local", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept manages images?",
      options: ["Registry", "DB", "File", "UI"],
      answer: 0,
    },
    {
      q: "Which concept ensures fast startup?",
      options: ["Containers", "VM", "Server", "DB"],
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

export default Docker;