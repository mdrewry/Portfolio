import React, { useState } from "react";
import "./App.css";
import TopMenu from "./Components/TopMenu.js";
import AboutMe from "./Components/AboutMe.js";
import Projects from "./Components/Projects.js";
function App() {
  const [dispPage, setDisp] = useState(1);
  const Page = () => {
    if (dispPage === 1)
      return (
        <div>
          <AboutMe />
        </div>
      );
    else
      return (
        <div>
          <Projects />
        </div>
      );
  };

  return (
    <div className="App">
      <TopMenu className="TopMenu" setDisp={setDisp} />
      <Page></Page>
    </div>
  );
}

export default App;
