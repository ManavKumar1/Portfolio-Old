import "./index.css";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Project from "./routes/Project.js";
import Contact from "./routes/Contact.js";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      
    </>
  );
}

export default App;
