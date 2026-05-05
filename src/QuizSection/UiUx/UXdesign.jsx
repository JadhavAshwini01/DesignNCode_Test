import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function UXdesign() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
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
      q: "What is the main goal of UX design?",
      options: [
        "Make UI colorful",
        "Improve user experience",
        "Write code",
        "Design database",
      ],
      answer: 1,
    },
    {
      q: "Which focuses on user behavior?",
      options: ["UI", "UX", "Database", "API"],
      answer: 1,
    },
    {
      q: "What is usability?",
      options: [
        "Ease of use",
        "Speed of server",
        "Code quality",
        "Database size",
      ],
      answer: 0,
    },
    {
      q: "What is a user persona?",
      options: [
        "Real user",
        "Fictional user profile",
        "Code file",
        "Database",
      ],
      answer: 1,
    },
    {
      q: "What is user research?",
      options: [
        "Understanding users",
        "Writing code",
        "Database analysis",
        "API testing",
      ],
      answer: 0,
    },
    {
      q: "What is user journey?",
      options: [
        "User path through product",
        "Code execution",
        "Database flow",
        "API flow",
      ],
      answer: 0,
    },
    {
      q: "What is wireframe?",
      options: [
        "Basic layout",
        "Final UI",
        "Code",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is prototype?",
      options: [
        "Interactive model",
        "Final code",
        "Database",
        "Bug report",
      ],
      answer: 0,
    },
    {
      q: "What is feedback in UX?",
      options: [
        "System response",
        "Code output",
        "Database response",
        "API response",
      ],
      answer: 0,
    },
  ],

  2: [
    {
      q: "What is information architecture?",
      options: [
        "Organizing content",
        "Code structure",
        "Database schema",
        "API structure",
      ],
      answer: 0,
    },
    {
      q: "What is interaction design?",
      options: [
        "Designing user interactions",
        "Writing code",
        "Database design",
        "API design",
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
      q: "What is consistency in UX?",
      options: [
        "Uniform experience",
        "Random design",
        "Different layout",
        "Code duplication",
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
        "Expert review",
        "Code review",
        "Database review",
        "API review",
      ],
      answer: 0,
    },
    {
      q: "What is A/B testing?",
      options: [
        "Compare two versions",
        "Code testing",
        "Database testing",
        "API testing",
      ],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is cognitive load?",
      options: [
        "Mental effort",
        "Server load",
        "Database load",
        "API load",
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
        "Decision time increases with options",
        "Code speed",
        "Database speed",
        "API latency",
      ],
      answer: 0,
    },
    {
      q: "What is affordance?",
      options: [
        "Clue for action",
        "Code logic",
        "Database structure",
        "API",
      ],
      answer: 0,
    },
    {
      q: "What is mental model?",
      options: [
        "User understanding",
        "Code model",
        "Database model",
        "API model",
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
      q: "What is microcopy?",
      options: [
        "Small text guiding users",
        "Code text",
        "Database text",
        "API text",
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
      q: "What is feedback loop?",
      options: [
        "Continuous response system",
        "Code loop",
        "Database loop",
        "API loop",
      ],
      answer: 0,
    },
    {
      q: "What is task flow?",
      options: [
        "Steps to complete task",
        "Code flow",
        "Database flow",
        "API flow",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is UX research method?",
      options: [
        "User interviews",
        "Code testing",
        "Database testing",
        "API testing",
      ],
      answer: 0,
    },
    {
      q: "What is qualitative research?",
      options: [
        "User opinions",
        "Numbers",
        "Code metrics",
        "Database stats",
      ],
      answer: 0,
    },
    {
      q: "What is quantitative research?",
      options: [
        "Numerical data",
        "Opinions",
        "Code",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is heatmap?",
      options: [
        "User interaction map",
        "Code map",
        "Database map",
        "API map",
      ],
      answer: 0,
    },
    {
      q: "What is eye-tracking?",
      options: [
        "Tracking user gaze",
        "Code tracking",
        "Database tracking",
        "API tracking",
      ],
      answer: 0,
    },
    {
      q: "What is usability metric?",
      options: [
        "Measure UX quality",
        "Code metric",
        "Database metric",
        "API metric",
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
    {
      q: "What is churn rate?",
      options: [
        "Users leaving",
        "Code error",
        "Database issue",
        "API issue",
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
      q: "What is usability benchmark?",
      options: [
        "UX standard",
        "Code standard",
        "Database standard",
        "API standard",
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
        "Understanding user feelings",
        "Code understanding",
        "Database understanding",
        "API understanding",
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
        "Single channel",
        "Code structure",
        "Database design",
      ],
      answer: 0,
    },
    {
      q: "What is personalization?",
      options: [
        "Custom experience",
        "Same UI",
        "Code optimization",
        "Database tuning",
      ],
      answer: 0,
    },
    {
      q: "What is emotional design?",
      options: [
        "Design for feelings",
        "Code design",
        "Database design",
        "API design",
      ],
      answer: 0,
    },
    {
      q: "What is ethical UX?",
      options: [
        "Honest user-first design",
        "Trick users",
        "Code design",
        "Database design",
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
      q: "What is AI in UX?",
      options: [
        "Smart personalization",
        "Manual UX",
        "Static UI",
        "No UX",
      ],
      answer: 0,
    },
    {
      q: "What is future of UX?",
      options: [
        "AI-driven experience",
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

export default UXdesign;