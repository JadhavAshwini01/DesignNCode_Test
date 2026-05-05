import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function NativeKotlin() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "Kotlin is mainly used for?",
      options: ["Web Design", "Android Development", "Database", "Networking"],
      answer: 1,
    },
    {
      q: "Which company developed Kotlin?",
      options: ["Google", "JetBrains", "Microsoft", "Oracle"],
      answer: 1,
    },
    {
      q: "Kotlin runs on?",
      options: ["JVM", "Browser", "Database", "Cloud only"],
      answer: 0,
    },
    {
      q: "Which keyword defines variable?",
      options: ["var", "let", "val", "Both var and val"],
      answer: 3,
    },
    {
      q: "Which keyword defines immutable variable?",
      options: ["var", "val", "const", "final"],
      answer: 1,
    },
    {
      q: "Which keyword defines function?",
      options: ["fun", "def", "function", "method"],
      answer: 0,
    },
    {
      q: "Which symbol is used for null safety?",
      options: ["?", "!", "#", "*"],
      answer: 0,
    },
    {
      q: "Which operator handles null?",
      options: ["?.", "!!", "?:", "All"],
      answer: 3,
    },
    {
      q: "Which keyword is used for class?",
      options: ["class", "object", "struct", "data"],
      answer: 0,
    },
    {
      q: "Which keyword creates object?",
      options: ["new", "create", "init", "No keyword"],
      answer: 3,
    },
  ],

  2: [
    {
      q: "Which keyword defines data class?",
      options: ["data", "class", "object", "model"],
      answer: 0,
    },
    {
      q: "Which function prints output?",
      options: ["print()", "println()", "echo()", "show()"],
      answer: 1,
    },
    {
      q: "Which keyword is used for inheritance?",
      options: ["extends", "inherits", ":", "super"],
      answer: 2,
    },
    {
      q: "Which keyword allows overriding?",
      options: ["override", "super", "this", "extend"],
      answer: 0,
    },
    {
      q: "Which keyword makes class inheritable?",
      options: ["open", "final", "abstract", "public"],
      answer: 0,
    },
    {
      q: "Which keyword defines interface?",
      options: ["interface", "class", "abstract", "object"],
      answer: 0,
    },
    {
      q: "Which collection stores key-value?",
      options: ["List", "Set", "Map", "Array"],
      answer: 2,
    },
    {
      q: "Which function is used for lambda?",
      options: ["{}", "()", "[]", "<>"],
      answer: 0,
    },
    {
      q: "Which keyword is used for when condition?",
      options: ["switch", "when", "if", "case"],
      answer: 1,
    },
    {
      q: "Which keyword defines constant?",
      options: ["val", "const", "var", "final"],
      answer: 1,
    },
  ],

  3: [
    {
      q: "Which function handles null default?",
      options: ["?:", "?.", "!!", "::"],
      answer: 0,
    },
    {
      q: "Which operator forces non-null?",
      options: ["!!", "?.", "?:", "::"],
      answer: 0,
    },
    {
      q: "Which feature avoids NullPointerException?",
      options: ["Null Safety", "Inheritance", "Encapsulation", "Polymorphism"],
      answer: 0,
    },
    {
      q: "Which concept improves readability?",
      options: ["Concise Syntax", "Loops", "Arrays", "Pointers"],
      answer: 0,
    },
    {
      q: "Which function creates list?",
      options: ["listOf()", "arrayOf()", "mapOf()", "setOf()"],
      answer: 0,
    },
    {
      q: "Which function creates mutable list?",
      options: ["mutableListOf()", "listOf()", "arrayOf()", "setOf()"],
      answer: 0,
    },
    {
      q: "Which scope function uses 'it'?",
      options: ["let", "apply", "run", "also"],
      answer: 0,
    },
    {
      q: "Which scope function uses 'this'?",
      options: ["apply", "let", "also", "with"],
      answer: 0,
    },
    {
      q: "Which keyword is used for coroutine?",
      options: ["suspend", "async", "await", "thread"],
      answer: 0,
    },
    {
      q: "Which function starts coroutine?",
      options: ["launch", "run", "start", "execute"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which coroutine builder returns result?",
      options: ["async", "launch", "run", "start"],
      answer: 0,
    },
    {
      q: "Which function waits coroutine?",
      options: ["await()", "wait()", "join()", "get()"],
      answer: 0,
    },
    {
      q: "Which dispatcher runs background tasks?",
      options: ["Dispatchers.IO", "Main", "Default", "All"],
      answer: 3,
    },
    {
      q: "Which dispatcher is for UI?",
      options: ["Main", "IO", "Default", "Background"],
      answer: 0,
    },
    {
      q: "Which concept handles async tasks?",
      options: ["Coroutines", "Threads", "Callbacks", "All"],
      answer: 3,
    },
    {
      q: "Which annotation is used in Android?",
      options: ["@Composable", "@Override", "@Entity", "@Service"],
      answer: 0,
    },
    {
      q: "Which toolkit builds UI?",
      options: ["Jetpack Compose", "XML", "Swing", "AWT"],
      answer: 0,
    },
    {
      q: "Which feature replaces findViewById?",
      options: ["View Binding", "Binding", "Mapping", "Linking"],
      answer: 0,
    },
    {
      q: "Which concept handles lifecycle?",
      options: ["Lifecycle", "Thread", "Binding", "State"],
      answer: 0,
    },
    {
      q: "Which architecture is used in Android?",
      options: ["MVVM", "MVC", "MVP", "All"],
      answer: 3,
    },
  ],

  5: [
    {
      q: "Which feature reduces boilerplate code?",
      options: ["Data Class", "Loops", "Arrays", "Functions"],
      answer: 0,
    },
    {
      q: "Which concept ensures safe calls?",
      options: ["Null Safety", "Threading", "Caching", "Scaling"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Coroutines", "Loops", "Arrays", "Functions"],
      answer: 0,
    },
    {
      q: "Which concept is lazy loading?",
      options: ["lazy", "lateinit", "init", "var"],
      answer: 0,
    },
    {
      q: "Which keyword delays initialization?",
      options: ["lateinit", "lazy", "init", "val"],
      answer: 0,
    },
    {
      q: "Which function transforms collections?",
      options: ["map()", "filter()", "reduce()", "All"],
      answer: 3,
    },
    {
      q: "Which concept uses functional style?",
      options: ["Lambda", "Loop", "Class", "Object"],
      answer: 0,
    },
    {
      q: "Which feature supports extension?",
      options: ["Extension Functions", "Inheritance", "Interfaces", "Abstract"],
      answer: 0,
    },
    {
      q: "Which concept improves maintainability?",
      options: ["Clean Code", "Loops", "Arrays", "Variables"],
      answer: 0,
    },
    {
      q: "Which concept makes Kotlin modern?",
      options: ["Concise + Safe", "Verbose", "Complex", "Low-level"],
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

export default NativeKotlin;