import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function PythonLibraries() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
      1: [
        {
          q: "Which language is most used in AI/ML?",
          options: ["Java", "Python", "C++", "HTML"],
          answer: 1,
        },
        {
          q: "Which Python library is used for arrays?",
          options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
          answer: 0,
        },
        {
          q: "Which library is used for data analysis?",
          options: ["NumPy", "Pandas", "TensorFlow", "Keras"],
          answer: 1,
        },
        {
          q: "Which library is used for plotting graphs?",
          options: ["Matplotlib", "NumPy", "Pandas", "Sklearn"],
          answer: 0,
        },
        {
          q: "Which library is used for machine learning?",
          options: ["Scikit-learn", "NumPy", "Pandas", "Seaborn"],
          answer: 0,
        },
        {
          q: "Which keyword defines a function in Python?",
          options: ["func", "define", "def", "function"],
          answer: 2,
        },
        {
          q: "Which data type is used for numbers?",
          options: ["int", "str", "list", "dict"],
          answer: 0,
        },
        {
          q: "Which symbol is used for comments?",
          options: ["//", "#", "/* */", "<!-- -->"],
          answer: 1,
        },
        {
          q: "Which keyword is used for loop?",
          options: ["loop", "for", "repeat", "iterate"],
          answer: 1,
        },
        {
          q: "Which structure stores key-value pairs?",
          options: ["list", "tuple", "dict", "set"],
          answer: 2,
        },
      ],

      2: [
        {
          q: "Which library is used for visualization advanced?",
          options: ["Seaborn", "NumPy", "Pandas", "Keras"],
          answer: 0,
        },
        {
          q: "Which library is used for deep learning?",
          options: ["TensorFlow", "Pandas", "NumPy", "Matplotlib"],
          answer: 0,
        },
        {
          q: "Which high-level DL API?",
          options: ["Keras", "NumPy", "Pandas", "Seaborn"],
          answer: 0,
        },
        {
          q: "Which function prints output?",
          options: ["echo()", "print()", "show()", "display()"],
          answer: 1,
        },
        {
          q: "Which keyword is used for condition?",
          options: ["if", "when", "check", "cond"],
          answer: 0,
        },
        {
          q: "Which function reads CSV in pandas?",
          options: ["read_csv()", "load_csv()", "open_csv()", "get_csv()"],
          answer: 0,
        },
        {
          q: "Which NumPy object stores data?",
          options: ["array", "list", "dict", "tuple"],
          answer: 0,
        },
        {
          q: "Which method shows first rows?",
          options: ["head()", "top()", "first()", "start()"],
          answer: 0,
        },
        {
          q: "Which method shows info of dataset?",
          options: ["info()", "describe()", "data()", "show()"],
          answer: 0,
        },
        {
          q: "Which method gives summary stats?",
          options: ["info()", "describe()", "head()", "tail()"],
          answer: 1,
        },
      ],

      3: [
        {
          q: "Which method handles missing data?",
          options: ["fillna()", "dropna()", "Both", "None"],
          answer: 2,
        },
        {
          q: "Which method selects column?",
          options: ["df[col]", "df.get()", "df.select()", "df.use()"],
          answer: 0,
        },
        {
          q: "Which method merges datasets?",
          options: ["merge()", "join()", "concat()", "All"],
          answer: 3,
        },
        {
          q: "Which sklearn model is for classification?",
          options: ["LogisticRegression", "LinearRegression", "KMeans", "PCA"],
          answer: 0,
        },
        {
          q: "Which sklearn model is for clustering?",
          options: ["KMeans", "Regression", "Tree", "SVM"],
          answer: 0,
        },
        {
          q: "Which method splits dataset?",
          options: ["train_test_split", "split()", "divide()", "separate()"],
          answer: 0,
        },
        {
          q: "Which function plots line graph?",
          options: ["plot()", "line()", "draw()", "graph()"],
          answer: 0,
        },
        {
          q: "Which method reshapes array?",
          options: ["reshape()", "resize()", "shape()", "format()"],
          answer: 0,
        },
        {
          q: "Which method converts list to array?",
          options: ["np.array()", "np.list()", "np.convert()", "np.make()"],
          answer: 0,
        },
        {
          q: "Which function generates random numbers?",
          options: ["np.random", "np.rand", "np.generate", "np.create"],
          answer: 0,
        },
      ],

      4: [
        {
          q: "Which model is used for regression?",
          options: ["LinearRegression", "KMeans", "SVM", "Tree"],
          answer: 0,
        },
        {
          q: "Which model handles classification?",
          options: ["DecisionTree", "PCA", "KMeans", "Scaler"],
          answer: 0,
        },
        {
          q: "Which class scales data?",
          options: ["StandardScaler", "Normalizer", "Scaler", "All"],
          answer: 3,
        },
        {
          q: "Which method transforms data?",
          options: ["fit_transform()", "transform()", "fit()", "All"],
          answer: 3,
        },
        {
          q: "Which library is used for NLP?",
          options: ["NLTK", "NumPy", "Pandas", "Matplotlib"],
          answer: 0,
        },
        {
          q: "Which library is used for transformers?",
          options: ["Transformers", "Pandas", "NumPy", "Seaborn"],
          answer: 0,
        },
        {
          q: "Which method evaluates model?",
          options: ["score()", "evaluate()", "check()", "test()"],
          answer: 0,
        },
        {
          q: "Which metric checks accuracy?",
          options: ["accuracy_score", "mean()", "score()", "eval()"],
          answer: 0,
        },
        {
          q: "Which function plots histogram?",
          options: ["hist()", "bar()", "plot()", "line()"],
          answer: 0,
        },
        {
          q: "Which library handles big data?",
          options: ["PySpark", "NumPy", "Pandas", "Matplotlib"],
          answer: 0,
        },
      ],

      5: [
        {
          q: "Which library is used for async ML pipelines?",
          options: ["Dask", "NumPy", "Pandas", "Matplotlib"],
          answer: 0,
        },
        {
          q: "Which tool handles model deployment?",
          options: ["Flask", "TensorFlow Serving", "FastAPI", "All"],
          answer: 3,
        },
        {
          q: "Which library supports GPU DL?",
          options: ["TensorFlow", "PyTorch", "Both", "None"],
          answer: 2,
        },
        {
          q: "Which framework is dynamic graph?",
          options: ["PyTorch", "TensorFlow", "Keras", "Scikit"],
          answer: 0,
        },
        {
          q: "Which library handles experiment tracking?",
          options: ["MLflow", "NumPy", "Pandas", "Seaborn"],
          answer: 0,
        },
        {
          q: "Which tool handles hyperparameter tuning?",
          options: ["GridSearchCV", "SearchCV", "Tune", "Optimize"],
          answer: 0,
        },
        {
          q: "Which method saves model?",
          options: ["pickle", "joblib", "Both", "None"],
          answer: 2,
        },
        {
          q: "Which concept pipelines ML steps?",
          options: ["Pipeline", "Flow", "Chain", "Steps"],
          answer: 0,
        },
        {
          q: "Which library is used for RL?",
          options: ["Gym", "NumPy", "Pandas", "Matplotlib"],
          answer: 0,
        },
        {
          q: "Which concept deploys model API?",
          options: ["Flask/FastAPI", "NumPy", "Pandas", "Matplotlib"],
          answer: 0,
        },
      ],
    };


    const questions = activeLevel !== null ? javaQuestions[activeLevel] : [];
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

    return(
    <div className = { step === "quiz" ? "quiz-fullscreen" : "quiz-layout"} >
    { step !== "quiz" && <Sidebar />
}

<div className="quiz-main">
  <h1 className="level-title">COLLECTIONS QUIZ</h1>

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

      {/* LEFT */}
      <div className="exam-left">
        <h3>Core Java Quiz - Level {activeLevel}</h3>

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

      {/* RIGHT */}
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
    </div >
  );
}

export default PythonLibraries;