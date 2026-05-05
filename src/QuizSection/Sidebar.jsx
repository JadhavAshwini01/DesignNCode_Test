import { useNavigate, useLocation, data } from "react-router-dom";

/* You can keep this here OR move to a separate domains.js later */
const domains = {
    /*demopython: [
   { label: "Basics", path: "/python/basics" } 
 ] */
    frontend: [
        { label: "HTML Quiz", path: "/frontend/html" },
        { label: "CSS Quiz", path: "/frontend/css" },
        { label: "JavaScript Quiz", path: "/frontend/javascript" },
    ],
    java: [
        //{ label: "Java Quiz", path: "/java/quiz" },
        { label: "Core Java", path: "/java/corejava" },
        { label: "OOPs Concepts", path: "/java/oppsconcepts" },
        { label: "Exception Handling", path: "/java/exceptionhandling" },
        { label: "Collections", path: "/java/collections" },
        { label: "Multithreading", path: "/java/multithreading" },
        { label: "JDBC", path: "/java/jdbc" },
        { label: "Spring Boot", path: "/java/springboot" },
    ],
    devops: [
        //{ label: "DevOps Quiz", path: "/devops/quiz" },
        { label: "OS Basics", path: "/devops/osbasics" },
        { label: "Networking Basics", path: "/devops/networkingbasics" },
        { label: "Github", path: "/devops/github" },
        { label: "Docker", path: "/devops/docker" },
        { label: "Pipelines", path: "/devops/pipeline" },
        { label: "Cloud Fundamentals", path: "/devops/cloud" },
        { label: "Kubernetes", path: "/devops/kubernetes" },
    ],
    testing: [
        //{ label: "Testing Quiz", path: "/testing/quiz" },
        { label: "Foundation", path: "/testing/foundation" },
        { label: "Core Testing", path: "/testing/coretesting" },
        { label: "Automation Testing", path: "/testing/automationtesting" },
        { label: "Advanced Testing", path: "/testing/advancedtesting" },
    ], 
    uiux:[
        //{ label: "UI/UX Quiz", path: "/uiux/quiz" },
        { label: "Fundamentals", path: "/uiux/fundamentals" },
        { label: " UI design", path: "/uiux/UIdesign" },
        { label: "UX design", path: "/uiux/UXdesign" },
        { label: "Advanced", path: "/uiux/Advanceduiux" },
    ], 
    datascience :[
        //{ label: "Data Science Quiz", path: "/datascience/quiz" },
        { label: "Fundamentals", path: "/datascience/datascifundamentals" },
        { label: "Analytics & Business", path: "/datascience/analytics&business" },
        { label: "Data Handling & DB", path: "/datascience/datahandlingDb" },
        { label: "Advanced Analytics", path: "/datascience/advanalytics" },   
    ],
    appdev :[
        //{ label: "App Development Quiz", path: "/appdev/quiz" },
        { label: "API & Cloud Services", path: "/appdev/api&cloudservices" },
        { label: "Desktop App Development", path: "/appdev/desktopappdev" },
        { label: "Native Java", path: "/appdev/nativejava" },
        { label: "Native Kotlin", path: "/appdev/nativekotlin" },
        { label: "Native iOS Swift", path: "/appdev/nativeiosSwift" },
        { label: "UI/UX Testing", path: "/appdev/uiuxtesting" },
    ],
    fullstack :[
        //{ label: "Fullstack Quiz", path: "/fullstack/quiz" },
        { label: "Frontend", path: "/frontend/quiz" },
        { label: "React", path: "/fullstack/react" },
        { label: "Backend Fundamentals", path: "/fullstack/backendfund" },
        { label: "Backend Development", path: "/java/quiz" },

    ],
    mernstack :[
        //{ label: "MERN Stack Quiz", path: "/mernstack/quiz" },
        { label: "MongoDB", path: "/mernstack/mongodb" },   
        { label: "backend", path: "/mernstack/expressjs" },
        { label: "Reactjs", path: "/mernstack/reactjs" },
    ],
    dsa :[
        //{ label: "DSA Quiz", path: "/dsa/quiz" },
        { label: "DSA Basics", path: "/dsa/dsabasics" },
        { label: "Array", path: "/dsa/array" },
        { label: "Recursion", path: "/dsa/recrusion" },
        { label: "Linked List", path: "/dsa/linkedlist" },
        { label: "Heap", path: "/dsa/heap" }, 
        { label: "Tree", path: "/dsa/tree" },
        { label: "Graph", path: "/dsa/graph" },
        { label: "Dynamic Programming", path: "/dsa/dynamic" },
        { label: "BST", path: "/dsa/BST" },
    ], 
    cloud :[
        //{ label: "Cloud Computing Quiz", path: "/cloud/quiz" },
        { label: "Foundation", path: "/cloud/cloudfoundation" },
        { label: "Core Cloud Computing", path: "/cloud/corecloud" },
        { label: "DevOps", path: "/devops/quiz" },  
    ],
    

};

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    // 👉 detect domain from URL: /frontend/html → "frontend"
    const currentDomain = location.pathname.split("/")[1];
    const topics = domains[currentDomain] || [];

    return (
        <div className="sidebar">
            <h3 className="sidebar-title">
                {currentDomain ? currentDomain.toUpperCase() : "QUIZ"}
            </h3>

            {topics.length === 0 ? (
                <p className="no-data">No topics found</p>
            ) : (
                topics.map((topic, i) => (
                    <div
                        key={i}
                        className={`sidebar-item ${location.pathname === topic.path ? "active" : ""
                            }`}
                        onClick={() => navigate(topic.path)}
                    >
                        {topic.label}
                    </div>
                ))
            )}
        </div>
    );
}

export default Sidebar;