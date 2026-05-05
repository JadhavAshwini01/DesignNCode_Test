import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Stack&Queue () {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is a stack?",
      options: [
        "LIFO structure",
        "FIFO structure",
        "Tree",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is a queue?",
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
        "Insert into stack",
        "Delete from stack",
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
        "Insert into queue",
        "Delete from queue",
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
      q: "What is top/peek?",
      options: [
        "View top element",
        "Delete element",
        "Insert element",
        "Sort element",
      ],
      answer: 0,
    },
    {
      q: "What is front in queue?",
      options: [
        "First element",
        "Last element",
        "Middle element",
        "Random",
      ],
      answer: 0,
    },
    {
      q: "What is rear in queue?",
      options: [
        "Last element",
        "First element",
        "Middle element",
        "Random",
      ],
      answer: 0,
    },
    {
      q: "Which is linear structure?",
      options: ["Stack", "Queue", "Both", "Tree"],
      answer: 2,
    },
  ],

  2: [
    {
      q: "Time complexity of push?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "Time complexity of pop?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "Time complexity of enqueue?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "Time complexity of dequeue?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "Which condition when stack is empty?",
      options: ["Underflow", "Overflow", "Full", "None"],
      answer: 0,
    },
    {
      q: "Which condition when stack is full?",
      options: ["Overflow", "Underflow", "Empty", "None"],
      answer: 0,
    },
    {
      q: "Which condition when queue is empty?",
      options: ["Underflow", "Overflow", "Full", "None"],
      answer: 0,
    },
    {
      q: "Which condition when queue is full?",
      options: ["Overflow", "Underflow", "Empty", "None"],
      answer: 0,
    },
    {
      q: "Which structure uses stack internally?",
      options: ["Recursion", "Queue", "Array", "Graph"],
      answer: 0,
    },
    {
      q: "Which structure uses queue internally?",
      options: ["BFS", "DFS", "Stack", "Tree"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is circular queue?",
      options: [
        "Queue in circular form",
        "Stack",
        "Array",
        "Tree",
      ],
      answer: 0,
    },
    {
      q: "What is deque?",
      options: [
        "Double ended queue",
        "Stack",
        "Array",
        "Tree",
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
    {
      q: "Which problem uses stack?",
      options: [
        "Balanced parentheses",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which problem uses queue?",
      options: [
        "Level order traversal",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is postfix evaluation?",
      options: [
        "Expression using stack",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is infix to postfix?",
      options: [
        "Expression conversion",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is sliding window problem?",
      options: [
        "Queue usage",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is next greater element?",
      options: [
        "Stack problem",
        "Queue problem",
        "Sorting",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is monotonic stack?",
      options: [
        "Ordered stack",
        "Random stack",
        "Queue",
        "Tree",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is stack using array?",
      options: [
        "Static implementation",
        "Dynamic",
        "Graph",
        "Tree",
      ],
      answer: 0,
    },
    {
      q: "What is stack using linked list?",
      options: [
        "Dynamic implementation",
        "Static",
        "Graph",
        "Tree",
      ],
      answer: 0,
    },
    {
      q: "What is queue using array?",
      options: [
        "Static implementation",
        "Dynamic",
        "Graph",
        "Tree",
      ],
      answer: 0,
    },
    {
      q: "What is queue using linked list?",
      options: [
        "Dynamic implementation",
        "Static",
        "Graph",
        "Tree",
      ],
      answer: 0,
    },
    {
      q: "What is two stacks in one array?",
      options: [
        "Memory optimization",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is stack overflow?",
      options: [
        "Exceed stack size",
        "Empty stack",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is queue overflow?",
      options: [
        "Queue full",
        "Queue empty",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is recursion stack?",
      options: [
        "Function call stack",
        "Queue",
        "Array",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is BFS queue?",
      options: [
        "Queue in graph traversal",
        "Stack",
        "Array",
        "Tree",
      ],
      answer: 0,
    },
    {
      q: "What is DFS stack?",
      options: [
        "Stack in graph traversal",
        "Queue",
        "Array",
        "Tree",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is time complexity of stack operations?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "What is time complexity of queue operations?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
    },
    {
      q: "What is advanced stack usage?",
      options: [
        "Expression evaluation",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is advanced queue usage?",
      options: [
        "Scheduling",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is stack vs queue?",
      options: [
        "LIFO vs FIFO",
        "Same",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is optimal usage?",
      options: [
        "Correct DS choice",
        "Random",
        "Sorting",
        "Searching",
      ],
      answer: 0,
    },
    {
      q: "What is queue in OS?",
      options: [
        "Process scheduling",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is stack in OS?",
      options: [
        "Function calls",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is hybrid structure?",
      options: [
        "Combination of DS",
        "Stack only",
        "Queue only",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "Where stack & queue used?",
      options: [
        "Many real problems",
        "Only UI",
        "Only DB",
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

export default Stack&Queue   ;