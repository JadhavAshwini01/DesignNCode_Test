import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function DSAbasics() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is Data Structure?",
      options: [
        "Way to organize data",
        "Programming language",
        "Database",
        "Operating system",
      ],
      answer: 0,
    },
    {
      q: "What is Algorithm?",
      options: [
        "Step-by-step solution",
        "Data structure",
        "Database",
        "UI design",
      ],
      answer: 0,
    },
    {
      q: "Which is linear data structure?",
      options: ["Array", "Tree", "Graph", "Heap"],
      answer: 0,
    },
    {
      q: "Which is non-linear data structure?",
      options: ["Tree", "Array", "Stack", "Queue"],
      answer: 0,
    },
    {
      q: "What is time complexity?",
      options: [
        "Time taken by algorithm",
        "Memory used",
        "Code length",
        "UI design",
      ],
      answer: 0,
    },
    {
      q: "What is space complexity?",
      options: [
        "Memory used",
        "Time taken",
        "Code length",
        "Execution speed",
      ],
      answer: 0,
    },
    {
      q: "Which notation represents complexity?",
      options: ["Big-O", "Binary", "Decimal", "Hex"],
      answer: 0,
    },
    {
      q: "What is best case complexity?",
      options: [
        "Minimum time",
        "Maximum time",
        "Average time",
        "Random",
      ],
      answer: 0,
    },
    {
      q: "What is worst case complexity?",
      options: [
        "Maximum time",
        "Minimum time",
        "Average time",
        "Random",
      ],
      answer: 0,
    },
    {
      q: "What is average case complexity?",
      options: [
        "Expected time",
        "Maximum time",
        "Minimum time",
        "None",
      ],
      answer: 0,
    },
  ],

  2: [
    {
      q: "What is stack?",
      options: [
        "LIFO structure",
        "FIFO structure",
        "Tree",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is queue?",
      options: [
        "FIFO structure",
        "LIFO structure",
        "Tree",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is push operation?",
      options: [
        "Insert in stack",
        "Delete",
        "Search",
        "Sort",
      ],
      answer: 0,
    },
    {
      q: "What is pop operation?",
      options: [
        "Remove from stack",
        "Insert",
        "Search",
        "Sort",
      ],
      answer: 0,
    },
    {
      q: "What is enqueue?",
      options: [
        "Insert in queue",
        "Delete",
        "Search",
        "Sort",
      ],
      answer: 0,
    },
    {
      q: "What is dequeue?",
      options: [
        "Remove from queue",
        "Insert",
        "Search",
        "Sort",
      ],
      answer: 0,
    },
    {
      q: "What is linked list?",
      options: [
        "Nodes connected by pointers",
        "Array",
        "Stack",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "What is node?",
      options: [
        "Data + pointer",
        "Only data",
        "Only pointer",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is pointer?",
      options: [
        "Stores address",
        "Stores data",
        "Stores index",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which is dynamic structure?",
      options: ["Linked List", "Array", "Stack", "Queue"],
      answer: 0,
    },
  ],

  3: [
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
      q: "What is iteration?",
      options: [
        "Looping",
        "Recursion",
        "Sorting",
        "Searching",
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
      q: "Which algorithm uses divide & conquer?",
      options: ["Merge Sort", "Bubble Sort", "Linear Search", "DFS"],
      answer: 0,
    },
    {
      q: "What is greedy algorithm?",
      options: [
        "Local optimal choice",
        "Global optimal always",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
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
      q: "What is brute force?",
      options: [
        "Try all solutions",
        "Optimized solution",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is optimization problem?",
      options: [
        "Find best solution",
        "Sort data",
        "Search data",
        "Traverse data",
      ],
      answer: 0,
    },
    {
      q: "What is DP?",
      options: [
        "Optimization using subproblems",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is tree?",
      options: [
        "Hierarchical structure",
        "Linear structure",
        "Graph",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "What is graph?",
      options: [
        "Nodes and edges",
        "Tree",
        "Array",
        "Stack",
      ],
      answer: 0,
    },
    {
      q: "What is BFS?",
      options: [
        "Breadth-first search",
        "Binary search",
        "Backtracking search",
        "Basic search",
      ],
      answer: 0,
    },
    {
      q: "What is DFS?",
      options: [
        "Depth-first search",
        "Binary search",
        "Backtracking search",
        "Basic search",
      ],
      answer: 0,
    },
    {
      q: "Which uses queue?",
      options: ["BFS", "DFS", "Stack", "Array"],
      answer: 0,
    },
    {
      q: "Which uses stack?",
      options: ["DFS", "BFS", "Queue", "Array"],
      answer: 0,
    },
    {
      q: "What is heap?",
      options: [
        "Complete binary tree",
        "Graph",
        "Array",
        "Stack",
      ],
      answer: 0,
    },
    {
      q: "What is priority queue?",
      options: [
        "Queue with priority",
        "Stack",
        "Tree",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is hash table?",
      options: [
        "Key-value storage",
        "Array",
        "Tree",
        "Stack",
      ],
      answer: 0,
    },
    {
      q: "What is collision in hashing?",
      options: [
        "Same index for different keys",
        "Different index",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is time complexity of binary search?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "What is time complexity of linear search?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      answer: 0,
    },
    {
      q: "What is time complexity of bubble sort?",
      options: ["O(n^2)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "What is time complexity of merge sort?",
      options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
      answer: 0,
    },
    {
      q: "What is time complexity of quick sort (average)?",
      options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
      answer: 0,
    },
    {
      q: "What is time complexity of DFS?",
      options: ["O(V+E)", "O(n)", "O(log n)", "O(1)"],
      answer: 0,
    },
    {
      q: "What is time complexity of BFS?",
      options: ["O(V+E)", "O(n)", "O(log n)", "O(1)"],
      answer: 0,
    },
    {
      q: "What is optimization goal?",
      options: [
        "Best performance",
        "Worst performance",
        "Random",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is algorithm efficiency?",
      options: [
        "Time & space usage",
        "Code length",
        "UI design",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is best learning approach for DSA?",
      options: [
        "Practice regularly",
        "Memorize only",
        "Skip practice",
        "Ignore logic",
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

export default DSAbasics;