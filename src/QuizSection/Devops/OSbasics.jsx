import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function OSbasics() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is an Operating System?",
      options: [
        "Software that manages hardware and software",
        "Programming language",
        "Database",
        "Compiler",
      ],
      answer: 0,
    },
    {
      q: "Which OS is open source?",
      options: ["Linux", "Windows", "macOS", "iOS"],
      answer: 0,
    },
    {
      q: "Which OS is used in Android?",
      options: ["Linux", "Windows", "macOS", "DOS"],
      answer: 0,
    },
    {
      q: "Which component manages CPU?",
      options: ["Scheduler", "Memory", "File", "Device"],
      answer: 0,
    },
    {
      q: "Which component manages memory?",
      options: ["Memory Manager", "Scheduler", "File", "Device"],
      answer: 0,
    },
    {
      q: "Which component manages files?",
      options: ["File System", "Scheduler", "Memory", "Device"],
      answer: 0,
    },
    {
      q: "Which OS type supports multiple tasks?",
      options: ["Multitasking", "Single task", "Batch", "None"],
      answer: 0,
    },
    {
      q: "Which OS type supports multiple users?",
      options: ["Multi-user", "Single-user", "Batch", "None"],
      answer: 0,
    },
    {
      q: "Which OS is command-line?",
      options: ["CLI", "GUI", "API", "DB"],
      answer: 0,
    },
    {
      q: "Which OS is graphical?",
      options: ["GUI", "CLI", "API", "DB"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "What is a process?",
      options: [
        "Program in execution",
        "File",
        "Thread",
        "Memory",
      ],
      answer: 0,
    },
    {
      q: "What is a thread?",
      options: [
        "Smallest unit of process",
        "Program",
        "File",
        "Memory",
      ],
      answer: 0,
    },
    {
      q: "Which scheduling type is FCFS?",
      options: [
        "First Come First Serve",
        "Fast CPU First Serve",
        "File Control First Serve",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which scheduling gives shortest job?",
      options: ["SJF", "FCFS", "RR", "Priority"],
      answer: 0,
    },
    {
      q: "Which scheduling uses time slice?",
      options: ["Round Robin", "FCFS", "SJF", "Priority"],
      answer: 0,
    },
    {
      q: "Which scheduling uses priority?",
      options: ["Priority", "FCFS", "SJF", "RR"],
      answer: 0,
    },
    {
      q: "Which state is running?",
      options: ["Running", "Waiting", "Ready", "Blocked"],
      answer: 0,
    },
    {
      q: "Which state is waiting?",
      options: ["Waiting", "Running", "Ready", "New"],
      answer: 0,
    },
    {
      q: "Which state is ready?",
      options: ["Ready", "Running", "Waiting", "Blocked"],
      answer: 0,
    },
    {
      q: "Which state is new?",
      options: ["New", "Running", "Ready", "Waiting"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is deadlock?",
      options: [
        "Process waiting forever",
        "Process running",
        "Process finished",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which condition causes deadlock?",
      options: [
        "Mutual Exclusion",
        "Hold and Wait",
        "No Preemption",
        "All",
      ],
      answer: 3,
    },
    {
      q: "What is paging?",
      options: [
        "Memory division",
        "File storage",
        "Process",
        "Thread",
      ],
      answer: 0,
    },
    {
      q: "What is segmentation?",
      options: [
        "Memory division",
        "File storage",
        "Process",
        "Thread",
      ],
      answer: 0,
    },
    {
      q: "What is virtual memory?",
      options: [
        "Using disk as memory",
        "Real memory",
        "Cache",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which memory is fastest?",
      options: ["Cache", "RAM", "Disk", "ROM"],
      answer: 0,
    },
    {
      q: "Which memory is volatile?",
      options: ["RAM", "ROM", "Disk", "Cache"],
      answer: 0,
    },
    {
      q: "Which memory is non-volatile?",
      options: ["ROM", "RAM", "Cache", "Register"],
      answer: 0,
    },
    {
      q: "What is thrashing?",
      options: [
        "Excessive paging",
        "Fast processing",
        "File storage",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which concept avoids deadlock?",
      options: ["Avoidance", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is file system?",
      options: [
        "Organizes files",
        "Runs program",
        "Manages CPU",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is I/O system?",
      options: [
        "Handles input/output",
        "Memory",
        "CPU",
        "File",
      ],
      answer: 0,
    },
    {
      q: "Which concept manages devices?",
      options: ["Device Driver", "File", "Memory", "Process"],
      answer: 0,
    },
    {
      q: "Which concept buffers data?",
      options: ["Buffering", "Caching", "Spooling", "All"],
      answer: 3,
    },
    {
      q: "What is spooling?",
      options: [
        "Queue processing",
        "Memory",
        "CPU",
        "File",
      ],
      answer: 0,
    },
    {
      q: "Which concept improves speed?",
      options: ["Caching", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept shares resources?",
      options: ["Multiprogramming", "Single", "Batch", "None"],
      answer: 0,
    },
    {
      q: "Which concept runs many processes?",
      options: ["Multitasking", "Single", "Batch", "None"],
      answer: 0,
    },
    {
      q: "Which concept runs real-time apps?",
      options: ["Real-Time OS", "Batch", "Single", "None"],
      answer: 0,
    },
    {
      q: "Which concept runs distributed systems?",
      options: ["Distributed OS", "Batch", "Single", "None"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept improves CPU usage?",
      options: ["Scheduling", "Storage", "File", "None"],
      answer: 0,
    },
    {
      q: "Which concept handles concurrency?",
      options: ["Synchronization", "Storage", "File", "None"],
      answer: 0,
    },
    {
      q: "Which concept prevents race condition?",
      options: ["Locking", "Storage", "File", "None"],
      answer: 0,
    },
    {
      q: "Which concept uses semaphore?",
      options: ["Synchronization", "Storage", "File", "None"],
      answer: 0,
    },
    {
      q: "Which concept manages processes?",
      options: ["Process Management", "File", "Storage", "None"],
      answer: 0,
    },
    {
      q: "Which concept manages memory?",
      options: ["Memory Management", "File", "Storage", "None"],
      answer: 0,
    },
    {
      q: "Which concept manages files?",
      options: ["File Management", "Memory", "Storage", "None"],
      answer: 0,
    },
    {
      q: "Which concept manages devices?",
      options: ["Device Management", "File", "Storage", "None"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Optimization", "Storage", "File", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures system stability?",
      options: ["Error Handling", "Storage", "File", "None"],
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

export default OSbasics;