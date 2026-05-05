import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";



function FrontendQuiz() {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(""); // default active tab


  return (
    <div className="quiz-layout">

      {/* ========== LEFT SIDEBAR ========== */}
        <Sidebar />

      {/* ========== MAIN CONTENT ========== */}
      <div className="quiz-main">

        <h1 className="quiz-title">Frontend Quiz </h1>

        <div className="tabs-wrapper">
          <div className="quiz-tabs">

            <div
              className={`tab-card ${activeTab === "html" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("html");
                navigate("/frontend/html");
              }}
            >
              <h2>HTML</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "css" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("css");
                navigate("/frontend/css");
              }}
            >
              <h2>CSS</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "javascript" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("javascript");
                navigate("/frontend/javascript");
              }}
            >
              <h2>JavaScript</h2>
            </div>



          </div>

        </div>
      </div>
    </div>
  );
}

export default FrontendQuiz;