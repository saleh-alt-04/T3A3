/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { TextInput, Button } from "flowbite-react"
import {
  HiUserCircle,
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiChatAlt2,
} from "react-icons/hi"

const DisplayCustomers = () => {
  const [customers, setCustomers] = useState([]) // Array of customers
  const [currentCustomer, setCurrentCustomer] = useState(null) // Customer to be updated or deleted
  const [error, setError] = useState("") // Error message

  // Assume this function fetches your customers from the API
  const fetchCustomers = async () => {
    // Fetch customers from API and update the customers state.
  }

  useEffect(() => {
    fetchCustomers()
  }, [])

  const handleSelectCustomer = (customer) => {
    setCurrentCustomer(customer)
  }

  const handleUpdateCustomer = async (e) => {
    e.preventDefault()
    // Update the customer using an API call
    // Then, update the customers state with the updated customer
  }

  const handleDeleteCustomer = async (e) => {
    e.preventDefault()
    // Delete the customer using an API call
    // Then, remove the customer from the customers state
  }

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h1 className="font-black text-center text-4xl capitalize mb-4">
        Customers
      </h1>

      {/* List of customers */}
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            <Button onClick={() => handleSelectCustomer(customer)}>
              {customer.name}
            </Button>
          </li>
        ))}
      </ul>

      {/* Customer form for update */}
      {currentCustomer && (
        <form className="grid gap-2" onSubmit={handleUpdateCustomer}>
          {/* Customer details inputs... */}
          <Button type="submit" className="w-full bg-primary ">
            Update Customer
          </Button>
        </form>
      )}

      {/* Delete customer button */}
      {currentCustomer && (
        <Button className="w-full bg-red-500 " onClick={handleDeleteCustomer}>
          Delete Customer
        </Button>
      )}

      <p className="text-red-500 text-xs mt-4">{error}</p>
    </div>
  )
}

export default DisplayCustomers
