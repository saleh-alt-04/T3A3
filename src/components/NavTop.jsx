/* eslint-disable no-unused-vars */
"use client"

import { Button, Navbar } from "flowbite-react"
import { useAuthStore } from "../store/AuthStore"
import { FaUsersCog } from "react-icons/fa"

export default function NavTop() {
  const [user, setUser, logout] = useAuthStore((state) => [
    state.user,
    state.setUser,
    state.logout,
  ])
  console.log(user)
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className=" px-4 py-1 drop-shadow-lg rounded text-white bg-primary   self-center whitespace-nowrap text-xl font-black">
          <FaUsersCog className="inline-block mr-2 text-3xl " />
          MSA MOWING
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {user ? (
          <div className="flex flex-col text-primary font-bold md:hidden gap-2">
            <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
            <Navbar.Link href="/customers">Customers</Navbar.Link>
            <Navbar.Link href="/Transactions">Transactions</Navbar.Link>
          </div>
        ) : (
          <Navbar.Link href="/login">
            <span className="px-4 py-2 lg:bg-primary lg:text-gray-200 rounded-lg">
              Login
            </span>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}
