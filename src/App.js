import Navbar from "./Component/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import "./App.css";
function App() {

  return (
    <div>
        <div className="App">
          <Navbar />
          <div className="floater" id="contactFloater">
            <a href="#contact">Contact Me</a>
          </div>
          <Home />
          <div id="about">
            <About />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
    </div>
  );
}

export default App;
