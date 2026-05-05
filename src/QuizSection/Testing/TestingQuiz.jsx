import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";



function TestingQuiz() {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(""); // default active tab


    return (
        <div className="quiz-layout">

            {/* ========== LEFT SIDEBAR ========== */}
            <Sidebar />

            {/* ========== MAIN CONTENT ========== */}
            <div className="quiz-main">

                <h1 className="quiz-title"> Software Testing Quiz </h1>

                <div className="tabs-wrapper">
                    <div className="quiz-tabs">

                        <div
                            className={`tab-card ${activeTab === "foundation" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("foundation");
                                navigate("/testing/foundation");
                            }}
                        >
                            <h2>Foundation</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "coretesting" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("coretesting");
                                navigate("/testing/coretesting");
                            }}
                        >
                            <h2>Core Testing</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "automationtesting" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("automationtesting");
                                navigate("/testing/automationtesting");
                            }}
                        >
                            <h2>Automation Testing</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "advancedtesting" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("advancedtesting");
                                navigate("/testing/advancedtesting");
                            }}
                        >
                            <h2>Advanced Testing</h2>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
}

export default TestingQuiz;