
// Import React Router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./Home";

// Student Pages
import Interviews from "./student/Interviews";

import StudentLogin from "./student/StudentLogin";
import StudentRegister from "./student/StudentRegister";
import StudentDashboard from "./student/StudentDashboard";
import Beginner from "./student/Beginner";
import FrontendSyllabus from "./student/FrontendSyllabus";
import JavaSyllabus from "./student/JavaSyllabus";
import AiMlSyllabus from "./student/AiMlSyllabus";
import AppDevSyllabus from "./student/AppDevSyllabus";
import CloudSyllabus from "./student/CloudSyllabus";
import DataScienceSyllabus from "./student/DataScienceSyllabus";
import DevOpsSyllabus from "./student/DevOpsSyllabus";
import DSASyllabus from "./student/DSASyllabus";
import FullStackSyllabus from "./student/FullStackSyllabus";
import MernStackSyllabus from "./student/MernStackSyllabus";
import TestingSyllabus from "./student/TestingSyllabus";
import UiuxSyllabus from "./student/UiuxSyllabus";

// Intermediate Pages

import Intermediate from "./IntermediatePages/Intermediate";
import IMernStack from "./IntermediatePages/IMernStack";
import ITesting from "./IntermediatePages/ITesting";
import IDevOps from "./IntermediatePages/IDevOps";
import IDSA from "./IntermediatePages/IDSA";
import IUiUx from "./IntermediatePages/IUiUx";
import IDataScience from "./IntermediatePages/IDataScience";
import IAppDevelopment from "./IntermediatePages/IAppDevelopment";
import IAiMl from "./IntermediatePages/IAiMl";
import ICloud from "./IntermediatePages/ICloud";
import IFrontend from "./IntermediatePages/IFrontend";
import IJavaDeveloper from "./IntermediatePages/IJavaDeveloper";
import IFullStack from "./IntermediatePages/IFullStack";

// quiz sections
import FrontendQuiz from "./QuizSection/Frontend/FrontendQuiz";
import FhtmlLevels from "./QuizSection/Frontend/FhtmlLevels";
import FcssLevels from "./QuizSection/Frontend/FcssLevels";
import FscriptLevels from "./QuizSection/Frontend/FscriptLevels";

import JavaQuiz from "./QuizSection/Java/JavaQuiz";
import CoreJava from "./QuizSection/Java/CoreJava";
import OppsConcepts from "./QuizSection/Java/OppsConcepts";
import Collections from "./QuizSection/Java/Collections";
import Multithreading from "./QuizSection/Java/Multithreading";
import ExceptionHandling from "./QuizSection/Java/ExceptionHandling";
import JDBC from "./QuizSection/Java/JDBC";
import SpringBoot from "./QuizSection/Java/SpringBoot";

import FullstackQuiz from "./QuizSection/Fullstack/FullstackQuiz";
import React from "./QuizSection/Fullstack/React";
import BackendFund from "./QuizSection/Fullstack/BackendFund";

import DevopsQuiz from "./QuizSection/Devops/DevopsQuiz";
import Pipelines from "./QuizSection/Devops/Pipelines";
import CloudFundamentals from "./QuizSection/Devops/CloudFundamentals";
import Kubernetes from "./QuizSection/Devops/Kubernetes";
import NetworkingBasics from "./QuizSection/Devops/NetworkingBasics";
import Github from "./QuizSection/Devops/Github";
import Docker from "./QuizSection/Devops/Docker";
import OSbasics from "./QuizSection/Devops/OSbasics";

import TestingQuiz from "./QuizSection/Testing/TestingQuiz";
import Foundation from "./QuizSection/Testing/Foundation";
import Coretesting from "./QuizSection/Testing/Coretesting";
import Automation from "./QuizSection/Testing/Automation";
import Advanced from "./QuizSection/Testing/Advanced";

import UiuxQuiz from "./QuizSection/UiUx/UiuxQuiz";
import Fundamentals from "./QuizSection/UiUx/Fundamentals";
import UIdesign from "./QuizSection/UiUx/UIdesign";
import UXdesign from "./QuizSection/UiUx/UXdesign";
import Advanceduiux from "./QuizSection/UiUx/Advanceduiux";

import DataSciQuiz from "./QuizSection/DataScience/DataSciQuiz";
import DataFundamentals from "./QuizSection/DataScience/DataFundamentals";
import DataAnalytics from "./QuizSection/DataScience/DataAnalytics";
import DataHandling from "./QuizSection/DataScience/DataHandling";
import DataAdvanalytics from "./QuizSection/DataScience/DataAdvanalytics";

