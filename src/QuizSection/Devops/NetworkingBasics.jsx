import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function NetworkingBasics() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
  1: [
    {
      q: "What is a network?",
      options: [
        "Single computer",
        "Group of connected devices",
        "Database",
        "Program",
      ],
      answer: 1,
    },
    {
      q: "Which device connects networks?",
      options: ["Router", "Switch", "Hub", "Cable"],
      answer: 0,
    },
    {
      q: "Which device connects devices in LAN?",
      options: ["Switch", "Router", "Modem", "Firewall"],
      answer: 0,
    },
    {
      q: "What is IP address?",
      options: [
        "Unique device identifier",
        "File",
        "Server",
        "Protocol",
      ],
      answer: 0,
    },
    {
      q: "Which protocol is used for web?",
      options: ["HTTP", "FTP", "SMTP", "TCP"],
      answer: 0,
    },
    {
      q: "Which protocol secures web?",
      options: ["HTTPS", "HTTP", "FTP", "SMTP"],
      answer: 0,
    },
    {
      q: "Which protocol transfers files?",
      options: ["FTP", "HTTP", "SMTP", "TCP"],
      answer: 0,
    },
    {
      q: "Which protocol sends emails?",
      options: ["SMTP", "HTTP", "FTP", "TCP"],
      answer: 0,
    },
    {
      q: "Which protocol receives emails?",
      options: ["IMAP", "HTTP", "FTP", "TCP"],
      answer: 0,
    },
    {
      q: "Which protocol ensures reliable delivery?",
      options: ["TCP", "UDP", "HTTP", "FTP"],
      answer: 0,
    },
  ],

  2: [
    {
      q: "Which protocol is faster but unreliable?",
      options: ["UDP", "TCP", "HTTP", "FTP"],
      answer: 0,
    },
    {
      q: "What is DNS?",
      options: [
        "Domain Name System",
        "Data Network System",
        "Device Name Server",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What does DNS do?",
      options: [
        "Converts domain to IP",
        "Stores data",
        "Runs apps",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is LAN?",
      options: [
        "Local Area Network",
        "Large Area Network",
        "Low Area Network",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is WAN?",
      options: [
        "Wide Area Network",
        "Web Area Network",
        "Wireless Area Network",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which network covers small area?",
      options: ["LAN", "WAN", "MAN", "VPN"],
      answer: 0,
    },
    {
      q: "Which network covers large area?",
      options: ["WAN", "LAN", "PAN", "VPN"],
      answer: 0,
    },
    {
      q: "What is MAC address?",
      options: [
        "Hardware address",
        "IP address",
        "Server name",
        "Protocol",
      ],
      answer: 0,
    },
    {
      q: "Which layer handles IP?",
      options: ["Network Layer", "Transport", "Application", "Physical"],
      answer: 0,
    },
    {
      q: "Which layer handles data transfer?",
      options: ["Transport Layer", "Network", "Application", "Physical"],
      answer: 0,
    },
  ],

  3: [
    {
      q: "Which layer interacts with user?",
      options: ["Application Layer", "Network", "Transport", "Physical"],
      answer: 0,
    },
    {
      q: "Which layer sends bits?",
      options: ["Physical Layer", "Application", "Transport", "Network"],
      answer: 0,
    },
    {
      q: "Which model has 7 layers?",
      options: ["OSI", "TCP/IP", "HTTP", "FTP"],
      answer: 0,
    },
    {
      q: "Which model has 4 layers?",
      options: ["TCP/IP", "OSI", "HTTP", "FTP"],
      answer: 0,
    },
    {
      q: "Which port is HTTP?",
      options: ["80", "443", "21", "25"],
      answer: 0,
    },
    {
      q: "Which port is HTTPS?",
      options: ["443", "80", "21", "25"],
      answer: 0,
    },
    {
      q: "Which port is FTP?",
      options: ["21", "80", "443", "25"],
      answer: 0,
    },
    {
      q: "Which port is SMTP?",
      options: ["25", "80", "443", "21"],
      answer: 0,
    },
    {
      q: "What is firewall?",
      options: [
        "Security system",
        "Database",
        "Router",
        "Switch",
      ],
      answer: 0,
    },
    {
      q: "What is bandwidth?",
      options: [
        "Data transfer capacity",
        "Speed",
        "Latency",
        "None",
      ],
      answer: 0,
    },
  ],

  4: [
    {
      q: "What is latency?",
      options: [
        "Delay in data transfer",
        "Speed",
        "Storage",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is packet?",
      options: [
        "Small data unit",
        "File",
        "Server",
        "Protocol",
      ],
      answer: 0,
    },
    {
      q: "What is routing?",
      options: [
        "Path selection",
        "Storage",
        "Security",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is NAT?",
      options: [
        "Network Address Translation",
        "New Address Transfer",
        "Node Address Type",
        "None",
      ],
      answer: 0,
    },
    {
      q: "What is VPN?",
      options: [
        "Virtual Private Network",
        "Public Network",
        "Local Network",
        "None",
      ],
      answer: 0,
    },
    {
      q: "Which protocol resolves IP to MAC?",
      options: ["ARP", "DNS", "HTTP", "FTP"],
      answer: 0,
    },
    {
      q: "Which protocol checks connectivity?",
      options: ["ICMP", "HTTP", "FTP", "SMTP"],
      answer: 0,
    },
    {
      q: "Which command checks IP?",
      options: ["ping", "run", "check", "scan"],
      answer: 0,
    },
    {
      q: "Which command traces route?",
      options: ["tracert", "ping", "route", "check"],
      answer: 0,
    },
    {
      q: "Which concept hides internal IP?",
      options: ["NAT", "DNS", "VPN", "ARP"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which concept secures communication?",
      options: ["Encryption", "Routing", "Storage", "None"],
      answer: 0,
    },
    {
      q: "Which concept prevents attacks?",
      options: ["Firewall", "Router", "Switch", "Hub"],
      answer: 0,
    },
    {
      q: "Which concept detects intrusion?",
      options: ["IDS", "DNS", "FTP", "HTTP"],
      answer: 0,
    },
    {
      q: "Which concept prevents intrusion?",
      options: ["IPS", "DNS", "FTP", "HTTP"],
      answer: 0,
    },
    {
      q: "Which concept balances traffic?",
      options: ["Load Balancer", "Router", "Switch", "Hub"],
      answer: 0,
    },
    {
      q: "Which concept improves reliability?",
      options: ["Redundancy", "Storage", "Routing", "None"],
      answer: 0,
    },
    {
      q: "Which concept scales network?",
      options: ["Scaling", "Storage", "Routing", "None"],
      answer: 0,
    },
    {
      q: "Which concept monitors network?",
      options: ["Monitoring", "Storage", "Routing", "None"],
      answer: 0,
    },
    {
      q: "Which concept logs activity?",
      options: ["Logging", "Storage", "Routing", "None"],
      answer: 0,
    },
    {
      q: "Which concept ensures availability?",
      options: ["High Availability", "Storage", "Routing", "None"],
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

export default NetworkingBasics;