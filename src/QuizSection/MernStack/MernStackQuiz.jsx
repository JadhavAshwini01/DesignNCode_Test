import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";



function MernStackQuiz() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(""); // default active tab


    return (
        <div className="quiz-layout">

            {/* ========== LEFT SIDEBAR ========== */}
            <Sidebar />

            {/* ========== MAIN CONTENT ========== */}
            <div className="quiz-main">

                <h1 className="quiz-title">MERN Stack Quiz </h1>

                <div className="tabs-wrapper">
                    <div className="quiz-tabs">

                        <div
                            className={`tab-card ${activeTab === "frontendbasic" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("frontendbasic");
                                navigate("/frontend/quiz");
                            }}
                        >
                            <h2>Frontend Basics</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "react" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("react");
                                navigate("/mernstack/react");
                            }}
                        >
                            <h2>React</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "backend" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("backend");
                                navigate("/mernstack/backend");
                            }}
                        >
                            <h2>Nodejs&Express</h2>
                        </div>

      
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MernStackQuiz;