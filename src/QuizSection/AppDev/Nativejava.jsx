import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Nativejava() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is Native Java?",
      options: [
        "Java code interacting with native OS code",
        "Java UI framework",
        "Database language",
        "Web framework",
      ],
      answer: 0,
    },
    {
      q: "Which keyword is used for native methods?",
      options: ["native", "static", "final", "synchronized"],
      answer: 0,
    },
    {
      q: "Which language is used with JNI?",
      options: ["C/C++", "Python", "JavaScript", "HTML"],
      answer: 0,
    },
    {
      q: "What does JNI stand for?",
      options: [
        "Java Native Interface",
        "Java Network Interface",
        "Java New Interface",
        "Java Node Interface",
      ],
      answer: 0,
    },
    {
      q: "Which file is generated for native methods?",
      options: [".h file", ".class", ".jar", ".xml"],
      answer: 0,
    },
    {
      q: "Which method loads native library?",
      options: ["System.loadLibrary()", "load()", "import()", "require()"],
      answer: 0,
    },
    {
      q: "Which JVM component runs bytecode?",
      options: ["JVM", "JDK", "JRE", "Compiler"],
      answer: 0,
    },
    {
      q: "Which converts Java code to bytecode?",
      options: ["Compiler", "Interpreter", "Loader", "Executor"],
      answer: 0,
    },
    {
      q: "Which file contains bytecode?",
      options: [".class", ".java", ".jar", ".xml"],
      answer: 0,
    },
    {
      q: "Which JVM loads classes?",
      options: ["ClassLoader", "Compiler", "Executor", "Thread"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which memory stores objects?",
      options: ["Heap", "Stack", "Cache", "Register"],
      answer: 0,
    },
    {
      q: "Which memory stores method calls?",
      options: ["Stack", "Heap", "ROM", "Disk"],
      answer: 0,
    },
    {
      q: "Which component executes bytecode?",
      options: ["Execution Engine", "Compiler", "Loader", "Thread"],
      answer: 0,
    },
    {
      q: "Which converts bytecode to machine code?",
      options: ["JIT Compiler", "Loader", "Interpreter", "Parser"],
      answer: 0,
    },
    {
      q: "Which handles memory cleanup?",
      options: ["Garbage Collector", "Loader", "Compiler", "Executor"],
      answer: 0,
    },
    {
      q: "Which JVM area stores class metadata?",
      options: ["Method Area", "Heap", "Stack", "Cache"],
      answer: 0,
    },
    {
      q: "Which keyword prevents thread interference?",
      options: ["synchronized", "native", "static", "final"],
      answer: 0,
    },
    {
      q: "Which method is called before GC?",
      options: ["finalize()", "destroy()", "delete()", "clear()"],
      answer: 0,
    },
    {
      q: "Which interface is marker interface?",
      options: ["Serializable", "Runnable", "Comparable", "Callable"],
      answer: 0,
    },
    {
      q: "Which method is entry point?",
      options: ["main()", "run()", "start()", "init()"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which class loader loads core classes?",
      options: ["Bootstrap", "Extension", "Application", "Custom"],
      answer: 0,
    },
    {
      q: "Which class loader loads external libraries?",
      options: ["Extension", "Bootstrap", "Application", "Custom"],
      answer: 0,
    },
    {
      q: "Which class loader loads user classes?",
      options: ["Application", "Bootstrap", "Extension", "Custom"],
      answer: 0,
    },
    {
      q: "Which concept allows Java to call C code?",
      options: ["JNI", "JVM", "JDK", "JRE"],
      answer: 0,
    },
    {
      q: "Which keyword is used for system resources?",
      options: ["native", "static", "final", "volatile"],
      answer: 0,
    },
    {
      q: "Which JVM area stores variables?",
      options: ["Stack", "Heap", "Method Area", "Cache"],
      answer: 0,
    },
    {
      q: "Which concept ensures platform independence?",
      options: ["Bytecode", "Native Code", "Machine Code", "Script"],
      answer: 0,
    },
    {
      q: "Which method loads .dll or .so?",
      options: ["System.load()", "System.run()", "System.import()", "System.call()"],
      answer: 0,
    },
    {
      q: "Which concept links Java and OS?",
      options: ["JNI", "JVM", "JDK", "JRE"],
      answer: 0,
    },
    {
      q: "Which type of code runs directly on OS?",
      options: ["Native Code", "Bytecode", "Java Code", "Script"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which concept improves performance?",
      options: ["JIT", "GC", "Loader", "Parser"],
      answer: 0,
    },
    {
      q: "Which GC type stops all threads?",
      options: ["Stop-the-world", "Concurrent", "Parallel", "Serial"],
      answer: 0,
    },
    {
      q: "Which GC runs parallel threads?",
      options: ["Parallel GC", "Serial GC", "CMS", "G1"],
      answer: 0,
    },
    {
      q: "Which GC is low pause?",
      options: ["G1 GC", "Serial GC", "Parallel GC", "None"],
      answer: 0,
    },
    {
      q: "Which concept divides heap?",
      options: ["Generational GC", "Threading", "Caching", "Scaling"],
      answer: 0,
    },
    {
      q: "Which memory is for young objects?",
      options: ["Young Gen", "Old Gen", "Stack", "Cache"],
      answer: 0,
    },
    {
      q: "Which memory stores long-lived objects?",
      options: ["Old Gen", "Young Gen", "Stack", "Cache"],
      answer: 0,
    },
    {
      q: "Which concept ensures thread safety?",
      options: ["Synchronization", "Caching", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept avoids race condition?",
      options: ["Locking", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which keyword ensures visibility?",
      options: ["volatile", "final", "static", "native"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept links Java with hardware?",
      options: ["JNI", "JVM", "JDK", "JRE"],
      answer: 0,
    },
    {
      q: "Which optimization compiles at runtime?",
      options: ["JIT", "Compiler", "Loader", "Parser"],
      answer: 0,
    },
    {
      q: "Which concept avoids memory leak?",
      options: ["Garbage Collection", "Threading", "Caching", "Scaling"],
      answer: 0,
    },
    {
      q: "Which concept improves concurrency?",
      options: ["Multithreading", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept improves scalability?",
      options: ["Parallelism", "Caching", "Encoding", "Clustering"],
      answer: 0,
    },
    {
      q: "Which concept manages memory manually?",
      options: ["Native Code", "Java Code", "Bytecode", "Script"],
      answer: 0,
    },
    {
      q: "Which concept improves execution speed?",
      options: ["JIT Compilation", "GC", "Loader", "Parser"],
      answer: 0,
    },
    {
      q: "Which concept ensures cross-platform?",
      options: ["JVM", "JNI", "JDK", "JRE"],
      answer: 0,
    },
    {
      q: "Which concept handles system-level calls?",
      options: ["JNI", "Thread", "GC", "Loader"],
      answer: 0,
    },
    {
      q: "Which concept is closest to OS?",
      options: ["Native Code", "Java Code", "Bytecode", "Script"],
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

export default Nativejava;