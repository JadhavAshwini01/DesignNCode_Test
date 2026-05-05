import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function DataSciQuiz() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(""); // default active tab


  return (
    <div className="quiz-layout">

      {/* ========== LEFT SIDEBAR ========== */}
      <Sidebar />

      {/* ========== MAIN CONTENT ========== */}
      <div className="quiz-main">

        <h1 className="quiz-title">Data Science Quiz </h1>

        <div className="tabs-wrapper">
          <div className="quiz-tabs">

            <div
              className={`tab-card ${activeTab === "datascifundamentals" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("datascifundamentals");
                navigate("/datascience/datascifundamentals");
              }}
            >
              <h2>Fundamentals</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "datahandlingDb" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("datahandlingDb");
                navigate("/datascience/datahandlingDb");
              }}
            >
              <h2>Data Handling & Databases</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "analytics&business" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("analytics&business");
                navigate("/datascience/analytics&business");
              }}
            >
              <h2>Analytics & Business Skills</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "advanalytics" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("advanalytics");
                navigate("/datascience/advanalytics");
              }}
            >
              <h2>Advanced Analytics</h2>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default DataSciQuiz;