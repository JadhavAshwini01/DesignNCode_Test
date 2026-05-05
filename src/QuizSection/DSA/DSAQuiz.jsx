import { useState } from "react";
import "../Quiz.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function DSAQuiz() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(""); // default active tab


    return (
        <div className="quiz-layout">

            {/* ========== LEFT SIDEBAR ========== */}
            <Sidebar />

            {/* ========== MAIN CONTENT ========== */}
            <div className="quiz-main">

                <h1 className="quiz-title">DSA Quiz </h1>

                <div className="tabs-wrapper">
                    <div className="quiz-tabs">

                        <div
                            className={`tab-card ${activeTab === "dsaosbasics" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("dsabasics");
                                navigate("/dsa/dsabasics");
                            }}
                        >
                            <h2>DSA Basics</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "array" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("array");
                                navigate("/dsa/array");
                            }}
                        >
                            <h2>Array</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "recrusion" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("recrusion");
                                navigate("/dsa/recrusion");
                            }}
                        >
                            <h2>String</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "linkedlist" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("linkedlist");
                                navigate("/dsa/linkedlist");
                            }}
                        >
                            <h2>Linked List</h2>
                        </div>
                         <div
                            className={`tab-card ${activeTab === "heap" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("heap");
                                navigate("/dsa/heap");
                            }}
                        >
                            <h2> Heap</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "tree" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("tree");
                                navigate("/dsa/tree");
                            }}
                        >
                            <h2> Trees</h2>
                        </div>
                        <div
                            className={`tab-card ${activeTab === "BST" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("BST");
                                navigate("/dsa/BST");
                            }}
                        >
                            <h2>BST</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "graph" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("graph");
                                navigate("/dsa/graph");
                            }}
                        >
                            <h2> Graph</h2>
                        </div>

                        <div
                            className={`tab-card ${activeTab === "dynamic" ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab("dynamic");
                                navigate("/dsa/dynamic");
                            }}
                        >
                            <h2>Dynamic Programming</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default DSAQuiz;