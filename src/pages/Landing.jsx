/* eslint-disable no-unused-vars */
import React from "react"
import Login from "../components/Login"
import CreateCustomer from "../components/CreateCustomer"
import DisplayCustomers from "../components/DisplayCustomers"

const Landing = () => {
  return (
    <div className="">
      <section
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80")`,
        }}
        className="flex justify-items-center items-center bg-gray-700/60 w-full h-screen  object-cover">
        <div className=" mx-auto rounded-xl bg-white/90 border-2 border-primary drop-shadow-xl w-fit ">
          <Login />
        </div>
      </section>
    </div>
  )
}

export default Landing
