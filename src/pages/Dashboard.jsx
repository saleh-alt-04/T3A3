import { useState, useEffect } from "react"
import { getCustomers } from "../libs/customerCrud"
import SideNav from "../components/SideNav"
import { Outlet } from "react-router-dom"
import { BiLogOutCircle } from "react-icons/bi"
import { useAuthStore } from "../store/AuthStore"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  useEffect(() => {
    const res = async () => {
      const data = await getCustomers()
      console.log(data)
    }

    res()
  }, [])

  return (
    <div className="grid grid-cols-10 bg-gray-200 ">
      <div className="col-span-1  md:flex flex-col  ">
        <SideNav />
      </div>
      <div className="col-span-9 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
