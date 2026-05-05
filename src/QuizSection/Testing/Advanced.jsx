import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Advanced() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "What is the main goal of software testing?",
        options: [
          "To find bugs",
          "To prove software is correct",
          "To delay release",
          "To write code",
        ],
        answer: 0,
      },
      {
        q: "Which testing is done without executing code?",
        options: ["Unit Testing", "Static Testing", "Integration Testing", "System Testing"],
        answer: 1,
      },
      {
        q: "Which is a black-box testing technique?",
        options: ["Code Review", "Boundary Value Analysis", "Path Testing", "Loop Testing"],
        answer: 1,
      },
      {
        q: "Which testing ensures individual units work correctly?",
        options: ["System Testing", "Unit Testing", "Acceptance Testing", "Regression Testing"],
        answer: 1,
      },
      {
        q: "What is regression testing?",
        options: [
          "Testing new features",
          "Testing old features after changes",
          "Testing UI",
          "Testing database",
        ],
        answer: 1,
      },
      {
        q: "Which document describes test cases?",
        options: ["SRS", "Test Plan", "Test Case Document", "Design Doc"],
        answer: 2,
      },
      {
        q: "What is white-box testing?",
        options: [
          "Testing without code knowledge",
          "Testing with internal code knowledge",
          "Testing UI",
          "Testing performance",
        ],
        answer: 1,
      },
      {
        q: "Which phase finds defects early?",
        options: ["Coding", "Testing", "Requirement Analysis", "Deployment"],
        answer: 2,
      },
      {
        q: "What is smoke testing?",
        options: [
          "Deep testing",
          "Initial basic testing",
          "UI testing",
          "Security testing",
        ],
        answer: 1,
      },
      {
        q: "Which tool is used for bug tracking?",
        options: ["JIRA", "VS Code", "Git", "Docker"],
        answer: 0,
      },
    ],

    2: [
      {
        q: "What is equivalence partitioning?",
        options: [
          "Dividing inputs into groups",
          "Testing all values",
          "Skipping tests",
          "Random testing",
        ],
        answer: 0,
      },
      {
        q: "Which testing checks system performance?",
        options: ["Functional Testing", "Performance Testing", "Unit Testing", "Smoke Testing"],
        answer: 1,
      },
      {
        q: "What is test coverage?",
        options: [
          "Amount of code tested",
          "Number of testers",
          "Number of bugs",
          "Lines of code",
        ],
        answer: 0,
      },
      {
        q: "What is integration testing?",
        options: [
          "Testing UI",
          "Testing combined modules",
          "Testing single unit",
          "Testing database",
        ],
        answer: 1,
      },
      {
        q: "Which is non-functional testing?",
        options: ["Unit Testing", "Performance Testing", "Integration Testing", "System Testing"],
        answer: 1,
      },
      {
        q: "What is defect life cycle?",
        options: [
          "Bug stages",
          "Testing stages",
          "Development stages",
          "Deployment stages",
        ],
        answer: 0,
      },
      {
        q: "What is sanity testing?",
        options: [
          "Full testing",
          "Quick test of functionality",
          "Security testing",
          "Load testing",
        ],
        answer: 1,
      },
      {
        q: "What is alpha testing?",
        options: [
          "Testing by users",
          "Testing by developers internally",
          "Testing after release",
          "Testing automation",
        ],
        answer: 1,
      },
      {
        q: "Which tool is used for automation testing?",
        options: ["Selenium", "Postman", "JIRA", "Figma"],
        answer: 0,
      },
      {
        q: "What is test case?",
        options: [
          "Bug report",
          "Set of conditions to test",
          "Code snippet",
          "Requirement doc",
        ],
        answer: 1,
      },
    ],

    3: [
      {
        q: "What is boundary value analysis used for?",
        options: [
          "Testing extreme values",
          "Testing UI",
          "Testing performance",
          "Testing database",
        ],
        answer: 0,
      },
      {
        q: "Which testing ensures software meets business requirements?",
        options: ["Unit Testing", "Acceptance Testing", "Integration Testing", "Regression Testing"],
        answer: 1,
      },
      {
        q: "What is load testing?",
        options: [
          "Testing max users",
          "Testing UI",
          "Testing logic",
          "Testing database",
        ],
        answer: 0,
      },
      {
        q: "Which testing is done by clients?",
        options: ["System Testing", "Acceptance Testing", "Unit Testing", "Integration Testing"],
        answer: 1,
      },
      {
        q: "What is defect severity?",
        options: [
          "Bug priority",
          "Impact of bug",
          "Bug count",
          "Fix time",
        ],
        answer: 1,
      },
      {
        q: "What is defect priority?",
        options: [
          "Impact",
          "Fix urgency",
          "Bug type",
          "Bug count",
        ],
        answer: 1,
      },
      {
        q: "Which testing ensures security?",
        options: ["Security Testing", "Unit Testing", "Smoke Testing", "Regression Testing"],
        answer: 0,
      },
      {
        q: "What is API testing?",
        options: [
          "Testing backend interfaces",
          "Testing UI",
          "Testing CSS",
          "Testing database",
        ],
        answer: 0,
      },
      {
        q: "Which tool is used for API testing?",
        options: ["Postman", "Selenium", "JIRA", "Git"],
        answer: 0,
      },
      {
        q: "What is usability testing?",
        options: [
          "Testing user experience",
          "Testing code",
          "Testing performance",
          "Testing API",
        ],
        answer: 0,
      },
    ],

    4: [
      {
        q: "What is test-driven development (TDD)?",
        options: [
          "Write code then test",
          "Write test before code",
          "Skip testing",
          "Manual testing",
        ],
        answer: 1,
      },
      {
        q: "What is behavior-driven development (BDD)?",
        options: [
          "Focus on behavior",
          "Focus on code",
          "Skip testing",
          "Manual coding",
        ],
        answer: 0,
      },
      {
        q: "Which tool is used for BDD?",
        options: ["Cucumber", "Postman", "JIRA", "Docker"],
        answer: 0,
      },
      {
        q: "What is mutation testing?",
        options: [
          "Changing code to test robustness",
          "Testing UI",
          "Testing performance",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is fuzz testing?",
        options: [
          "Random inputs testing",
          "UI testing",
          "Manual testing",
          "Regression testing",
        ],
        answer: 0,
      },
      {
        q: "What is test automation framework?",
        options: [
          "Structure for automation tests",
          "UI design",
          "Code editor",
          "Database tool",
        ],
        answer: 0,
      },
      {
        q: "What is parallel testing?",
        options: [
          "Running tests simultaneously",
          "Running one test",
          "Skipping tests",
          "Manual testing",
        ],
        answer: 0,
      },
      {
        q: "Which testing checks compatibility?",
        options: ["Compatibility Testing", "Unit Testing", "Smoke Testing", "Regression Testing"],
        answer: 0,
      },
      {
        q: "What is exploratory testing?",
        options: [
          "Learning-based testing",
          "Predefined testing",
          "Automation testing",
          "Load testing",
        ],
        answer: 0,
      },
      {
        q: "What is continuous testing?",
        options: [
          "Testing in CI/CD pipeline",
          "Manual testing",
          "UI testing",
          "Code writing",
        ],
        answer: 0,
      },
    ],

    5: [
      {
        q: "What is shift-left testing?",
        options: [
          "Testing early in development",
          "Testing after release",
          "Testing UI",
          "Testing database",
        ],
        answer: 0,
      },
      {
        q: "What is chaos testing?",
        options: [
          "Testing system resilience",
          "Testing UI",
          "Testing database",
          "Testing API",
        ],
        answer: 0,
      },
      {
        q: "What is A/B testing?",
        options: [
          "Comparing two versions",
          "Testing code",
          "Testing UI",
          "Testing database",
        ],
        answer: 0,
      },
      {
        q: "What is canary release testing?",
        options: [
          "Releasing to small users",
          "Full release",
          "Testing UI",
          "Testing database",
        ],
        answer: 0,
      },
      {
        q: "What is contract testing?",
        options: [
          "Testing API agreements",
          "Testing UI",
          "Testing database",
          "Testing code",
        ],
        answer: 0,
      },
      {
        q: "What is test observability?",
        options: [
          "Monitoring test execution",
          "Writing test",
          "Running code",
          "Debugging UI",
        ],
        answer: 0,
      },
      {
        q: "What is flaky test?",
        options: [
          "Unstable test",
          "Stable test",
          "Manual test",
          "UI test",
        ],
        answer: 0,
      },
      {
        q: "What is test pyramid?",
        options: [
          "Strategy for test levels",
          "UI design",
          "Code structure",
          "Database design",
        ],
        answer: 0,
      },
      {
        q: "What is DevTestOps?",
        options: [
          "Testing integrated with DevOps",
          "Manual testing",
          "UI testing",
          "Code writing",
        ],
        answer: 0,
      },
      {
        q: "What is AI in testing?",
        options: [
          "Using AI for automation",
          "Manual testing",
          "UI design",
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

export default Advanced;