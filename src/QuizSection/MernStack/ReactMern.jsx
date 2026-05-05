import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function React() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const reactQuestions = {
        1: [
            {
                q: "What is React?",
                options: [
                    "JavaScript library",
                    "Framework",
                    "Database",
                    "Language",
                ],
                answer: 0,
            },
            {
                q: "Who developed React?",
                options: ["Facebook", "Google", "Microsoft", "Amazon"],
                answer: 0,
            },
            {
                q: "What is JSX?",
                options: [
                    "JavaScript XML",
                    "Java Syntax Extension",
                    "JSON XML",
                    "None",
                ],
                answer: 0,
            },
            {
                q: "Which function creates component?",
                options: ["Function", "Class", "Both", "None"],
                answer: 2,
            },
            {
                q: "Which hook manages state?",
                options: ["useState", "useEffect", "useRef", "useMemo"],
                answer: 0,
            },
            {
                q: "Which hook handles side effects?",
                options: ["useEffect", "useState", "useRef", "useMemo"],
                answer: 0,
            },
            {
                q: "What is component?",
                options: [
                    "Reusable UI block",
                    "Database",
                    "API",
                    "Server",
                ],
                answer: 0,
            },
            {
                q: "Which method renders UI?",
                options: ["render", "display", "show", "view"],
                answer: 0,
            },
            {
                q: "Which concept passes data?",
                options: ["Props", "State", "Hook", "Event"],
                answer: 0,
            },
            {
                q: "Which concept stores data?",
                options: ["State", "Props", "Hook", "Event"],
                answer: 0,
            },
        ],

        2: [
            {
                q: "Which hook references DOM?",
                options: ["useRef", "useState", "useEffect", "useMemo"],
                answer: 0,
            },
            {
                q: "Which hook optimizes performance?",
                options: ["useMemo", "useState", "useEffect", "useRef"],
                answer: 0,
            },
            {
                q: "Which hook handles context?",
                options: ["useContext", "useState", "useEffect", "useRef"],
                answer: 0,
            },
            {
                q: "Which hook handles reducer?",
                options: ["useReducer", "useState", "useEffect", "useRef"],
                answer: 0,
            },
            {
                q: "What is Virtual DOM?",
                options: [
                    "Lightweight DOM copy",
                    "Real DOM",
                    "Database",
                    "Server",
                ],
                answer: 0,
            },
            {
                q: "What is reconciliation?",
                options: [
                    "DOM update process",
                    "Rendering",
                    "Data fetch",
                    "None",
                ],
                answer: 0,
            },
            {
                q: "Which event handles click?",
                options: ["onClick", "onChange", "onSubmit", "onHover"],
                answer: 0,
            },
            {
                q: "Which event handles form submit?",
                options: ["onSubmit", "onClick", "onChange", "onHover"],
                answer: 0,
            },
            {
                q: "Which event handles input change?",
                options: ["onChange", "onClick", "onSubmit", "onHover"],
                answer: 0,
            },
            {
                q: "Which concept updates UI?",
                options: ["Re-render", "Compile", "Execute", "None"],
                answer: 0,
            },
        ],

        3: [
            {
                q: "Which concept lifts state up?",
                options: ["Lifting State", "Props", "Hooks", "None"],
                answer: 0,
            },
            {
                q: "Which concept avoids prop drilling?",
                options: ["Context API", "Props", "State", "Hooks"],
                answer: 0,
            },
            {
                q: "Which concept handles routing?",
                options: ["React Router", "Redux", "Axios", "Node"],
                answer: 0,
            },
            {
                q: "Which component handles routes?",
                options: ["Routes", "Route", "Link", "All"],
                answer: 3,
            },
            {
                q: "Which library manages state?",
                options: ["Redux", "React", "HTML", "CSS"],
                answer: 0,
            },
            {
                q: "Which concept handles async calls?",
                options: ["Axios", "Fetch", "Both", "None"],
                answer: 2,
            },
            {
                q: "Which hook fetches data?",
                options: ["useEffect", "useState", "useRef", "useMemo"],
                answer: 0,
            },
            {
                q: "Which concept improves performance?",
                options: ["Memoization", "Rendering", "Compile", "None"],
                answer: 0,
            },
            {
                q: "Which component avoids re-render?",
                options: ["React.memo", "useState", "useEffect", "useRef"],
                answer: 0,
            },
            {
                q: "Which concept splits code?",
                options: ["Code Splitting", "Rendering", "Compile", "None"],
                answer: 0,
            },
        ],

        4: [
            {
                q: "Which concept handles forms?",
                options: ["Controlled Component", "Uncontrolled", "Both", "None"],
                answer: 2,
            },
            {
                q: "Which concept uses state for form?",
                options: ["Controlled", "Uncontrolled", "None", "Static"],
                answer: 0,
            },
            {
                q: "Which concept uses refs for form?",
                options: ["Uncontrolled", "Controlled", "None", "Static"],
                answer: 0,
            },
            {
                q: "Which concept validates input?",
                options: ["Validation", "Rendering", "Compile", "None"],
                answer: 0,
            },
            {
                q: "Which concept handles error?",
                options: ["Error Boundary", "State", "Props", "Hook"],
                answer: 0,
            },
            {
                q: "Which concept manages styles?",
                options: ["CSS", "Inline", "Styled Components", "All"],
                answer: 3,
            },
            {
                q: "Which concept loads components lazily?",
                options: ["Lazy Loading", "Rendering", "Compile", "None"],
                answer: 0,
            },
            {
                q: "Which concept handles API calls?",
                options: ["Axios", "Fetch", "Both", "None"],
                answer: 2,
            },
            {
                q: "Which concept manages side effects?",
                options: ["useEffect", "useState", "useRef", "useMemo"],
                answer: 0,
            },
            {
                q: "Which concept improves UX?",
                options: ["Loading State", "Error State", "Skeleton", "All"],
                answer: 3,
            },
        ],

        5: [
            {
                q: "Which concept builds large apps?",
                options: ["Component Architecture", "UI", "DB", "None"],
                answer: 0,
            },
            {
                q: "Which concept manages global state?",
                options: ["Redux", "useState", "useEffect", "useRef"],
                answer: 0,
            },
            {
                q: "Which concept improves scalability?",
                options: ["Modular Design", "Static", "Manual", "None"],
                answer: 0,
            },
            {
                q: "Which concept optimizes bundle?",
                options: ["Code Splitting", "Rendering", "Compile", "None"],
                answer: 0,
            },
            {
                q: "Which concept secures app?",
                options: ["Auth", "UI", "DB", "None"],
                answer: 0,
            },
            {
                q: "Which concept handles routing efficiently?",
                options: ["Dynamic Routing", "Static", "Manual", "None"],
                answer: 0,
            },
            {
                q: "Which concept improves SEO?",
                options: ["SSR", "CSR", "Static", "None"],
                answer: 0,
            },
            {
                q: "Which concept renders on server?",
                options: ["SSR", "CSR", "Static", "None"],
                answer: 0,
            },
            {
                q: "Which concept renders on client?",
                options: ["CSR", "SSR", "Static", "None"],
                answer: 0,
            },
            {
                q: "Which concept builds modern apps?",
                options: ["React", "HTML", "CSS", "None"],
                answer: 0,
            },
        ],
    };
    
  const questions = activeLevel !== null ? reactQuestions[activeLevel] : [];
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
        <h1 className="level-title">COLLECTIONS QUIZ</h1>

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

export default React;