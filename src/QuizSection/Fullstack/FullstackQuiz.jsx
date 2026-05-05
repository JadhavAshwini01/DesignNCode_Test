import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";



function FullstackQuiz() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(""); // default active tab


    return (
        <div className="quiz-layout">

            {/* ========== LEFT SIDEBAR ========== */}
            <Sidebar />

            {/* ========== MAIN CONTENT ========== */}
            <div className="quiz-main">

                <h1 className="quiz-title">FullStack Quiz </h1>

                <div className="tabs-wrapper">
                    <div className="quiz-tabs">

                        <div
                            className={`tab-card ${activeTab === "frontendbasic" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("frontendbasic");
                                navigate("/frontend/quiz");
                            }}
                        >
                            <h2>Frontend</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "react" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("react");
                                navigate("/fullstack/react");
                            }}
                        >
                            <h2>React</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "backendfund" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("backendfund");
                                navigate("/fullstack/backendfund");
                            }}
                        >
                            <h2>Backend Fundamentals</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "javadev" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("javadev");
                                navigate("/java/quiz");
                            }}
                        >
                            <h2>Backend Development</h2>
                           <p><h4> (JAVA)</h4></p>

                        </div>

                
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FullstackQuiz;