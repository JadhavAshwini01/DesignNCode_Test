import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function UIdesign() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What does UI stand for?",
      options: [
        "User Interface",
        "User Interaction",
        "User Internet",
        "User Input",
      ],
      answer: 0,
    },
    {
      q: "What is UI design mainly focused on?",
      options: [
        "Visual layout",
        "Database",
        "Backend logic",
        "API",
      ],
      answer: 0,
    },
    {
      q: "Which tool is used for UI design?",
      options: ["Figma", "Git", "Node.js", "MongoDB"],
      answer: 0,
    },
    {
      q: "What is a button in UI?",
      options: [
        "Clickable element",
        "Database",
        "API",
        "Code block",
      ],
      answer: 0,
    },
    {
      q: "What is color in UI used for?",
      options: [
        "Visual appeal",
        "Database storage",
        "API calls",
        "Code execution",
      ],
      answer: 0,
    },
    {
      q: "What is layout?",
      options: [
        "Arrangement of elements",
        "Code logic",
        "Database structure",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is typography?",
      options: [
        "Font styling",
        "Database style",
        "API format",
        "Code format",
      ],
      answer: 0,
    },
    {
      q: "What is icon?",
      options: [
        "Visual symbol",
        "Code snippet",
        "Database",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is spacing?",
      options: [
        "Space between elements",
        "Code gap",
        "Database gap",
        "API gap",
      ],
      answer: 0,
    },
    {
      q: "What is alignment?",
      options: [
        "Positioning elements",
        "Code alignment",
        "Database alignment",
        "API alignment",
      ],
      answer: 0,
    },
  ],

  2: [
    {
      q: "What is contrast in UI?",
      options: [
        "Difference between elements",
        "Code difference",
        "Database size",
        "API speed",
      ],
      answer: 0,
    },
    {
      q: "What is consistency?",
      options: [
        "Uniform design",
        "Random design",
        "Different layout",
        "Code duplication",
      ],
      answer: 0,
    },
    {
      q: "What is grid system?",
      options: [
        "Layout structure",
        "Code block",
        "Database grid",
        "API grid",
      ],
      answer: 0,
    },
    {
      q: "What is responsive UI?",
      options: [
        "Adapts to screen size",
        "Fast UI",
        "Backend logic",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is color palette?",
      options: [
        "Set of colors",
        "Code colors",
        "Database colors",
        "API colors",
      ],
      answer: 0,
    },
    {
      q: "What is UI component?",
      options: [
        "Reusable element",
        "Database",
        "API",
        "Code logic",
      ],
      answer: 0,
    },
    {
      q: "What is navigation bar?",
      options: [
        "Menu for navigation",
        "Database",
        "API",
        "Code",
      ],
      answer: 0,
    },
    {
      q: "What is card UI?",
      options: [
        "Content container",
        "Database",
        "API",
        "Code",
      ],
      answer: 0,
    },
    {
      q: "What is dropdown?",
      options: [
        "Expandable menu",
        "Database",
        "API",
        "Code",
      ],
      answer: 0,
    },
    {
      q: "What is input field?",
      options: [
        "User data entry",
        "Database",
        "API",
        "Code",
      ],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is visual hierarchy?",
      options: [
        "Arrange elements by importance",
        "Code order",
        "Database order",
        "API order",
      ],
      answer: 0,
    },
    {
      q: "What is whitespace?",
      options: [
        "Empty space",
        "Code gap",
        "Database gap",
        "API gap",
      ],
      answer: 0,
    },
    {
      q: "What is CTA button?",
      options: [
        "Call To Action",
        "Code Testing Area",
        "Central Tech Area",
        "Client Tool App",
      ],
      answer: 0,
    },
    {
      q: "What is hover effect?",
      options: [
        "Change on mouse over",
        "Code change",
        "Database change",
        "API change",
      ],
      answer: 0,
    },
    {
      q: "What is animation in UI?",
      options: [
        "Motion effects",
        "Code execution",
        "Database animation",
        "API animation",
      ],
      answer: 0,
    },
    {
      q: "What is shadow in UI?",
      options: [
        "Depth effect",
        "Code shadow",
        "Database shadow",
        "API shadow",
      ],
      answer: 0,
    },
    {
      q: "What is border radius?",
      options: [
        "Rounded corners",
        "Code radius",
        "Database radius",
        "API radius",
      ],
      answer: 0,
    },
    {
      q: "What is theme?",
      options: [
        "Design style",
        "Code theme",
        "Database theme",
        "API theme",
      ],
      answer: 0,
    },
    {
      q: "What is dark mode?",
      options: [
        "Dark UI theme",
        "Code mode",
        "Database mode",
        "API mode",
      ],
      answer: 0,
    },
    {
      q: "What is light mode?",
      options: [
        "Light UI theme",
        "Code mode",
        "Database mode",
        "API mode",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is design system?",
      options: [
        "Reusable UI rules/components",
        "Code system",
        "Database system",
        "API system",
      ],
      answer: 0,
    },
    {
      q: "What is component-based design?",
      options: [
        "Reusable components",
        "Code splitting",
        "Database design",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is UI scalability?",
      options: [
        "Design works for growth",
        "Code scaling",
        "Database scaling",
        "API scaling",
      ],
      answer: 0,
    },
    {
      q: "What is pixel-perfect design?",
      options: [
        "Exact design match",
        "Code perfection",
        "Database perfection",
        "API perfection",
      ],
      answer: 0,
    },
    {
      q: "What is design consistency?",
      options: [
        "Same UI patterns",
        "Random UI",
        "Different UI",
        "Code duplication",
      ],
      answer: 0,
    },
    {
      q: "What is UI feedback?",
      options: [
        "Response to action",
        "Code output",
        "Database output",
        "API output",
      ],
      answer: 0,
    },
    {
      q: "What is loading indicator?",
      options: [
        "Shows loading state",
        "Code loader",
        "Database loader",
        "API loader",
      ],
      answer: 0,
    },
    {
      q: "What is skeleton screen?",
      options: [
        "Placeholder UI",
        "Code screen",
        "Database screen",
        "API screen",
      ],
      answer: 0,
    },
    {
      q: "What is modal?",
      options: [
        "Popup window",
        "Database",
        "API",
        "Code",
      ],
      answer: 0,
    },
    {
      q: "What is toast message?",
      options: [
        "Small notification",
        "Code message",
        "Database alert",
        "API alert",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is design token?",
      options: [
        "Reusable style variable",
        "Code token",
        "Database token",
        "API token",
      ],
      answer: 0,
    },
    {
      q: "What is UI accessibility?",
      options: [
        "Design for all users",
        "Code accessibility",
        "Database access",
        "API access",
      ],
      answer: 0,
    },
    {
      q: "What is motion design?",
      options: [
        "Animated UI interactions",
        "Code motion",
        "Database motion",
        "API motion",
      ],
      answer: 0,
    },
    {
      q: "What is micro-interaction?",
      options: [
        "Small UI interaction",
        "Code interaction",
        "Database interaction",
        "API interaction",
      ],
      answer: 0,
    },
    {
      q: "What is UI optimization?",
      options: [
        "Improve performance & usability",
        "Code optimization",
        "Database optimization",
        "API optimization",
      ],
      answer: 0,
    },
    {
      q: "What is adaptive design?",
      options: [
        "Different layouts per device",
        "Code adaptation",
        "Database adaptation",
        "API adaptation",
      ],
      answer: 0,
    },
    {
      q: "What is atomic design?",
      options: [
        "Building UI from small components",
        "Code structure",
        "Database structure",
        "API structure",
      ],
      answer: 0,
    },
    {
      q: "What is UI branding?",
      options: [
        "Visual identity",
        "Code branding",
        "Database branding",
        "API branding",
      ],
      answer: 0,
    },
    {
      q: "What is UI performance?",
      options: [
        "Fast rendering",
        "Code speed",
        "Database speed",
        "API speed",
      ],
      answer: 0,
    },
    {
      q: "What is future of UI design?",
      options: [
        "AI & interactive UI",
        "Static UI",
        "No UI",
        "Only code",
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

export default UIdesign;