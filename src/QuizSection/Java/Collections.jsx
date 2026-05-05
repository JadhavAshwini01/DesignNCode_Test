import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Collections() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "Which package contains Java Collection Framework?",
        options: ["java.util", "java.lang", "java.io", "java.collection"],
        answer: 0,
      },
      {
        q: "Which interface is the root of the collection hierarchy?",
        options: ["List", "Set", "Collection", "Map"],
        answer: 2,
      },
      {
        q: "Which class implements List interface?",
        options: ["HashSet", "ArrayList", "HashMap", "TreeSet"],
        answer: 1,
      },
      {
        q: "Which collection allows duplicate elements?",
        options: ["Set", "Map", "List", "None"],
        answer: 2,
      },
      {
        q: "Which collection does NOT allow duplicates?",
        options: ["List", "Set", "ArrayList", "LinkedList"],
        answer: 1,
      },
      {
        q: "Which class is used to store key-value pairs?",
        options: ["List", "Set", "Map", "Queue"],
        answer: 2,
      },
      {
        q: "Which method is used to add elements in a List?",
        options: ["put()", "add()", "insert()", "push()"],
        answer: 1,
      },
      {
        q: "Which method is used to remove elements?",
        options: ["delete()", "remove()", "clear()", "pop()"],
        answer: 1,
      },
      {
        q: "Which collection is ordered?",
        options: ["Set", "List", "Map", "HashSet"],
        answer: 1,
      },
      {
        q: "Which class implements Set interface?",
        options: ["ArrayList", "HashSet", "HashMap", "Vector"],
        answer: 1,
      },
    ],

    2: [
      {
        q: "Which List implementation uses dynamic array?",
        options: ["LinkedList", "ArrayList", "Vector", "Stack"],
        answer: 1,
      },
      {
        q: "Which collection is synchronized?",
        options: ["ArrayList", "HashSet", "Vector", "HashMap"],
        answer: 2,
      },
      {
        q: "Which Map implementation maintains insertion order?",
        options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
        answer: 2,
      },
      {
        q: "Which collection sorts elements automatically?",
        options: ["HashSet", "TreeSet", "ArrayList", "LinkedList"],
        answer: 1,
      },
      {
        q: "Which method returns size of collection?",
        options: ["length()", "size()", "count()", "getSize()"],
        answer: 1,
      },
      {
        q: "Which Map does NOT allow null key?",
        options: ["HashMap", "LinkedHashMap", "Hashtable", "TreeMap"],
        answer: 2,
      },
      {
        q: "Which interface extends Collection but is not part of it?",
        options: ["List", "Set", "Queue", "Map"],
        answer: 3,
      },
      {
        q: "Which method checks if element exists?",
        options: ["contains()", "exists()", "find()", "check()"],
        answer: 0,
      },
      {
        q: "Which collection uses FIFO?",
        options: ["Stack", "Queue", "List", "Set"],
        answer: 1,
      },
      {
        q: "Which collection uses LIFO?",
        options: ["Queue", "Stack", "List", "Set"],
        answer: 1,
      },
    ],

    3: [
      {
        q: "Which class provides resizable-array implementation?",
        options: ["LinkedList", "ArrayList", "HashSet", "TreeMap"],
        answer: 1,
      },
      {
        q: "Which method is used to iterate elements?",
        options: ["loop()", "iterator()", "iterate()", "next()"],
        answer: 1,
      },
      {
        q: "Which iterator method checks next element?",
        options: ["hasNext()", "checkNext()", "next()", "exists()"],
        answer: 0,
      },
      {
        q: "Which Map sorts keys?",
        options: ["HashMap", "LinkedHashMap", "TreeMap", "Hashtable"],
        answer: 2,
      },
      {
        q: "Which collection is best for frequent insert/delete?",
        options: ["ArrayList", "LinkedList", "Vector", "HashMap"],
        answer: 1,
      },
      {
        q: "Which method clears all elements?",
        options: ["removeAll()", "clear()", "deleteAll()", "empty()"],
        answer: 1,
      },
      {
        q: "Which collection is not thread-safe?",
        options: ["Vector", "Hashtable", "ArrayList", "Stack"],
        answer: 2,
      },
      {
        q: "Which method retrieves value from Map?",
        options: ["fetch()", "get()", "retrieve()", "value()"],
        answer: 1,
      },
      {
        q: "Which interface represents ordered collection?",
        options: ["Set", "List", "Map", "Queue"],
        answer: 1,
      },
      {
        q: "Which collection uses hashing?",
        options: ["TreeSet", "HashSet", "LinkedList", "ArrayList"],
        answer: 1,
      },
    ],

    4: [
      {
        q: "Which class is best for thread-safe List?",
        options: ["ArrayList", "LinkedList", "Vector", "HashSet"],
        answer: 2,
      },
      {
        q: "Which method replaces value in Map?",
        options: ["put()", "replace()", "set()", "update()"],
        answer: 1,
      },
      {
        q: "Which structure is used in HashMap internally?",
        options: ["Array + LinkedList", "Tree", "Stack", "Queue"],
        answer: 0,
      },
      {
        q: "Which collision handling technique is used in HashMap?",
        options: ["Chaining", "Linear Probing", "Double Hashing", "None"],
        answer: 0,
      },
      {
        q: "Which interface allows duplicate keys?",
        options: ["Map", "List", "Set", "None"],
        answer: 3,
      },
      {
        q: "Which method returns keys from Map?",
        options: ["keySet()", "keys()", "getKeys()", "fetchKeys()"],
        answer: 0,
      },
      {
        q: "Which collection is best for sorted unique elements?",
        options: ["HashSet", "TreeSet", "ArrayList", "LinkedList"],
        answer: 1,
      },
      {
        q: "Which class implements Queue?",
        options: ["PriorityQueue", "ArrayList", "HashSet", "TreeMap"],
        answer: 0,
      },
      {
        q: "Which method is used in Queue to remove element?",
        options: ["remove()", "poll()", "delete()", "pop()"],
        answer: 1,
      },
      {
        q: "Which Map is synchronized?",
        options: ["HashMap", "LinkedHashMap", "Hashtable", "TreeMap"],
        answer: 2,
      },
    ],

    5: [
      {
        q: "What is load factor in HashMap?",
        options: [
          "Capacity ratio",
          "Threshold for resizing",
          "Number of elements",
          "Memory usage",
        ],
        answer: 1,
      },
      {
        q: "What happens when HashMap exceeds load factor?",
        options: [
          "Deletes elements",
          "Resizes and rehashes",
          "Stops insertion",
          "Throws error",
        ],
        answer: 1,
      },
      {
        q: "Which Java version introduced Stream API?",
        options: ["Java 6", "Java 7", "Java 8", "Java 11"],
        answer: 2,
      },
      {
        q: "Which method converts collection to stream?",
        options: ["toStream()", "stream()", "convert()", "asStream()"],
        answer: 1,
      },
      {
        q: "Which operation is intermediate in streams?",
        options: ["forEach()", "collect()", "filter()", "count()"],
        answer: 2,
      },
      {
        q: "Which is terminal operation?",
        options: ["map()", "filter()", "collect()", "sorted()"],
        answer: 2,
      },
      {
        q: "Which interface supports parallel processing?",
        options: ["Stream", "ParallelStream", "Collection", "List"],
        answer: 1,
      },
      {
        q: "Which method sorts stream?",
        options: ["sort()", "order()", "sorted()", "arrange()"],
        answer: 2,
      },
      {
        q: "Which collection has O(1) average access time?",
        options: ["ArrayList", "LinkedList", "HashMap", "TreeMap"],
        answer: 2,
      },
      {
        q: "Which structure is used in TreeMap?",
        options: ["Heap", "Red-Black Tree", "Stack", "Queue"],
        answer: 1,
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
        <h1 className="level-title">COLLECTIONS QUIZ</h1>

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
    </div>
  );
}

export default Collections;