import "./StudentProgress.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const StudentProgress = () => {
  const [progressData, setProgressData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const email = "mithilexample@gmail.com";

    axios
      .get(`http://localhost:5000/api/student/progress/${email}`)
      .then((res) => {
        const formatted = res.data.map((item) => {
          const progress = Math.round((item.best_score / item.total) * 100);

          return {
            skill: item.quiz_name,
            progress
          };
        });

        setProgressData(formatted);
      })
      .catch((err) => console.log(err));
  }, []);



  const totalProgress =
    progressData.reduce((acc, item) => acc + item.progress, 0) /
    progressData.length;

  return (
    <div className="container-progress">

      <button
        className="back-btn"
        onClick={() => navigate("/student/dashboard")}
      >
        ← Back
      </button>

      <div className="progress-page">

        <h1 className="title-progress">Your Progress</h1>

        <div className="dashboard_progress">

          <div className="glass-card center">
            <div className="circle">
              <span>{Math.round(totalProgress)}%</span>
            </div>
            <p>Overall Completion</p>
          </div>

          <div className="glass-card">
            <h3>Skills</h3>

            {progressData.map((item, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span>{item.skill}</span>
                  <span>{item.progress}%</span>
                </div>

                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentProgress;