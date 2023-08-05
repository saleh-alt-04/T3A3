import { Dropdown } from "flowbite-react"
import React from "react"

const Home = () => {
  return (
    <div className="p-4 bg-gray-700 text-white relative">
      <h1 className="font-bold text-4xl mb-4">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-md shadow-md bg-primary">
          <h2 className="font-bold text-2xl mb-2">Transactions</h2>
          <p>Summary of your latest transactions will appear here...</p>
        </div>
        <div className="p-4 rounded-md shadow-md bg-primary">
          <h2 className="font-bold text-2xl mb-2">Todos</h2>
          <p>Summary of your todos will appear here...</p>
        </div>
        <div className="p-4 rounded-md shadow-md bg-primary">
          <h2 className="font-bold text-2xl mb-2">Customers</h2>
          <p>Summary of your customers data will appear here...</p>
        </div>
        <div className="p-4 rounded-md shadow-md bg-primary">
          <h2 className="font-bold text-2xl mb-2">Reports</h2>
          <p>Your generated reports will appear here...</p>
        </div>
      </div>

      {/* <div className="z-50 fixed  md:bottom-10 right-3 w-fit bg-black">
        <Dropdown
          label="Quick Access"
          placement="left"
          className="bg-primary rounded-lg">
          <Dropdown.Item>Item 1</Dropdown.Item>
        </Dropdown>
      </div> */}
    </div>
  )
}

export default Home
