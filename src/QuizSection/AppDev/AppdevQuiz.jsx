import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function AppdevQuiz() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(""); // default active tab


  return (
    <div className="quiz-layout">

      {/* ========== LEFT SIDEBAR ========== */}
      <Sidebar />

      {/* ========== MAIN CONTENT ========== */}
      <div className="quiz-main">

        <h1 className="quiz-title">App Development Quiz </h1>

        <div className="tabs-wrapper">
          <div className="quiz-tabs">

            <div
              className={`tab-card ${activeTab === "nativejava" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("nativejava");
                navigate("/appdev/nativejava");
              }}
            >
              <h2>Native Java</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "nativekothlin" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("nativekotlin");
                navigate("/appdev/nativekotlin");
              }}
            >
              <h2>Native Kotlin</h2>
            </div>

            <div
              className={`tab-card ${activeTab === "nativeiosSwift" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("nativeiosSwift");
                navigate("/appdev/nativeiosSwift");
              }}
            >
              <h2>Native iOS (Swift)</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "desktopappdev" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("desktopappdev");
                navigate("/appdev/desktopappdev");
              }}
            >
              <h2>Desktop App Development</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "api&cloudservices" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("api&cloudservices");
                navigate("/appdev/api&cloudservices");
              }}
            >
              <h2>API & Cloud Services</h2>
            </div>
            <div
              className={`tab-card ${activeTab === "uiuxtesting" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("uiuxtesting");
                navigate("/appdev/uiuxtesting");
              }}
            >
              <h2>UI/UX Testing</h2>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default AppdevQuiz;