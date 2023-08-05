import { Navigate, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

function PrivateRoutes() {
  useEffect(() => {}, [])

  const loggedIn = sessionStorage.getItem("token")

  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />
}

export default PrivateRoutes
