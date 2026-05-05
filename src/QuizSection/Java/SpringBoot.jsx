import { useState } from "react";
import "../Quiz.css";
import Sidebar from "../Sidebar";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function SpringBoot() {
  const [step, setStep] = useState("levels");
  const [activeLevel, setActiveLevel] = useState(null);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  /* ===== ADD YOUR QUESTIONS HERE ===== */
  const javaQuestions = {
    1: [
      {
        q: "What is Spring Boot?",
        options: [
          "Framework for UI",
          "Java backend framework",
          "Database tool",
          "Testing tool",
        ],
        answer: 1,
      },
      {
        q: "Which annotation is used to start Spring Boot app?",
        options: [
          "@SpringBootApplication",
          "@EnableBoot",
          "@SpringApp",
          "@StartBoot",
        ],
        answer: 0,
      },
      {
        q: "Which method runs Spring Boot app?",
        options: ["run()", "start()", "SpringApplication.run()", "execute()"],
        answer: 2,
      },
      {
        q: "Which file contains project dependencies?",
        options: ["application.properties", "pom.xml", "config.yml", "main.java"],
        answer: 1,
      },
      {
        q: "Which annotation creates REST API?",
        options: ["@Controller", "@RestController", "@Service", "@Component"],
        answer: 1,
      },
      {
        q: "Which annotation maps HTTP GET request?",
        options: ["@GetMapping", "@PostMapping", "@Request", "@Fetch"],
        answer: 0,
      },
      {
        q: "Which annotation is used for dependency injection?",
        options: ["@Inject", "@Autowired", "@Service", "@Bean"],
        answer: 1,
      },
      {
        q: "Which file is used for configuration?",
        options: ["config.java", "application.properties", "boot.xml", "settings.java"],
        answer: 1,
      },
      {
        q: "Which server is default in Spring Boot?",
        options: ["Tomcat", "Jetty", "GlassFish", "JBoss"],
        answer: 0,
      },
      {
        q: "Which annotation defines main class?",
        options: ["@Main", "@SpringBootApplication", "@Boot", "@Config"],
        answer: 1,
      },
    ],

    2: [
      {
        q: "Which annotation is used for POST request?",
        options: ["@GetMapping", "@PostMapping", "@PutMapping", "@DeleteMapping"],
        answer: 1,
      },
      {
        q: "Which annotation is used for PUT request?",
        options: ["@PutMapping", "@UpdateMapping", "@ModifyMapping", "@ChangeMapping"],
        answer: 0,
      },
      {
        q: "Which annotation is used for DELETE request?",
        options: ["@RemoveMapping", "@DeleteMapping", "@DropMapping", "@ClearMapping"],
        answer: 1,
      },
      {
        q: "Which annotation handles all HTTP methods?",
        options: ["@RequestMapping", "@AllMapping", "@HttpMapping", "@Mapping"],
        answer: 0,
      },
      {
        q: "Which annotation is used for request body?",
        options: ["@RequestBody", "@Body", "@Input", "@Payload"],
        answer: 0,
      },
      {
        q: "Which annotation extracts path variable?",
        options: ["@Param", "@PathVariable", "@Variable", "@Path"],
        answer: 1,
      },
      {
        q: "Which annotation reads query param?",
        options: ["@RequestParam", "@Query", "@Param", "@InputParam"],
        answer: 0,
      },
      {
        q: "Which annotation marks service layer?",
        options: ["@Controller", "@Service", "@Component", "@Repository"],
        answer: 1,
      },
      {
        q: "Which annotation marks repository layer?",
        options: ["@Repository", "@Service", "@Component", "@Controller"],
        answer: 0,
      },
      {
        q: "Which annotation is generic bean?",
        options: ["@Component", "@Bean", "@Service", "@Config"],
        answer: 0,
      },
    ],

    3: [
      {
        q: "Which annotation defines configuration class?",
        options: ["@Configuration", "@Config", "@Setup", "@BeanConfig"],
        answer: 0,
      },
      {
        q: "Which annotation defines a bean manually?",
        options: ["@Bean", "@Component", "@Service", "@Inject"],
        answer: 0,
      },
      {
        q: "Which annotation handles exceptions globally?",
        options: ["@ExceptionHandler", "@ControllerAdvice", "@Error", "@Catch"],
        answer: 1,
      },
      {
        q: "Which annotation enables auto configuration?",
        options: ["@EnableAutoConfig", "@EnableAutoConfiguration", "@AutoConfig", "@SpringBootApplication"],
        answer: 3,
      },
      {
        q: "Which annotation is used for validation?",
        options: ["@Valid", "@Check", "@Validate", "@Verify"],
        answer: 0,
      },
      {
        q: "Which dependency is used for REST?",
        options: ["spring-boot-starter-web", "spring-data", "spring-core", "spring-rest"],
        answer: 0,
      },
      {
        q: "Which dependency is used for JPA?",
        options: ["spring-boot-starter-data-jpa", "spring-db", "spring-sql", "spring-repo"],
        answer: 0,
      },
      {
        q: "Which file supports YAML config?",
        options: ["application.yml", "config.yml", "boot.yml", "settings.yml"],
        answer: 0,
      },
      {
        q: "Which annotation defines request scope?",
        options: ["@Scope", "@RequestScope", "@SessionScope", "@BeanScope"],
        answer: 1,
      },
      {
        q: "Which annotation is used for cross-origin?",
        options: ["@CrossOrigin", "@AllowOrigin", "@CORS", "@Origin"],
        answer: 0,
      },
    ],

    4: [
      {
        q: "Which layer handles business logic?",
        options: ["Controller", "Service", "Repository", "Entity"],
        answer: 1,
      },
      {
        q: "Which layer interacts with DB?",
        options: ["Controller", "Service", "Repository", "DTO"],
        answer: 2,
      },
      {
        q: "Which interface is used for JPA repository?",
        options: ["JpaRepository", "CrudRepository", "PagingRepository", "All"],
        answer: 3,
      },
      {
        q: "Which annotation maps entity to table?",
        options: ["@Entity", "@Table", "@Column", "@Row"],
        answer: 0,
      },
      {
        q: "Which annotation defines primary key?",
        options: ["@Id", "@Primary", "@Key", "@Unique"],
        answer: 0,
      },
      {
        q: "Which annotation enables auto ID generation?",
        options: ["@GeneratedValue", "@AutoId", "@IdGen", "@Generate"],
        answer: 0,
      },
      {
        q: "Which annotation maps column?",
        options: ["@Column", "@Field", "@Value", "@Map"],
        answer: 0,
      },
      {
        q: "Which annotation handles transactions?",
        options: ["@Transactional", "@Transaction", "@Commit", "@Rollback"],
        answer: 0,
      },
      {
        q: "Which annotation ignores JSON field?",
        options: ["@JsonIgnore", "@Ignore", "@Skip", "@Hide"],
        answer: 0,
      },
      {
        q: "Which annotation customizes JSON name?",
        options: ["@JsonProperty", "@JsonName", "@Name", "@FieldName"],
        answer: 0,
      },
    ],

    5: [
      {
        q: "Which concept reduces boilerplate code?",
        options: ["Spring Core", "Spring Boot", "JPA", "Hibernate"],
        answer: 1,
      },
      {
        q: "Which feature provides auto config?",
        options: ["Spring Boot", "Spring MVC", "Spring Core", "Servlet"],
        answer: 0,
      },
      {
        q: "Which tool manages dependencies?",
        options: ["Maven/Gradle", "JDK", "Tomcat", "JVM"],
        answer: 0,
      },
      {
        q: "Which annotation enables caching?",
        options: ["@EnableCaching", "@Cache", "@EnableCache", "@CacheOn"],
        answer: 0,
      },
      {
        q: "Which annotation enables scheduling?",
        options: ["@EnableScheduling", "@Schedule", "@EnableTask", "@RunSchedule"],
        answer: 0,
      },
      {
        q: "Which annotation schedules task?",
        options: ["@Scheduled", "@Task", "@Run", "@Timer"],
        answer: 0,
      },
      {
        q: "Which feature provides production monitoring?",
        options: ["Actuator", "Logger", "Monitor", "Tracker"],
        answer: 0,
      },
      {
        q: "Which endpoint shows health?",
        options: ["/health", "/actuator/health", "/status", "/check"],
        answer: 1,
      },
      {
        q: "Which feature provides external config?",
        options: ["Properties/YAML", "Code", "Database", "Servlet"],
        answer: 0,
      },
      {
        q: "Which architecture Spring Boot supports?",
        options: ["Microservices", "Monolithic", "Both", "None"],
        answer: 2,
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
    </div>
  );
}

export default SpringBoot;