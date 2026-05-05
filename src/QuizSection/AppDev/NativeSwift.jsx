import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function NativeSwift() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "Swift is mainly used for?",
      options: ["Android apps", "iOS apps", "Web design", "Database"],
      answer: 1,
    },
    {
      q: "Which company developed Swift?",
      options: ["Google", "Apple", "Microsoft", "JetBrains"],
      answer: 1,
    },
    {
      q: "Which keyword defines variable?",
      options: ["var", "let", "Both", "const"],
      answer: 2,
    },
    {
      q: "Which keyword defines constant?",
      options: ["var", "let", "const", "final"],
      answer: 1,
    },
    {
      q: "Which symbol handles optional?",
      options: ["?", "!", "#", "*"],
      answer: 0,
    },
    {
      q: "Which function prints output?",
      options: ["print()", "echo()", "show()", "display()"],
      answer: 0,
    },
    {
      q: "Which keyword defines function?",
      options: ["func", "def", "function", "method"],
      answer: 0,
    },
    {
      q: "Which keyword defines class?",
      options: ["class", "struct", "object", "model"],
      answer: 0,
    },
    {
      q: "Which type stores multiple values?",
      options: ["Array", "Int", "String", "Bool"],
      answer: 0,
    },
    {
      q: "Which type stores key-value pairs?",
      options: ["Dictionary", "Array", "Set", "Tuple"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which keyword handles condition?",
      options: ["if", "when", "switch", "case"],
      answer: 0,
    },
    {
      q: "Which keyword handles multiple conditions?",
      options: ["switch", "if", "loop", "case"],
      answer: 0,
    },
    {
      q: "Which loop is used in Swift?",
      options: ["for", "while", "repeat-while", "All"],
      answer: 3,
    },
    {
      q: "Which concept prevents null errors?",
      options: ["Optionals", "Inheritance", "Loops", "Arrays"],
      answer: 0,
    },
    {
      q: "Which operator unwraps optional safely?",
      options: ["?", "!", "??", "::"],
      answer: 2,
    },
    {
      q: "Which keyword unwraps optional forcefully?",
      options: ["!", "?", "??", "::"],
      answer: 0,
    },
    {
      q: "Which type defines custom data?",
      options: ["Struct", "Loop", "Array", "String"],
      answer: 0,
    },
    {
      q: "Which type supports inheritance?",
      options: ["Class", "Struct", "Enum", "Tuple"],
      answer: 0,
    },
    {
      q: "Which keyword is used for inheritance?",
      options: [":", "extends", "inherits", "super"],
      answer: 0,
    },
    {
      q: "Which keyword allows override?",
      options: ["override", "super", "this", "extend"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which concept handles async tasks?",
      options: ["Concurrency", "Loop", "Array", "Function"],
      answer: 0,
    },
    {
      q: "Which keyword defines async function?",
      options: ["async", "await", "thread", "task"],
      answer: 0,
    },
    {
      q: "Which keyword waits async result?",
      options: ["await", "async", "wait", "join"],
      answer: 0,
    },
    {
      q: "Which framework builds UI?",
      options: ["SwiftUI", "UIKit", "Both", "None"],
      answer: 2,
    },
    {
      q: "Which keyword defines closure?",
      options: ["{}", "()", "[]", "<>"],
      answer: 0,
    },
    {
      q: "Which method maps data?",
      options: ["map()", "filter()", "reduce()", "All"],
      answer: 3,
    },
    {
      q: "Which concept improves readability?",
      options: ["Optionals", "Loops", "Pointers", "Memory"],
      answer: 0,
    },
    {
      q: "Which keyword defines enum?",
      options: ["enum", "class", "struct", "object"],
      answer: 0,
    },
    {
      q: "Which keyword defines protocol?",
      options: ["protocol", "interface", "abstract", "class"],
      answer: 0,
    },
    {
      q: "Which concept is similar to interface?",
      options: ["Protocol", "Struct", "Class", "Enum"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which pattern is used in iOS apps?",
      options: ["MVVM", "MVC", "VIPER", "All"],
      answer: 3,
    },
    {
      q: "Which UI toolkit is modern?",
      options: ["SwiftUI", "UIKit", "XML", "HTML"],
      answer: 0,
    },
    {
      q: "Which property wrapper manages state?",
      options: ["@State", "@Binding", "@ObservedObject", "All"],
      answer: 3,
    },
    {
      q: "Which keyword handles memory safely?",
      options: ["ARC", "GC", "Memory", "Cache"],
      answer: 0,
    },
    {
      q: "Which concept avoids retain cycle?",
      options: ["weak", "strong", "retain", "copy"],
      answer: 0,
    },
    {
      q: "Which framework handles networking?",
      options: ["URLSession", "CoreData", "UIKit", "SwiftUI"],
      answer: 0,
    },
    {
      q: "Which framework handles database?",
      options: ["CoreData", "URLSession", "UIKit", "SwiftUI"],
      answer: 0,
    },
    {
      q: "Which concept handles navigation?",
      options: ["NavigationStack", "Route", "Path", "Flow"],
      answer: 0,
    },
    {
      q: "Which modifier styles UI?",
      options: [".modifier", ".style", ".design", ".format"],
      answer: 0,
    },
    {
      q: "Which concept handles lifecycle?",
      options: ["App Lifecycle", "Thread", "State", "Flow"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept improves performance?",
      options: ["Concurrency", "Loops", "Arrays", "Functions"],
      answer: 0,
    },
    {
      q: "Which concept manages state efficiently?",
      options: ["State Management", "Loops", "Arrays", "Functions"],
      answer: 0,
    },
    {
      q: "Which concept ensures safe memory?",
      options: ["ARC", "GC", "Heap", "Stack"],
      answer: 0,
    },
    {
      q: "Which concept supports reactive UI?",
      options: ["SwiftUI", "UIKit", "XML", "HTML"],
      answer: 0,
    },
    {
      q: "Which concept handles async streams?",
      options: ["AsyncSequence", "Stream", "Queue", "Thread"],
      answer: 0,
    },
    {
      q: "Which concept improves modularity?",
      options: ["Protocol-Oriented Programming", "Loops", "Arrays", "Functions"],
      answer: 0,
    },
    {
      q: "Which concept is lazy loading?",
      options: ["lazy", "init", "var", "let"],
      answer: 0,
    },
    {
      q: "Which concept improves code reuse?",
      options: ["Extensions", "Loops", "Arrays", "Functions"],
      answer: 0,
    },
    {
      q: "Which concept improves maintainability?",
      options: ["Clean Code", "Loops", "Arrays", "Variables"],
      answer: 0,
    },
    {
      q: "Which concept makes Swift powerful?",
      options: ["Safe + Fast", "Verbose", "Complex", "Low-level"],
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

export default NativeSwift;