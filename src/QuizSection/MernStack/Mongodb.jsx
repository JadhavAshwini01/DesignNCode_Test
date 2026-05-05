import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Mongodb() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is MongoDB?",
      options: [
        "NoSQL database",
        "SQL database",
        "Programming language",
        "Framework",
      ],
      answer: 0,
    },
    {
      q: "Which format MongoDB uses?",
      options: ["BSON", "XML", "HTML", "CSV"],
      answer: 0,
    },
    {
      q: "What is a collection?",
      options: [
        "Group of documents",
        "Single record",
        "Table",
        "Row",
      ],
      answer: 0,
    },
    {
      q: "What is a document?",
      options: [
        "JSON-like data",
        "Table",
        "Row",
        "Column",
      ],
      answer: 0,
    },
    {
      q: "Which command inserts data?",
      options: ["insertOne()", "find()", "update()", "delete()"],
      answer: 0,
    },
    {
      q: "Which command finds data?",
      options: ["find()", "insert()", "update()", "delete()"],
      answer: 0,
    },
    {
      q: "Which command updates data?",
      options: ["updateOne()", "find()", "insert()", "delete()"],
      answer: 0,
    },
    {
      q: "Which command deletes data?",
      options: ["deleteOne()", "find()", "insert()", "update()"],
      answer: 0,
    },
    {
      q: "Which field is unique?",
      options: ["_id", "name", "age", "data"],
      answer: 0,
    },
    {
      q: "Which method shows all DB?",
      options: ["show dbs", "show tables", "list db", "get db"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which command creates DB?",
      options: ["use dbName", "create db", "new db", "db create"],
      answer: 0,
    },
    {
      q: "Which command shows collections?",
      options: ["show collections", "show tables", "list data", "db show"],
      answer: 0,
    },
    {
      q: "Which method inserts many docs?",
      options: ["insertMany()", "insertOne()", "save()", "add()"],
      answer: 0,
    },
    {
      q: "Which method updates many docs?",
      options: ["updateMany()", "updateOne()", "edit()", "change()"],
      answer: 0,
    },
    {
      q: "Which method deletes many docs?",
      options: ["deleteMany()", "deleteOne()", "remove()", "drop()"],
      answer: 0,
    },
    {
      q: "Which operator filters data?",
      options: ["$match", "$filter", "$where", "$find"],
      answer: 2,
    },
    {
      q: "Which operator compares value?",
      options: ["$gt", "$sum", "$group", "$sort"],
      answer: 0,
    },
    {
      q: "Which operator sorts data?",
      options: ["$sort", "$group", "$match", "$limit"],
      answer: 0,
    },
    {
      q: "Which operator limits data?",
      options: ["$limit", "$sort", "$group", "$match"],
      answer: 0,
    },
    {
      q: "Which operator groups data?",
      options: ["$group", "$sort", "$match", "$limit"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is indexing?",
      options: [
        "Improves query speed",
        "Stores data",
        "Deletes data",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which method creates index?",
      options: ["createIndex()", "addIndex()", "setIndex()", "newIndex()"],
      answer: 0,
    },
    {
      q: "What is schema?",
      options: [
        "Structure of data",
        "Database",
        "Collection",
        "Document",
      ],
      answer: 0,
    },
    {
      q: "Which library connects MongoDB?",
      options: ["Mongoose", "Express", "React", "Node"],
      answer: 0,
    },
    {
      q: "Which concept validates schema?",
      options: ["Validation", "Routing", "API", "UI"],
      answer: 0,
    },
    {
      q: "Which concept handles relations?",
      options: ["Reference", "Join", "Link", "Merge"],
      answer: 0,
    },
    {
      q: "Which concept embeds data?",
      options: ["Embedding", "Reference", "Join", "Link"],
      answer: 0,
    },
    {
      q: "Which concept aggregates data?",
      options: ["Aggregation", "Filter", "Sort", "Limit"],
      answer: 0,
    },
    {
      q: "Which pipeline processes data?",
      options: ["Aggregation Pipeline", "Query", "Filter", "Sort"],
      answer: 0,
    },
    {
      q: "Which stage filters data?",
      options: ["$match", "$group", "$sort", "$limit"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which stage groups data?",
      options: ["$group", "$match", "$sort", "$limit"],
      answer: 0,
    },
    {
      q: "Which stage sorts data?",
      options: ["$sort", "$group", "$match", "$limit"],
      answer: 0,
    },
    {
      q: "Which stage limits data?",
      options: ["$limit", "$sort", "$group", "$match"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Indexing", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept handles backup?",
      options: ["Backup", "Index", "Cache", "Cluster"],
      answer: 0,
    },
    {
      q: "Which concept replicates data?",
      options: ["Replication", "Sharding", "Index", "Cache"],
      answer: 0,
    },
    {
      q: "Which concept splits data?",
      options: ["Sharding", "Replication", "Index", "Cache"],
      answer: 0,
    },
    {
      q: "Which concept scales DB?",
      options: ["Horizontal Scaling", "Vertical", "Both", "None"],
      answer: 2,
    },
    {
      q: "Which concept handles security?",
      options: ["Authentication", "Routing", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept controls access?",
      options: ["Authorization", "Authentication", "UI", "API"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept manages users?",
      options: ["User Management", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept logs DB activity?",
      options: ["Logging", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept monitors DB?",
      options: ["Monitoring", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept optimizes queries?",
      options: ["Optimization", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept ensures availability?",
      options: ["High Availability", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept handles distributed DB?",
      options: ["Distributed Systems", "Local", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept manages large data?",
      options: ["Big Data", "Small Data", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Caching", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept ensures data consistency?",
      options: ["Consistency", "Storage", "UI", "API"],
      answer: 0,
    },
    {
      q: "Which concept builds scalable DB?",
      options: ["Sharding", "Indexing", "Replication", "All"],
      answer: 3,
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

export default Mongodb;