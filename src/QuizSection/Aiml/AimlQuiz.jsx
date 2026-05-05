import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function AimlQuiz() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(""); // default active tab


  return (
    <div className="quiz-layout">

      {/* ========== LEFT SIDEBAR ========== */}
      <Sidebar />

      {/* ========== MAIN CONTENT ========== */}
      <div className="quiz-main">

        <h1 className="quiz-title">AI/ML Quiz </h1>

        <div className="tabs-wrapper">
          <div className="quiz-tabs">

            <div
              className={`tab-card ${activeTab === "pythonlibraries" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("pythonlibraries");
                navigate("/aiml/pythonlibraries");
              }}
            >
              <h2>Python & Libraries</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "coreml" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("coreml");
                navigate("/aiml/coreml");
              }}
            >
              <h2>Core Machine Learning</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "deeplearning" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("deeplearning");
                navigate("/aiml/deeplearning");
              }}
            >
              <h2>Deep Learning</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "mathematics" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("mathematics");
                navigate("/aiml/mathematics");
              }}
            >
              <h2>Mathematics</h2>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default AimlQuiz;