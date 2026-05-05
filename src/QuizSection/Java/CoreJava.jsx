import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function CoreJava() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "Java is a ____ language.",
        options: ["Compiled", "Interpreted", "Both", "None"],
        answer: 2,
      },
      {
        q: "Which keyword is used to define a class?",
        options: ["function", "class", "define", "struct"],
        answer: 1,
      },
      {
        q: "Which method is the entry point of Java program?",
        options: ["start()", "main()", "run()", "init()"],
        answer: 1,
      },
      {
        q: "Which keyword is used to create object?",
        options: ["this", "new", "create", "object"],
        answer: 1,
      },
      {
        q: "Java is platform ____.",
        options: ["dependent", "independent", "specific", "limited"],
        answer: 1,
      },
      {
        q: "Which data type is used for whole numbers?",
        options: ["float", "int", "char", "boolean"],
        answer: 1,
      },
      {
        q: "Which symbol is used for single line comment?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: 0,
      },
      {
        q: "Which keyword is used to inherit a class?",
        options: ["implements", "extends", "inherits", "super"],
        answer: 1,
      },
      {
        q: "Which keyword is used to define constant?",
        options: ["static", "final", "const", "fixed"],
        answer: 1,
      },
      {
        q: "Which keyword refers to current object?",
        options: ["this", "self", "current", "object"],
        answer: 0,
      },
    ],

    2: [
      {
        q: "Which concept allows multiple methods with same name?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        answer: 2,
      },
      {
        q: "Which keyword is used to prevent inheritance?",
        options: ["static", "final", "private", "protected"],
        answer: 1,
      },
      {
        q: "Which access modifier is most restrictive?",
        options: ["public", "protected", "default", "private"],
        answer: 3,
      },
      {
        q: "Which keyword is used for method overriding?",
        options: ["override", "@Override", "super", "this"],
        answer: 1,
      },
      {
        q: "Which concept hides implementation details?",
        options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
        answer: 1,
      },
      {
        q: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "foreach"],
        answer: 2,
      },
      {
        q: "Which exception is checked?",
        options: ["ArithmeticException", "IOException", "NullPointerException", "ArrayIndexOutOfBounds"],
        answer: 1,
      },
      {
        q: "Which block is always executed?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2,
      },
      {
        q: "Which keyword is used to handle exception?",
        options: ["handle", "catch", "fix", "error"],
        answer: 1,
      },
      {
        q: "Which operator is used for comparison?",
        options: ["=", "==", "!=", "equals"],
        answer: 1,
      },
    ],

    3: [
      {
        q: "Which keyword is used for abstract class?",
        options: ["abstract", "interface", "virtual", "base"],
        answer: 0,
      },
      {
        q: "Which interface is implemented for threads?",
        options: ["Runnable", "Thread", "Executor", "Callable"],
        answer: 0,
      },
      {
        q: "Which method starts a thread?",
        options: ["run()", "start()", "execute()", "init()"],
        answer: 1,
      },
      {
        q: "Which keyword is used for synchronization?",
        options: ["sync", "synchronized", "lock", "thread"],
        answer: 1,
      },
      {
        q: "Which keyword is used to call parent constructor?",
        options: ["this()", "super()", "parent()", "base()"],
        answer: 1,
      },
      {
        q: "Which concept combines data and methods?",
        options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
        answer: 1,
      },
      {
        q: "Which class is root of Java hierarchy?",
        options: ["Object", "Class", "Main", "Base"],
        answer: 0,
      },
      {
        q: "Which keyword is used to create interface?",
        options: ["interface", "abstract", "class", "implements"],
        answer: 0,
      },
      {
        q: "Which method is used to compare objects?",
        options: ["==", "compare()", "equals()", "match()"],
        answer: 2,
      },
      {
        q: "Which method returns string representation?",
        options: ["toString()", "string()", "print()", "valueOf()"],
        answer: 0,
      },
    ],

    4: [
      {
        q: "Which type of inheritance Java supports?",
        options: ["Multiple", "Multilevel", "Hybrid", "All"],
        answer: 1,
      },
      {
        q: "Which keyword is used to define package?",
        options: ["package", "import", "namespace", "folder"],
        answer: 0,
      },
      {
        q: "Which keyword is used to import packages?",
        options: ["using", "include", "import", "require"],
        answer: 2,
      },
      {
        q: "Which keyword is used to throw exception?",
        options: ["throw", "throws", "catch", "error"],
        answer: 0,
      },
      {
        q: "Which keyword declares exception in method?",
        options: ["throw", "throws", "try", "catch"],
        answer: 1,
      },
      {
        q: "Which class is immutable?",
        options: ["String", "StringBuilder", "StringBuffer", "ArrayList"],
        answer: 0,
      },
      {
        q: "Which class is thread-safe for strings?",
        options: ["String", "StringBuilder", "StringBuffer", "CharArray"],
        answer: 2,
      },
      {
        q: "Which memory is used for objects?",
        options: ["Stack", "Heap", "Register", "Cache"],
        answer: 1,
      },
      {
        q: "Which memory is used for method calls?",
        options: ["Heap", "Stack", "ROM", "Disk"],
        answer: 1,
      },
      {
        q: "Which feature supports runtime polymorphism?",
        options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"],
        answer: 1,
      },
    ],

    5: [
      {
        q: "Which principle is followed by JVM for memory cleanup?",
        options: ["Manual", "Garbage Collection", "Reference Counting", "Heap Control"],
        answer: 1,
      },
      {
        q: "Which method is called before object is destroyed?",
        options: ["delete()", "finalize()", "destroy()", "remove()"],
        answer: 1,
      },
      {
        q: "Which type of polymorphism is compile-time?",
        options: ["Overriding", "Overloading", "Inheritance", "Abstraction"],
        answer: 1,
      },
      {
        q: "Which feature allows one interface multiple implementations?",
        options: ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
        answer: 2,
      },
      {
        q: "Which keyword prevents method overriding?",
        options: ["final", "static", "private", "abstract"],
        answer: 0,
      },
      {
        q: "Which class loader loads core Java classes?",
        options: ["Bootstrap", "Extension", "Application", "Custom"],
        answer: 0,
      },
      {
        q: "Which collection is fail-fast?",
        options: ["ArrayList", "Vector", "Hashtable", "Stack"],
        answer: 0,
      },
      {
        q: "Which keyword is used for lambda expression?",
        options: ["->", "::", "=>", "lambda"],
        answer: 0,
      },
      {
        q: "Which interface is functional interface?",
        options: ["Runnable", "Serializable", "Cloneable", "Comparable"],
        answer: 0,
      },
      {
        q: "Which stream type processes in parallel?",
        options: ["Sequential", "Parallel", "Async", "Sync"],
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

export default CoreJava;