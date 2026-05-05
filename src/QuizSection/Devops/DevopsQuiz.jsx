import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function DevopsQuiz() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(""); // default active tab


    return (
        <div className="quiz-layout">

            {/* ========== LEFT SIDEBAR ========== */}
            <Sidebar />

            {/* ========== MAIN CONTENT ========== */}
            <div className="quiz-main">

                <h1 className="quiz-title">DevOps Quiz </h1>

                <div className="tabs-wrapper">
                    <div className="quiz-tabs">

                        <div
                            className={`tab-card ${activeTab === "osbasics" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("osbasics");
                                navigate("/devops/osbasics");
                            }}
                        >
                            <h2>OS Basics</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "networkingbasics" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("networkingbasics");
                                navigate("/devops/networkingbasics");
                            }}
                        >
                            <h2>Networking Basics </h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "github" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("github");
                                navigate("/devops/github");
                            }}
                        >
                            <h2>GitHub</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "docker" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("docker");
                                navigate("/devops/docker");
                            }}
                        >
                            <h2>Docker</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "pipeline" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("pipeline");
                                navigate("/devops/pipeline");
                            }}
                        >
                            <h2> CI/CD Pipelines</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "cloud" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("cloud");
                                navigate("/devops/cloud");
                            }}
                        >
                            <h2>Cloud Fundamentals</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "kubernetes" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("kubernetes");
                                navigate("/devops/kubernetes");
                            }}
                        >
                            <h2> Orchestration (Kubernetes)</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default DevopsQuiz;