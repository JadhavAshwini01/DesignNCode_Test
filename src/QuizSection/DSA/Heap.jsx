import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Heap () {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is a heap?",
      options: [
        "Complete binary tree with heap property",
        "Linear data structure",
        "Graph",
        "Stack",
      ],
      answer: 0,
    },
    {
      q: "What is a binary heap?",
      options: [
        "Complete binary tree",
        "Balanced BST",
        "Graph",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "What is max-heap?",
      options: [
        "Parent ≥ children",
        "Parent ≤ children",
        "Random",
        "Sorted array",
      ],
      answer: 0,
    },
    {
      q: "What is min-heap?",
      options: [
        "Parent ≤ children",
        "Parent ≥ children",
        "Random",
        "Sorted array",
      ],
      answer: 0,
    },
    {
      q: "Which structure is used to implement heap?",
      options: ["Array", "Linked List", "Stack", "Queue"],
      answer: 0,
    },
    {
      q: "Root of max-heap contains?",
      options: [
        "Maximum element",
        "Minimum element",
        "Random element",
        "Last element",
      ],
      answer: 0,
    },
    {
      q: "Root of min-heap contains?",
      options: [
        "Minimum element",
        "Maximum element",
        "Random element",
        "Last element",
      ],
      answer: 0,
    },
    {
      q: "Heap is which type of tree?",
      options: [
        "Complete binary tree",
        "Full tree",
        "BST",
        "AVL",
      ],
      answer: 0,
    },
    {
      q: "What is height of heap with n nodes?",
      options: [
        "O(log n)",
        "O(n)",
        "O(1)",
        "O(n log n)",
      ],
      answer: 0,
    },
    {
      q: "What is priority queue?",
      options: [
        "Queue based on priority",
        "Stack",
        "Array",
        "Graph",
      ],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Time complexity of insertion in heap?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "Time complexity of deletion in heap?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "Time complexity of accessing root?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "What is heapify?",
      options: [
        "Maintain heap property",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is build heap complexity?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: 0,
    },
    {
      q: "What is extract operation?",
      options: [
        "Remove root element",
        "Insert element",
        "Search element",
        "Sort element",
      ],
      answer: 0,
    },
    {
      q: "Which operation restores heap?",
      options: ["Heapify", "Sort", "Search", "Traverse"],
      answer: 0,
    },
    {
      q: "What is parent index (i)?",
      options: ["(i-1)/2", "2i+1", "2i+2", "i+1"],
      answer: 0,
    },
    {
      q: "Left child index?",
      options: ["2i+1", "(i-1)/2", "2i+2", "i+1"],
      answer: 0,
    },
    {
      q: "Right child index?",
      options: ["2i+2", "2i+1", "(i-1)/2", "i+1"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is heap sort?",
      options: [
        "Sorting using heap",
        "Searching",
        "Traversal",
        "Recursion",
      ],
      answer: 0,
    },
    {
      q: "Time complexity of heap sort?",
      options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
      answer: 0,
    },
    {
      q: "Is heap sort stable?",
      options: ["No", "Yes", "Sometimes", "Depends"],
      answer: 0,
    },
    {
      q: "Is heap sort in-place?",
      options: ["Yes", "No", "Depends", "Sometimes"],
      answer: 0,
    },
    {
      q: "What is k largest elements problem?",
      options: [
        "Find top k elements",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which heap for k smallest?",
      options: ["Max Heap", "Min Heap", "Stack", "Queue"],
      answer: 0,
    },
    {
      q: "Which heap for k largest?",
      options: ["Min Heap", "Max Heap", "Stack", "Queue"],
      answer: 0,
    },
    {
      q: "What is median heap problem?",
      options: [
        "Maintain median dynamically",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is merge k sorted arrays?",
      options: [
        "Combine arrays efficiently",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which structure helps merge k arrays?",
      options: ["Min Heap", "Stack", "Queue", "Graph"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is heap application?",
      options: [
        "Priority scheduling",
        "UI design",
        "Database only",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is Dijkstra uses?",
      options: ["Min Heap", "Stack", "Queue", "Array"],
      answer: 0,
    },
    {
      q: "What is top k frequent elements?",
      options: [
        "Find most frequent",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is sliding window max?",
      options: [
        "Max in window",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is priority scheduling?",
      options: [
        "Tasks by priority",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is heap optimization?",
      options: [
        "Efficient heap usage",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is lazy deletion?",
      options: [
        "Delayed removal",
        "Immediate removal",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is decrease key?",
      options: [
        "Reduce value",
        "Increase value",
        "Delete value",
        "Insert value",
      ],
      answer: 0,
    },
    {
      q: "What is increase key?",
      options: [
        "Increase value",
        "Reduce value",
        "Delete value",
        "Insert value",
      ],
      answer: 0,
    },
    {
      q: "What is heap usage in AI?",
      options: [
        "Priority tasks",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is Fibonacci heap?",
      options: [
        "Advanced heap",
        "Simple heap",
        "Tree",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is binomial heap?",
      options: [
        "Collection of trees",
        "Array",
        "Stack",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "What is pairing heap?",
      options: [
        "Advanced heap structure",
        "Simple heap",
        "Array",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "What is amortized complexity?",
      options: [
        "Average over operations",
        "Worst case",
        "Best case",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is heap memory layout?",
      options: [
        "Array representation",
        "Linked list",
        "Stack",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "What is optimal heap usage?",
      options: [
        "Minimize operations",
        "Maximize operations",
        "Random",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is heap in system?",
      options: [
        "Dynamic memory",
        "Stack memory",
        "Static memory",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is memory heap vs DS heap?",
      options: [
        "Different concepts",
        "Same",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is advanced heap usage?",
      options: [
        "Complex problems",
        "Sorting only",
        "Searching only",
        "Traversal only",
      ],
      answer: 0,
    },
    {
      q: "Where heaps are used?",
      options: [
        "Scheduling, graphs",
        "UI design",
        "Database only",
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

export default Heap   ;