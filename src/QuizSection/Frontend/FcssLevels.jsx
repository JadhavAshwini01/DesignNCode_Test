import { useState } from "react";
import "../Quiz.css";
//import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function FcssLevels() {
    // const navigate = useNavigate();

    const [step, setStep] = useState("levels");
    const [activeLevel, setActiveLevel] = useState(null);
    const [unlockedLevel, setUnlockedLevel] = useState(1);

    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState({});

    /* ===== CSS QUESTIONS ===== */
    const cssQuestions = {
        1: [
            {
                q: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Cascading Style Sheets",
                    "Creative Style System",
                    "Colorful Style Sheets",
                ],
                answer: 1,
            },
            {
                q: "Which property is used to change text color?",
                options: ["font-color", "color", "text-color", "style"],
                answer: 1,
            },
            {
                q: "Which CSS property controls the text size?",
                options: ["font-style", "text-size", "font-size", "text-style"],
                answer: 2,
            },
            {
                q: "How do you select an element with id 'main'?",
                options: ["#main", ".main", "main", "*main"],
                answer: 0,
            },
            {
                q: "How do you select elements with class name 'box'?",
                options: ["#box", ".box", "box", "*box"],
                answer: 1,
            },
            {
                q: "Which property is used to set background color?",
                options: ["bgcolor", "color", "background-color", "background-style"],
                answer: 2,
            },
            {
                q: "Which property is used for spacing inside an element?",
                options: ["margin", "padding", "border", "spacing"],
                answer: 1,
            },
            {
                q: "Which property is used to make text bold?",
                options: ["text-bold", "font-weight", "bold", "style"],
                answer: 1,
            },
            {
                q: "Which CSS property controls the layout using flexbox?",
                options: ["display:flex", "flexbox", "layout:flex", "box:flex"],
                answer: 0,
            },
            {
                q: "Which property is used to add shadow to elements?",
                options: ["shadow", "box-shadow", "text-shadow", "depth"],
                answer: 1,
            },
        ],

        2: [
            {
                q: "Which property is used to control the visibility of an element?",
                options: ["display", "visibility", "opacity", "hidden"],
                answer: 1,
            },
            {
                q: "Which value of position makes the element fixed on screen?",
                options: ["absolute", "relative", "fixed", "sticky"],
                answer: 2,
            },
            {
                q: "Which CSS property is used to create space outside elements?",
                options: ["padding", "margin", "border", "spacing"],
                answer: 1,
            },
            {
                q: "Which property is used to round the corners of an element?",
                options: ["corner-radius", "border-radius", "radius", "curve"],
                answer: 1,
            },
            {
                q: "Which property is used to change the font of text?",
                options: ["font-style", "font-family", "text-font", "style-font"],
                answer: 1,
            },
            {
                q: "Which property is used to align text to the center?",
                options: ["align", "text-align", "center", "justify"],
                answer: 1,
            },
            {
                q: "Which unit is NOT relative?",
                options: ["em", "rem", "px", "%"],
                answer: 2,
            },
            {
                q: "Which property controls the stacking order of elements?",
                options: ["z-index", "stack", "layer", "order"],
                answer: 0,
            },
            {
                q: "Which property is used to hide overflow content?",
                options: ["overflow:hidden", "display:none", "visibility:hidden", "clip"],
                answer: 0,
            },
            {
                q: "Which CSS property is used to apply animation?",
                options: ["transition", "animation", "transform", "effect"],
                answer: 1,
            },
        ],

        3: [
            {
                q: "Which property is used to control flex item alignment along the cross axis?",
                options: ["justify-content", "align-items", "align-content", "flex-align"],
                answer: 1,
            },
            {
                q: "What is the default value of position property?",
                options: ["relative", "absolute", "static", "fixed"],
                answer: 2,
            },
            {
                q: "Which property is used to control spacing between flex items?",
                options: ["gap", "spacing", "margin", "padding"],
                answer: 0,
            },
            {
                q: "Which CSS property is used to make an element transparent?",
                options: ["visibility", "opacity", "display", "transparent"],
                answer: 1,
            },
            {
                q: "Which value of display makes an element behave like a block but inline?",
                options: ["inline", "block", "inline-block", "flex"],
                answer: 2,
            },
            {
                q: "Which property is used to define grid rows?",
                options: [
                    "grid-template-rows",
                    "grid-rows",
                    "rows",
                    "template-rows",
                ],
                answer: 0,
            },
            {
                q: "Which property is used to apply transition effects?",
                options: ["animation", "transition", "transform", "effect"],
                answer: 1,
            },
            {
                q: "Which pseudo-class is used when hovering over an element?",
                options: [":click", ":hover", ":focus", ":active"],
                answer: 1,
            },
            {
                q: "Which property is used to change the stacking order?",
                options: ["order", "z-index", "layer", "stack"],
                answer: 1,
            },
            {
                q: "Which CSS function is used to rotate elements?",
                options: ["rotate()", "transform()", "spin()", "turn()"],
                answer: 1,
            },
        ],

        4: [
            {
                q: "Which property is used to create a stacking context in CSS?",
                options: ["z-index", "position", "opacity", "all of the above"],
                answer: 3,
            },
            {
                q: "Which value of position allows an element to stick based on scroll?",
                options: ["fixed", "relative", "sticky", "absolute"],
                answer: 2,
            },
            {
                q: "Which property is used to control how flex items wrap?",
                options: ["flex-wrap", "wrap", "flex-flow", "flex-direction"],
                answer: 0,
            },
            {
                q: "Which CSS property combines flex-direction and flex-wrap?",
                options: ["flex", "flex-combine", "flex-flow", "flex-box"],
                answer: 2,
            },
            {
                q: "Which property is used to define grid areas?",
                options: ["grid-area", "grid-template-areas", "area", "template-area"],
                answer: 1,
            },
            {
                q: "Which unit is best for responsive typography?",
                options: ["px", "em", "rem", "cm"],
                answer: 2,
            },
            {
                q: "Which property is used to clip an element?",
                options: ["clip", "clip-path", "overflow", "mask"],
                answer: 1,
            },
            {
                q: "Which pseudo-element is used to style the first line of text?",
                options: ["::first-letter", "::first-line", "::line", "::text-first"],
                answer: 1,
            },
            {
                q: "Which property improves animation performance by using GPU?",
                options: ["transform", "transition", "animation", "opacity"],
                answer: 0,
            },
            {
                q: "Which CSS rule is used for responsive design?",
                options: ["@media", "@responsive", "@screen", "@device"],
                answer: 0,
            },
        ],

        5: [
            {
                q: "Which property creates a new stacking context when set with a value other than 'none'?",
                options: ["z-index", "opacity", "display", "overflow"],
                answer: 1,
            },
            {
                q: "What is the default flex-direction in flexbox?",
                options: ["row", "column", "row-reverse", "column-reverse"],
                answer: 0,
            },
            {
                q: "Which CSS property is used to maintain aspect ratio of an element?",
                options: ["aspect-ratio", "ratio", "object-fit", "scale"],
                answer: 0,
            },
            {
                q: "Which property defines how grid items are placed automatically?",
                options: ["grid-auto-flow", "grid-flow", "auto-grid", "grid-placement"],
                answer: 0,
            },
            {
                q: "Which value of overflow allows scrolling only when needed?",
                options: ["scroll", "hidden", "auto", "visible"],
                answer: 2,
            },
            {
                q: "Which property is used to control how an image fits inside a container?",
                options: ["object-fit", "image-fit", "fit-content", "background-fit"],
                answer: 0,
            },
            {
                q: "Which CSS variable syntax is correct?",
                options: [
                    "var(--main-color)",
                    "$main-color",
                    "@main-color",
                    "#main-color",
                ],
                answer: 0,
            },
            {
                q: "Which pseudo-class targets the first child element?",
                options: [":first", ":first-child", ":child-first", ":nth-first"],
                answer: 1,
            },
            {
                q: "Which property is used to create smooth scrolling behavior?",
                options: ["scroll-behavior", "smooth-scroll", "scroll-style", "behavior"],
                answer: 0,
            },
            {
                q: "Which property allows elements to overlap in CSS Grid?",
                options: ["z-index", "grid-area", "position", "all of the above"],
                answer: 3,
            },],
    };

    const questions = activeLevel !== null ? cssQuestions[activeLevel] : [];
    const q = questions[currentQ];

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
                <h1 className="level-title">CSS QUIZ</h1>

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

                {step === "quiz" && q && (
                    <div className="exam-container">
                        <div className="exam-left">
                            <h3>CSS Quiz - Level {activeLevel}</h3>

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
                                    <button className="btn submit" onClick={submitQuiz}>
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

export default FcssLevels;