import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function CloudQuiz() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(""); // default active tab


  return (
    <div className="quiz-layout">

      {/* ========== LEFT SIDEBAR ========== */}
      <Sidebar />

      {/* ========== MAIN CONTENT ========== */}
      <div className="quiz-main">

        <h1 className="quiz-title"> Cloud Computing Quiz </h1>

        <div className="tabs-wrapper">
          <div className="quiz-tabs">

            <div
              className={`tab-card ${activeTab === "cloudfoundation" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("cloudfoundation");
                navigate("/cloud/cloudfoundation");
              }}
            >
              <h2>Foundation of Cloud Computinig</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "corecloud" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("corecloud");
                navigate("/cloud/corecloud");
              }}
            >
              <h2>Core Cloud Computinig</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "devops" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("devops");
                navigate("/devops/quiz");
              }}
            >
              <h2>DevOps</h2>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default CloudQuiz;