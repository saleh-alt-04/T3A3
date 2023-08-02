/* eslint-disable no-unused-vars */
import { useState } from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Landing from "./pages/Landing"

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
