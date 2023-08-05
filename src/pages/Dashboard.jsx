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
  const navigate = useNavigate()
  const [user, setUser, logout] = useAuthStore((state) => [
    state.user,
    state.setUser,
    state.logout,
  ])
  const signOut = () => {
    setUser(null)
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="grid grid-cols-10 bg-gray-200 ">
      <div className="col-span-1  md:flex flex-col  ">
        <SideNav />
        <div
          onClick={signOut}
          className="cursor-pointer hover:scale-105 mb-[30%] p-4 flex gap-2 bg-black text-primary font-bold items-center mt-auto">
          <BiLogOutCircle className="w-8 h-8 bg-white p-2 rounded-lg" />
          <span>logout</span>
        </div>
      </div>
      <div className="col-span-9 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
