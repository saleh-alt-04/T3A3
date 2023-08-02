/* eslint-disable no-unused-vars */
import { useState } from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
