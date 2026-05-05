import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Github() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is GitHub?",
      options: [
        "Database",
        "Version control platform",
        "Programming language",
        "IDE",
      ],
      answer: 1,
    },
    {
      q: "Which system does GitHub use?",
      options: ["Git", "Docker", "Kubernetes", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which command initializes repo?",
      options: ["git init", "git start", "git create", "git new"],
      answer: 0,
    },
    {
      q: "Which command adds files?",
      options: ["git add", "git push", "git commit", "git pull"],
      answer: 0,
    },
    {
      q: "Which command saves changes?",
      options: ["git commit", "git push", "git pull", "git clone"],
      answer: 0,
    },
    {
      q: "Which command uploads code?",
      options: ["git push", "git pull", "git clone", "git fetch"],
      answer: 0,
    },
    {
      q: "Which command downloads repo?",
      options: ["git clone", "git pull", "git push", "git fetch"],
      answer: 0,
    },
    {
      q: "Which command gets updates?",
      options: ["git pull", "git push", "git clone", "git init"],
      answer: 0,
    },
    {
      q: "Which command checks status?",
      options: ["git status", "git check", "git info", "git view"],
      answer: 0,
    },
    {
      q: "Which command shows history?",
      options: ["git log", "git history", "git show", "git list"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which branch is default?",
      options: ["main", "master", "dev", "branch"],
      answer: 0,
    },
    {
      q: "Which command creates branch?",
      options: ["git branch", "git create", "git new", "git make"],
      answer: 0,
    },
    {
      q: "Which command switches branch?",
      options: ["git checkout", "git switch", "Both", "git move"],
      answer: 2,
    },
    {
      q: "Which command merges branch?",
      options: ["git merge", "git join", "git combine", "git link"],
      answer: 0,
    },
    {
      q: "Which command deletes branch?",
      options: ["git branch -d", "git delete", "git remove", "git drop"],
      answer: 0,
    },
    {
      q: "Which command fetches changes?",
      options: ["git fetch", "git pull", "git push", "git clone"],
      answer: 0,
    },
    {
      q: "Which command stages all files?",
      options: ["git add .", "git add all", "git stage", "git push"],
      answer: 0,
    },
    {
      q: "Which command unstages file?",
      options: ["git reset", "git remove", "git undo", "git clean"],
      answer: 0,
    },
    {
      q: "Which command removes file?",
      options: ["git rm", "git delete", "git remove", "git clean"],
      answer: 0,
    },
    {
      q: "Which command renames branch?",
      options: ["git branch -m", "git rename", "git move", "git change"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is repository?",
      options: [
        "Project folder",
        "Database",
        "Server",
        "File",
      ],
      answer: 0,
    },
    {
      q: "What is commit?",
      options: [
        "Saving changes",
        "Deleting code",
        "Running code",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is branch?",
      options: [
        "Separate code version",
        "File",
        "Server",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is merge?",
      options: [
        "Combine branches",
        "Delete code",
        "Upload code",
        "Download code",
      ],
      answer: 0,
    },
    {
      q: "What is clone?",
      options: [
        "Copy repo",
        "Delete repo",
        "Run repo",
        "Merge repo",
      ],
      answer: 0,
    },
    {
      q: "What is pull request?",
      options: [
        "Request to merge code",
        "Delete code",
        "Run code",
        "Download code",
      ],
      answer: 0,
    },
    {
      q: "What is fork?",
      options: [
        "Copy repo to own account",
        "Delete repo",
        "Merge repo",
        "Run repo",
      ],
      answer: 0,
    },
    {
      q: "What is conflict?",
      options: [
        "Code clash",
        "Delete error",
        "Run error",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is staging area?",
      options: [
        "Temporary area before commit",
        "Final code",
        "Server",
        "Database",
      ],
      answer: 0,
    },
    {
      q: "What is remote?",
      options: [
        "Online repo",
        "Local file",
        "Server",
        "None",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which command adds remote?",
      options: ["git remote add", "git add remote", "git connect", "git link"],
      answer: 0,
    },
    {
      q: "Which command shows remotes?",
      options: ["git remote -v", "git remote list", "git show", "git info"],
      answer: 0,
    },
    {
      q: "Which command pushes branch?",
      options: ["git push origin branch", "git push branch", "git send", "git upload"],
      answer: 0,
    },
    {
      q: "Which command pulls branch?",
      options: ["git pull origin branch", "git pull branch", "git fetch", "git download"],
      answer: 0,
    },
    {
      q: "Which command rebases branch?",
      options: ["git rebase", "git merge", "git combine", "git link"],
      answer: 0,
    },
    {
      q: "Which command stashes changes?",
      options: ["git stash", "git save", "git temp", "git hold"],
      answer: 0,
    },
    {
      q: "Which command applies stash?",
      options: ["git stash apply", "git apply", "git load", "git restore"],
      answer: 0,
    },
    {
      q: "Which command tags version?",
      options: ["git tag", "git version", "git mark", "git label"],
      answer: 0,
    },
    {
      q: "Which concept manages versions?",
      options: ["Version Control", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept supports collaboration?",
      options: ["GitHub", "Local", "File", "DB"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept automates workflows?",
      options: ["GitHub Actions", "Docker", "Kubernetes", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which concept manages CI/CD?",
      options: ["CI/CD", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures code quality?",
      options: ["Code Review", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept tracks issues?",
      options: ["Issues", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept manages releases?",
      options: ["Releases", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept secures repo?",
      options: ["Access Control", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept improves collaboration?",
      options: ["Pull Requests", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept tracks changes?",
      options: ["Versioning", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept handles large teams?",
      options: ["Branching Strategy", "Storage", "UI", "DB"],
      answer: 0,
    },
    {
      q: "Which concept improves deployment?",
      options: ["CI/CD Pipelines", "Storage", "UI", "DB"],
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

export default Github;