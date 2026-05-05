import { useNavigate } from "react-router-dom";
import "./Courses.css";

function DSASyllabus() {
    const navigate = useNavigate();

    const syllabus = [
        {
            title: "DSA Basics",
            topics: [
                "What is Data Structure & Algorithm",
                "Time & Space Complexity (Big-O)",
                "Best, Worst, Average Case",
                "Recursion Basics",
            ],
        },
        {
            title: "Arrays",
            topics: [
                "Basic operations",
                "Prefix Sum",
                "Kadane’s Algorithm",
                "Two Pointer Technique",
                "Sliding Window",
            ],
        },
        {
            title: "Strings",
            topics: [
                "String manipulation",
                "Palindrome problems",
                "Anagram problems",
                "Pattern matching",
                "Sliding window on strings",
            ],
        },
        {
            title: "Linked List",
            topics: [
                "Singly Linked List",
                "Doubly Linked List",
                "Reverse Linked List",
                "Cycle Detection (Floyd’s Algorithm)",
                "Merge Two Lists",
            ],
        },
        {
            title: "Stack & Queue",
            topics: [
                "Stack operations",
                "Queue operations",
                "Circular Queue",
                "Deque",
                "Applications (Next Greater Element)",
            ],
        },
        {
            title: "Recursion & Backtracking",
            topics: [
                "Recursion tree",
                "Subsets",
                "Permutations",
                "N-Queens",
                "Sudoku Solver",
            ],
        },
        {
            title: "Trees",
            topics: [
                "Binary Tree",
                "Tree Traversals (Inorder, Preorder, Postorder)",
                "Level Order Traversal",
                "Height & Diameter",
                "Lowest Common Ancestor",
            ],
        },
        {
            title: "Binary Search Tree",
            topics: [
                "BST operations",
                "Insert/Delete/Search",
                "Validate BST",
                "Kth smallest/largest",
            ],
        },
        {
            title: "Heap / Priority Queue",
            topics: [
                "Min Heap & Max Heap",
                "Heap operations",
                "Heap sort",
                "Top K elements",
            ],
        },
        {
            title: "Hashing",
            topics: [
                "HashMap",
                "HashSet",
                "Frequency counting",
                "Collision handling",
            ],
        },
        {
            title: "Graphs",
            topics: [
                "Graph representation",
                "BFS & DFS",
                "Cycle detection",
                "Shortest path (Dijkstra)",
                "Topological sort",
            ],
        },
        {
            title: "Dynamic Programming",
            topics: [
                "Memoization",
                "Tabulation",
                "Fibonacci",
                "Knapsack",
                "Longest Common Subsequence",
            ],
        },
        {
            title: "Greedy Algorithms",
            topics: [
                "Activity selection",
                "Fractional Knapsack",
                "Huffman Coding",
            ],
        },
        {
            title: "Advanced Topics",
            topics: [
                "Bit Manipulation",
                "Trie",
                "Segment Tree",
                "Disjoint Set (Union-Find)",
            ],
        },
        {
            title: "Mini Projects",
            topics: [
                "Build a Problem Solver App",
                "Create DSA Quiz System (like your project)",
                "Implement all DS in Java",
                "LeetCode tracker dashboard",
            ],
        },
    ];

    return (
        <div className="roadmap-container">

            {/* BACK BUTTON */}
            <button className="back-btn" onClick={() => navigate("/beginner")}>
                ← Back
            </button>

            {/* TOP BAR */}
            <div className="top-bar">
                <h1 className="title">Data Structure and Algorithms</h1>
                <button
                    className="syllabus-btn"
                    onClick={() => navigate("/dsa/quiz")}
                >
                    -- Back to Quizzes
                </button>
            </div>

            <h2 className="subtitle">Roadmap</h2>

            {/* CARD GRID */}
            <div className="card-grid">
                {syllabus.map((item, index) => (
                    <div className="roadmap-card" key={index}>
                        <h3>{index + 1}. {item.title}</h3>
                        <ul>
                            {item.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* RESOURCES */}
            <section className="resources">
                <h2>Resources</h2>

                <a
                    href="https://www.youtube.com/watch?v=RBSGKlAvoiM"
                    target="_blank"
                    rel="noreferrer"
                    className="resource-link"
                >
                    <div className="resource-card">
                        <h3>DSA Full Course</h3>
                        <p>Complete Data Structures & Algorithms</p>
                    </div>
                </a>

                <a
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="resource-link"
                >
                    <div className="resource-card">
                        <h3>LeetCode Practice</h3>
                        <p>Practice DSA problems for interviews</p>
                    </div>
                </a>

            </section>
        </div>
    );
}

export default DSASyllabus;