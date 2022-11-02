import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import About from "./About/About";
import Work from "./Work/Work";
import Skills from "./Skill/Skill";
import Contact from "./Contact/Contact";



function App() {
    return (

        <div>
            <Sidebar />
            <Home />
            <About />
            <Work />
            <Skills />
            <Contact />
        </div>

    )
}

export default App;