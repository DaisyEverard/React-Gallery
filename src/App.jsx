import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Header from "./common/Header"
import Footer from "./common/Footer"
import Home from "./pages/Home";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/Contact";

function App() {
  // dark/light screen modes
  const [mode, setMode] = useState("dark")

  const toggleMode = () => {
    if (mode === "dark") {
        setMode("light")
    } else {
        setMode("dark")
    }
  }

  return (
    <div id="App">
      <BrowserRouter basename="/">
        <Header mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path="/" element={<Home mode={mode}/>}/>
          <Route path="/gallery" element={<Gallery mode={mode}/>}/>
          <Route path="/contact" element={<Contact mode={mode}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
