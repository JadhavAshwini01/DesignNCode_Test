import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {

  const [activeSection, setActiveSection] = useState("dashboard");

  // 🔹 DASHBOARD STATS
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCompanies: 0,
    totalRevenue: 0
  });

  // 🔹 FETCH STATS
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/dashboard-stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error("Dashboard stats error", err);
      });
  }, []);

  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">DesignNCode</h2>

        <ul>
          <li
            className={activeSection === "dashboard" ? "active" : ""}
            onClick={() => setActiveSection("dashboard")}
          >
            Dashboard
          </li>
          <li onClick={() => setActiveSection("students")}>Students</li>
          <li onClick={() => setActiveSection("companies")}>Companies</li>
          <li onClick={() => setActiveSection("interviews")}>Interviews</li>
          <li
  className="logout"
  onClick={() => {
    localStorage.clear();   // clear login/session data
    window.location.href = "/"; // redirect to home page
  }}
>
  Logout
</li>

        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* ================= DASHBOARD ================= */}
        {activeSection === "dashboard" && (
          <>
            <h2>Admin Dashboard</h2>

            <div className="stats">
              <div className="card">
                <h4>Total Students</h4>
                <p>{stats.totalStudents}</p>
                <small>Beginner • Intermediate • Advanced</small>
              </div>

              <div className="card">
                <h4>Active Companies</h4>
                <p>{stats.totalCompanies}</p>
                <small>Registered companies</small>
              </div>

              <div className="card">
                <h4>Total Revenue</h4>
                <p>₹{stats.totalRevenue}</p>
                <small>Sum of all project budgets</small>
              </div>
            </div>
          </>
        )}

        {/* OTHER SECTIONS (unchanged) */}
      </main>
    </div>
  );
};

export default AdminDashboard;
