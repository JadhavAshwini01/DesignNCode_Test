import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Desktopapp() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is desktop application?",
      options: [
        "Runs in browser",
        "Runs on local machine",
        "Runs on cloud only",
        "None",
      ],
      answer: 1,
    },
    {
      q: "Which Java library is used for desktop apps?",
      options: ["Swing", "Servlet", "JSP", "Spring"],
      answer: 0,
    },
    {
      q: "Which Java framework is modern UI?",
      options: ["JavaFX", "Swing", "AWT", "JSP"],
      answer: 0,
    },
    {
      q: "Which method starts GUI in Java?",
      options: ["main()", "run()", "start()", "init()"],
      answer: 0,
    },
    {
      q: "Which component is window?",
      options: ["JFrame", "JButton", "JLabel", "JPanel"],
      answer: 0,
    },
    {
      q: "Which component is button?",
      options: ["JFrame", "JButton", "JTextField", "JPanel"],
      answer: 1,
    },
    {
      q: "Which layout arranges components in flow?",
      options: ["FlowLayout", "GridLayout", "BorderLayout", "BoxLayout"],
      answer: 0,
    },
    {
      q: "Which event handles button click?",
      options: ["ActionListener", "MouseListener", "KeyListener", "Event"],
      answer: 0,
    },
    {
      q: "Which component displays text?",
      options: ["JLabel", "JButton", "JFrame", "JPanel"],
      answer: 0,
    },
    {
      q: "Which component takes input?",
      options: ["JTextField", "JLabel", "JPanel", "Frame"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which layout divides into rows and columns?",
      options: ["GridLayout", "FlowLayout", "BorderLayout", "BoxLayout"],
      answer: 0,
    },
    {
      q: "Which layout divides into 5 regions?",
      options: ["BorderLayout", "GridLayout", "FlowLayout", "BoxLayout"],
      answer: 0,
    },
    {
      q: "Which event handles mouse click?",
      options: ["MouseListener", "ActionListener", "KeyListener", "ClickListener"],
      answer: 0,
    },
    {
      q: "Which event handles keyboard input?",
      options: ["KeyListener", "MouseListener", "ActionListener", "InputListener"],
      answer: 0,
    },
    {
      q: "Which method adds component?",
      options: ["add()", "insert()", "append()", "put()"],
      answer: 0,
    },
    {
      q: "Which method sets size?",
      options: ["setSize()", "resize()", "setDimension()", "size()"],
      answer: 0,
    },
    {
      q: "Which method shows window?",
      options: ["setVisible(true)", "show()", "display()", "open()"],
      answer: 0,
    },
    {
      q: "Which component groups elements?",
      options: ["JPanel", "JFrame", "JLabel", "JButton"],
      answer: 0,
    },
    {
      q: "Which method closes app?",
      options: ["EXIT_ON_CLOSE", "close()", "end()", "stop()"],
      answer: 0,
    },
    {
      q: "Which JavaFX class is main stage?",
      options: ["Stage", "Scene", "Pane", "Node"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which JavaFX class holds UI elements?",
      options: ["Scene", "Stage", "Pane", "Node"],
      answer: 0,
    },
    {
      q: "Which JavaFX layout organizes nodes?",
      options: ["Pane", "Stage", "Scene", "Node"],
      answer: 0,
    },
    {
      q: "Which method handles events in JavaFX?",
      options: ["setOnAction()", "onClick()", "handle()", "trigger()"],
      answer: 0,
    },
    {
      q: "Which component is dropdown?",
      options: ["ComboBox", "TextField", "Label", "Button"],
      answer: 0,
    },
    {
      q: "Which component shows list?",
      options: ["ListView", "ComboBox", "Table", "Panel"],
      answer: 0,
    },
    {
      q: "Which component shows table?",
      options: ["TableView", "ListView", "Grid", "Panel"],
      answer: 0,
    },
    {
      q: "Which property binds UI values?",
      options: ["Binding", "Linking", "Mapping", "Connecting"],
      answer: 0,
    },
    {
      q: "Which thread handles UI?",
      options: ["UI Thread", "Main Thread", "Worker Thread", "Event Thread"],
      answer: 3,
    },
    {
      q: "Which class handles background tasks?",
      options: ["Task", "Thread", "Worker", "Runnable"],
      answer: 0,
    },
    {
      q: "Which method runs background task?",
      options: ["run()", "call()", "execute()", "start()"],
      answer: 1,
    },
  ],

  4: [
    {
      q: "Which pattern separates UI and logic?",
      options: ["MVC", "OOP", "DAO", "Singleton"],
      answer: 0,
    },
    {
      q: "Which file format used in JavaFX UI?",
      options: ["FXML", "XML", "HTML", "JSON"],
      answer: 0,
    },
    {
      q: "Which tool designs JavaFX UI?",
      options: ["Scene Builder", "VS Code", "NetBeans", "Eclipse"],
      answer: 0,
    },
    {
      q: "Which concept improves UI responsiveness?",
      options: ["Multithreading", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which component shows dialog?",
      options: ["Alert", "Dialog", "Popup", "All"],
      answer: 3,
    },
    {
      q: "Which layout stacks elements vertically?",
      options: ["VBox", "HBox", "Grid", "Pane"],
      answer: 0,
    },
    {
      q: "Which layout stacks horizontally?",
      options: ["HBox", "VBox", "Grid", "Pane"],
      answer: 0,
    },
    {
      q: "Which property styles UI?",
      options: ["CSS", "HTML", "XML", "JSON"],
      answer: 0,
    },
    {
      q: "Which method loads FXML?",
      options: ["FXMLLoader", "Loader", "LoadUI", "UIBuilder"],
      answer: 0,
    },
    {
      q: "Which concept connects UI and controller?",
      options: ["Binding", "Mapping", "Linking", "Connecting"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which framework builds cross-platform desktop apps?",
      options: ["Electron", "Swing", "JavaFX", "AWT"],
      answer: 0,
    },
    {
      q: "Which tool packages Java apps?",
      options: ["JPackage", "JarTool", "BuildTool", "Packager"],
      answer: 0,
    },
    {
      q: "Which concept improves performance?",
      options: ["Threading", "Caching", "Scaling", "All"],
      answer: 3,
    },
    {
      q: "Which framework uses HTML + JS for desktop?",
      options: ["Electron", "JavaFX", "Swing", "AWT"],
      answer: 0,
    },
    {
      q: "Which tool builds Windows apps in .NET?",
      options: ["WPF", "Spring", "React", "Node"],
      answer: 0,
    },
    {
      q: "Which concept manages app lifecycle?",
      options: ["Lifecycle", "Threading", "Binding", "Scaling"],
      answer: 0,
    },
    {
      q: "Which concept handles user interaction?",
      options: ["Event Handling", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles UI state?",
      options: ["State Management", "Clustering", "Scaling", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept ensures app stability?",
      options: ["Error Handling", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept improves maintainability?",
      options: ["Modular Design", "Clustering", "Scaling", "Encoding"],
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

export default Desktopapp;