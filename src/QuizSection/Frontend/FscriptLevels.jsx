import { useState } from "react";
import "../Quiz.css";
//import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function FscriptLevels() {
    // const navigate = useNavigate();

    const [step, setStep] = useState("levels");
    const [activeLevel, setActiveLevel] = useState(null);
    const [unlockedLevel, setUnlockedLevel] = useState(1);

    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState({});

    /* ===== JAVASCRIPT QUESTIONS ===== */
    const jsQuestions = {
        1: [
            {
                q: "What is JavaScript?",
                options: [
                    "Programming Language",
                    "Markup Language",
                    "Database",
                    "Operating System"
                ],
                answer: 0,
            },
            {
                q: "Which keyword is used to declare a variable?",
                options: ["var", "let", "const", "All of these"],
                answer: 3,
            },
            {
                q: "Which symbol is used for comments in JS?",
                options: ["//", "<!-- -->", "#", "**"],
                answer: 0,
            },
            {
                q: "Which method prints output in console?",
                options: ["print()", "console.log()", "echo()", "log()"],
                answer: 1,
            },
            {
                q: "Which operator is used for equality?",
                options: ["=", "==", "!=", "<"],
                answer: 1,
            },
            {
                q: "Which keyword is used for function?",
                options: ["func", "function", "define", "method"],
                answer: 1,
            },
            {
                q: "Which data type is NOT in JS?",
                options: ["String", "Boolean", "Float", "Undefined"],
                answer: 2,
            },
            {
                q: "Which loop runs at least once?",
                options: ["for", "while", "do...while", "foreach"],
                answer: 2,
            },
            {
                q: "How to write string in JS?",
                options: ['"Hello"', "'Hello'", "`Hello`", "All"],
                answer: 3,
            },
            {
                q: "Which keyword is constant?",
                options: ["let", "var", "const", "static"],
                answer: 2,
            },
        ],

        2: [
            {
                q: "Which method converts JSON to object?",
                options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
                answer: 0,
            },
            {
                q: "Which method converts object to JSON?",
                options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convert()"],
                answer: 1,
            },
            {
                q: "Which function is used to delay execution?",
                options: ["setTimeout()", "delay()", "wait()", "sleep()"],
                answer: 0,
            },
            {
                q: "Which method is used to select element by id?",
                options: ["getElement()", "getElementById()", "query()", "selectId()"],
                answer: 1,
            },
            {
                q: "Which keyword refers to current object?",
                options: ["self", "this", "current", "object"],
                answer: 1,
            },
            {
                q: "Which array method adds element at end?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                answer: 0,
            },
            {
                q: "Which method removes last element?",
                options: ["pop()", "shift()", "remove()", "delete()"],
                answer: 0,
            },
            {
                q: "Which event occurs on click?",
                options: ["onchange", "onhover", "onclick", "onload"],
                answer: 2,
            },
            {
                q: "Which operator checks type?",
                options: ["typeof", "instance", "check", "type"],
                answer: 0,
            },
            {
                q: "Which keyword is block scoped?",
                options: ["var", "let", "function", "global"],
                answer: 1,
            },
        ],

        3: [
            {
                q: "What is closure?",
                options: [
                    "Function inside function",
                    "Access outer scope",
                    "Object",
                    "Loop"
                ],
                answer: 1,
            },
            {
                q: "Which method loops array?",
                options: ["map()", "loop()", "forEach()", "Both map & forEach"],
                answer: 3,
            },
            {
                q: "What is NaN?",
                options: ["Not a Name", "Not a Number", "Null value", "None"],
                answer: 1,
            },
            {
                q: "Which keyword stops loop?",
                options: ["stop", "break", "exit", "return"],
                answer: 1,
            },
            {
                q: "Which keyword skips iteration?",
                options: ["skip", "continue", "pass", "ignore"],
                answer: 1,
            },
            {
                q: "Which method joins array?",
                options: ["join()", "merge()", "concat()", "add()"],
                answer: 0,
            },
            {
                q: "Which method merges arrays?",
                options: ["join()", "concat()", "push()", "map()"],
                answer: 1,
            },
            {
                q: "Which symbol is arrow function?",
                options: ["=>", "->", "==>", "::"],
                answer: 0,
            },
            {
                q: "Which keyword is async?",
                options: ["async", "await", "promise", "then"],
                answer: 0,
            },
            {
                q: "Which handles async result?",
                options: ["then()", "catch()", "await", "All"],
                answer: 3,
            },
        ],

        4: [
            {
                q: "What is DOM?",
                options: [
                    "Document Object Model",
                    "Data Object Model",
                    "Design Object Model",
                    "None"
                ],
                answer: 0,
            },
            {
                q: "Which method selects all elements?",
                options: [
                    "querySelector()",
                    "querySelectorAll()",
                    "getAll()",
                    "selectAll()"
                ],
                answer: 1,
            },
            {
                q: "Which method adds event listener?",
                options: [
                    "addEventListener()",
                    "onEvent()",
                    "attachEvent()",
                    "listen()"
                ],
                answer: 0,
            },
            {
                q: "What is promise?",
                options: [
                    "Object",
                    "Async result",
                    "Function",
                    "Loop"
                ],
                answer: 1,
            },
            {
                q: "Which state in promise?",
                options: ["pending", "resolved", "rejected", "All"],
                answer: 3,
            },
            {
                q: "Which method handles error?",
                options: ["catch()", "error()", "fail()", "reject()"],
                answer: 0,
            },
            {
                q: "Which keyword waits promise?",
                options: ["wait", "hold", "await", "pause"],
                answer: 2,
            },
            {
                q: "Which object handles API?",
                options: ["fetch()", "api()", "call()", "request()"],
                answer: 0,
            },
            {
                q: "Which method parses JSON response?",
                options: ["json()", "parse()", "toJSON()", "convert()"],
                answer: 0,
            },
            {
                q: "Which method stops propagation?",
                options: [
                    "stopPropagation()",
                    "preventDefault()",
                    "stop()",
                    "cancel()"
                ],
                answer: 0,
            },
        ],

        5: [
            {
                q: "What is hoisting?",
                options: [
                    "Variable moving up",
                    "Looping",
                    "Function calling",
                    "Execution"
                ],
                answer: 0,
            },
            {
                q: "What is event bubbling?",
                options: [
                    "Top to bottom",
                    "Bottom to top",
                    "Side flow",
                    "None"
                ],
                answer: 1,
            },
            {
                q: "What is debounce?",
                options: [
                    "Delay execution",
                    "Repeat function",
                    "Stop function",
                    "Loop"
                ],
                answer: 0,
            },
            {
                q: "What is throttle?",
                options: [
                    "Limit execution",
                    "Delay execution",
                    "Stop execution",
                    "Repeat"
                ],
                answer: 0,
            },
            {
                q: "What is localStorage?",
                options: [
                    "Temporary storage",
                    "Browser storage",
                    "Server DB",
                    "Cache"
                ],
                answer: 1,
            },
            {
                q: "Which method stores data?",
                options: [
                    "setItem()",
                    "getItem()",
                    "store()",
                    "add()"
                ],
                answer: 0,
            },
            {
                q: "Which method retrieves data?",
                options: [
                    "getItem()",
                    "setItem()",
                    "fetch()",
                    "read()"
                ],
                answer: 0,
            },
            {
                q: "What is strict mode?",
                options: [
                    "Secure JS",
                    "Strict rules",
                    "Error catching",
                    "All"
                ],
                answer: 3,
            },
            {
                q: "Which keyword creates class?",
                options: ["class", "object", "define", "new"],
                answer: 0,
            },
            {
                q: "Which keyword inherits class?",
                options: ["extends", "inherit", "super", "base"],
                answer: 0,
            },
        ],
    };

    const questions = activeLevel !== null ? jsQuestions[activeLevel] : [];
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
                <h1 className="level-title">JAVASCRIPT QUIZ</h1>

                {/* LEVELS */}
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

                {/* QUIZ */}
                {step === "quiz" && q && (
                    <div className="exam-container">

                        <div className="exam-left">
                            <h3>JS Quiz - Level {activeLevel}</h3>

                            <p className="question">
                                Q{currentQ + 1}. {q.q}
                            </p>

                            <div className="options">
                                {q.options.map((opt, i) => (
                                    <div
                                        key={i}
                                        className={`option ${answers[currentQ] === i ? "selected" : ""}`}
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

                        <div className="exam-right">
                            <div className="q-header">
                                <FormatListBulletedIcon className="q-icon" />
                                <h4>Questions</h4>
                            </div>

                            <div className="question-grid">
                                {questions.map((_, i) => {
                                    let status = "not";

                                    if (answers[i] !== undefined) {
                                        status = "answered";
                                    } else if (i === currentQ) {
                                        status = "current";
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

export default FscriptLevels;