import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function ExceptionHandling() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "What is an exception in Java?",
        options: [
          "Error in syntax",
          "Runtime error",
          "Compile-time warning",
          "None",
        ],
        answer: 1,
      },
      {
        q: "Which keyword is used to handle exceptions?",
        options: ["try", "catch", "throw", "final"],
        answer: 1,
      },
      {
        q: "Which block is used to write risky code?",
        options: ["catch", "try", "finally", "throw"],
        answer: 1,
      },
      {
        q: "Which block is always executed?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2,
      },
      {
        q: "Which keyword is used to throw exception manually?",
        options: ["throw", "throws", "catch", "final"],
        answer: 0,
      },
      {
        q: "Which class is root of all exceptions?",
        options: ["Exception", "Error", "Throwable", "Object"],
        answer: 2,
      },
      {
        q: "Which exception occurs when dividing by zero?",
        options: [
          "NullPointerException",
          "ArithmeticException",
          "IOException",
          "RuntimeException",
        ],
        answer: 1,
      },
      {
        q: "Which exception occurs when accessing null reference?",
        options: [
          "NullPointerException",
          "ArrayIndexOutOfBounds",
          "IOException",
          "ArithmeticException",
        ],
        answer: 0,
      },
      {
        q: "Which block catches exception?",
        options: ["try", "catch", "finally", "throw"],
        answer: 1,
      },
      {
        q: "Which keyword is used with multiple exceptions?",
        options: ["multi-catch", "|", "&", "||"],
        answer: 1,
      },
    ],

    2: [
      {
        q: "Which type of exception is checked?",
        options: [
          "ArithmeticException",
          "NullPointerException",
          "IOException",
          "ArrayIndexOutOfBounds",
        ],
        answer: 2,
      },
      {
        q: "Which type is unchecked exception?",
        options: [
          "IOException",
          "SQLException",
          "RuntimeException",
          "FileNotFoundException",
        ],
        answer: 2,
      },
      {
        q: "Which keyword declares exception in method?",
        options: ["throw", "throws", "catch", "final"],
        answer: 1,
      },
      {
        q: "Which block is optional?",
        options: ["try", "catch", "finally", "all"],
        answer: 2,
      },
      {
        q: "Which exception occurs when file not found?",
        options: [
          "IOException",
          "FileNotFoundException",
          "RuntimeException",
          "NullPointerException",
        ],
        answer: 1,
      },
      {
        q: "Which keyword is used to create custom exception?",
        options: ["throw", "extends", "implements", "new"],
        answer: 1,
      },
      {
        q: "Which method prints stack trace?",
        options: ["print()", "trace()", "printStackTrace()", "show()"],
        answer: 2,
      },
      {
        q: "Which exception occurs for invalid array index?",
        options: [
          "ArrayIndexOutOfBoundsException",
          "NullPointerException",
          "ArithmeticException",
          "IOException",
        ],
        answer: 0,
      },
      {
        q: "Which class handles input/output exceptions?",
        options: ["RuntimeException", "IOException", "Error", "Throwable"],
        answer: 1,
      },
      {
        q: "Which block executes when exception occurs?",
        options: ["try", "catch", "finally", "throw"],
        answer: 1,
      },
    ],

    3: [
      {
        q: "Which exception is parent of all runtime exceptions?",
        options: ["Exception", "RuntimeException", "Throwable", "Error"],
        answer: 1,
      },
      {
        q: "Which keyword is used to rethrow exception?",
        options: ["throw", "throws", "retry", "again"],
        answer: 0,
      },
      {
        q: "Which block can have multiple instances?",
        options: ["try", "catch", "finally", "throw"],
        answer: 1,
      },
      {
        q: "Which block must be followed after try?",
        options: ["catch or finally", "only catch", "only finally", "none"],
        answer: 0,
      },
      {
        q: "Which exception is thrown when string is null?",
        options: [
          "NullPointerException",
          "IOException",
          "ArithmeticException",
          "ClassCastException",
        ],
        answer: 0,
      },
      {
        q: "Which exception is thrown during type casting?",
        options: [
          "ClassCastException",
          "NullPointerException",
          "IOException",
          "ArithmeticException",
        ],
        answer: 0,
      },
      {
        q: "Which method retrieves exception message?",
        options: ["getMessage()", "message()", "getError()", "print()"],
        answer: 0,
      },
      {
        q: "Which block is used for resource closing?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2,
      },
      {
        q: "Which feature handles multiple exceptions in one catch?",
        options: ["multi-catch", "try-catch", "group-catch", "single-catch"],
        answer: 0,
      },
      {
        q: "Which exception is compile-time?",
        options: ["RuntimeException", "IOException", "NullPointerException", "ArithmeticException"],
        answer: 1,
      },
    ],

    4: [
      {
        q: "Which concept is used for automatic resource management?",
        options: [
          "try-with-resources",
          "auto-close",
          "resource-handler",
          "final-block",
        ],
        answer: 0,
      },
      {
        q: "Which interface is used in try-with-resources?",
        options: ["Closable", "AutoCloseable", "CloseableResource", "Resource"],
        answer: 1,
      },
      {
        q: "Which exception is thrown explicitly?",
        options: ["checked", "unchecked", "custom", "throw"],
        answer: 3,
      },
      {
        q: "Which block executes even if exception not occurs?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2,
      },
      {
        q: "Which exception is related to invalid class cast?",
        options: [
          "ClassCastException",
          "IOException",
          "NullPointerException",
          "IllegalArgumentException",
        ],
        answer: 0,
      },
      {
        q: "Which exception is thrown for invalid arguments?",
        options: [
          "IllegalArgumentException",
          "IOException",
          "ArithmeticException",
          "NullPointerException",
        ],
        answer: 0,
      },
      {
        q: "Which exception occurs during number parsing?",
        options: [
          "NumberFormatException",
          "IOException",
          "ArithmeticException",
          "NullPointerException",
        ],
        answer: 0,
      },
      {
        q: "Which keyword is used to handle multiple exceptions separately?",
        options: ["multiple catch", "multi-catch", "catch blocks", "group catch"],
        answer: 2,
      },
      {
        q: "Which exception is thrown when thread interrupted?",
        options: [
          "InterruptedException",
          "IOException",
          "RuntimeException",
          "NullPointerException",
        ],
        answer: 0,
      },
      {
        q: "Which keyword is used to declare custom exception?",
        options: ["class", "extends Exception", "implements", "throw"],
        answer: 1,
      },
    ],

    5: [
      {
        q: "Which hierarchy is correct?",
        options: [
          "Throwable → Exception → RuntimeException",
          "Exception → Throwable → RuntimeException",
          "RuntimeException → Throwable → Exception",
          "Throwable → RuntimeException → Exception",
        ],
        answer: 0,
      },
      {
        q: "Which exception is not recoverable?",
        options: ["Exception", "Error", "RuntimeException", "IOException"],
        answer: 1,
      },
      {
        q: "Which exception is fail-fast?",
        options: [
          "ConcurrentModificationException",
          "IOException",
          "NullPointerException",
          "ArithmeticException",
        ],
        answer: 0,
      },
      {
        q: "Which concept avoids finally block?",
        options: [
          "try-with-resources",
          "multi-catch",
          "custom exception",
          "throw",
        ],
        answer: 0,
      },
      {
        q: "Which exception occurs in invalid enum value?",
        options: [
          "IllegalArgumentException",
          "IOException",
          "NullPointerException",
          "ArithmeticException",
        ],
        answer: 0,
      },
      {
        q: "Which block is skipped if JVM crashes?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2,
      },
      {
        q: "Which exception is used for reflection errors?",
        options: [
          "ReflectiveOperationException",
          "IOException",
          "RuntimeException",
          "NullPointerException",
        ],
        answer: 0,
      },
      {
        q: "Which exception is thrown when class not found?",
        options: [
          "ClassNotFoundException",
          "IOException",
          "RuntimeException",
          "NullPointerException",
        ],
        answer: 0,
      },
      {
        q: "Which concept handles chained exceptions?",
        options: [
          "Exception chaining",
          "multi-catch",
          "nested try",
          "throw",
        ],
        answer: 0,
      },
      {
        q: "Which method is used to get cause of exception?",
        options: ["getCause()", "cause()", "reason()", "getReason()"],
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
        <h1 className="level-title">EXCEPTION HANDLING QUIZ</h1>

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
    </div>
  );
}

export default ExceptionHandling;