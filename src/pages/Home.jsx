import { Dropdown } from "flowbite-react"
import React from "react"
import CustomerOV from "../components/CustomerOV"
import { Link } from "react-router-dom"
import TransactionsOv from "../components/TransactionsOv"

const Home = () => {
  return (
    <div className="p-4 bg-gray-700 text-white relative">
      <h1 className="font-bold text-4xl mb-4">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-md shadow-md bg-primary">
          <h2 className="font-bold text-2xl mb-2">Transactions</h2>
          <div>
            <TransactionsOv />
          </div>
        </div>
        <div className="p-4 rounded-md shadow-md bg-primary">
          <h2 className="font-bold text-2xl mb-2">Todos</h2>
          <p>Summary of your todos will appear here...</p>
        </div>
        <div className="p-4 rounded-md shadow-md bg-primary">
          <h2 className="font-bold text-2xl mb-2">Customers</h2>
          <div className="overflow-auto max-h-screen ">
            <CustomerOV />
          </div>
          <div className="my-4">
            <Link
              to="/transactions"
              className="bg-gray-900 rounded-lg font-bold  px-4 py-2 my-4 text-primary">
              View all Customers
            </Link>
          </div>
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
