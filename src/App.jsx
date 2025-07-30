// import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUpPage from "./assets/pages/SignUpPage.jsx";
import Home from "./assets/pages/Home.jsx"

function App() {
  return(
    <>
      <div className="">
        <form className="fields-container">
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </form>
      </div>
    </>
  )
}

export default App
