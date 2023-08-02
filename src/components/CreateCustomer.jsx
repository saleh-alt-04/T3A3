/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { TextInput, Button } from "flowbite-react"
import {
  HiUserCircle,
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiChatAlt2,
} from "react-icons/hi"

const CreateCustomer = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  const handleCreateCustomer = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, address, phone, description }),
      })

      if (!response.ok) {
        throw new Error("Failed to create customer")
      }

      // Reset form after successful creation
      setName("")
      setEmail("")
      setAddress("")
      setPhone("")
      setDescription("")
      setError("") // Clear any previous errors
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h1 className="font-black text-center text-4xl capitalize mb-4">
        Add Customer
      </h1>
      <form className="grid gap-2" onSubmit={handleCreateCustomer}>
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
          Add Customer
        </Button>
      </form>
      <p className="text-red-500 text-xs mt-4">{error}</p>
    </div>
  )
}

export default CreateCustomer
