import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Advanceduiux
() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is the main goal of UX design?",
      options: [
        "Make design beautiful",
        "Improve user experience",
        "Write code",
        "Increase server speed",
      ],
      answer: 1,
    },
    {
      q: "Which tool is widely used for UI design?",
      options: ["Figma", "Git", "Node.js", "MongoDB"],
      answer: 0,
    },
    {
      q: "What is a wireframe?",
      options: [
        "Final design",
        "Basic layout structure",
        "Code file",
        "Database",
      ],
      answer: 1,
    },
    {
      q: "What is a prototype?",
      options: [
        "Final product",
        "Interactive design model",
        "Code snippet",
        "Database",
      ],
      answer: 1,
    },
    {
      q: "What is usability?",
      options: [
        "System speed",
        "Ease of use",
        "Code quality",
        "Database performance",
      ],
      answer: 1,
    },
    {
      q: "What is user persona?",
      options: [
        "Real user",
        "Fictional user profile",
        "UI design",
        "Code",
      ],
      answer: 1,
    },
    {
      q: "What is user journey?",
      options: [
        "User flow path",
        "Code execution",
        "Database flow",
        "API flow",
      ],
      answer: 0,
    },
    {
      q: "Which principle improves readability?",
      options: ["Contrast", "Latency", "API", "Cache"],
      answer: 0,
    },
    {
      q: "What is CTA?",
      options: [
        "Call To Action",
        "Code Testing Area",
        "Central Tech App",
        "Client Testing App",
      ],
      answer: 0,
    },
    {
      q: "What is responsive design?",
      options: [
        "Fast design",
        "Adapts to screen sizes",
        "Code optimization",
        "Database tuning",
      ],
      answer: 1,
    },
  ],

  2: [
    {
      q: "What is heuristic evaluation?",
      options: [
        "User testing",
        "Expert review of usability",
        "Code testing",
        "Performance testing",
      ],
      answer: 1,
    },
    {
      q: "What is A/B testing in UI/UX?",
      options: [
        "Testing code",
        "Comparing two design versions",
        "Testing API",
        "Testing database",
      ],
      answer: 1,
    },
    {
      q: "What is information architecture?",
      options: [
        "Code structure",
        "Organizing content",
        "Database schema",
        "API structure",
      ],
      answer: 1,
    },
    {
      q: "What is interaction design?",
      options: [
        "Designing APIs",
        "Designing user interactions",
        "Writing code",
        "Database design",
      ],
      answer: 1,
    },
    {
      q: "What is accessibility?",
      options: [
        "Fast UI",
        "Design usable by all users",
        "Code quality",
        "Database speed",
      ],
      answer: 1,
    },
    {
      q: "What is consistency in UI?",
      options: [
        "Same design patterns",
        "Different layouts",
        "Random UI",
        "Code repetition",
      ],
      answer: 0,
    },
    {
      q: "What is visual hierarchy?",
      options: [
        "Code structure",
        "Arranging elements by importance",
        "Database schema",
        "API flow",
      ],
      answer: 1,
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
      q: "What is whitespace?",
      options: [
        "Empty space in design",
        "Code gap",
        "Database space",
        "API space",
      ],
      answer: 0,
    },
    {
      q: "What is design system?",
      options: [
        "Collection of reusable components",
        "Code base",
        "Database",
        "API system",
      ],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is cognitive load?",
      options: [
        "User mental effort",
        "Server load",
        "Database load",
        "API load",
      ],
      answer: 0,
    },
    {
      q: "What is microinteraction?",
      options: [
        "Small UI animations/feedback",
        "Database query",
        "API response",
        "Code snippet",
      ],
      answer: 0,
    },
    {
      q: "What is dark pattern?",
      options: [
        "Ethical design",
        "Trick users into actions",
        "Fast UI",
        "Clean design",
      ],
      answer: 1,
    },
    {
      q: "What is affordance?",
      options: [
        "Visual cue for action",
        "Database structure",
        "API design",
        "Code pattern",
      ],
      answer: 0,
    },
    {
      q: "What is feedback in UI?",
      options: [
        "System response to user action",
        "Code output",
        "Database log",
        "API response",
      ],
      answer: 0,
    },
    {
      q: "What is progressive disclosure?",
      options: [
        "Show info gradually",
        "Show all at once",
        "Hide UI",
        "Skip UI",
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
      q: "What is Fitts’s Law?",
      options: [
        "Time to reach target",
        "Code speed",
        "Database size",
        "API speed",
      ],
      answer: 0,
    },
    {
      q: "What is Hick’s Law?",
      options: [
        "Decision time increases with choices",
        "Code speed",
        "Database speed",
        "API latency",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is design token?",
      options: [
        "Reusable design variables",
        "Code token",
        "Database token",
        "API token",
      ],
      answer: 0,
    },
    {
      q: "What is component-based design?",
      options: [
        "Reusable UI components",
        "Code splitting",
        "Database design",
        "API design",
      ],
      answer: 0,
    },
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
      q: "What is heatmap?",
      options: [
        "User interaction visualization",
        "Code map",
        "Database map",
        "API map",
      ],
      answer: 0,
    },
    {
      q: "What is eye-tracking?",
      options: [
        "Tracking user eye movement",
        "Code tracking",
        "Database tracking",
        "API tracking",
      ],
      answer: 0,
    },
    {
      q: "What is UX research?",
      options: [
        "Understanding user behavior",
        "Writing code",
        "Database testing",
        "API testing",
      ],
      answer: 0,
    },
    {
      q: "What is service design?",
      options: [
        "End-to-end experience design",
        "Code design",
        "Database design",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is design sprint?",
      options: [
        "Rapid problem-solving process",
        "Code sprint",
        "Database sprint",
        "API sprint",
      ],
      answer: 0,
    },
    {
      q: "What is UX metrics?",
      options: [
        "Measure user experience",
        "Code metrics",
        "Database metrics",
        "API metrics",
      ],
      answer: 0,
    },
    {
      q: "What is retention rate?",
      options: [
        "User return rate",
        "Code reuse",
        "Database storage",
        "API usage",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is design thinking?",
      options: [
        "User-centered problem solving",
        "Code thinking",
        "Database thinking",
        "API thinking",
      ],
      answer: 0,
    },
    {
      q: "What is UX strategy?",
      options: [
        "Long-term UX planning",
        "Code planning",
        "Database planning",
        "API planning",
      ],
      answer: 0,
    },
    {
      q: "What is omnichannel UX?",
      options: [
        "Consistent experience across platforms",
        "Single channel design",
        "Code structure",
        "Database design",
      ],
      answer: 0,
    },
    {
      q: "What is personalization in UX?",
      options: [
        "Custom experience per user",
        "Same UI for all",
        "Code optimization",
        "Database tuning",
      ],
      answer: 0,
    },
    {
      q: "What is UX audit?",
      options: [
        "Evaluate UX quality",
        "Code audit",
        "Database audit",
        "API audit",
      ],
      answer: 0,
    },
    {
      q: "What is conversion rate optimization?",
      options: [
        "Improve user actions",
        "Code optimization",
        "Database optimization",
        "API optimization",
      ],
      answer: 0,
    },
    {
      q: "What is emotional design?",
      options: [
        "Design that evokes feelings",
        "Code design",
        "Database design",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is UX maturity?",
      options: [
        "Level of UX adoption",
        "Code maturity",
        "Database maturity",
        "API maturity",
      ],
      answer: 0,
    },
    {
      q: "What is ethical design?",
      options: [
        "User-first honest design",
        "Tricking users",
        "Code design",
        "Database design",
      ],
      answer: 0,
    },
    {
      q: "What is future of UX?",
      options: [
        "AI-driven design",
        "Manual only",
        "No UX",
        "Static UI",
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

export default Advanceduiux
;