import AppdevQuiz from "./QuizSection/AppDev/AppdevQuiz";
import Apicloud from "./QuizSection/AppDev/Apicloud";
import Desktopapp from "./QuizSection/AppDev/Desktopapp";
import Nativejava from "./QuizSection/AppDev/Nativejava";
import NativeKotlin from "./QuizSection/AppDev/NativeKotlin";
import NativeSwift from "./QuizSection/AppDev/NativeSwift";
import Uiuxtesting from "./QuizSection/AppDev/Uiuxtesting";

import AimlQuiz from "./QuizSection/Aiml/AimlQuiz";
import PythonLibraries from "./QuizSection/Aiml/PythonLibraries";
import CoreML from "./QuizSection/Aiml/CoreML";
import DeepLearning from "./QuizSection/Aiml/DeepLearning";
import Mathematics from "./QuizSection/Aiml/Mathematics";

import MernStackQuiz from "./QuizSection/MernStack/MernStackQuiz";
import Backend from "./QuizSection/MernStack/Backend";
import Mongodb from "./QuizSection/MernStack/Mongodb";  
import ReactMern from "./QuizSection/MernStack/ReactMern";

import DSAQuiz from "./QuizSection/DSA/DSAQuiz";
import Heap from "./QuizSection/DSA/Heap";
import Hash from "./QuizSection/DSA/Hash";
import Tree from "./QuizSection/DSA/Tree";
import BST from "./QuizSection/DSA/BST";
import Dynamic from "./QuizSection/DSA/Dynamic";
import Linkedlist from "./QuizSection/DSA/Linkedlist";
import Recrusion from "./QuizSection/DSA/Recrusion";
import Arrays from "./QuizSection/DSA/Arrays";
import DSAbasics from "./QuizSection/DSA/DSAbasics";
import Graph from "./QuizSection/DSA/Graph";

import CloudQuiz from "./QuizSection/CloudCompting/CloudQuiz";
import Cloudfoundation from "./QuizSection/CloudCompting/Cloudfoundation";
import Corecloud from "./QuizSection/CloudCompting/Corecloud";


// Company Pages
import CompanyLogin from "./company/CompanyLogin";
import CompanyRegister from "./company/CompanyRegister";
import Dashboard from "./company/Dashboard";

// Admin Page
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";



