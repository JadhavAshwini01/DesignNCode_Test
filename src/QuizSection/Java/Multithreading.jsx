import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Multithreading() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
    {
      q: "What is multithreading?",
      options: [
        "Running multiple programs",
        "Running multiple threads simultaneously",
        "Running one process",
        "None",
      ],
      answer: 1,
    },
    {
      q: "Which class is used to create a thread?",
      options: ["Thread", "Runnable", "Executor", "Process"],
      answer: 0,
    },
    {
      q: "Which method starts a thread?",
      options: ["run()", "start()", "execute()", "init()"],
      answer: 1,
    },
    {
      q: "Which method contains thread logic?",
      options: ["start()", "run()", "main()", "execute()"],
      answer: 1,
    },
    {
      q: "Which interface is used for threads?",
      options: ["Runnable", "Serializable", "Cloneable", "Comparable"],
      answer: 0,
    },
    {
      q: "Which method pauses a thread?",
      options: ["sleep()", "wait()", "stop()", "pause()"],
      answer: 0,
    },
    {
      q: "Which keyword is used for synchronization?",
      options: ["sync", "synchronized", "lock", "thread"],
      answer: 1,
    },
    {
      q: "Which method gets thread name?",
      options: ["getName()", "name()", "threadName()", "getThread()"],
      answer: 0,
    },
    {
      q: "Which method sets thread name?",
      options: ["setName()", "rename()", "setThread()", "nameSet()"],
      answer: 0,
    },
    {
      q: "Which method stops a thread safely?",
      options: ["stop()", "interrupt()", "destroy()", "exit()"],
      answer: 1,
    },
  ],

  2: [
    {
      q: "Which method checks if thread is alive?",
      options: ["isRunning()", "isAlive()", "alive()", "check()"],
      answer: 1,
    },
    {
      q: "Which method gives current thread?",
      options: ["currentThread()", "getThread()", "thisThread()", "thread()"],
      answer: 0,
    },
    {
      q: "Which method is used to join threads?",
      options: ["join()", "merge()", "connect()", "combine()"],
      answer: 0,
    },
    {
      q: "Which method yields execution?",
      options: ["sleep()", "yield()", "wait()", "stop()"],
      answer: 1,
    },
    {
      q: "What is max thread priority?",
      options: ["1", "5", "10", "0"],
      answer: 2,
    },
    {
      q: "What is default thread priority?",
      options: ["1", "5", "10", "0"],
      answer: 1,
    },
    {
      q: "Which method sets priority?",
      options: ["setPriority()", "priority()", "setLevel()", "setThreadPriority()"],
      answer: 0,
    },
    {
      q: "Which exception is thrown by sleep()?",
      options: ["IOException", "InterruptedException", "RuntimeException", "NullPointerException"],
      answer: 1,
    },
    {
      q: "Thread state before start()?",
      options: ["Runnable", "New", "Running", "Dead"],
      answer: 1,
    },
    {
      q: "Thread state after completion?",
      options: ["Waiting", "Dead", "Runnable", "Blocked"],
      answer: 1,
    },
  ],

  3: [
    {
      q: "Which methods are used for communication?",
      options: ["wait()", "notify()", "notifyAll()", "All"],
      answer: 3,
    },
    {
      q: "wait() belongs to which class?",
      options: ["Thread", "Object", "Class", "Runnable"],
      answer: 1,
    },
    {
      q: "Which block ensures thread safety?",
      options: ["try", "catch", "synchronized", "final"],
      answer: 2,
    },
    {
      q: "Which method releases lock?",
      options: ["wait()", "sleep()", "yield()", "stop()"],
      answer: 0,
    },
    {
      q: "Which method does NOT release lock?",
      options: ["wait()", "sleep()", "notify()", "join()"],
      answer: 1,
    },
    {
      q: "Which keyword ensures visibility?",
      options: ["static", "volatile", "final", "transient"],
      answer: 1,
    },
    {
      q: "Which class provides thread pool?",
      options: ["ThreadPool", "ExecutorService", "Runnable", "ThreadManager"],
      answer: 1,
    },
    {
      q: "Which method shuts down executor?",
      options: ["stop()", "shutdown()", "close()", "terminate()"],
      answer: 1,
    },
    {
      q: "Which interface returns result?",
      options: ["Runnable", "Callable", "Comparable", "Serializable"],
      answer: 1,
    },
    {
      q: "Which method gets result?",
      options: ["get()", "result()", "fetch()", "value()"],
      answer: 0,
    },
  ],

  4: [
    {
      q: "Which problem occurs when threads wait forever?",
      options: ["Starvation", "Deadlock", "Livelock", "Blocking"],
      answer: 1,
    },
    {
      q: "Which problem is lack of CPU time?",
      options: ["Deadlock", "Starvation", "Livelock", "Freeze"],
      answer: 1,
    },
    {
      q: "Which lock is reentrant?",
      options: ["ReentrantLock", "SimpleLock", "ThreadLock", "ObjectLock"],
      answer: 0,
    },
    {
      q: "Which class supports atomic operations?",
      options: ["AtomicInteger", "SafeInt", "ThreadSafe", "SyncInt"],
      answer: 0,
    },
    {
      q: "Which method tries lock without waiting?",
      options: ["lock()", "tryLock()", "getLock()", "acquire()"],
      answer: 1,
    },
    {
      q: "Which class schedules tasks?",
      options: ["Scheduler", "ScheduledExecutorService", "ThreadManager", "TimerThread"],
      answer: 1,
    },
    {
      q: "Which method runs task repeatedly?",
      options: ["repeat()", "scheduleAtFixedRate()", "loop()", "runRepeated()"],
      answer: 1,
    },
    {
      q: "Which concept avoids deadlock?",
      options: ["Lock ordering", "Priority", "Sleep", "Stop"],
      answer: 0,
    },
    {
      q: "Which keyword prevents reordering?",
      options: ["final", "volatile", "static", "synchronized"],
      answer: 1,
    },
    {
      q: "Which concurrent collection?",
      options: ["ConcurrentHashMap", "HashMap", "TreeMap", "LinkedMap"],
      answer: 0,
    },
  ],

  5: [
    {
      q: "Which memory model ensures visibility?",
      options: ["JVM", "Java Memory Model", "Heap", "Stack"],
      answer: 1,
    },
    {
      q: "Which rule ensures order?",
      options: ["Start", "Join", "Volatile", "All"],
      answer: 3,
    },
    {
      q: "Which class manages ForkJoin?",
      options: ["ForkJoinPool", "ThreadPool", "Executor", "JoinPool"],
      answer: 0,
    },
    {
      q: "Which method splits tasks?",
      options: ["fork()", "split()", "divide()", "break()"],
      answer: 0,
    },
    {
      q: "Which method merges results?",
      options: ["merge()", "join()", "combine()", "collect()"],
      answer: 1,
    },
    {
      q: "Which issue is due to bad sync?",
      options: ["Race condition", "Deadlock", "Starvation", "Freeze"],
      answer: 0,
    },
    {
      q: "Which ensures atomicity?",
      options: ["volatile", "synchronized", "final", "static"],
      answer: 1,
    },
    {
      q: "Which dynamic thread pool?",
      options: ["FixedThreadPool", "CachedThreadPool", "SingleThread", "ForkJoin"],
      answer: 1,
    },
    {
      q: "Which supports async?",
      options: ["Future", "CompletableFuture", "Runnable", "Thread"],
      answer: 1,
    },
    {
      q: "Which chains async tasks?",
      options: ["thenApply()", "next()", "chain()", "applyNext()"],
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

  return (
    <div className={step === "quiz" ? "quiz-fullscreen" : "quiz-layout"}>
      {step !== "quiz" && <Sidebar />}

      <div className="quiz-main">
        <h1 className="level-title">CORE JAVA QUIZ</h1>

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
                    className={`option ${
                      answers[currentQ] === i ? "selected" : ""
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
    </div>
  );
}

export default Multithreading;