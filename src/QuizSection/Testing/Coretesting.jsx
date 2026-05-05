import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Coretesting() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
      1: [
        {
          q: "What is software testing?",
          options: [
            "Process of finding defects",
            "Writing code",
            "Designing UI",
            "Deploying software",
          ],
          answer: 0,
        },
        {
          q: "What is a bug?",
          options: [
            "Correct code",
            "Error in software",
            "Design",
            "Database",
          ],
          answer: 1,
        },
        {
          q: "Which testing is done manually?",
          options: [
            "Automation testing",
            "Manual testing",
            "Performance testing",
            "Security testing",
          ],
          answer: 1,
        },
        {
          q: "What is test case?",
          options: [
            "Bug report",
            "Set of conditions to test",
            "Code",
            "UI design",
          ],
          answer: 1,
        },
        {
          q: "What is test scenario?",
          options: [
            "Detailed steps",
            "High-level test idea",
            "Code",
            "Bug",
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
            "Quality Check only UI",
          ],
          answer: 0,
        },
        {
          q: "Which document contains requirements?",
          options: ["SRS", "Test Case", "Bug Report", "Code"],
          answer: 0,
        },
        {
          q: "What is verification?",
          options: [
            "Checking product",
            "Checking process",
            "Testing UI",
            "Testing DB",
          ],
          answer: 1,
        },
        {
          q: "What is validation?",
          options: [
            "Checking process",
            "Checking product",
            "Testing code",
            "Testing DB",
          ],
          answer: 1,
        },
      ],

      2: [
        {
          q: "What is SDLC?",
          options: [
            "Software Development Life Cycle",
            "Software Design Level Code",
            "System Debug Life Cycle",
            "Software Data Life Cycle",
          ],
          answer: 0,
        },
        {
          q: "What is STLC?",
          options: [
            "Software Testing Life Cycle",
            "System Test Logic Code",
            "Software Test Level Cycle",
            "System Tracking Life Cycle",
          ],
          answer: 0,
        },
        {
          q: "Which phase comes first in STLC?",
          options: [
            "Test Execution",
            "Requirement Analysis",
            "Test Closure",
            "Test Planning",
          ],
          answer: 1,
        },
        {
          q: "What is test planning?",
          options: [
            "Writing code",
            "Planning testing activities",
            "Design UI",
            "Fix bugs",
          ],
          answer: 1,
        },
        {
          q: "What is test execution?",
          options: [
            "Writing test cases",
            "Running test cases",
            "Planning",
            "Deployment",
          ],
          answer: 1,
        },
        {
          q: "What is defect?",
          options: [
            "Expected result",
            "Mismatch in expected vs actual",
            "Code",
            "Design",
          ],
          answer: 1,
        },
        {
          q: "What is bug report?",
          options: [
            "UI design",
            "Document of bug details",
            "Code",
            "Database",
          ],
          answer: 1,
        },
        {
          q: "Which testing is done after coding?",
          options: [
            "Requirement Analysis",
            "Testing Phase",
            "Design Phase",
            "Planning Phase",
          ],
          answer: 1,
        },
        {
          q: "What is retesting?",
          options: [
            "Testing new features",
            "Testing fixed defects",
            "Skipping test",
            "Manual testing",
          ],
          answer: 1,
        },
        {
          q: "What is regression testing?",
          options: [
            "Testing new module",
            "Testing existing functionality after changes",
            "Testing UI only",
            "Testing database",
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
            "Testing database",
            "Testing UI only",
          ],
          answer: 0,
        },
        {
          q: "What is white-box testing?",
          options: [
            "Testing UI",
            "Testing with internal code knowledge",
            "Testing API",
            "Testing DB",
          ],
          answer: 1,
        },
        {
          q: "What is grey-box testing?",
          options: [
            "Partial code knowledge",
            "Full code knowledge",
            "No code knowledge",
            "UI testing",
          ],
          answer: 0,
        },
        {
          q: "What is functional testing?",
          options: [
            "Testing features",
            "Testing performance",
            "Testing load",
            "Testing security",
          ],
          answer: 0,
        },
        {
          q: "What is non-functional testing?",
          options: [
            "Testing features",
            "Testing performance, usability, etc.",
            "Testing UI only",
            "Testing DB",
          ],
          answer: 1,
        },
        {
          q: "What is system testing?",
          options: [
            "Testing whole system",
            "Testing unit",
            "Testing module",
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
          q: "What is unit testing?",
          options: [
            "Testing small code units",
            "Testing system",
            "Testing UI",
            "Testing DB",
          ],
          answer: 0,
        },
        {
          q: "What is acceptance testing?",
          options: [
            "Testing by developers",
            "Testing by client",
            "Testing UI",
            "Testing DB",
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
            "Automation",
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
            "Testing speed and load",
            "Testing UI",
            "Testing DB",
            "Testing API",
          ],
          answer: 0,
        },
        {
          q: "What is load testing?",
          options: [
            "Testing normal load",
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
            "Testing vulnerabilities",
            "Testing UI",
            "Testing DB",
            "Testing performance",
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
          q: "What is defect severity?",
          options: [
            "Impact of defect",
            "Fix urgency",
            "Bug count",
            "Code size",
          ],
          answer: 0,
        },
        {
          q: "What is defect priority?",
          options: [
            "Impact",
            "Fix urgency",
            "Bug count",
            "Code size",
          ],
          answer: 1,
        },
        {
          q: "What is test coverage?",
          options: [
            "Amount of testing done",
            "Number of bugs",
            "Lines of code",
            "UI design",
          ],
          answer: 0,
        },
        {
          q: "What is test plan?",
          options: [
            "Document of strategy",
            "Bug report",
            "Code",
            "UI design",
          ],
          answer: 0,
        },
        {
          q: "What is test strategy?",
          options: [
            "High-level testing approach",
            "Detailed steps",
            "Bug report",
            "Code",
          ],
          answer: 0,
        },
        {
          q: "What is defect life cycle?",
          options: [
            "Bug stages",
            "Test stages",
            "Code stages",
            "UI stages",
          ],
          answer: 0,
        },
        {
          q: "What is traceability matrix?",
          options: [
            "Mapping requirements to tests",
            "Bug report",
            "Code",
            "UI design",
          ],
          answer: 0,
        },
        {
          q: "What is risk-based testing?",
          options: [
            "Testing based on risk",
            "Random testing",
            "UI testing",
            "DB testing",
          ],
          answer: 0,
        },
        {
          q: "What is defect leakage?",
          options: [
            "Bug missed in testing",
            "Bug fixed",
            "Code error",
            "UI issue",
          ],
          answer: 0,
        },
        {
          q: "What is test closure?",
          options: [
            "End of testing",
            "Start of testing",
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

    return(
    <div className = { step === "quiz" ? "quiz-fullscreen" : "quiz-layout"} >
    { step !== "quiz" && <Sidebar />
}

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
    </div >
  );
}

export default Coretesting;