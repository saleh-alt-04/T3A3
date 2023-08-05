/* eslint-disable no-unused-vars */
import { useState } from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import PrivateRoutes from "./Layout/PrivateRoutes"
import Customers from "./pages/Customers"
import Transactions from "./pages/Transactions"
import Todos from "./pages/Todos"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Landing />} />
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="/" element={<Dashboard />}>
                <Route path="dashboard" element={<Home />} />
                <Route path="customers" element={<Customers />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="todos" element={<Todos />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
