import { useState, useEffect } from "react"
import { getCustomers } from "../libs/customerCrud"
import SideNav from "../components/SideNav"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  useEffect(() => {
    const res = async () => {
      const data = await getCustomers()
      console.log(data)
    }

    res()
  }, [])

  return (
    <div className="grid grid-cols-10">
      <div className="col-span-1  bg-gray-200 md:flex flex-col justify-between h-full">
        <SideNav />
      </div>
      <div className="col-span-9 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
