import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Tree() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
      1: [
        {
          q: "What is a tree?",
          options: [
            "Hierarchical data structure",
            "Linear data structure",
            "Graph",
            "Array",
          ],
          answer: 0,
        },
        {
          q: "What is a node?",
          options: [
            "Element of tree",
            "Edge",
            "Path",
            "Cycle",
          ],
          answer: 0,
        },
        {
          q: "What is root?",
          options: [
            "Top node",
            "Leaf node",
            "Middle node",
            "Last node",
          ],
          answer: 0,
        },
        {
          q: "What is leaf node?",
          options: [
            "Node with no children",
            "Node with children",
            "Root node",
            "Parent node",
          ],
          answer: 0,
        },
        {
          q: "What is edge?",
          options: [
            "Connection between nodes",
            "Node",
            "Tree",
            "Array",
          ],
          answer: 0,
        },
        {
          q: "What is parent node?",
          options: [
            "Node with children",
            "Node without children",
            "Root",
            "Leaf",
          ],
          answer: 0,
        },
        {
          q: "What is child node?",
          options: [
            "Node connected below parent",
            "Root",
            "Leaf",
            "Edge",
          ],
          answer: 0,
        },
        {
          q: "What is subtree?",
          options: [
            "Part of tree",
            "Whole tree",
            "Leaf",
            "Root",
          ],
          answer: 0,
        },
        {
          q: "What is depth?",
          options: [
            "Distance from root",
            "Distance from leaf",
            "Height",
            "Width",
          ],
          answer: 0,
        },
        {
          q: "What is height?",
          options: [
            "Longest path from node",
            "Shortest path",
            "Depth",
            "Width",
          ],
          answer: 0,
        },
      ],

      2: [
        {
          q: "What is binary tree?",
          options: [
            "Each node has max 2 children",
            "Unlimited children",
            "Graph",
            "Array",
          ],
          answer: 0,
        },
        {
          q: "What is full binary tree?",
          options: [
            "0 or 2 children",
            "1 child only",
            "Any children",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is complete binary tree?",
          options: [
            "Filled level-wise",
            "Random",
            "Sorted",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is perfect binary tree?",
          options: [
            "All levels filled",
            "Random",
            "Incomplete",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is balanced tree?",
          options: [
            "Height difference small",
            "Random",
            "Sorted",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is skewed tree?",
          options: [
            "Unbalanced tree",
            "Balanced tree",
            "Full tree",
            "Complete tree",
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
          q: "Inorder traversal?",
          options: [
            "Left-Root-Right",
            "Root-Left-Right",
            "Left-Right-Root",
            "Level order",
          ],
          answer: 0,
        },
        {
          q: "Preorder traversal?",
          options: [
            "Root-Left-Right",
            "Left-Root-Right",
            "Left-Right-Root",
            "Level order",
          ],
          answer: 0,
        },
        {
          q: "Postorder traversal?",
          options: [
            "Left-Right-Root",
            "Root-Left-Right",
            "Left-Root-Right",
            "Level order",
          ],
          answer: 0,
        },
      ],

      3: [
        {
          q: "What is level order traversal?",
          options: [
            "BFS traversal",
            "DFS traversal",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "Which uses queue?",
          options: ["Level order", "Inorder", "Preorder", "Postorder"],
          answer: 0,
        },
        {
          q: "Which uses stack?",
          options: ["DFS", "BFS", "Queue", "Array"],
          answer: 0,
        },
        {
          q: "What is DFS?",
          options: [
            "Depth-first search",
            "Breadth-first search",
            "Binary search",
            "Sorting",
          ],
          answer: 0,
        },
        {
          q: "What is BFS?",
          options: [
            "Breadth-first search",
            "Depth-first search",
            "Binary search",
            "Sorting",
          ],
          answer: 0,
        },
        {
          q: "Time complexity of traversal?",
          options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "What is diameter of tree?",
          options: [
            "Longest path",
            "Shortest path",
            "Height",
            "Depth",
          ],
          answer: 0,
        },
        {
          q: "What is LCA?",
          options: [
            "Lowest Common Ancestor",
            "Largest Common Array",
            "Loop Control",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is path sum?",
          options: [
            "Sum of nodes path",
            "Tree height",
            "Tree depth",
            "Tree width",
          ],
          answer: 0,
        },
        {
          q: "What is mirror tree?",
          options: [
            "Reverse tree",
            "Sorted tree",
            "Balanced tree",
            "Graph",
          ],
          answer: 0,
        },
      ],

      4: [
        {
          q: "What is BST?",
          options: [
            "Sorted binary tree",
            "Graph",
            "Queue",
            "Stack",
          ],
          answer: 0,
        },
        {
          q: "What is AVL tree?",
          options: [
            "Self-balancing BST",
            "Graph",
            "Queue",
            "Stack",
          ],
          answer: 0,
        },
        {
          q: "What is heap?",
          options: [
            "Complete binary tree",
            "Graph",
            "Queue",
            "Stack",
          ],
          answer: 0,
        },
        {
          q: "What is segment tree?",
          options: [
            "Range query tree",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is Fenwick tree?",
          options: [
            "Binary Indexed Tree",
            "Graph",
            "Queue",
            "Stack",
          ],
          answer: 0,
        },
        {
          q: "What is tree DP?",
          options: [
            "DP on trees",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is tree recursion?",
          options: [
            "Recursive tree traversal",
            "Loop",
            "Sorting",
            "Searching",
          ],
          answer: 0,
        },
        {
          q: "What is tree height complexity?",
          options: [
            "Depends on structure",
            "Always O(1)",
            "Always O(n)",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is balanced BST?",
          options: [
            "Height balanced",
            "Random",
            "Sorted",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is skewed tree complexity?",
          options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)",
          ],
          answer: 0,
        },
      ],

      5: [
        {
          q: "What is time complexity of balanced tree operations?",
          options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "What is tree optimization?",
          options: [
            "Balancing tree",
            "Sorting",
            "Searching",
            "Traversal",
          ],
          answer: 0,
        },
        {
          q: "What is tree serialization?",
          options: [
            "Convert tree to string",
            "Sort tree",
            "Delete tree",
            "Insert tree",
          ],
          answer: 0,
        },
        {
          q: "What is tree deserialization?",
          options: [
            "Rebuild tree",
            "Delete tree",
            "Sort tree",
            "Traverse tree",
          ],
          answer: 0,
        },
        {
          q: "What is advanced tree usage?",
          options: [
            "Databases, indexing",
            "UI design",
            "API",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is tree memory?",
          options: [
            "Pointer-based structure",
            "Array only",
            "Stack",
            "Queue",
          ],
          answer: 0,
        },
        {
          q: "What is recursion depth?",
          options: [
            "Call stack depth",
            "Tree height",
            "Both",
            "None",
          ],
          answer: 2,
        },
        {
          q: "What is optimal tree?",
          options: [
            "Minimum height",
            "Maximum height",
            "Random",
            "None",
          ],
          answer: 0,
        },
        {
          q: "What is tree application?",
          options: [
            "Hierarchical data",
            "UI only",
            "Database only",
            "None",
          ],
          answer: 0,
        },
        {
          q: "Where trees are used?",
          options: [
            "File systems, DB",
            "UI design",
            "API only",
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

export default Tree;