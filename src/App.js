import React from "react";
import './App.css';
import Home from "./pages/Home";
import {Route,Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={{/*Projects*/}}/>
            <Route path="/contact" element={{/*Contact*/}}/>
        </Routes>
        </>

    </div>
  );
}

export default App;
