import "./Courses.css";
import { useNavigate } from "react-router-dom";

function UiUxSyllabus() {
  const navigate = useNavigate();

  const syllabus = [
    {
      title: "Fundamentals",
      topics: [
        "UI vs UX Basics",
        "Design Principles",
        "Color Theory",
        "Typography",
        "Layout & Spacing",
      ],
    },
    {
      title: "Design Tools",
      topics: [
        "Figma Basics",
        "Adobe XD",
        "Sketch",
        "Prototyping Tools (InVision)",
      ],
    },
    {
      title: "UX Design",
      topics: [
        "User Research",
        "Personas Creation",
        "Wireframes",
        "User Flows",
        "Prototypes",
      ],
    },
    {
      title: "UI Design",
      topics: [
        "Design Systems",
        "Accessibility Basics",
        "Responsive Design",
        "Mobile-First Design",
      ],
    },
    {
      title: "Advanced Topics",
      topics: [
        "Usability Testing",
        "A/B Testing",
        "Motion Design",
        "Interactive Prototypes",
      ],
    },
    {
      title: "Practice & Career",
      topics: [
        "Work on Real Projects",
        "Design Challenges",
        "Portfolio Building",
        "Apply for UI/UX Jobs",
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
        <h1 className="title">UI/UX Design</h1>
        <button
          className="syllabus-btn"
          onClick={() => navigate("/uiux/quiz")}
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
          href="https://youtu.be/truRwcI7-kg?si=1nVaKhYjVEeHEOz0"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>UI/UX Full Course Beginners 2025</h3>
            <p>YouTube Video</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=c9Wg6Cb_YlU"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>Wireframe + Mockup + Figma Tutorial</h3>
            <p>YouTube Video</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=QJBP2uy8LcU"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>Free Figma Essentials Course</h3>
            <p>YouTube Video</p>
          </div>
        </a>

        <a
          href="https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>Certification (Udemy)</h3>
            <p>Figma UI UX Design Essentials</p>
          </div>
        </a>

        <a
          href="https://www.udemy.com/course/complete-web-designer-mobile-designer-zero-to-mastery"
          target="_blank"
          rel="noreferrer"
          class="resource-link"
        >
          <div class="resource-card">
            <h3>Complete Web & Mobile Designer</h3>
            <p>UI/UX + More</p>
          </div>
        </a>
      </section>
    </div >
  );
}

export default UiUxSyllabus;