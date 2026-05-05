import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Foundation() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "What is SDLC?",
        options: [
          "Software Development Life Cycle",
          "Software Design Level Code",
          "System Debug Life Cycle",
          "Software Data Logic Cycle",
        ],
        answer: 0,
      },
      {
        q: "What is the first phase of SDLC?",
        options: ["Design", "Testing", "Requirement Gathering", "Deployment"],
        answer: 2,
      },
      {
        q: "What is STLC?",
        options: [
          "Software Testing Life Cycle",
          "System Testing Level Code",
          "Software Test Logic Cycle",
          "System Tracking Life Cycle",
        ],
        answer: 0,
      },
      {
        q: "Which comes first in STLC?",
        options: ["Test Execution", "Test Planning", "Requirement Analysis", "Test Closure"],
        answer: 2,
      },
      {
        q: "What is manual testing?",
        options: [
          "Testing using scripts",
          "Testing without tools",
          "Testing database",
          "Testing UI only",
        ],
        answer: 1,
      },
      {
        q: "What is a test case?",
        options: [
          "Bug report",
          "Set of conditions to test",
          "Code snippet",
          "UI design",
        ],
        answer: 1,
      },
      {
        q: "What is a bug?",
        options: [
          "Correct behavior",
          "Error in software",
          "UI design",
          "Database",
        ],
        answer: 1,
      },
      {
        q: "What is QA?",
        options: [
          "Quality Assurance",
          "Quick Access",
          "Query Action",
          "Quality App",
        ],
        answer: 0,
      },
      {
        q: "What is QC?",
        options: [
          "Quality Control",
          "Quick Code",
          "Query Control",
          "Quality App",
        ],
        answer: 0,
      },
      {
        q: "Which document contains requirements?",
        options: ["SRS", "Test Case", "Bug Report", "Code"],
        answer: 0,
      },
    ],

    2: [
      {
        q: "What is requirement analysis in STLC?",
        options: [
          "Writing code",
          "Understanding requirements",
          "Fixing bugs",
          "Designing UI",
        ],
        answer: 1,
      },
      {
        q: "What is test planning?",
        options: [
          "Executing tests",
          "Planning testing activities",
          "Writing code",
          "Deploying app",
        ],
        answer: 1,
      },
      {
        q: "What is test case design?",
        options: [
          "Writing test cases",
          "Running tests",
          "Fixing bugs",
          "Deployment",
        ],
        answer: 0,
      },
      {
        q: "What is test execution?",
        options: [
          "Writing code",
          "Running test cases",
          "Planning tests",
          "Designing UI",
        ],
        answer: 1,
      },
      {
        q: "What is defect reporting?",
        options: [
          "Writing code",
          "Reporting bugs",
          "UI design",
          "Database work",
        ],
        answer: 1,
      },
      {
        q: "What is test closure?",
        options: [
          "Start testing",
          "End testing phase",
          "Write code",
          "Design UI",
        ],
        answer: 1,
      },
      {
        q: "What is verification?",
        options: [
          "Checking process",
          "Checking product",
          "Testing UI",
          "Testing DB",
        ],
        answer: 0,
      },
      {
        q: "What is validation?",
        options: [
          "Checking process",
          "Checking final product",
          "Testing DB",
          "Testing API",
        ],
        answer: 1,
      },
      {
        q: "What is a test scenario?",
        options: [
          "Detailed steps",
          "High-level testing idea",
          "Code",
          "Bug",
        ],
        answer: 1,
      },
      {
        q: "What is defect?",
        options: [
          "Expected result",
          "Mismatch between expected & actual",
          "Code",
          "Design",
        ],
        answer: 1,
      },
    ],

    3: [
      {
        q: "What is black-box testing?",
        options: [
          "Testing without code knowledge",
          "Testing with code",
          "Testing DB",
          "Testing UI only",
        ],
        answer: 0,
      },
      {
        q: "What is white-box testing?",
        options: [
          "Testing UI",
          "Testing with internal code knowledge",
          "Testing DB",
          "Testing API",
        ],
        answer: 1,
      },
      {
        q: "What is grey-box testing?",
        options: [
          "Partial knowledge testing",
          "Full knowledge",
          "No knowledge",
          "UI testing",
        ],
        answer: 0,
      },
      {
        q: "What is functional testing?",
        options: [
          "Testing features",
          "Testing performance",
          "Testing security",
          "Testing DB",
        ],
        answer: 0,
      },
      {
        q: "What is non-functional testing?",
        options: [
          "Testing features",
          "Testing performance/usability",
          "Testing UI only",
          "Testing DB",
        ],
        answer: 1,
      },
      {
        q: "What is unit testing?",
        options: [
          "Testing small units",
          "Testing system",
          "Testing UI",
          "Testing DB",
        ],
        answer: 0,
      },
      {
        q: "What is integration testing?",
        options: [
          "Testing modules together",
          "Testing UI",
          "Testing DB",
          "Testing code",
        ],
        answer: 0,
      },
      {
        q: "What is system testing?",
        options: [
          "Testing full system",
          "Testing UI",
          "Testing DB",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is acceptance testing?",
        options: [
          "Testing by developers",
          "Testing by client",
          "Testing DB",
          "Testing API",
        ],
        answer: 1,
      },
      {
        q: "What is smoke testing?",
        options: [
          "Basic testing",
          "Deep testing",
          "UI testing",
          "Security testing",
        ],
        answer: 0,
      },
    ],

    4: [
      {
        q: "What is sanity testing?",
        options: [
          "Basic testing",
          "Quick check after changes",
          "UI testing",
          "Load testing",
        ],
        answer: 1,
      },
      {
        q: "What is exploratory testing?",
        options: [
          "Scripted testing",
          "Learning-based testing",
          "Automation testing",
          "Load testing",
        ],
        answer: 1,
      },
      {
        q: "What is usability testing?",
        options: [
          "Testing user experience",
          "Testing code",
          "Testing DB",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is performance testing?",
        options: [
          "Testing speed/load",
          "Testing UI",
          "Testing DB",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is load testing?",
        options: [
          "Testing expected users",
          "Testing UI",
          "Testing DB",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is stress testing?",
        options: [
          "Testing beyond limits",
          "Testing UI",
          "Testing DB",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is security testing?",
        options: [
          "Finding vulnerabilities",
          "Testing UI",
          "Testing DB",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is compatibility testing?",
        options: [
          "Testing across devices/browsers",
          "Testing UI only",
          "Testing DB",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is alpha testing?",
        options: [
          "Internal testing",
          "Client testing",
          "UI testing",
          "DB testing",
        ],
        answer: 0,
      },
      {
        q: "What is beta testing?",
        options: [
          "Internal testing",
          "Testing by real users",
          "UI testing",
          "DB testing",
        ],
        answer: 1,
      },
    ],

    5: [
      {
        q: "What is defect life cycle?",
        options: [
          "Stages of bug",
          "Stages of testing",
          "Stages of coding",
          "UI stages",
        ],
        answer: 0,
      },
      {
        q: "What is severity?",
        options: [
          "Impact of defect",
          "Fix urgency",
          "Bug count",
          "Code size",
        ],
        answer: 0,
      },
      {
        q: "What is priority?",
        options: [
          "Impact",
          "Fix urgency",
          "Bug count",
          "Code size",
        ],
        answer: 1,
      },
      {
        q: "What is test plan?",
        options: [
          "Testing strategy document",
          "Bug report",
          "Code",
          "UI",
        ],
        answer: 0,
      },
      {
        q: "What is test strategy?",
        options: [
          "High-level approach",
          "Detailed steps",
          "Bug report",
          "Code",
        ],
        answer: 0,
      },
      {
        q: "What is RTM (Traceability Matrix)?",
        options: [
          "Mapping requirements to test cases",
          "Bug report",
          "Code",
          "UI design",
        ],
        answer: 0,
      },
      {
        q: "What is defect leakage?",
        options: [
          "Missed bug",
          "Fixed bug",
          "Code error",
          "UI issue",
        ],
        answer: 0,
      },
      {
        q: "What is risk-based testing?",
        options: [
          "Testing based on risk priority",
          "Random testing",
          "UI testing",
          "DB testing",
        ],
        answer: 0,
      },
      {
        q: "What is entry criteria?",
        options: [
          "Conditions to start testing",
          "Conditions to end testing",
          "Bug report",
          "Code",
        ],
        answer: 0,
      },
      {
        q: "What is exit criteria?",
        options: [
          "Conditions to end testing",
          "Conditions to start testing",
          "UI testing",
          "Code writing",
        ],
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

export default Foundation;