import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Linkedkist() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
      1: [
        {
          q: "What is a linked list?",
          options: [
            "Collection of nodes connected by pointers",
            "Array",
            "Stack",
            "Queue",
          ],
          answer: 0,
        },
        {
          q: "What is a node?",
          options: [
            "Data + pointer",
            "Only data",
            "Only pointer",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is head?",
          options: [
            "First node",
            "Last node",
            "Middle node",
            "Random node",
          ],
          answer: 0,
        },
        {
          q: "What is tail?",
          options: [
            "Last node",
            "First node",
            "Middle node",
            "Random node",
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
        {
          q: "What is null pointer?",
          options: [
            "End of list",
            "Start of list",
            "Middle",
            "Random",
          ],
          answer: 0,
        },
        {
          q: "What is traversal?",
          options: [
            "Visit all nodes",
            "Sort nodes",
            "Delete nodes",
            "Search only",
          ],
          answer: 0,
        },
        {
          q: "Which is linear structure?",
          options: ["Linked List", "Tree", "Graph", "Heap"],
          answer: 0,
        },
        {
          q: "What is memory allocation?",
          options: [
            "Dynamic memory",
            "Static only",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
      ],

      2: [
        {
          q: "Time complexity of insertion at head?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Time complexity of insertion at end?",
          options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Time complexity of deletion at head?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Time complexity of search?",
          options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Which operation requires traversal?",
          options: ["Search", "Insert at head", "Delete at head", "None"],
          answer: 0,
        },
        {
          q: "What is singly linked list?",
          options: [
            "One pointer per node",
            "Two pointers",
            "Circular",
            "Tree",
          ],
          answer: 0,
        },
        {
          q: "What is doubly linked list?",
          options: [
            "Two pointers",
            "One pointer",
            "Circular",
            "Tree",
          ],
          answer: 0,
        },
        {
          q: "What is circular linked list?",
          options: [
            "Last node points to head",
            "Ends with null",
            "Tree",
            "Graph",
          ],
          answer: 0,
        },
        {
          q: "What is memory overhead?",
          options: [
            "Extra pointer space",
            "No extra space",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "Which is advantage of linked list?",
          options: [
            "Dynamic size",
            "Fast access",
            "Less memory",
            "Sorted",
          ],
          answer: 0,
        },
      ],

      3: [
        {
          q: "What is reverse linked list?",
          options: [
            "Reverse node order",
            "Sort list",
            "Delete nodes",
            "Search nodes",
          ],
          answer: 0,
        },
        {
          q: "What is middle element problem?",
          options: [
            "Find middle node",
            "Sort list",
            "Delete node",
            "Search node",
          ],
          answer: 0,
        },
        {
          q: "Which method finds middle?",
          options: [
            "Slow and fast pointer",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is cycle detection?",
          options: [
            "Detect loop in list",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "Which detects cycle?",
          options: ["Floyd’s Algorithm", "DFS", "BFS", "Binary Search"],
          answer: 0,
        },
        {
          q: "What is merge two lists?",
          options: [
            "Combine sorted lists",
            "Sort list",
            "Delete list",
            "Search list",
          ],
          answer: 0,
        },
        {
          q: "What is palindrome list?",
          options: [
            "Same forward/backward",
            "Sorted",
            "Random",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is remove nth node?",
          options: [
            "Delete nth node",
            "Insert node",
            "Search node",
            "Sort node",
          ],
          answer: 0,
        },
        {
          q: "What is intersection problem?",
          options: [
            "Common node in lists",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is duplicate removal?",
          options: [
            "Remove repeated nodes",
            "Sort nodes",
            "Search nodes",
            "Traversal",
          ],
          answer: 0,
        },
      ],

      4: [
        {
          q: "What is linked list recursion?",
          options: [
            "Recursive operations",
            "Loop",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "What is flatten list?",
          options: [
            "Convert multi-level list",
            "Sort list",
            "Delete list",
            "Search list",
          ],
          answer: 0,
        },
        {
          q: "What is rotate list?",
          options: [
            "Shift nodes",
            "Sort nodes",
            "Delete nodes",
            "Search nodes",
          ],
          answer: 0,
        },
        {
          q: "What is partition list?",
          options: [
            "Split list by value",
            "Sort list",
            "Delete list",
            "Search list",
          ],
          answer: 0,
        },
        {
          q: "What is reorder list?",
          options: [
            "Rearrange nodes",
            "Sort nodes",
            "Delete nodes",
            "Search nodes",
          ],
          answer: 0,
        },
        {
          q: "What is LRU cache uses?",
          options: [
            "Linked list + hashmap",
            "Stack",
            "Queue",
            "Tree",
          ],
          answer: 0,
        },
        {
          q: "What is skip list?",
          options: [
            "Multi-level list",
            "Tree",
            "Graph",
            "Array",
          ],
          answer: 0,
        },
        {
          q: "What is advanced pointer usage?",
          options: [
            "Complex operations",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is memory fragmentation?",
          options: [
            "Scattered memory",
            "Continuous memory",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "What is pointer manipulation?",
          options: [
            "Change links",
            "Sort",
            "Search",
            "Delete",
          ],
          answer: 0,
        },
      ],

      5: [
        {
          q: "What is time complexity of linked list traversal?",
          options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "What is optimal linked list usage?",
          options: [
            "Frequent insert/delete",
            "Fast access",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "What is memory tradeoff?",
          options: [
            "Extra pointer space",
            "No space",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "What is linked list vs array?",
          options: [
            "Dynamic vs static",
            "Same",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "What is advanced usage?",
          options: [
            "Complex data structures",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is linked list in OS?",
          options: [
            "Memory management",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is linked list in DB?",
          options: [
            "Indexing",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is optimal solution?",
          options: [
            "Efficient approach",
            "Worst",
            "Random",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is complexity tradeoff?",
          options: [
            "Time vs space",
            "Only time",
            "Only space",
            "None",
          ],
          answer: 0,
        },
        {
          q: "Where linked list used?",
          options: [
            "Memory, OS, cache",
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

    return(
    <div className = { step === "quiz" ? "quiz-fullscreen" : "quiz-layout"} >
    { step !== "quiz" && <Sidebar />
}

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
              className={`option ${answers[currentQ] === i ? "selected" : ""
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
    </div >
  );
}

export default Linkedkist;