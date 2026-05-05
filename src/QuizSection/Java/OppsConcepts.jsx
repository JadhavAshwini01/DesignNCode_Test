import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function OppsConcepts() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What does OOP stand for?",
      options: [
        "Object Oriented Programming",
        "Object Organized Program",
        "Only Object Programming",
        "Object Operating Program",
      ],
      answer: 0,
    },
    {
      q: "Which concept binds data and methods together?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      answer: 1,
    },
    {
      q: "Which keyword is used to inherit a class?",
      options: ["implements", "extends", "inherit", "super"],
      answer: 1,
    },
    {
      q: "Which keyword is used to create object?",
      options: ["this", "new", "create", "object"],
      answer: 1,
    },
    {
      q: "Which keyword refers to current object?",
      options: ["this", "self", "current", "object"],
      answer: 0,
    },
    {
      q: "Which concept allows one object to behave differently?",
      options: ["Encapsulation", "Polymorphism", "Abstraction", "Inheritance"],
      answer: 1,
    },
    {
      q: "Which type of inheritance is NOT supported in Java (classes)?",
      options: ["Single", "Multiple", "Multilevel", "Hierarchical"],
      answer: 1,
    },
    {
      q: "Which keyword is used to call parent constructor?",
      options: ["this()", "super()", "parent()", "base()"],
      answer: 1,
    },
    {
      q: "Which access modifier allows access everywhere?",
      options: ["private", "protected", "public", "default"],
      answer: 2,
    },
    {
      q: "Which keyword is used to define constant?",
      options: ["static", "final", "const", "fixed"],
      answer: 1,
    },
  ],

  2: [
    {
      q: "Which concept hides internal details?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      answer: 1,
    },
    {
      q: "Which method overloading is?",
      options: [
        "Same method name different parameters",
        "Same method name same parameters",
        "Different name same parameters",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which method overriding requires?",
      options: [
        "Same method name and parameters",
        "Different name",
        "Different return type",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which keyword is used to prevent inheritance?",
      options: ["static", "final", "private", "protected"],
      answer: 1,
    },
    {
      q: "Which keyword is used for abstraction?",
      options: ["abstract", "interface", "class", "virtual"],
      answer: 0,
    },
    {
      q: "Which interface is fully abstract?",
      options: ["abstract class", "interface", "class", "object"],
      answer: 1,
    },
    {
      q: "Which access modifier is default?",
      options: ["public", "private", "protected", "default"],
      answer: 3,
    },
    {
      q: "Which concept allows code reuse?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      answer: 0,
    },
    {
      q: "Which keyword is used for overriding?",
      options: ["override", "@Override", "this", "super"],
      answer: 1,
    },
    {
      q: "Which concept supports dynamic binding?",
      options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"],
      answer: 1,
    },
  ],

  3: [
    {
      q: "Which type of polymorphism is compile-time?",
      options: ["Overloading", "Overriding", "Inheritance", "Abstraction"],
      answer: 0,
    },
    {
      q: "Which type is runtime polymorphism?",
      options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"],
      answer: 1,
    },
    {
      q: "Which class is root of Java hierarchy?",
      options: ["Object", "Class", "Main", "Base"],
      answer: 0,
    },
    {
      q: "Which keyword is used to implement interface?",
      options: ["extends", "implements", "inherit", "use"],
      answer: 1,
    },
    {
      q: "Which method is used for object comparison?",
      options: ["==", "compare()", "equals()", "match()"],
      answer: 2,
    },
    {
      q: "Which method returns string representation?",
      options: ["toString()", "string()", "print()", "valueOf()"],
      answer: 0,
    },
    {
      q: "Which keyword is used for multiple inheritance?",
      options: ["extends", "implements", "inherit", "multi"],
      answer: 1,
    },
    {
      q: "Which concept improves security?",
      options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
      answer: 0,
    },
    {
      q: "Which keyword is used to refer parent class method?",
      options: ["this", "super", "parent", "base"],
      answer: 1,
    },
    {
      q: "Which class cannot be inherited?",
      options: ["abstract", "final", "interface", "static"],
      answer: 1,
    },
  ],

  4: [
    {
      q: "Which method cannot be overridden?",
      options: ["static", "final", "private", "all"],
      answer: 3,
    },
    {
      q: "Which class can have abstract methods?",
      options: ["interface", "abstract class", "both", "none"],
      answer: 2,
    },
    {
      q: "Which concept allows loose coupling?",
      options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
      answer: 0,
    },
    {
      q: "Which keyword is used to access parent variable?",
      options: ["this", "super", "parent", "base"],
      answer: 1,
    },
    {
      q: "Which concept supports method hiding?",
      options: ["static methods", "final methods", "abstract methods", "instance methods"],
      answer: 0,
    },
    {
      q: "Which concept supports interface default methods?",
      options: ["Java 7", "Java 8", "Java 6", "Java 5"],
      answer: 1,
    },
    {
      q: "Which concept supports functional interface?",
      options: ["Java 8", "Java 7", "Java 6", "Java 5"],
      answer: 0,
    },
    {
      q: "Which keyword is used for lambda expressions?",
      options: ["->", "::", "=>", "lambda"],
      answer: 0,
    },
    {
      q: "Which concept uses reference type at runtime?",
      options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"],
      answer: 1,
    },
    {
      q: "Which class supports immutable objects?",
      options: ["String", "StringBuilder", "StringBuffer", "ArrayList"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which principle follows 'one interface multiple implementations'?",
      options: ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
      answer: 2,
    },
    {
      q: "Which concept reduces tight coupling?",
      options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"],
      answer: 1,
    },
    {
      q: "Which SOLID principle relates to OOP?",
      options: ["Single Responsibility", "Open Closed", "Liskov", "All"],
      answer: 3,
    },
    {
      q: "Which concept enables dynamic method dispatch?",
      options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"],
      answer: 1,
    },
    {
      q: "Which principle is used in encapsulation?",
      options: [
        "Data hiding",
        "Code reuse",
        "Dynamic binding",
        "Loose coupling",
      ],
      answer: 0,
    },
    {
      q: "Which concept is core of Java design?",
      options: ["OOP", "Functional", "Procedural", "Script"],
      answer: 0,
    },
    {
      q: "Which principle allows extend without modifying?",
      options: ["Open Closed Principle", "SRP", "LSP", "ISP"],
      answer: 0,
    },
    {
      q: "Which design pattern uses OOP heavily?",
      options: ["Singleton", "Factory", "Observer", "All"],
      answer: 3,
    },
    {
      q: "Which concept helps runtime decision making?",
      options: ["Overriding", "Overloading", "Encapsulation", "Abstraction"],
      answer: 0,
    },
    {
      q: "Which feature enables flexibility in Java?",
      options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
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

export default OppsConcepts;