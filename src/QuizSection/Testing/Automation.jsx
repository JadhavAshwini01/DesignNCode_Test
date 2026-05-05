import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Automation() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is automation testing?",
      options: [
        "Manual testing",
        "Testing using tools/scripts",
        "Testing UI only",
        "Testing database only",
      ],
      answer: 1,
    },
    {
      q: "Which tool is commonly used for automation testing?",
      options: ["Selenium", "Figma", "Photoshop", "Excel"],
      answer: 0,
    },
    {
      q: "Which language is used with Selenium?",
      options: ["Java", "Python", "C#", "All of the above"],
      answer: 3,
    },
    {
      q: "What is a test script?",
      options: [
        "Bug report",
        "Code to automate tests",
        "Requirement doc",
        "UI design",
      ],
      answer: 1,
    },
    {
      q: "What is Selenium WebDriver?",
      options: [
        "Testing framework",
        "Automation tool for browsers",
        "Database tool",
        "API tool",
      ],
      answer: 1,
    },
    {
      q: "Which testing can be automated?",
      options: [
        "Repetitive tasks",
        "One-time testing",
        "Exploratory testing",
        "Random testing",
      ],
      answer: 0,
    },
    {
      q: "What is the purpose of assertions?",
      options: [
        "Write code",
        "Validate expected result",
        "Design UI",
        "Run database",
      ],
      answer: 1,
    },
    {
      q: "Which tool is used for API automation testing?",
      options: ["Postman", "Selenium", "Figma", "JIRA"],
      answer: 0,
    },
    {
      q: "What is test case automation?",
      options: [
        "Manual execution",
        "Automating test cases using scripts",
        "Skipping tests",
        "Writing documentation",
      ],
      answer: 1,
    },
    {
      q: "Which is NOT an automation tool?",
      options: ["Selenium", "JUnit", "TestNG", "MS Word"],
      answer: 3,
    },
  ],

  2: [
    {
      q: "What is TestNG?",
      options: [
        "Programming language",
        "Testing framework",
        "Database tool",
        "UI tool",
      ],
      answer: 1,
    },
    {
      q: "What is JUnit?",
      options: [
        "Testing framework",
        "Automation tool",
        "Browser",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is Page Object Model (POM)?",
      options: [
        "Design pattern for UI automation",
        "Database structure",
        "API testing method",
        "Manual testing",
      ],
      answer: 0,
    },
    {
      q: "What is a locator in Selenium?",
      options: [
        "Finding elements",
        "Running tests",
        "Writing code",
        "Debugging",
      ],
      answer: 0,
    },
    {
      q: "Which is a Selenium locator?",
      options: ["id", "className", "xpath", "All of the above"],
      answer: 3,
    },
    {
      q: "What is implicit wait?",
      options: [
        "Wait globally",
        "Wait for specific element",
        "No wait",
        "Manual delay",
      ],
      answer: 0,
    },
    {
      q: "What is explicit wait?",
      options: [
        "Global wait",
        "Wait for condition",
        "No wait",
        "Manual testing",
      ],
      answer: 1,
    },
    {
      q: "What is a test suite?",
      options: [
        "Single test",
        "Collection of tests",
        "Bug report",
        "Database",
      ],
      answer: 1,
    },
    {
      q: "What is CI/CD?",
      options: [
        "Continuous Integration & Deployment",
        "Code writing",
        "UI design",
        "Database testing",
      ],
      answer: 0,
    },
    {
      q: "Which tool is used in CI/CD?",
      options: ["Jenkins", "Figma", "Excel", "Photoshop"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is data-driven testing?",
      options: [
        "Testing with multiple data inputs",
        "Testing UI",
        "Testing API",
        "Testing performance",
      ],
      answer: 0,
    },
    {
      q: "What is keyword-driven testing?",
      options: [
        "Using keywords to define tests",
        "Manual testing",
        "API testing",
        "Database testing",
      ],
      answer: 0,
    },
    {
      q: "What is hybrid framework?",
      options: [
        "Combination of frameworks",
        "Manual testing",
        "UI design",
        "Database testing",
      ],
      answer: 0,
    },
    {
      q: "What is headless browser?",
      options: [
        "Browser without UI",
        "UI browser",
        "Mobile browser",
        "Database browser",
      ],
      answer: 0,
    },
    {
      q: "What is cross-browser testing?",
      options: [
        "Testing on different browsers",
        "Testing API",
        "Testing database",
        "Testing UI only",
      ],
      answer: 0,
    },
    {
      q: "Which tool supports cross-browser testing?",
      options: ["Selenium Grid", "Postman", "JIRA", "Git"],
      answer: 0,
    },
    {
      q: "What is parallel execution?",
      options: [
        "Running tests simultaneously",
        "Running one test",
        "Skipping tests",
        "Manual testing",
      ],
      answer: 0,
    },
    {
      q: "What is Maven used for?",
      options: [
        "Build tool",
        "UI design",
        "Database",
        "Testing only",
      ],
      answer: 0,
    },
    {
      q: "What is Gradle?",
      options: [
        "Build automation tool",
        "Database tool",
        "UI tool",
        "Manual testing",
      ],
      answer: 0,
    },
    {
      q: "What is logging in automation?",
      options: [
        "Recording execution details",
        "Writing code",
        "Designing UI",
        "Running database",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is Selenium Grid?",
      options: [
        "Run tests on multiple machines",
        "UI tool",
        "Database tool",
        "API tool",
      ],
      answer: 0,
    },
    {
      q: "What is Docker used for in testing?",
      options: [
        "Containerization",
        "UI design",
        "Code writing",
        "Manual testing",
      ],
      answer: 0,
    },
    {
      q: "What is Jenkins pipeline?",
      options: [
        "Automated workflow",
        "Manual testing",
        "UI design",
        "Database testing",
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
      q: "What is retry mechanism?",
      options: [
        "Re-run failed tests",
        "Skip tests",
        "Manual testing",
        "UI testing",
      ],
      answer: 0,
    },
    {
      q: "What is test report?",
      options: [
        "Execution summary",
        "Bug",
        "Code",
        "UI",
      ],
      answer: 0,
    },
    {
      q: "Which tool generates reports?",
      options: ["Allure", "Figma", "Excel", "Photoshop"],
      answer: 0,
    },
    {
      q: "What is version control?",
      options: [
        "Managing code versions",
        "UI design",
        "Testing only",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "Which tool is used for version control?",
      options: ["Git", "JIRA", "Postman", "Docker"],
      answer: 0,
    },
    {
      q: "What is test environment?",
      options: [
        "Setup for testing",
        "UI design",
        "Code writing",
        "Database only",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is shift-left testing in automation?",
      options: [
        "Testing early",
        "Testing late",
        "UI testing",
        "Database testing",
      ],
      answer: 0,
    },
    {
      q: "What is CI integration with Selenium?",
      options: [
        "Running tests automatically",
        "Manual testing",
        "UI testing",
        "Database testing",
      ],
      answer: 0,
    },
    {
      q: "What is BDD in automation?",
      options: [
        "Behavior Driven Development",
        "Bug Driven Development",
        "Build Design Dev",
        "Basic Dev",
      ],
      answer: 0,
    },
    {
      q: "Which tool is used for BDD?",
      options: ["Cucumber", "Postman", "JIRA", "Git"],
      answer: 0,
    },
    {
      q: "What is test orchestration?",
      options: [
        "Managing test execution flow",
        "UI design",
        "Manual testing",
        "Database testing",
      ],
      answer: 0,
    },
    {
      q: "What is AI in automation testing?",
      options: [
        "Smart test generation",
        "Manual testing",
        "UI design",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is self-healing test?",
      options: [
        "Auto-fix locators",
        "Manual testing",
        "UI testing",
        "Database testing",
      ],
      answer: 0,
    },
    {
      q: "What is test scalability?",
      options: [
        "Handling large test execution",
        "UI design",
        "Manual testing",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is cloud testing?",
      options: [
        "Testing on cloud platforms",
        "Manual testing",
        "UI testing",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "Which platform supports cloud testing?",
      options: ["BrowserStack", "Figma", "Excel", "Photoshop"],
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

export default Automation;