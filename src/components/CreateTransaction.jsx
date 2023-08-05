/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { TextInput, Button, Select } from "flowbite-react"
import {
  HiUserCircle,
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiChatAlt2,
} from "react-icons/hi"
import { createTransactions } from "../libs/transactionsCrud"

const CreateTransaction = () => {
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [error, setError] = useState("")

  const handleCreateTransaction = async (e) => {
    e.preventDefault()

    try {
      const response = await createTransactions({
        amount,
        date,
        description,
        type,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      if (response.status === 201) {
        // Reset form after successful creation
        setAmount("")
        setDate("")
        setDescription("")
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
        Add Transaction
      </h1>
      <form className="grid gap-2" onSubmit={handleCreateTransaction}>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Amount
          </label>
          <TextInput
            type="number"
            name="amount"
            id="amount"
            rightIcon={HiMail}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Date
          </label>
          <TextInput
            type="date"
            name="date"
            id="date"
            rightIcon={HiLocationMarker}
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Type
          </label>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
        </div>
        <Button type="submit" className="w-full bg-primary ">
          Add Transaction
        </Button>
      </form>
      <p className="text-red-500 text-xs mt-4">{error}</p>
    </div>
  )
}

export default CreateTransaction
