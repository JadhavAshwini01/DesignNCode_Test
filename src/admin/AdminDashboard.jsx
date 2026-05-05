import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCompanies: 0,
    totalRevenue: 0
  });

  /* ================= FETCH DASHBOARD STATS ================= */
  useEffect(() => {
    const fetchStats = () => {
      axios
        .get("http://localhost:5000/api/admin/dashboard-stats")
        .then((res) => {
          setStats({
            totalStudents: res.data.totalStudents || 0,
            totalCompanies: res.data.totalCompanies || 0,
            totalRevenue: res.data.totalRevenue || 0
          });
        })
        .catch((err) => {
          console.error("Dashboard stats error:", err);
        });
    };

    fetchStats(); // initial load

    const interval = setInterval(fetchStats, 5000); // auto refresh every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-container">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">
        <h2 className="logo">DesignNCode</h2>

        <ul>
          <li
            className={activeSection === "dashboard" ? "active" : ""}
            onClick={() => setActiveSection("dashboard")}
          >
            Dashboard
          </li>

          <li onClick={() => setActiveSection("students")}>
            Students
          </li>

          <li onClick={() => setActiveSection("companies")}>
            Companies
          </li>

          <li onClick={() => setActiveSection("interviews")}>
            Interviews
          </li>

          <li
            className="logout"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </li>
        </ul>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content">

        {activeSection === "dashboard" && (
          <>
            <h2>Admin Dashboard</h2>

            <div className="stats">

              {/* TOTAL STUDENTS */}
              <div className="card">
                <h4>Total Students</h4>
                <p>{stats.totalStudents}</p>
                <small>Beginner • Intermediate • Advanced</small>
              </div>

              {/* TOTAL COMPANIES */}
              <div className="card">
                <h4>Active Companies</h4>
                <p>{stats.totalCompanies}</p>
                <small>Registered companies</small>
              </div>

              {/* TOTAL REVENUE */}
              <div className="card">
                <h4>Total Revenue</h4>
                <p>
                  ₹{Number(stats.totalRevenue).toLocaleString("en-IN")}
                </p>
                <small>Sum of all project budgets</small>
              </div>

            </div>
          </>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;