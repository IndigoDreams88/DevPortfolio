import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./Components/Homepage";
import Background from "./Components/Background";
import Artwork from "./Components/Artwork";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";

function App() {
  return (
    <div className="App">
      <Router primary={false}>
        <Homepage path="/" />
        <Background path="/background" />
        <Artwork path="/artwork" />
        <Projects path="/projects" />
        <Tech path="/tech" />
      </Router>
    </div>
  );
}

export default App;
