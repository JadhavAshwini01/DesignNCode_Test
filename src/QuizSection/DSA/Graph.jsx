import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Graph () {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is a graph?",
      options: [
        "Collection of nodes and edges",
        "Linear data structue",
        "Array",
        "Stack",
      ],
      answer: 0,
    },
    {
      q: "What is a vertex?",
      options: [
        "Node in graph",
        "Edge",
        "Path",
        "Cycle",
      ],
      answer: 0,
    },
    {
      q: "What is an edge?",
      options: [
        "Connection between nodes",
        "Node",
        "Graph",
        "Tree",
      ],
      answer: 0,
    },
    {
      q: "Which is non-linear data structure?",
      options: ["Graph", "Array", "Stack", "Queue"],
      answer: 0,
    },
    {
      q: "What is degree of a node?",
      options: [
        "Number of edges connected",
        "Number of nodes",
        "Path length",
        "Cycle",
      ],
      answer: 0,
    },
    {
      q: "What is directed graph?",
      options: [
        "Edges have direction",
        "Edges without direction",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "What is undirected graph?",
      options: [
        "Edges without direction",
        "Edges with direction",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "What is weighted graph?",
      options: [
        "Edges have weight",
        "Edges have no weight",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "What is path?",
      options: [
        "Sequence of nodes",
        "Single node",
        "Edge",
        "Cycle",
      ],
      answer: 0,
    },
    {
      q: "What is cycle?",
      options: [
        "Closed path",
        "Open path",
        "Single node",
        "Tree",
      ],
      answer: 0,
    },
  ],

  2: [
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
        "Backtracking",
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
      q: "What is adjacency matrix?",
      options: [
        "2D representation",
        "List",
        "Stack",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "What is adjacency list?",
      options: [
        "List of neighbors",
        "Matrix",
        "Stack",
        "Queue",
      ],
      answer: 0,
    },
    {
      q: "Time complexity of BFS?",
      options: ["O(V+E)", "O(n)", "O(log n)", "O(1)"],
      answer: 0,
    },
    {
      q: "Time complexity of DFS?",
      options: ["O(V+E)", "O(n)", "O(log n)", "O(1)"],
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
      q: "What is connected graph?",
      options: [
        "All nodes connected",
        "Disconnected nodes",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is shortest path problem?",
      options: [
        "Find minimum distance",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which algorithm finds shortest path?",
      options: ["Dijkstra", "DFS", "BFS", "Bubble Sort"],
      answer: 0,
    },
    {
      q: "Which works with negative weights?",
      options: ["Bellman-Ford", "Dijkstra", "DFS", "BFS"],
      answer: 0,
    },
    {
      q: "What is spanning tree?",
      options: [
        "Tree covering all nodes",
        "Cycle",
        "Path",
        "Graph",
      ],
      answer: 0,
    },
    {
      q: "What is MST?",
      options: [
        "Minimum spanning tree",
        "Maximum tree",
        "Shortest path",
        "Cycle",
      ],
      answer: 0,
    },
    {
      q: "Which finds MST?",
      options: ["Kruskal", "DFS", "BFS", "Binary search"],
      answer: 0,
    },
    {
      q: "Which also finds MST?",
      options: ["Prim", "DFS", "BFS", "Sorting"],
      answer: 0,
    },
    {
      q: "What is topological sort?",
      options: [
        "Ordering in DAG",
        "Sorting array",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is DAG?",
      options: [
        "Directed acyclic graph",
        "Undirected graph",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "What is bipartite graph?",
      options: [
        "Two sets of nodes",
        "Cycle graph",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is cycle detection?",
      options: [
        "Check loop in graph",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which detects cycle in graph?",
      options: ["DFS", "Sorting", "Binary search", "Heap"],
      answer: 0,
    },
    {
      q: "What is union-find?",
      options: [
        "Disjoint set structure",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is connected components?",
      options: [
        "Separate subgraphs",
        "Single graph",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "What is articulation point?",
      options: [
        "Critical node",
        "Leaf node",
        "Root node",
        "Random node",
      ],
      answer: 0,
    },
    {
      q: "What is bridge in graph?",
      options: [
        "Critical edge",
        "Node",
        "Path",
        "Cycle",
      ],
      answer: 0,
    },
    {
      q: "What is strongly connected component?",
      options: [
        "Every node reachable",
        "Disconnected",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
    {
      q: "Which algorithm finds SCC?",
      options: ["Kosaraju", "DFS", "BFS", "Sorting"],
      answer: 0,
    },
    {
      q: "What is graph coloring?",
      options: [
        "Assign colors to nodes",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is Hamiltonian path?",
      options: [
        "Visit all nodes once",
        "Cycle",
        "Tree",
        "Array",
      ],
      answer: 0,
    },
  ],

  5: [
    {
      q: "What is time complexity of Dijkstra?",
      options: ["O(E log V)", "O(n)", "O(log n)", "O(1)"],
      answer: 0,
    },
    {
      q: "What is Floyd-Warshall?",
      options: [
        "All pairs shortest path",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is Bellman-Ford complexity?",
      options: ["O(VE)", "O(n)", "O(log n)", "O(1)"],
      answer: 0,
    },
    {
      q: "What is graph DP?",
      options: [
        "DP on graph",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is shortest path in DAG?",
      options: [
        "Topological DP",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is network flow?",
      options: [
        "Flow in graph",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Which solves max flow?",
      options: ["Ford-Fulkerson", "DFS", "BFS", "Sorting"],
      answer: 0,
    },
    {
      q: "What is Edmonds-Karp?",
      options: [
        "Optimized max flow",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "What is graph optimization?",
      options: [
        "Efficient graph algorithms",
        "Sorting",
        "Searching",
        "Traversal",
      ],
      answer: 0,
    },
    {
      q: "Where graphs are used?",
      options: [
        "Networking, maps",
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

export default Graph   ;