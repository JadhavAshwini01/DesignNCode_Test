import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function JDBC() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "What does JDBC stand for?",
        options: [
          "Java Database Connectivity",
          "Java Data Connection",
          "Java Database Control",
          "Java Data Connectivity",
        ],
        answer: 0,
      },
      {
        q: "Which package is used for JDBC?",
        options: ["java.sql", "java.db", "java.jdbc", "java.connection"],
        answer: 0,
      },
      {
        q: "Which class is used to load driver?",
        options: ["Driver", "Class", "DriverManager", "Connection"],
        answer: 1,
      },
      {
        q: "Which interface represents database connection?",
        options: ["Statement", "Connection", "Driver", "ResultSet"],
        answer: 1,
      },
      {
        q: "Which method is used to connect database?",
        options: [
          "connect()",
          "getConnection()",
          "openConnection()",
          "startConnection()",
        ],
        answer: 1,
      },
      {
        q: "Which interface is used to execute SQL query?",
        options: ["Connection", "Statement", "Driver", "ResultSet"],
        answer: 1,
      },
      {
        q: "Which object holds query result?",
        options: ["Connection", "Statement", "ResultSet", "Driver"],
        answer: 2,
      },
      {
        q: "Which method executes SELECT query?",
        options: ["execute()", "executeQuery()", "executeUpdate()", "runQuery()"],
        answer: 1,
      },
      {
        q: "Which method executes INSERT/UPDATE/DELETE?",
        options: [
          "executeQuery()",
          "executeUpdate()",
          "execute()",
          "runUpdate()",
        ],
        answer: 1,
      },
      {
        q: "Which driver type is pure Java?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        answer: 3,
      },
    ],

    2: [
      {
        q: "Which class manages JDBC drivers?",
        options: ["Driver", "DriverManager", "Connection", "Statement"],
        answer: 1,
      },
      {
        q: "Which method moves cursor to next row?",
        options: ["next()", "move()", "forward()", "rowNext()"],
        answer: 0,
      },
      {
        q: "Which method retrieves int value from ResultSet?",
        options: ["getInt()", "fetchInt()", "readInt()", "intValue()"],
        answer: 0,
      },
      {
        q: "Which statement is precompiled?",
        options: ["Statement", "PreparedStatement", "CallableStatement", "Query"],
        answer: 1,
      },
      {
        q: "Which statement is used for stored procedures?",
        options: ["Statement", "PreparedStatement", "CallableStatement", "ResultSet"],
        answer: 2,
      },
      {
        q: "Which method closes connection?",
        options: ["end()", "close()", "disconnect()", "finish()"],
        answer: 1,
      },
      {
        q: "Which object is used for batch processing?",
        options: ["Statement", "Connection", "ResultSet", "Driver"],
        answer: 0,
      },
      {
        q: "Which method is used to add batch?",
        options: ["addBatch()", "batchAdd()", "insertBatch()", "setBatch()"],
        answer: 0,
      },
      {
        q: "Which method executes batch?",
        options: ["executeBatch()", "runBatch()", "batchExecute()", "processBatch()"],
        answer: 0,
      },
      {
        q: "Which method commits transaction?",
        options: ["commit()", "save()", "apply()", "done()"],
        answer: 0,
      },
    ],

    3: [
      {
        q: "Which method rolls back transaction?",
        options: ["rollback()", "undo()", "reverse()", "cancel()"],
        answer: 0,
      },
      {
        q: "Which ResultSet type allows scrolling?",
        options: [
          "TYPE_FORWARD_ONLY",
          "TYPE_SCROLL_INSENSITIVE",
          "TYPE_SCROLL_SENSITIVE",
          "Both B and C",
        ],
        answer: 3,
      },
      {
        q: "Which ResultSet is default?",
        options: [
          "TYPE_SCROLL_SENSITIVE",
          "TYPE_FORWARD_ONLY",
          "TYPE_SCROLL_INSENSITIVE",
          "TYPE_DYNAMIC",
        ],
        answer: 1,
      },
      {
        q: "Which method sets auto commit off?",
        options: ["setAutoCommit(false)", "autoCommit(false)", "commit(false)", "disableCommit()"],
        answer: 0,
      },
      {
        q: "Which method retrieves String?",
        options: ["getString()", "fetchString()", "readString()", "stringValue()"],
        answer: 0,
      },
      {
        q: "Which statement prevents SQL injection?",
        options: ["Statement", "PreparedStatement", "CallableStatement", "Query"],
        answer: 1,
      },
      {
        q: "Which method sets parameter in PreparedStatement?",
        options: ["setInt()", "setString()", "setValue()", "Both A and B"],
        answer: 3,
      },
      {
        q: "Which exception is used in JDBC?",
        options: ["IOException", "SQLException", "RuntimeException", "NullPointerException"],
        answer: 1,
      },
      {
        q: "Which interface represents result table?",
        options: ["Connection", "Statement", "ResultSet", "Driver"],
        answer: 2,
      },
      {
        q: "Which method executes any SQL?",
        options: ["execute()", "executeQuery()", "executeUpdate()", "run()"],
        answer: 0,
      },
    ],

    4: [
      {
        q: "Which driver type uses ODBC bridge?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        answer: 0,
      },
      {
        q: "Which driver is deprecated?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        answer: 0,
      },
      {
        q: "Which ResultSet concurrency allows updates?",
        options: [
          "CONCUR_READ_ONLY",
          "CONCUR_UPDATABLE",
          "CONCUR_WRITE",
          "CONCUR_DYNAMIC",
        ],
        answer: 1,
      },
      {
        q: "Which method is used to get metadata?",
        options: ["getMetaData()", "meta()", "fetchMeta()", "getData()"],
        answer: 0,
      },
      {
        q: "Which class represents database metadata?",
        options: [
          "DatabaseMetaData",
          "ResultSetMetaData",
          "MetaInfo",
          "DataInfo",
        ],
        answer: 0,
      },
      {
        q: "Which class represents result metadata?",
        options: [
          "DatabaseMetaData",
          "ResultSetMetaData",
          "MetaResult",
          "DataSet",
        ],
        answer: 1,
      },
      {
        q: "Which method sets savepoint?",
        options: ["setSavepoint()", "save()", "createSave()", "point()"],
        answer: 0,
      },
      {
        q: "Which method releases savepoint?",
        options: ["releaseSavepoint()", "removeSavepoint()", "deleteSave()", "clearSave()"],
        answer: 0,
      },
      {
        q: "Which method checks connection validity?",
        options: ["isValid()", "check()", "validate()", "verify()"],
        answer: 0,
      },
      {
        q: "Which API supports connection pooling?",
        options: ["JDBC", "JNDI", "Servlet", "JSP"],
        answer: 1,
      },
    ],

    5: [
      {
        q: "Which driver is most efficient?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        answer: 3,
      },
      {
        q: "Which feature improves performance in JDBC?",
        options: ["Batch processing", "Transactions", "PreparedStatement", "All"],
        answer: 3,
      },
      {
        q: "Which interface supports stored procedures?",
        options: ["Statement", "PreparedStatement", "CallableStatement", "ResultSet"],
        answer: 2,
      },
      {
        q: "Which exception occurs on DB error?",
        options: ["IOException", "SQLException", "RuntimeException", "NullPointerException"],
        answer: 1,
      },
      {
        q: "Which method is used for auto-generated keys?",
        options: ["getGeneratedKeys()", "fetchKeys()", "autoKeys()", "keySet()"],
        answer: 0,
      },
      {
        q: "Which method sets fetch size?",
        options: ["setFetchSize()", "fetchSize()", "setSize()", "getFetchSize()"],
        answer: 0,
      },
      {
        q: "Which method retrieves column count?",
        options: ["getColumnCount()", "columnCount()", "countColumns()", "getCount()"],
        answer: 0,
      },
      {
        q: "Which design pattern is used in JDBC?",
        options: ["Singleton", "Factory", "DAO", "MVC"],
        answer: 1,
      },
      {
        q: "Which object handles SQL warnings?",
        options: ["SQLWarning", "SQLException", "Warning", "DBWarning"],
        answer: 0,
      },
      {
        q: "Which method is used to clear parameters?",
        options: ["clearParameters()", "reset()", "removeParams()", "clear()"],
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
        <h1 className="level-title">CORE JAVA QUIZ</h1>

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

export default JDBC;