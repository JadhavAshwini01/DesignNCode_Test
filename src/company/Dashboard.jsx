import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import PostProject from "./PostProject";
import RateStudents from "./RateStudents";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [totalProjects, setTotalProjects] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);

  const companyId = Number(localStorage.getItem("companyId"));

  // 🔥 FETCH STATS FROM DB
  useEffect(() => {
    if (!companyId) return;

    fetch(`http://localhost:5000/api/company/dashboard-stats/${companyId}`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        setTotalProjects(data.totalProjects);
        setTotalBudget(data.totalBudget);
      })
      .catch((err) =>
        console.error("Dashboard stats fetch error:", err)
      );
  }, [companyId]);

  return (
    <div className="dashboard-wrapper">
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <h3 className="logo">Company</h3>

        <button
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Company Dashboard
        </button>

        <button
          className={activeTab === "post" ? "active" : ""}
          onClick={() => setActiveTab("post")}
        >
          Post Project
        </button>

        <button
          className={activeTab === "rate" ? "active" : ""}
          onClick={() => setActiveTab("rate")}
        >
          Rate Students
        </button>
         <button
          className="logout"
          onClick={() => {
            localStorage.clear();   // clear login/session data
            window.location.href = "/"; // redirect to home page
          }}
        >
          logout
        </button>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="dashboard-container">
        {activeTab === "dashboard" && (
          <>
            <h2 className="page-title">Company Dashboard</h2>

            <div className="stats-grid">
              <StatsCard
                title="Total Projects"
                value={totalProjects}
                subtitle="Projects posted by company"
              />

              <StatsCard
                title="Total Budget"
                value={`₹${totalBudget}`}
                subtitle="Total budget added"
              />
            </div>
          </>
        )}

        {activeTab === "post" && <PostProject />}

        {activeTab === "rate" && <RateStudents />}
      </main>
    </div>
  );
};

export default Dashboard;
