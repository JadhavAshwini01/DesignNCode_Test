import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Arrays() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
      1: [
        {
          q: "What is an array?",
          options: [
            "Collection of elements of same type",
            "Collection of different types",
            "Single variable",
            "Function",
          ],
          answer: 0,
        },
        {
          q: "What is the index of first element in array?",
          options: ["0", "1", "-1", "Depends"],
          answer: 0,
        },
        {
          q: "Which data structure uses contiguous memory?",
          options: ["Array", "Linked List", "Stack", "Queue"],
          answer: 0,
        },
        {
          q: "What is the time complexity of accessing array element?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Which operation is fastest in array?",
          options: ["Access", "Insert", "Delete", "Search"],
          answer: 0,
        },
        {
          q: "Which language supports arrays?",
          options: ["Java", "C", "Python", "All of the above"],
          answer: 3,
        },
        {
          q: "What is array size?",
          options: ["Number of elements", "Memory size", "Index count", "None"],
          answer: 0,
        },
        {
          q: "Which is fixed size structure?",
          options: ["Array", "Linked List", "Stack", "Queue"],
          answer: 0,
        },
        {
          q: "What is last index of array of size n?",
          options: ["n-1", "n", "0", "1"],
          answer: 0,
        },
        {
          q: "Which is linear data structure?",
          options: ["Array", "Tree", "Graph", "Heap"],
          answer: 0,
        },
      ],

      2: [
        {
          q: "What is time complexity of linear search?",
          options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
          answer: 0,
        },
        {
          q: "What is binary search complexity?",
          options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Binary search requires array to be?",
          options: ["Sorted", "Unsorted", "Random", "None"],
          answer: 0,
        },
        {
          q: "What is insertion complexity in array?",
          options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "What is deletion complexity in array?",
          options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Which search is faster?",
          options: ["Binary", "Linear", "Same", "None"],
          answer: 0,
        },
        {
          q: "Which algorithm finds max element?",
          options: ["Linear scan", "Binary search", "Sorting", "Hashing"],
          answer: 0,
        },
        {
          q: "Which operation shifts elements?",
          options: ["Insert", "Access", "Search", "Read"],
          answer: 0,
        },
        {
          q: "What is traversal?",
          options: ["Visiting all elements", "Deleting", "Sorting", "Searching"],
          answer: 0,
        },
        {
          q: "Which is used for sorting array?",
          options: ["Bubble Sort", "Stack", "Queue", "Graph"],
          answer: 0,
        },
      ],

      3: [
        {
          q: "What is time complexity of bubble sort?",
          options: ["O(n^2)", "O(n)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Which sorting is stable?",
          options: ["Bubble Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
          answer: 0,
        },
        {
          q: "Which sorting uses divide and conquer?",
          options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
          answer: 0,
        },
        {
          q: "What is Kadane's algorithm used for?",
          options: ["Max subarray sum", "Sorting", "Searching", "Reversing"],
          answer: 0,
        },
        {
          q: "What is prefix sum?",
          options: ["Cumulative sum array", "Sorted array", "Reversed array", "Binary array"],
          answer: 0,
        },
        {
          q: "What is sliding window technique?",
          options: ["Optimized subarray processing", "Sorting", "Searching", "Reversing"],
          answer: 0,
        },
        {
          q: "What is two pointer technique?",
          options: ["Using two indices", "Sorting", "Searching", "Reversing"],
          answer: 0,
        },
        {
          q: "What is time complexity of merge sort?",
          options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
          answer: 0,
        },
        {
          q: "Which is NOT in-place sorting?",
          options: ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
          answer: 0,
        },
        {
          q: "What is array rotation?",
          options: ["Shift elements", "Sort elements", "Delete elements", "Insert elements"],
          answer: 0,
        },
      ],

      4: [
        {
          q: "What is majority element problem?",
          options: ["Element > n/2 times", "Max element", "Min element", "Sorted element"],
          answer: 0,
        },
        {
          q: "Which algorithm finds majority element?",
          options: ["Moore’s Voting", "Binary Search", "DFS", "BFS"],
          answer: 0,
        },
        {
          q: "What is subarray?",
          options: ["Contiguous part", "Non-contiguous", "Random", "Sorted"],
          answer: 0,
        },
        {
          q: "What is subset?",
          options: ["Any combination", "Contiguous", "Sorted", "Unique"],
          answer: 0,
        },
        {
          q: "What is inversion count?",
          options: ["Pairs out of order", "Sorted pairs", "Random pairs", "Unique pairs"],
          answer: 0,
        },
        {
          q: "Which problem uses hashing?",
          options: ["Two Sum", "Sorting", "Reversing", "Traversal"],
          answer: 0,
        },
        {
          q: "What is duplicate element problem?",
          options: ["Find repeated element", "Find max", "Find min", "Sort array"],
          answer: 0,
        },
        {
          q: "What is missing number problem?",
          options: ["Find missing value", "Find max", "Find min", "Sort array"],
          answer: 0,
        },
        {
          q: "What is pair sum problem?",
          options: ["Find pair with target sum", "Sort array", "Reverse array", "Delete elements"],
          answer: 0,
        },
        {
          q: "What is peak element?",
          options: ["Greater than neighbors", "Smallest element", "Sorted element", "Duplicate"],
          answer: 0,
        },
      ],

      5: [
        {
          q: "What is time complexity of Kadane’s algorithm?",
          options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
          answer: 0,
        },
        {
          q: "Which technique optimizes subarray problems?",
          options: ["Sliding Window", "Sorting", "DFS", "BFS"],
          answer: 0,
        },
        {
          q: "What is longest subarray problem?",
          options: ["Max length subarray condition", "Sorting", "Reversing", "Deleting"],
          answer: 0,
        },
        {
          q: "What is circular array?",
          options: ["End connects to start", "Sorted array", "Reverse array", "Unique array"],
          answer: 0,
        },
        {
          q: "What is maximum product subarray?",
          options: ["Max product of subarray", "Sorting", "Searching", "Traversal"],
          answer: 0,
        },
        {
          q: "What is rainwater trapping problem?",
          options: ["Calculate trapped water", "Sorting", "Searching", "Traversal"],
          answer: 0,
        },
        {
          q: "What is next permutation?",
          options: ["Next lexicographic order", "Sorting", "Reversing", "Deleting"],
          answer: 0,
        },
        {
          q: "What is stock buy-sell problem?",
          options: ["Max profit", "Sorting", "Searching", "Traversal"],
          answer: 0,
        },
        {
          q: "What is median of two arrays?",
          options: ["Middle value", "Max value", "Min value", "Sum value"],
          answer: 0,
        },
        {
          q: "What is optimal approach?",
          options: ["Best time complexity solution", "Worst solution", "Random solution", "Brute force"],
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

export default Arrays;