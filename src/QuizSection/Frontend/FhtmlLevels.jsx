import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";


function FhtmlLevels() {
    const [step, setStep] = useState("levels"); // levels → quiz
    const [activeLevel, setActiveLevel] = useState(null);
    const [unlockedLevel, setUnlockedLevel] = useState(1);

    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState({});

    /* ===== CREATE QUESTIONS ===== */
    const htmlQuestions = {
        1: [
            {
                q: "What does HTML stand for?",
                options: [
                    "Hyper Trainer Marking Language",
                    "Hyper Text Markup Language",
                    "Hyper Text Marketing Language",
                    "Hyper Tool Markup Language",
                ],
                answer: 1,
            },
            {
                q: "Which tag is used for paragraph?",
                options: ["<h1>", "<p>", "<div>", "<span>"],
                answer: 1,
            },
            {
                q: "Which tag creates a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                answer: 1,
            },
            {
                q: "Which attribute is used to open a link in a new tab?",
                options: ["new", "target", "href", "tab"],
                answer: 1,
            },
            {
                q: "Which tag is used to display an image in HTML?",
                options: ["<img>", "<image>", "<src>", "<pic>"],
                answer: 0,
            },
            {
                q: "Which attribute specifies the image path?",
                options: ["alt", "href", "src", "link"],
                answer: 2,
            },
            {
                q: "Which tag is used to create a table row?",
                options: ["<td>", "<tr>", "<th>", "<table>"],
                answer: 1,
            },
            {
                q: "Which tag is used for table data (cell)?",
                options: ["<tr>", "<th>", "<td>", "<table>"],
                answer: 2,
            },
            {
                q: "Which tag defines a list item?",
                options: ["<li>", "<ul>", "<ol>", "<list>"],
                answer: 0,
            },
            {
                q: "Which tag is used for an unordered list?",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                answer: 1,
            },

        ],

        2: [
            {
                q: "Which attribute is used to provide alternative text for an image?",
                options: ["title", "alt", "src", "href"],
                answer: 1,
            },
            {
                q: "Which tag is used to create a dropdown list?",
                options: ["<input>", "<select>", "<option>", "<dropdown>"],
                answer: 1,
            },
            {
                q: "Which tag is used inside <select> to define options?",
                options: ["<item>", "<choice>", "<option>", "<list>"],
                answer: 2,
            },
            {
                q: "Which attribute is used to specify a unique identifier for an element?",
                options: ["class", "id", "name", "key"],
                answer: 1,
            },
            {
                q: "Which tag is used to group form elements?",
                options: ["<group>", "<fieldset>", "<section>", "<div>"],
                answer: 1,
            },
            {
                q: "Which tag is used to define a caption for a table?",
                options: ["<title>", "<caption>", "<head>", "<label>"],
                answer: 1,
            },
            {
                q: "Which tag is used to embed a video in HTML?",
                options: ["<media>", "<video>", "<movie>", "<embed>"],
                answer: 1,
            },
            {
                q: "Which attribute is used in <form> to specify where to send data?",
                options: ["method", "action", "target", "url"],
                answer: 1,
            },
            {
                q: "Which input type allows selecting multiple files?",
                options: ["file-multiple", "files", "file", "upload"],
                answer: 2,
            },
            {
                q: "Which tag is used to define metadata about an HTML document?",
                options: ["<meta>", "<data>", "<info>", "<head>"],
                answer: 0,
            }
        ],

        3: [
            {
                q: "Which attribute is used to specify the URL of a linked page?",
                options: ["src", "href", "link", "url"],
                answer: 1,
            },
            {
                q: "Which tag is used to define a header for a document or section?",
                options: ["<head>", "<header>", "<top>", "<section>"],
                answer: 1,
            },
            {
                q: "Which tag is used to define a footer for a document or section?",
                options: ["<bottom>", "<footer>", "<end>", "<section>"],
                answer: 1,
            },
            {
                q: "Which tag is used to create a line break?",
                options: ["<break>", "<lb>", "<br>", "<hr>"],
                answer: 2,
            },
            {
                q: "Which tag is used to draw a horizontal line?",
                options: ["<line>", "<hr>", "<br>", "<border>"],
                answer: 1,
            },
            {
                q: "Which attribute is used to disable an input field?",
                options: ["readonly", "disable", "disabled", "off"],
                answer: 2,
            },
            {
                q: "Which input type is used to select a date?",
                options: ["calendar", "date", "datetime", "time"],
                answer: 1,
            },
            {
                q: "Which tag is used to define emphasized text?",
                options: ["<em>", "<i>", "<strong>", "<b>"],
                answer: 0,
            },
            {
                q: "Which tag is used to define important text?",
                options: ["<important>", "<strong>", "<b>", "<em>"],
                answer: 1,
            },
            {
                q: "Which attribute is used to make an input field required?",
                options: ["validate", "required", "must", "needed"],
                answer: 1,
            }
        ],

        4: [
            {
                q: "Which attribute is used with <iframe> to specify sandbox restrictions?",
                options: ["secure", "sandbox", "restrict", "policy"],
                answer: 1,
            },
            {
                q: "Which HTML tag is used to define client-side JavaScript?",
                options: ["<js>", "<javascript>", "<script>", "<code>"],
                answer: 2,
            },
            {
                q: "Which attribute is used to make a form submit via POST method?",
                options: ["type", "action", "method", "post"],
                answer: 2,
            },
            {
                q: "Which tag is used to define scalable vector graphics in HTML?",
                options: ["<canvas>", "<svg>", "<vector>", "<graphic>"],
                answer: 1,
            },
            {
                q: "Which attribute is used to specify that an input field must match a pattern?",
                options: ["match", "pattern", "validate", "format"],
                answer: 1,
            },
            {
                q: "Which tag is used to define a container for drawing graphics via JavaScript?",
                options: ["<canvas>", "<draw>", "<paint>", "<graphics>"],
                answer: 0,
            },
            {
                q: "Which attribute is used to defer script execution until HTML parsing is complete?",
                options: ["async", "defer", "delay", "wait"],
                answer: 1,
            },
            {
                q: "Which HTML element is used to specify multiple media resources for media elements?",
                options: ["<media>", "<source>", "<track>", "<file>"],
                answer: 1,
            },
            {
                q: "Which tag is used to define a progress bar?",
                options: ["<loading>", "<progress>", "<bar>", "<meter>"],
                answer: 1,
            },
            {
                q: "Which attribute is used to specify inline styles in HTML?",
                options: ["class", "style", "css", "design"],
                answer: 1,
            }
        ],

        5: [
            {
                q: "Which attribute is used to specify that a script is executed asynchronously?",
                options: ["defer", "async", "delay", "nonblock"],
                answer: 1,
            },
            {
                q: "Which HTML element is used to define metadata that is not displayed on the page?",
                options: ["<meta>", "<head>", "<data>", "<info>"],
                answer: 0,
            },
            {
                q: "Which tag is used to define text that has been deleted from a document?",
                options: ["<remove>", "<delete>", "<del>", "<cut>"],
                answer: 2,
            },
            {
                q: "Which input type is used to pick a color?",
                options: ["colorpicker", "color", "palette", "rgb"],
                answer: 1,
            },
            {
                q: "Which attribute is used to specify a hint for an input field?",
                options: ["hint", "placeholder", "label", "text"],
                answer: 1,
            },
            {
                q: "Which HTML element is used to define navigation links?",
                options: ["<nav>", "<navigate>", "<menu>", "<links>"],
                answer: 0,
            },
            {
                q: "Which tag is used to define a figure caption?",
                options: ["<figcaption>", "<caption>", "<figuretext>", "<fig>"],
                answer: 0,
            },
            {
                q: "Which attribute is used to specify that an input field is read-only?",
                options: ["readonly", "disabled", "locked", "fixed"],
                answer: 0,
            },
            {
                q: "Which tag is used to define a section in a document?",
                options: ["<section>", "<div>", "<area>", "<part>"],
                answer: 0,
            },
            {
                q: "Which HTML element is used to display a scalar measurement within a known range?",
                options: ["<progress>", "<meter>", "<range>", "<value>"],
                answer: 1,
            }
        ],
    };

    const questions = activeLevel !== null ? htmlQuestions[activeLevel] : [];
    const q = questions[currentQ];

    /* ===== SUBMIT ===== */
    const submitQuiz = () => {
        let score = 0;

        questions.forEach((q, i) => {
            if (answers[i] === q.answer) score++;
        });

        if (score >= 6) {
            alert("✅ Passed!");

            if (activeLevel === unlockedLevel) {
                setUnlockedLevel(unlockedLevel + 1);
            }

            setStep("levels");
            setActiveLevel(null);
        } else {
            alert("❌ Failed!");
        }

        setCurrentQ(0);
        setAnswers({});
    };

    return ( 
        <div className={step === "quiz" ? "quiz-fullscreen" : "quiz-layout"}>
            {step !== "quiz" && <Sidebar />}

            <div className="quiz-main">
                <h1 className="level-title">HTML QUIZ </h1>

                {/* ===== LEVELS ===== */}

                {step === "levels" && (
                    <div className="level-grid">
                        {[1, 2, 3, 4, 5].map((level) => {
                            const isLocked = level > unlockedLevel;

                            return (
                                <div
                                    key={level}
                                    className={`level-card ${isLocked ? "locked" : "unlocked"}`}
                                    onClick={() => {
                                        if (!isLocked) {
                                            setActiveLevel(level);
                                            setStep("quiz");
                                        }
                                    }}
                                >
                                    <h3>Quiz {level}</h3>

                                    {isLocked ? (
                                        <span className="lock">🔒 Locked</span>
                                    ) : (
                                        <span className="unlock">🚀 Start</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* ===== QUIZ ===== */}
                {step === "quiz" && q && (

                    <div className="exam-container">

                        {/* LEFT SIDE */}
                        <div className="exam-left">

                            <h3>HTML Quiz - Level {activeLevel}</h3>

                            <p className="question">
                                Q{currentQ + 1}. {q.q}
                            </p>

                            <div className="options">
                                {q.options.map((opt, i) => (
                                    <div
                                        key={i}
                                        className={`option ${answers[currentQ] === i ? "selected" : ""
                                            }`}
                                        onClick={() =>
                                            setAnswers({ ...answers, [currentQ]: i })
                                        }
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>

                            <div className="buttons">

                                <button
                                    className="btn prev"
                                    disabled={currentQ === 0}
                                    onClick={() => setCurrentQ(currentQ - 1)}
                                >
                                    Previous
                                </button>

                                {currentQ < questions.length - 1 ? (
                                    <button
                                        className="btn next"
                                        onClick={() => setCurrentQ(currentQ + 1)}
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        className="btn submit"
                                        onClick={submitQuiz}
                                    >
                                        Submit
                                    </button>
                                )}

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="exam-right">
                            <div className="q-header">
                                <FormatListBulletedIcon className="q-icon" />
                                <h4>Questions</h4>
                            </div>

                            <div className="question-grid">
                                {questions.map((_, i) => {
                                    let status = "not";

                                    if (answers[i] !== undefined) {
                                        status = "answered"; // green
                                    } else if (i === currentQ) {
                                        status = "current"; // blue
                                    }

                                    return (
                                        <div
                                            key={i}
                                            className={`q-number ${status}`}
                                            onClick={() => setCurrentQ(i)}
                                        >
                                            {i + 1}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                    </div>

                )}

            </div>
        </div>
    );
}

export default FhtmlLevels;