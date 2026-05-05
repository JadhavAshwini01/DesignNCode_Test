import React from "react";
import { useNavigate } from "react-router-dom";
import "./Beginner.css";

const Beginner = () => {
  const navigate = useNavigate();

  const routeMap = {
    frontend: "/frontend/roadmap",
    javadeveloper: "/java/roadmap",
    fullstack: "/fullstack/roadmap",
    devops: "/devops/roadmap",
    dsa: "/dsa/roadmap",
    testing: "/testing/roadmap",
    uiux: "/uiux/roadmap",
    datascience: "/datascience/roadmap",
    appdevelopment: "/appdevelopment/roadmap",
    aiml: "/ai-ml/roadmap",
    mernstack: "/mernstack/roadmap",
    cloud: "/cloud/roadmap",
  };

  const domains = [
    {
      key: "frontend",
      title: "Frontend",
      desc: "HTML, CSS, JavaScript, React",
    },
    {
      key: "javadeveloper",
      title: "Java Developer",
      desc: "Java, Spring Boot, Collections",
    },
    {
      key: "fullstack",
      title: "Full Stack",
      desc: "Frontend + Backend + Database",
    },
    {
      key: "devops",
      title: "DevOps",
      desc: "Linux, Git, CI/CD, Docker",
    },
    {
      key: "dsa",
      title: "DSA",
      desc: "Arrays, Linked List, Trees",
    },
    {
      key: "testing",
      title: "Software Testing",
      desc: "Manual + Automation Basics",
    },
    {
      key: "uiux",
      title: "UI/UX Design",
      desc: "Design, Wireframes, UX",
    },
    {
      key: "datascience",
      title: "Data Science",
      desc: "Python, Data Analysis, Stats",
    },
    {
      key: "appdevelopment",
      title: "App Development",
      desc: "Android, Flutter, React Native",
    },
    {
      key: "aiml",
      title: "AI / ML",
      desc: "Machine Learning Basics",
    },
    {
      key: "mernstack",
      title: "MERN Stack",
      desc: "MongoDB, Express, React, Node",
    },
    {
      key: "cloud",
      title: "Cloud Computing",
      desc: "AWS, Deployment Basics",
    },
  ];

  return (
    <div className="beginner-page">
      
      {/* HEADER */}
      <div className="beginner-header">
        <button
          className="beginner-btn"
          onClick={() => navigate("/student/dashboard")}
        >
          ← Back
        </button>

        <div>
          <h1>Beginner Path</h1>
          <p className="subtitle">Pick a domain to start</p>
        </div>
      </div>

      {/* CARDS */}
      <div className="domain-section">
        <div className="domain-cards">
          {domains.map((item) => (
            <div
              key={item.key}
              className="domain-card"
              onClick={() => {
                const route = routeMap[item.key];
                if (route) navigate(route);
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Beginner;