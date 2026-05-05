import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Dynamic () {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is Dynamic Programming?",
      options: [
        "Optimization technique using overlapping subproblems",
        "Sorting algorithm",
        "Searching technique",
        "Data structure",
      ],
      answer: 0,
    },
    {
      q: "DP is mainly used when problems have?",
      options: [
        "Overlapping subproblems",
        "Random structure",
        "No repetition",
        "Only recursion",
      ],
      answer: 0,
    },
    {
      q: "What is memoization?",
      options: [
        "Top-down DP storing results",
        "Sorting method",
        "Searching method",
        "Traversal method",
      ],
      answer: 0,
    },
    {
      q: "What is tabulation?",
      options: [
        "Bottom-up DP",
        "Top-down DP",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "DP improves?",
      options: [
        "Time complexity",
        "Space only",
        "Code readability",
        "UI design",
      ],
      answer: 0,
    },
    {
      q: "Which approach uses recursion + cache?",
      options: ["Memoization", "Tabulation", "Greedy", "Brute force"],
      answer: 0,
    },
    {
      q: "Which approach avoids recursion?",
      options: ["Tabulation", "Memoization", "DFS", "BFS"],
      answer: 0,
    },
    {
      q: "What is base case in DP?",
      options: [
        "Smallest subproblem solution",
        "Final result",
        "Loop condition",
        "Sorting condition",
      ],
      answer: 0,
    },
    {
      q: "DP is used for?",
      options: [
        "Optimization problems",
        "Only sorting",
        "Only searching",
        "UI design",
      ],
      answer: 0,
    },
    {
      q: "Which is NOT DP concept?",
      options: ["Stack", "Memoization", "Tabulation", "Subproblems"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "What is Fibonacci DP approach?",
      options: [
        "Store previous results",
        "Sort array",
        "Binary search",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Time complexity of DP Fibonacci?",
      options: ["O(n)", "O(2^n)", "O(log n)", "O(n^2)"],
      answer: 0,
    },
    {
      q: "Recursive Fibonacci complexity?",
      options: ["O(2^n)", "O(n)", "O(log n)", "O(n^2)"],
      answer: 0,
    },
    {
      q: "DP reduces exponential to?",
      options: ["Polynomial", "Exponential", "Constant", "Logarithmic"],
      answer: 0,
    },
    {
      q: "What is state in DP?",
      options: [
        "Subproblem representation",
        "Final answer",
        "Loop variable",
        "Sorting step",
      ],
      answer: 0,
    },
    {
      q: "What is transition?",
      options: [
        "Relation between states",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP table?",
      options: [
        "Storage for subproblems",
        "Database table",
        "UI table",
        "Code table",
      ],
      answer: 0,
    },
    {
      q: "What is optimal substructure?",
      options: [
        "Optimal solution from subproblems",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which is classic DP example?",
      options: ["Fibonacci", "Binary Search", "DFS", "BFS"],
      answer: 0,
    },
    {
      q: "What is space optimization?",
      options: [
        "Reduce memory usage",
        "Increase time",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is 0/1 Knapsack?",
      options: [
        "Choose items with max value",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is subset sum problem?",
      options: [
        "Find subset with target sum",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is coin change problem?",
      options: [
        "Min coins to make amount",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is LCS?",
      options: [
        "Longest Common Subsequence",
        "Largest Common Sum",
        "Linear Code System",
        "Loop Control Structure",
      ],
      answer: 0,
    },
    {
      q: "What is LIS?",
      options: [
        "Longest Increasing Subsequence",
        "Linear Index Search",
        "List Input System",
        "Loop Index Structure",
      ],
      answer: 0,
    },
    {
      q: "What is edit distance?",
      options: [
        "Min operations to convert strings",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP grid problem?",
      options: [
        "Matrix-based DP",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is unique paths problem?",
      options: [
        "Count ways in grid",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is minimum path sum?",
      options: [
        "Min cost path",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is palindrome partitioning?",
      options: [
        "Split string into palindromes",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is DP on trees?",
      options: [
        "Apply DP on tree structure",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP on graphs?",
      options: [
        "Apply DP on graph problems",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is bitmask DP?",
      options: [
        "Using bit operations",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is state compression?",
      options: [
        "Reduce state size",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP optimization?",
      options: [
        "Improve DP efficiency",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is rolling array?",
      options: [
        "Reduce DP space",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is multi-dimensional DP?",
      options: [
        "DP with multiple variables",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP recurrence relation?",
      options: [
        "Formula for state",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP base case importance?",
      options: [
        "Starting point",
        "Ending point",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is DP complexity?",
      options: [
        "Depends on states",
        "Always O(n)",
        "Always O(1)",
        "Always O(log n)",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is optimal DP solution?",
      options: [
        "Best time & space",
        "Worst solution",
        "Random solution",
        "Brute force",
      ],
      answer: 0,
    },
    {
      q: "What is DP vs Greedy?",
      options: [
        "DP considers all possibilities",
        "Same approach",
        "Greedy is better always",
        "No difference",
      ],
      answer: 0,
    },
    {
      q: "What is DP vs Recursion?",
      options: [
        "DP avoids recomputation",
        "Same",
        "Recursion faster always",
        "No difference",
      ],
      answer: 0,
    },
    {
      q: "What is time complexity of DP?",
      options: [
        "States × transitions",
        "Always O(n)",
        "Always O(1)",
        "Always O(log n)",
      ],
      answer: 0,
    },
    {
      q: "What is memory optimization in DP?",
      options: [
        "Reduce DP table size",
        "Increase memory",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is DP pattern recognition?",
      options: [
        "Identify DP problems",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is advanced DP?",
      options: [
        "Complex optimization problems",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DP application?",
      options: [
        "Optimization problems",
        "UI design",
        "Database",
        "Networking",
      ],
      answer: 0,
    },
    {
      q: "What is DP learning strategy?",
      options: [
        "Practice patterns",
        "Memorize only",
        "Skip DP",
        "Ignore logic",
      ],
      answer: 0,
    },
    {
      q: "What is DP interview importance?",
      options: [
        "Very high",
        "Low",
        "None",
        "Optional",
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

export default Dynamic   ;