// App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student Routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/interviews" element={<Interviews />} />

        <Route path="/beginner" element={<Beginner />} />
        <Route path="/frontend/roadmap" element={<FrontendSyllabus />} />
        <Route path="/java/roadmap" element={<JavaSyllabus />} />
        <Route path="/ai-ml/roadmap" element={<AiMlSyllabus />} />
        <Route path="/appdevelopment/roadmap" element={<AppDevSyllabus />} />
        <Route path="/cloud/roadmap" element={<CloudSyllabus />} />
        <Route path="/datascience/roadmap" element={<DataScienceSyllabus />} />
        <Route path="/devops/roadmap" element={<DevOpsSyllabus />} />
        <Route path="/dsa/roadmap" element={<DSASyllabus />} />
        <Route path="/fullstack/roadmap" element={<FullStackSyllabus />} />
        <Route path="/mernstack/roadmap" element={<MernStackSyllabus />} />
        <Route path="/testing/roadmap" element={<TestingSyllabus />} />
        <Route path="/uiux/roadmap" element={<UiuxSyllabus />} />

        {/*Intermediate Routes */}
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/imernstack" element={<IMernStack />} />
        <Route path="/itesting" element={<ITesting />} />
        <Route path="/idevops" element={<IDevOps />} />
        <Route path="/idsa" element={<IDSA />} />
        <Route path="/iuiux" element={<IUiUx />} />
        <Route path="/idatascience" element={<IDataScience />} />
        <Route path="/iappdevelopment" element={<IAppDevelopment />} />
        <Route path="/iaiml" element={<IAiMl />} />
        <Route path="/icloud" element={<ICloud />} />
        <Route path="/ifrontend" element={<IFrontend />} />
        <Route path="/ijavadeveloper" element={<IJavaDeveloper />} />
        <Route path="/ifullstack" element={<IFullStack />} />

        {/* Quiz Routes */}
        <Route path="/frontend/quiz" element={<FrontendQuiz />} />
        <Route path="/frontend/html" element={<FhtmlLevels />} />
        <Route path="/frontend/css" element={<FcssLevels />} />
        <Route path="/frontend/javascript" element={<FscriptLevels />} />

        <Route path="/java/quiz" element={<JavaQuiz />} />
        <Route path="/java/corejava" element={<CoreJava />} />
        <Route path="/java/oppsconcepts" element={<OppsConcepts />} />
        <Route path="/java/collections" element={<Collections />} />
        <Route path="/java/multithreading" element={<Multithreading />} />
        <Route path="/java/exceptionhandling" element={<ExceptionHandling />} />
        <Route path="/java/jdbc" element={<JDBC />} />
        <Route path="/java/springboot" element={<SpringBoot />} />

        <Route path="/fullstack/quiz" element={<FullstackQuiz />} />
        <Route path="/fullstack/backendfund" element={<BackendFund />} />
        <Route path="/fullstack/react" element={<React />} />

        <Route path="/devops/quiz" element={<DevopsQuiz />} />
        <Route path="/devops/pipeline" element={<Pipelines />} />
        <Route path="/devops/cloud" element={<CloudFundamentals />} />
        <Route path="/devops/kubernetes" element={<Kubernetes />} />
        <Route path="/devops/networkingbasics" element={<NetworkingBasics />} />
        <Route path="/devops/github" element={<Github />} />
        <Route path="/devops/docker" element={<Docker />} />
        <Route path="/devops/osbasics" element={<OSbasics />} />

        <Route path="/testing/quiz" element={<TestingQuiz />} />
        <Route path="/testing/foundation" element={<Foundation />} />
        <Route path="/testing/coretesting" element={<Coretesting />} />
        <Route path="/testing/automationtesting" element={<Automation />} />
        <Route path="/testing/advancedtesting" element={<Advanced />} />

        <Route path="/uiux/quiz" element={<UiuxQuiz />} />
        <Route path="/uiux/uiuxfundamentals" element={<Fundamentals />} />
        <Route path="/uiux/uidesign" element={<UIdesign />} />
        <Route path="/uiux/uxdesign" element={<UXdesign />} />
        <Route path="/uiux/advanceduiux" element={<Advanceduiux />} />

        <Route path="/datascience/quiz" element={<DataSciQuiz />} />
        <Route path="/datascience/datascifundamentals" element={<DataFundamentals />} />
        <Route path="/datascience/analytics&business" element={<DataAnalytics />} />
        <Route path="/datascience/datahandlingDb" element={<DataHandling />} />
        <Route path="/datascience/advanalytics" element={<DataAdvanalytics />} />

        <Route path="/appdev/quiz" element={<AppdevQuiz />} />
        <Route path="/appdev/api&cloudservices" element={<Apicloud />} />
        <Route path="/appdev/desktopappdev" element={<Desktopapp />} />
        <Route path="/appdev/nativejava" element={<Nativejava />} />
        <Route path="/appdev/nativekotlin" element={<NativeKotlin />} />
        <Route path="/appdev/nativeiosSwift" element={<NativeSwift />} />
        <Route path="/appdev/uiuxtesting" element={<Uiuxtesting />} />

        <Route path="/aiml/quiz" element={<AimlQuiz />} />
        <Route path="/aiml/pythonlibraries" element={<PythonLibraries />} />
        <Route path="/aiml/coreml" element={<CoreML />} />
        <Route path="/aiml/deeplearning" element={<DeepLearning />} />
        <Route path="/aiml/mathematics" element={<Mathematics />} />

        <Route path="/mernstack/quiz" element={<MernStackQuiz />} />
        <Route path="/mernstack/backend" element={<Backend />} />
        <Route path="/mernstack/mongodb" element={<Mongodb />} />
        <Route path="/mernstack/react" element={<ReactMern />} />

        <Route path="/dsa/quiz" element={<DSAQuiz />} />
        <Route path="/dsa/heap" element={<Heap />} />
         <Route path="/dsa/hash" element={<Hash />} />    
        <Route path="/dsa/tree" element={<Tree />} />
        <Route path="/dsa/BST" element={<BST />} />
        <Route path="/dsa/dynamic" element={<Dynamic />} />
        <Route path="/dsa/linkedlist" element={<Linkedlist />} />
        <Route path="/dsa/recrusion" element={<Recrusion />} />
        <Route path="/dsa/array" element={<Arrays />} />
        <Route path="/dsa/dsabasics" element={<DSAbasics />} />
        <Route path="/dsa/graph" element={<Graph />} />

        <Route path="/cloud/quiz" element={<CloudQuiz />} />
        <Route path="/cloud/cloudfoundation" element={<Cloudfoundation />} />
        <Route path="/cloud/corecloud" element={<Corecloud />} />
  




        {/* Company Routes */}
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/company/dashboard" element={<Dashboard />} />

        {/* Admin Route */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
