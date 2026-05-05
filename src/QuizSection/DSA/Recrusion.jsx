import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Recrusion () {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is recursion?",
      options: [
        "Function calling itself",
        "Loop",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is base case?",
      options: [
        "Stopping condition",
        "Loop condition",
        "Sorting condition",
        "Search condition",
      ],
      answer: 0,
    },
    {
      q: "What is recursive case?",
      options: [
        "Function calls itself",
        "Stops execution",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What happens without base case?",
      options: [
        "Infinite recursion",
        "Stops normally",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is call stack?",
      options: [
        "Stores function calls",
        "Queue",
        "Array",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "Which structure used in recursion?",
      options: ["Stack", "Queue", "Array", "Graph"],
      answer: 0,
    },
    {
      q: "What is stack overflow?",
      options: [
        "Too many recursive calls",
        "Too few calls",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "Which is recursive problem?",
      options: ["Factorial", "Sorting", "Searching", "Traversal"],
      answer: 0,
    },
    {
      q: "What is recursion depth?",
      options: [
        "Number of calls",
        "Number of loops",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is tail recursion?",
      options: [
        "Recursive call at end",
        "Call at start",
        "No recursion",
        "Loop",
      ],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Time complexity of recursion depends on?",
      options: [
        "Number of calls",
        "Only loops",
        "Only variables",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Space complexity in recursion?",
      options: [
        "Call stack usage",
        "Only variables",
        "Only loops",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is factorial using recursion?",
      options: [
        "n * factorial(n-1)",
        "n + n",
        "n - n",
        "n / n",
      ],
      answer: 0,
    },
    {
      q: "What is Fibonacci recursion?",
      options: [
        "f(n) = f(n-1)+f(n-2)",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion tree?",
      options: [
        "Tree of calls",
        "Binary tree",
        "Graph",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "What is divide and conquer?",
      options: [
        "Divide problem into parts",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which algorithm uses recursion?",
      options: ["Merge Sort", "Linear Search", "Queue", "Stack"],
      answer: 0,
    },
    {
      q: "What is recursive traversal?",
      options: [
        "Tree traversal using recursion",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion vs iteration?",
      options: [
        "Function vs loop",
        "Same",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "Which is faster generally?",
      options: [
        "Iteration",
        "Recursion",
        "Same",
        "Depends",
      ],
      answer: 3,
    },
  ],

  3: [
    {
      q: "What is backtracking?",
      options: [
        "Try all possibilities",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which uses recursion?",
      options: ["Backtracking", "Queue", "Stack", "Array"],
      answer: 0,
    },
    {
      q: "What is recursion pattern?",
      options: [
        "Base + recursive case",
        "Loop",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is subset generation?",
      options: [
        "All combinations",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is permutation problem?",
      options: [
        "Arrange elements",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is N-Queens?",
      options: [
        "Backtracking problem",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion on arrays?",
      options: [
        "Solve using recursion",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion on strings?",
      options: [
        "Solve string problems",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion stack space?",
      options: [
        "Memory for calls",
        "Heap memory",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is optimization in recursion?",
      options: [
        "Reduce calls",
        "Increase calls",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is memoization?",
      options: [
        "Store results",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP with recursion?",
      options: [
        "Recursion + memoization",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is tail recursion optimization?",
      options: [
        "Convert to loop",
        "Increase calls",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is recursion elimination?",
      options: [
        "Convert to iteration",
        "Increase calls",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is stack frame?",
      options: [
        "Function call data",
        "Queue",
        "Array",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is recursion limit?",
      options: [
        "Max depth",
        "Min depth",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is tree recursion?",
      options: [
        "Multiple calls",
        "Single call",
        "Loop",
        "Sorting",
      ],
      answer: 0,
    },
    {
      q: "What is linear recursion?",
      options: [
        "Single recursive call",
        "Multiple calls",
        "Loop",
        "Sorting",
      ],
      answer: 0,
    },
    {
      q: "What is mutual recursion?",
      options: [
        "Functions call each other",
        "Single function",
        "Loop",
        "Sorting",
      ],
      answer: 0,
    },
    {
      q: "What is recursion debugging?",
      options: [
        "Trace calls",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is recursion complexity?",
      options: [
        "Depends on calls",
        "Always O(n)",
        "Always O(1)",
        "Always O(log n)",
      ],
      answer: 0,
    },
    {
      q: "What is recursion optimization?",
      options: [
        "Reduce calls",
        "Increase calls",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is advanced recursion?",
      options: [
        "Complex problems",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion in trees?",
      options: [
        "Tree traversal",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion in graphs?",
      options: [
        "DFS",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is recursion vs DP?",
      options: [
        "DP avoids recomputation",
        "Same",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is recursion usage?",
      options: [
        "Divide problems",
        "Sorting only",
        "Searching only",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is recursion importance?",
      options: [
        "Very high",
        "Low",
        "None",
        "Optional",
      ],
      answer: 0,
    },
    {
      q: "What is recursion drawback?",
      options: [
        "Stack overflow",
        "Fast execution",
        "Less memory",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Where recursion used?",
      options: [
        "Trees, DP, backtracking",
        "UI only",
        "DB only",
        "None",
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
        <h1 className="level-title"> Cloud Fundamentals</h1>

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

export default Recrusion   ;