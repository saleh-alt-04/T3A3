/* eslint-disable react/prop-types */
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
import { updateCustomer } from "../libs/customerCrud"

const UpdateCustomer = ({ customer }) => {
  const [name, setName] = useState(customer.name)
  const [email, setEmail] = useState(customer.email)
  const [address, setAddress] = useState(customer.address)
  const [phone, setPhone] = useState(customer.phone)
  const [description, setDescription] = useState(customer.description)
  const [error, setError] = useState("")

  useEffect(() => {
    setName(customer.name)
    setEmail(customer.email)
    setAddress(customer.address)
    setPhone(customer.phone)
    setDescription(customer.description)
  }, [customer])
  console.log(customer)
  const handleUpdateCustomer = async (e) => {
    e.preventDefault()

    try {
      const response = await updateCustomer(customer._id, {
        name,
        email,
        address,
        phone,
        description,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      if (response.status === 200) {
        setError("") // Clear any previous errors
      }
      if (response.status === 400) {
        throw new Error("Bad request, please check your input")
      }
      if (response.status >= 500) {
        throw new Error("Internal server error, please try again later")
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h1 className="font-black text-center text-4xl capitalize mb-4">
        Update Customer
      </h1>
      <form className="grid gap-2" onSubmit={handleUpdateCustomer}>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Name
          </label>
          <TextInput
            type="text"
            name="name"
            id="name"
            rightIcon={HiUserCircle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Email
          </label>
          <TextInput
            type="email"
            name="email"
            id="email"
            rightIcon={HiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Address
          </label>
          <TextInput
            type="text"
            name="address"
            id="address"
            rightIcon={HiLocationMarker}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Phone
          </label>
          <TextInput
            type="text"
            name="phone"
            id="phone"
            rightIcon={HiPhone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Description
          </label>
          <TextInput
            type="text"
            name="description"
            id="description"
            rightIcon={HiChatAlt2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full bg-primary ">
          Update Customer
        </Button>
      </form>
      <p className="text-red-500 text-xs mt-4">{error}</p>
    </div>
  )
}

export default UpdateCustomer
