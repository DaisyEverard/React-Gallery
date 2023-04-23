import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./common/Header"
import Footer from "./common/Footer"
import Home from "./pages/Home";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/Contact";

const router = (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
)

function App() {
  return (
    <div id="App">
      <BrowserRouter basename="/">
        <Header/>
        {router}
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
