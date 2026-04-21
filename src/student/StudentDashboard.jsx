import React from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";
import {
  FaTachometerAlt,
  FaComments,
  FaChartLine,
  FaSignOutAlt
} from "react-icons/fa";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">DesignNCode</h2>

        <ul>
          <li onClick={() => navigate("/student/dashboard")}>
            <FaTachometerAlt style={{ marginRight: "10px" }} />
            Dashboard
          </li>

          <li onClick={() => navigate("/student/interviews")}>
            <FaComments style={{ marginRight: "10px" }} />
            Interviews
          </li>

          <li onClick={() => navigate("/student/progress")}>
            <FaChartLine style={{ marginRight: "10px" }} />
            Progress Report
          </li>

          <li onClick={() => navigate("/")}>
            <FaSignOutAlt style={{ marginRight: "10px" }} />
            Logout
          </li>
          {/* <li onClick={() => navigate("/beginner")}>Beginner</li>
          <li onClick={() => navigate("/intermediate")}>Intermediate</li> */}
          {/* <li onClick={() => navigate("/experienced")}>Experienced</li> */}
          {/* <li onClick={() => navigate("/profile")}>Profile</li>
          <li onClick={() => navigate("/logout")}>Logout</li> */}
        </ul>
        
      </aside>

      {/* Main Content */}
      <main className="content">
        <h1>Welcome to DesignCode</h1>
        <h4>Select your learning level</h4>

        <div className="card-container">
          <div className="card" onClick={() => navigate("/beginner")}>
            <h2>Beginner</h2>
            <p>Start from basics of design & coding</p>
          </div>

          <div className="card" onClick={() => navigate("/intermediate")}>
            <h2>Intermediate</h2>
            <p>Improve your skills with projects</p>
          </div>


        </div>
      </main>

    </div>
  );
};

export default StudentDashboard;
