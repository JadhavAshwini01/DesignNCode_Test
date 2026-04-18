import { useState, useEffect } from "react";
import "./Courses.css";
import { useNavigate } from "react-router-dom";

/* ================= QUESTIONS ================= */
const htmlQuestions = [
  { q: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Markup Language"], answer: 1 },
  { q: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], answer: 2 },
  { q: "Which attribute is used for image source?", options: ["link", "src", "href", "path"], answer: 1 },
  { q: "Which tag creates a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0 },
  { q: "Which HTML element is semantic?", options: ["<div>", "<span>", "<section>", "<b>"], answer: 2 },
];

const cssQuestions = [
  { q: "Which property controls text size?", options: ["font-style", "text-size", "font-size", "size"], answer: 2 },
  { q: "Which layout is one-dimensional?", options: ["Grid", "Flexbox", "Table", "Float"], answer: 1 },
  { q: "Which unit is relative?", options: ["px", "cm", "em", "mm"], answer: 2 },
  { q: "Which property creates space inside element?", options: ["margin", "border", "padding", "gap"], answer: 2 },
  { q: "Which media query is correct?", options: ["@media screen > 600px", "@media (max-width: 600px)", "@media width:600px", "@media screen=600px"], answer: 1 },
];

const jsQuestions = [
  { q: "Which keyword declares a variable?", options: ["var", "int", "string", "define"], answer: 0 },
  { q: "Which method adds item to array?", options: ["add()", "push()", "insert()", "append()"], answer: 1 },
  { q: "What does DOM stand for?", options: ["Data Object Model", "Document Object Model", "Digital Object Model", "Desktop Object Model"], answer: 1 },
  { q: "Which is async?", options: ["for loop", "fetch()", "if statement", "switch"], answer: 1 },
  { q: "Which keyword handles errors?", options: ["catch", "error", "try", "handle"], answer: 0 },
];

/* ================= QUIZ CARD ================= */
function QuizCard({ title, questions, passed, onFinish }) {
  const [startTest, setStartTest] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [visited, setVisited] = useState({}); // 🔥 NEW

  /* SELECT ANSWER */
  const handleSelect = (i) => {
    if (visited[current]) return; // block changes in review mode
    setAnswers({ ...answers, [current]: i });
  };

  /* NEXT */
  const next = () => {
    setVisited((prev) => ({ ...prev, [current]: true }));
    setCurrent(current + 1);
    setTimeLeft(30);
  };

  /* PREVIOUS */
  const prev = () => {
    setVisited((prev) => ({ ...prev, [current - 1]: true }));
    setCurrent(current - 1);
    setTimeLeft(30);
  };

  /* SCORE */
  const calculateScore = () => {
    return questions.reduce(
      (total, q, i) => total + (answers[i] === q.answer ? 4 : 0),
      0
    );
  };

  /* SUBMIT */
  const submitQuiz = () => {
    const score = calculateScore();

    if (score >= 15) {
      setSubmitted(true);
      onFinish(true);
    } else {
      alert("❌ You failed! Try again.");

      setStartTest(false);
      setCurrent(0);
      setAnswers({});
      setTimeLeft(30);
      setVisited({});

      onFinish(false);
    }
  };

  /* TIMER */
  useEffect(() => {
    if (!startTest || submitted) return;
    if (visited[current]) return; // 🔥 stop timer in review mode

    if (timeLeft === 0) {
      if (current < questions.length - 1) {
        next();
      } else {
        submitQuiz();
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, current, startTest, visited]);

  /* PASSED STATE */
  if (passed) {
    return (
      <div className="quiz-card passed">
        <h3>{title}</h3>
        <p>✅ Passed</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className={`quiz-card ${startTest ? "fullscreen" : ""}`}>
      {!startTest ? (
        <div className="quiz-card-ui">
        <div> <h2 className="title">Start Quiz</h2></div>
        <div>
          <button className="start-btn-ui" onClick={() => setStartTest(true)}>
            START TEST
          </button>
        </div>
        </div>
      ) : (
        <>
          {!submitted ? (
            <>
              {/* TIMER (hidden in review mode) */}
              {!visited[current] && (
                <p className="timer">⏱️ {timeLeft}s</p>
              )}

              <p className="question">{q.q}</p>

              <div className="options">
                {q.options.map((opt, i) => (
                  <label key={i} className="option">
                    <input
                      type="radio"
                      checked={answers[current] === i}
                      disabled={visited[current]} // 🔥 lock in review
                      onChange={() => handleSelect(i)}
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <div className="quiz-actions">
                {current > 0 && (
                  <button className="quiz-btn" onClick={prev}>
                    Previous
                  </button>
                )}

                {current < questions.length - 1 ? (
                  <button className="quiz-btn" onClick={next}>
                    Next
                  </button>
                ) : (
                  <button className="quiz-btn submit-btn" onClick={submitQuiz}>
                    Submit
                  </button>
                )}
              </div>
            </>
          ) : (
            <p>✅ Passed: {calculateScore() >= 15 ? "Yes" : "No"}</p>
          )}
        </>
      )}
    </div>
  );
}

/* ================= MAIN ================= */
function Frontend() {
  const navigate = useNavigate();

  const [passedQuizzes, setPassedQuizzes] = useState({
    html: false,
    css: false,
    js: false,
  });

  return (
    <>
      <button className="back-btn" onClick={() => navigate("/beginner")}>
        ← Back
      </button>

      <div className="roadmap-container">
        <div className="top-bar">
          <h1 className="title">Frontend Development</h1>

          <button
            className="syllabus-btn"
            onClick={() => navigate("/frontend/syllabus")}
          >
            Roadmap
          </button>
        </div>

        <QuizCard
          title="HTML Quiz"
          questions={htmlQuestions}
          passed={passedQuizzes.html}
          onFinish={(passed) =>
            setPassedQuizzes({ ...passedQuizzes, html: passed })
          }
        />

        {passedQuizzes.html && (
          <QuizCard
            title="CSS Quiz"
            questions={cssQuestions}
            passed={passedQuizzes.css}
            onFinish={(passed) =>
              setPassedQuizzes({ ...passedQuizzes, css: passed })
            }
          />
        )}

        {passedQuizzes.css && (
          <QuizCard
            title="JavaScript Quiz"
            questions={jsQuestions}
            passed={passedQuizzes.js}
            onFinish={(passed) =>
              setPassedQuizzes({ ...passedQuizzes, js: passed })
            }
          />
        )}
      </div>
    </>
  );
}

export default Frontend;