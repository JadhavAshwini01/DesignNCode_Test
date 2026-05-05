import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function UiuxQuiz() {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(""); // default active tab

    return (
        <div className="quiz-layout">

            {/* ========== LEFT SIDEBAR ========== */}
            <Sidebar />

            {/* ========== MAIN CONTENT ========== */}
            <div className="quiz-main">

                <h1 className="quiz-title"> UIUX Testing Quiz </h1>

                <div className="tabs-wrapper">
                    <div className="quiz-tabs">

                        <div
                            className={`tab-card ${activeTab === "uiuxfundamentals" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("uiuxfundamentals");
                                navigate("/uiux/uiuxfundamentals");
                            }}
                        >
                            <h2>Fundamentals</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "uidesign" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("uidesign");
                                navigate("/uiux/uidesign");
                            }}
                        >
                            <h2>UI Design</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "uxdesign" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("uxdesign");
                                navigate("/uiux/uxdesign");
                            }}
                        >
                            <h2>UX Design</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "advanceduiux" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("advanceduiux");
                                navigate("/uiux/advanceduiux");
                            }}
                        >
                            <h2>Advanced</h2>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
}

export default UiuxQuiz;