import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Inquiries from "./components/Inquiries";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";
import Project7 from "./components/Project7";
import Project8 from "./components/Project8";
import Project9 from "./components/Project9";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {<Route path="/" element={<Home />} />}
        {<Route path="/Projects" element={<Projects />} />}
        {<Route path="/Services" element={<Services />} />}
        {<Route path="/About" element={<About />} />}
        {<Route path="/Inquiries" element={<Inquiries />} />}
        {<Route path="/Project1" element={<Project1 />} />}
        {<Route path="/Project2" element={<Project2 />} />}
        {<Route path="/Project3" element={<Project3 />} />}
        {<Route path="/Project4" element={<Project4 />} />}
        {<Route path="/Project5" element={<Project5 />} />}
        {<Route path="/Project6" element={<Project6 />} />}
        {<Route path="/Project7" element={<Project7 />} />}
        {<Route path="/Project8" element={<Project8 />} />}
        {<Route path="/Project9" element={<Project9 />} />}
      </Routes>
    </div>
  );
}

export default App;
