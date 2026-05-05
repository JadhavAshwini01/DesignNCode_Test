import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";



function JavaQuiz() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(""); // default active tab


  return (
    <div className="quiz-layout">

      {/* ========== LEFT SIDEBAR ========== */}
      <Sidebar />

      {/* ========== MAIN CONTENT ========== */}
      <div className="quiz-main">

        <h1 className="quiz-title">Java Quiz </h1>

        <div className="tabs-wrapper">
          <div className="quiz-tabs">

            <div
              className={`tab-card ${activeTab === "corejava" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("corejava");
                navigate("/java/corejava");
              }}
            >
              <h2>Core Java</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "oppsconcepts" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("oppsconcepts");
                navigate("/java/oppsconcepts");
              }}
            >
              <h2>OppsConcepts</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "exceptionhandling" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("exceptionhandling");
                navigate("/java/exceptionhandling");
              }}
            >
              <h2>ExceptionHandling</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "multithreading" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("multithreading");
                navigate("/java/multithreading");
              }}
            >
              <h2>Multithreading</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "jdbc" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("jdbc");
                navigate("/java/jdbc");
              }}
            >
              <h2>JDBC</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "springboot" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("springboot");
                navigate("/java/springboot");
              }}
            >
              <h2>Spring Boot</h2>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default JavaQuiz;