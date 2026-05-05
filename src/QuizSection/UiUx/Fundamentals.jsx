import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Fundamentals() {
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
        "User Input",
        "User Internet",
      ],
      answer: 0,
    },
    {
      q: "What does UX stand for?",
      options: [
        "User Experience",
        "User Execution",
        "User Extension",
        "User Example",
      ],
      answer: 0,
    },
    {
      q: "Which focuses on user experience?",
      options: ["UI", "UX", "Code", "Database"],
      answer: 1,
    },
    {
      q: "Which focuses on visual design?",
      options: ["UX", "UI", "Testing", "API"],
      answer: 1,
    },
    {
      q: "Which tool is used for UI design?",
      options: ["Figma", "Git", "Node.js", "MongoDB"],
      answer: 0,
    },
    {
      q: "What is a wireframe?",
      options: [
        "Final design",
        "Basic layout",
        "Code file",
        "Database",
      ],
      answer: 1,
    },
    {
      q: "What is a prototype?",
      options: [
        "Interactive model",
        "Final code",
        "Database",
        "Bug report",
      ],
      answer: 0,
    },
    {
      q: "What is usability?",
      options: [
        "Ease of use",
        "Speed",
        "Code quality",
        "Database performance",
      ],
      answer: 0,
    },
    {
      q: "What is responsive design?",
      options: [
        "Fast UI",
        "Adapts to screen sizes",
        "Code optimization",
        "Database design",
      ],
      answer: 1,
    },
    {
      q: "What is a button used for?",
      options: [
        "Navigation/action",
        "Decoration",
        "Database",
        "API",
      ],
      answer: 0,
    },
  ],

  2: [
    {
      q: "What is layout in UI?",
      options: [
        "Arrangement of elements",
        "Code structure",
        "Database schema",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is color theory?",
      options: [
        "Use of colors in design",
        "Code logic",
        "Database color",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is typography?",
      options: [
        "Font styling",
        "Code writing",
        "Database",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is alignment?",
      options: [
        "Positioning elements properly",
        "Code alignment",
        "Database structure",
        "API alignment",
      ],
      answer: 0,
    },
    {
      q: "What is contrast?",
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
        "Same design patterns",
        "Random UI",
        "Different layout",
        "Code duplication",
      ],
      answer: 0,
    },
    {
      q: "What is spacing?",
      options: [
        "Gap between elements",
        "Code gap",
        "Database gap",
        "API gap",
      ],
      answer: 0,
    },
    {
      q: "What is navigation?",
      options: [
        "Moving between pages",
        "Writing code",
        "Database flow",
        "API call",
      ],
      answer: 0,
    },
    {
      q: "What is icon?",
      options: [
        "Visual symbol",
        "Code",
        "Database",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is grid system?",
      options: [
        "Layout structure",
        "Code block",
        "Database",
        "API",
      ],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is user persona?",
      options: [
        "Fictional user profile",
        "Real code",
        "Database",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is user journey?",
      options: [
        "User path flow",
        "Code flow",
        "Database flow",
        "API flow",
      ],
      answer: 0,
    },
    {
      q: "What is information architecture?",
      options: [
        "Organizing content",
        "Code structure",
        "Database schema",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is interaction design?",
      options: [
        "Designing user interactions",
        "Writing code",
        "Database",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is accessibility?",
      options: [
        "Design for all users",
        "Code performance",
        "Database",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is feedback in UI?",
      options: [
        "Response to user action",
        "Code output",
        "Database response",
        "API response",
      ],
      answer: 0,
    },
    {
      q: "What is CTA?",
      options: [
        "Call To Action",
        "Code Testing App",
        "Central Tech Area",
        "Client Testing App",
      ],
      answer: 0,
    },
    {
      q: "What is onboarding?",
      options: [
        "User introduction process",
        "Code writing",
        "Database setup",
        "API setup",
      ],
      answer: 0,
    },
    {
      q: "What is mobile-first design?",
      options: [
        "Design for mobile first",
        "Design for desktop first",
        "Database first",
        "API first",
      ],
      answer: 0,
    },
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
  ],

  4: [
    {
      q: "What is usability testing?",
      options: [
        "Testing user experience",
        "Testing code",
        "Testing database",
        "Testing API",
      ],
      answer: 0,
    },
    {
      q: "What is heuristic evaluation?",
      options: [
        "Expert review of UI",
        "Code review",
        "Database review",
        "API review",
      ],
      answer: 0,
    },
    {
      q: "What is A/B testing?",
      options: [
        "Compare two designs",
        "Code testing",
        "Database testing",
        "API testing",
      ],
      answer: 0,
    },
    {
      q: "What is consistency in UX?",
      options: [
        "Same experience across UI",
        "Different UI",
        "Random UI",
        "Code duplication",
      ],
      answer: 0,
    },
    {
      q: "What is affordance?",
      options: [
        "Visual clue for action",
        "Code logic",
        "Database structure",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is error prevention?",
      options: [
        "Avoid user mistakes",
        "Code errors",
        "Database errors",
        "API errors",
      ],
      answer: 0,
    },
    {
      q: "What is learnability?",
      options: [
        "Easy to learn UI",
        "Code learning",
        "Database learning",
        "API learning",
      ],
      answer: 0,
    },
    {
      q: "What is efficiency in UX?",
      options: [
        "Fast task completion",
        "Code speed",
        "Database speed",
        "API speed",
      ],
      answer: 0,
    },
    {
      q: "What is satisfaction in UX?",
      options: [
        "User happiness",
        "Code quality",
        "Database",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is memorability?",
      options: [
        "Easy to remember UI",
        "Code memory",
        "Database memory",
        "API memory",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is design thinking?",
      options: [
        "User-centered approach",
        "Code thinking",
        "Database thinking",
        "API thinking",
      ],
      answer: 0,
    },
    {
      q: "What is empathy in UX?",
      options: [
        "Understanding user needs",
        "Code understanding",
        "Database understanding",
        "API understanding",
      ],
      answer: 0,
    },
    {
      q: "What is prototyping iteration?",
      options: [
        "Repeated improvement of design",
        "Code iteration",
        "Database iteration",
        "API iteration",
      ],
      answer: 0,
    },
    {
      q: "What is user-centered design?",
      options: [
        "Focus on user needs",
        "Focus on code",
        "Focus on database",
        "Focus on API",
      ],
      answer: 0,
    },
    {
      q: "What is simplicity in design?",
      options: [
        "Keep UI minimal",
        "Complex UI",
        "Heavy code",
        "Large database",
      ],
      answer: 0,
    },
    {
      q: "What is consistency principle?",
      options: [
        "Uniform UI design",
        "Different UI",
        "Random UI",
        "Code repetition",
      ],
      answer: 0,
    },
    {
      q: "What is feedback loop?",
      options: [
        "Continuous user feedback",
        "Code loop",
        "Database loop",
        "API loop",
      ],
      answer: 0,
    },
    {
      q: "What is scalability in design?",
      options: [
        "Design grows easily",
        "Code scaling",
        "Database scaling",
        "API scaling",
      ],
      answer: 0,
    },
    {
      q: "What is innovation in UX?",
      options: [
        "Creative solutions",
        "Code reuse",
        "Database reuse",
        "API reuse",
      ],
      answer: 0,
    },
    {
      q: "What is minimalism?",
      options: [
        "Simple clean design",
        "Complex UI",
        "Heavy UI",
        "Random UI",
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

export default Fundamentals;