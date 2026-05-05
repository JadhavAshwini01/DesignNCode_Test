import "./Courses.css";
import { useNavigate } from "react-router-dom";

function TestingSyllabus() {
  const navigate = useNavigate();

  const syllabus = [
    {
      title: "Foundations (SDLC, STLC, Manual Testing Basics)",
      topics: [
        "Software Development Life Cycle (SDLC)",
        "Software Testing Life Cycle (STLC)",
        "Manual Testing Basics",
        "Testing Principles",
        "Types of Testing (Smoke, Sanity, Regression)",
      ],
    },
    {
      title: "Core Manual Testing",
      topics: [
        "Writing Test Cases",
        "Bug Reporting and Bug Life Cycle",
        "Agile Testing Process",
        "Regression Testing",
        "Exploratory Testing",
      ],
    },
    {
      title: "Programming (Java/Python Basics, OOP, Git)",
      topics: [
        "Learn Java or Python Basics",
        "Object-Oriented Programming (OOP)",
        "Loops, Functions, Collections",
        "Git & GitHub Version Control",
      ],
    },
    {
      title: "Automation Testing (Selenium, Frameworks, API Testing)",
      topics: [
        "Selenium WebDriver Basics",
        "Automation Frameworks (TestNG / PyTest)",
        "Page Object Model (POM)",
        "Postman API Testing",
        "Basic API Automation",
      ],
    },
    {
      title: "Advanced Testing (CI/CD, JMeter, Appium, Security)",
      topics: [
        "Jenkins CI/CD Basics",
        "Performance Testing using JMeter",
        "Mobile Testing with Appium",
        "Security Testing Concepts",
        "OWASP Top 10 Overview",
      ],
    },
    {
      title: "Specialization (Cloud, AI/ML, RPA)",
      topics: [
        "Cloud Testing Basics",
        "AI in Software Testing",
        "RPA Automation using UiPath",
        "Future Trends in QA Industry",
      ],
    },
    {
      title: "Certifications & Courses",
      topics: [
        "ISTQB Foundation Certification",
        "Udemy Automation Testing Courses",
        "Selenium + API Certification Tracks",
      ],
    },
  ];

  return (
     <div className="roadmap-container">
      {/* BACK BUTTON */}
       <button className="back-btn" onClick={() => navigate("/beginner")}>
        ← Back
      </button>
      {/* TOP BAR */}
      <div className="top-bar">
        <h1 className="title">Software Testing</h1>
        <button
          className="syllabus-btn"
          onClick={() => navigate("/testing/quiz")}
        >
         -- Back to Quizzes
        </button>
      </div>

      <h2 className="subtitle">Roadmap</h2>

      {/* CARD GRID */}
      <div className="card-grid">
        {syllabus.map((item, index) => (
          <div className="roadmap-card" key={index}>
            <h3>{index + 1}. {item.title}</h3>
            <ul>
              {item.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* RESOURCES */}
      <section class="resources">
        <h2>Resources</h2>
        <a
          href="https://www.youtube.com/watch?v=HylDB3bN6hQ"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>STLC Explained</h3>
            <p>YouTube Video</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=g0PrXoWKM2Y"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>Test Case Writing Tutorial</h3>
            <p>YouTube Video</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=CPSWuwm8CeU"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>JMeter Tutorial</h3>
            <p>YouTube Playlist</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=_7JngtST91k"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>Appium Mobile Testing Tutorial</h3>
            <p>YouTube Playlist</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=gFNf5Gar_kw"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>Cloud Testing Basics</h3>
            <p>YouTube Video</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=LS59flG9XUw"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>UiPath RPA Tutorial</h3>
            <p>YouTube Playlist</p>
          </div>
        </a>
      </section>
    </div>
  );
}

export default TestingSyllabus;