import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function BST() {
    const [step, setStep] = useState("levels");
    const [activeLevel, setActiveLevel] = useState(null);
    const [unlockedLevel, setUnlockedLevel] = useState(1);

    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState({});

    /* ===== ADD YOUR QUESTIONS HERE ===== */
    const javaQuestions = {
            1: [
                {
                    q: "What is a Binary Search Tree (BST)?",
                    options: [
                        "Tree with sorted structure",
                        "Graph structure",
                        "Linear structure",
                        "Queue",
                    ],
                    answer: 0,
                },
                {
                    q: "In BST, left child is?",
                    options: [
                        "Greater than root",
                        "Smaller than root",
                        "Equal to root",
                        "Random",
                    ],
                    answer: 1,
                },
                {
                    q: "In BST, right child is?",
                    options: [
                        "Smaller than root",
                        "Greater than root",
                        "Equal to root",
                        "Random",
                    ],
                    answer: 1,
                },
                {
                    q: "What is root node?",
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
                    q: "Which traversal gives sorted output in BST?",
                    options: [
                        "Inorder",
                        "Preorder",
                        "Postorder",
                        "Level order",
                    ],
                    answer: 0,
                },
                {
                    q: "What is height of tree?",
                    options: [
                        "Number of edges",
                        "Number of nodes",
                        "Depth",
                        "Width",
                    ],
                    answer: 0,
                },
                {
                    q: "What is depth?",
                    options: [
                        "Distance from root",
                        "Distance from leaf",
                        "Tree width",
                        "Tree size",
                    ],
                    answer: 0,
                },
                {
                    q: "Which is non-linear data structure?",
                    options: ["Tree", "Array", "Stack", "Queue"],
                    answer: 0,
                },
                {
                    q: "What is subtree?",
                    options: [
                        "Part of tree",
                        "Whole tree",
                        "Leaf node",
                        "Root node",
                    ],
                    answer: 0,
                },
            ],

            2: [
                {
                    q: "What is time complexity of search in BST (average)?",
                    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
                    answer: 0,
                },
                {
                    q: "Worst case time complexity in BST?",
                    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                    answer: 0,
                },
                {
                    q: "When does BST become worst case?",
                    options: [
                        "Skewed tree",
                        "Balanced tree",
                        "Full tree",
                        "Complete tree",
                    ],
                    answer: 0,
                },
                {
                    q: "Insertion in BST follows?",
                    options: [
                        "Comparison",
                        "Random",
                        "Sorting",
                        "Traversal",
                    ],
                    answer: 0,
                },
                {
                    q: "Deletion case includes?",
                    options: [
                        "Leaf, one child, two children",
                        "Only leaf",
                        "Only root",
                        "Only subtree",
                    ],
                    answer: 0,
                },
                {
                    q: "Which traversal is root-left-right?",
                    options: ["Preorder", "Inorder", "Postorder", "Level order"],
                    answer: 0,
                },
                {
                    q: "Which traversal is left-root-right?",
                    options: ["Inorder", "Preorder", "Postorder", "Level order"],
                    answer: 0,
                },
                {
                    q: "Which traversal is left-right-root?",
                    options: ["Postorder", "Inorder", "Preorder", "Level order"],
                    answer: 0,
                },
                {
                    q: "Which uses queue?",
                    options: ["Level order", "Inorder", "Preorder", "Postorder"],
                    answer: 0,
                },
                {
                    q: "What is balanced BST?",
                    options: [
                        "Height balanced tree",
                        "Sorted array",
                        "Linear tree",
                        "Graph",
                    ],
                    answer: 0,
                },
            ],

            3: [
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
                    q: "What is rotation in BST?",
                    options: [
                        "Balancing operation",
                        "Traversal",
                        "Deletion",
                        "Insertion",
                    ],
                    answer: 0,
                },
                {
                    q: "Which rotation fixes imbalance?",
                    options: [
                        "Left/Right rotation",
                        "Traversal",
                        "Deletion",
                        "Search",
                    ],
                    answer: 0,
                },
                {
                    q: "What is BST property?",
                    options: [
                        "Left < Root < Right",
                        "Left > Root",
                        "Right < Root",
                        "Random",
                    ],
                    answer: 0,
                },
                {
                    q: "What is LCA?",
                    options: [
                        "Lowest Common Ancestor",
                        "Largest Common Array",
                        "Lowest Code Area",
                        "None",
                    ],
                    answer: 0,
                },
                {
                    q: "What is successor in BST?",
                    options: [
                        "Next greater node",
                        "Next smaller node",
                        "Root node",
                        "Leaf node",
                    ],
                    answer: 0,
                },
                {
                    q: "What is predecessor?",
                    options: [
                        "Next smaller node",
                        "Next greater node",
                        "Root node",
                        "Leaf node",
                    ],
                    answer: 0,
                },
                {
                    q: "What is range query?",
                    options: [
                        "Find values in range",
                        "Sorting",
                        "Searching",
                        "Traversal",
                    ],
                    answer: 0,
                },
                {
                    q: "What is floor in BST?",
                    options: [
                        "Largest ≤ key",
                        "Smallest ≥ key",
                        "Root",
                        "Leaf",
                    ],
                    answer: 0,
                },
                {
                    q: "What is ceil in BST?",
                    options: [
                        "Smallest ≥ key",
                        "Largest ≤ key",
                        "Root",
                        "Leaf",
                    ],
                    answer: 0,
                },
            ],

            4: [
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
                    q: "What is BST validation?",
                    options: [
                        "Check BST property",
                        "Check sorting",
                        "Check traversal",
                        "Check insertion",
                    ],
                    answer: 0,
                },
                {
                    q: "What is kth smallest element?",
                    options: [
                        "kth value in sorted order",
                        "Largest element",
                        "Root",
                        "Leaf",
                    ],
                    answer: 0,
                },
                {
                    q: "Which traversal helps find kth smallest?",
                    options: [
                        "Inorder",
                        "Preorder",
                        "Postorder",
                        "Level order",
                    ],
                    answer: 0,
                },
                {
                    q: "What is BST iterator?",
                    options: [
                        "Traverse BST efficiently",
                        "Sort array",
                        "Delete node",
                        "Insert node",
                    ],
                    answer: 0,
                },
                {
                    q: "What is serialization?",
                    options: [
                        "Convert tree to string",
                        "Sort tree",
                        "Delete tree",
                        "Insert tree",
                    ],
                    answer: 0,
                },
                {
                    q: "What is deserialization?",
                    options: [
                        "Rebuild tree",
                        "Delete tree",
                        "Sort tree",
                        "Traverse tree",
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
                    q: "What is BST search approach?",
                    options: [
                        "Recursive/Iterative",
                        "Random",
                        "Sorting",
                        "Traversal",
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
            ],

            5: [
                {
                    q: "What is time complexity of balanced BST operations?",
                    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
                    answer: 0,
                },
                {
                    q: "Which tree guarantees balance?",
                    options: ["AVL", "BST", "Array", "Stack"],
                    answer: 0,
                },
                {
                    q: "What is Red-Black tree?",
                    options: [
                        "Balanced BST",
                        "Graph",
                        "Queue",
                        "Stack",
                    ],
                    answer: 0,
                },
                {
                    q: "What is BST optimization?",
                    options: [
                        "Balancing tree",
                        "Sorting array",
                        "Deleting nodes",
                        "Traversing nodes",
                    ],
                    answer: 0,
                },
                {
                    q: "What is time complexity of inorder traversal?",
                    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                    answer: 0,
                },
                {
                    q: "What is recursive tree traversal?",
                    options: [
                        "Function calls itself",
                        "Loop",
                        "Sorting",
                        "Searching",
                    ],
                    answer: 0,
                },
                {
                    q: "What is iterative traversal?",
                    options: [
                        "Using stack",
                        "Using recursion",
                        "Sorting",
                        "Deleting",
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
                    q: "What is advanced BST usage?",
                    options: [
                        "Databases, indexing",
                        "UI design",
                        "API calls",
                        "Networking",
                    ],
                    answer: 0,
                },
                {
                    q: "What is optimal BST?",
                    options: [
                        "Minimize search cost",
                        "Maximize cost",
                        "Random",
                        "Sorted array",
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

export default BST
    ;