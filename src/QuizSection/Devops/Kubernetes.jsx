import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Kubernetes() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is Kubernetes?",
      options: [
        "Container orchestration tool",
        "Database",
        "Programming language",
        "IDE",
      ],
      answer: 0,
    },
    {
      q: "What is a Pod?",
      options: [
        "Smallest deployable unit",
        "Container image",
        "Cluster",
        "Node",
      ],
      answer: 0,
    },
    {
      q: "What is a Node?",
      options: [
        "Worker machine",
        "Container",
        "Pod",
        "Cluster",
      ],
      answer: 0,
    },
    {
      q: "What is a Cluster?",
      options: [
        "Group of nodes",
        "Single node",
        "Pod",
        "Container",
      ],
      answer: 0,
    },
    {
      q: "Which command lists pods?",
      options: ["kubectl get pods", "kubectl list pods", "kubectl show pods", "kubectl pods"],
      answer: 0,
    },
    {
      q: "Which command creates resource?",
      options: ["kubectl apply", "kubectl create", "Both", "kubectl run"],
      answer: 2,
    },
    {
      q: "Which command deletes resource?",
      options: ["kubectl delete", "kubectl remove", "kubectl drop", "kubectl clean"],
      answer: 0,
    },
    {
      q: "Which command describes resource?",
      options: ["kubectl describe", "kubectl info", "kubectl show", "kubectl details"],
      answer: 0,
    },
    {
      q: "Which file defines K8s config?",
      options: ["YAML", "JSON", "XML", "TXT"],
      answer: 0,
    },
    {
      q: "Which component runs containers?",
      options: ["Pod", "Node", "Cluster", "Service"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "What is Deployment?",
      options: [
        "Manages pods",
        "Deletes pods",
        "Creates nodes",
        "Stores data",
      ],
      answer: 0,
    },
    {
      q: "What is Service?",
      options: [
        "Exposes pods",
        "Stores data",
        "Runs code",
        "Builds image",
      ],
      answer: 0,
    },
    {
      q: "What is ReplicaSet?",
      options: [
        "Maintains pod count",
        "Stores data",
        "Runs containers",
        "Builds image",
      ],
      answer: 0,
    },
    {
      q: "Which service type exposes externally?",
      options: ["LoadBalancer", "ClusterIP", "NodePort", "None"],
      answer: 0,
    },
    {
      q: "Which service type is internal?",
      options: ["ClusterIP", "LoadBalancer", "NodePort", "None"],
      answer: 0,
    },
    {
      q: "Which service type uses node port?",
      options: ["NodePort", "ClusterIP", "LoadBalancer", "None"],
      answer: 0,
    },
    {
      q: "Which command scales deployment?",
      options: ["kubectl scale", "kubectl expand", "kubectl grow", "kubectl increase"],
      answer: 0,
    },
    {
      q: "Which command gets nodes?",
      options: ["kubectl get nodes", "kubectl nodes", "kubectl show nodes", "kubectl list nodes"],
      answer: 0,
    },
    {
      q: "Which command logs pod?",
      options: ["kubectl logs", "kubectl show", "kubectl info", "kubectl view"],
      answer: 0,
    },
    {
      q: "Which command executes pod?",
      options: ["kubectl exec", "kubectl run", "kubectl start", "kubectl open"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "What is ConfigMap?",
      options: [
        "Stores config data",
        "Stores images",
        "Stores logs",
        "Stores containers",
      ],
      answer: 0,
    },
    {
      q: "What is Secret?",
      options: [
        "Stores sensitive data",
        "Stores logs",
        "Stores pods",
        "Stores nodes",
      ],
      answer: 0,
    },
    {
      q: "What is Volume?",
      options: [
        "Persistent storage",
        "Temporary memory",
        "Container",
        "Pod",
      ],
      answer: 0,
    },
    {
      q: "What is Namespace?",
      options: [
        "Logical isolation",
        "Physical server",
        "Container",
        "Pod",
      ],
      answer: 0,
    },
    {
      q: "Which concept auto scales pods?",
      options: ["HPA", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept manages stateful apps?",
      options: ["StatefulSet", "Deployment", "Service", "Pod"],
      answer: 0,
    },
    {
      q: "Which concept runs one pod per node?",
      options: ["DaemonSet", "Deployment", "Service", "Pod"],
      answer: 0,
    },
    {
      q: "Which concept schedules jobs?",
      options: ["CronJob", "Deployment", "Service", "Pod"],
      answer: 0,
    },
    {
      q: "Which concept ensures pod restart?",
      options: ["ReplicaSet", "Service", "Node", "Cluster"],
      answer: 0,
    },
    {
      q: "Which concept manages networking?",
      options: ["Service", "Pod", "Node", "Cluster"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which component manages cluster?",
      options: ["Control Plane", "Node", "Pod", "Service"],
      answer: 0,
    },
    {
      q: "Which component schedules pods?",
      options: ["Scheduler", "Controller", "API Server", "Node"],
      answer: 0,
    },
    {
      q: "Which component stores state?",
      options: ["etcd", "Scheduler", "API Server", "Node"],
      answer: 0,
    },
    {
      q: "Which component exposes API?",
      options: ["API Server", "Scheduler", "Node", "Pod"],
      answer: 0,
    },
    {
      q: "Which component manages nodes?",
      options: ["Controller Manager", "Scheduler", "API Server", "Pod"],
      answer: 0,
    },
    {
      q: "Which concept handles rolling update?",
      options: ["Rolling Deployment", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles rollback?",
      options: ["Rollback", "Scaling", "Clustering", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept ensures availability?",
      options: ["High Availability", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept improves resilience?",
      options: ["Self-healing", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept balances traffic?",
      options: ["Load Balancing", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept manages containers at scale?",
      options: ["Kubernetes", "Docker", "Git", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which concept automates deployment?",
      options: ["CI/CD", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept integrates with cloud?",
      options: ["Cloud Native", "Local", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept improves scalability?",
      options: ["Auto Scaling", "Manual", "Static", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures fault tolerance?",
      options: ["Replication", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept handles service mesh?",
      options: ["Istio", "Docker", "Git", "Jenkins"],
      answer: 0,
    },
    {
      q: "Which concept monitors cluster?",
      options: ["Monitoring", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept logs cluster?",
      options: ["Logging", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept secures cluster?",
      options: ["RBAC", "Scaling", "Caching", "Encoding"],
      answer: 0,
    },
    {
      q: "Which concept deploys cloud apps?",
      options: ["Kubernetes", "Manual", "Static", "None"],
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

export default Kubernetes;