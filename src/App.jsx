// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./assets/pages/SignUpPage.jsx";
import LoginPage from "./assets/pages/Login.jsx";
import Home from "./assets/pages/Home.jsx"

function App() {
  return(
    <>
      <div className="">
        <form className="fields-container">
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </form>
      </div>
    </>
  )
}

export default App
