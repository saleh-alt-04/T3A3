/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Button, Table, Modal } from "flowbite-react"
import { MdCreate, MdDelete } from "react-icons/md"
import { deleteTransactions, getTransactions } from "../libs/transactionsCrud"
import CreateTransaction from "../components/CreateTransaction"
import { set } from "mongoose"

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [currentTransaction, setCurrentTransaction] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [transactionType, setTransactionType] = useState("income")
  const [transactionAmount, setTransactionAmount] = useState("")
  const [transactionDate, setTransactionDate] = useState("")
  const [currentTransactionId, setCurrentTransactionId] = useState("")
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  useEffect(() => {
    const res = async () => {
      const data = await getTransactions()
      setTransactions(data)
    }

    res()
  }, [transactions])

  const handleDelete = async (id) => {
    const res = await deleteTransactions(id)
    setTransactions(
      transactions.filter((transaction) => transaction._id !== id)
    )
    console.log(res)
  }
  const handleEdit = (customer) => {
    setCurrentTransaction(customer)
    setOpenUpdateModal(true)
  }

  return (
    <div>
      <div className="relative h-full">
        <div className="z-50 fixed bottom-2 right-2 w-fit p-4 flex items-center">
          <Button
            className="border bg-gray-700 border-primary hover:scale-105 transform transition-all duration-200 ease-in-out text-white"
            onClick={() => setShowModal(true)}>
            <MdCreate className="inline-block mr-2 text-2xl " />
            New Transaction
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Type</Table.HeadCell>

              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {transactions.map((transaction) => (
                <Table.Row key={transaction._id}>
                  <Table.Cell>{transaction.description}</Table.Cell>
                  <Table.Cell>{transaction.amount}</Table.Cell>
                  <Table.Cell>
                    {new Date(transaction.date).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={`font-bold px-3 py-1 text-white rounded  ${
                        transaction.type === "expense"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}>
                      {transaction.type}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <button onClick={() => deleteTransactions(transaction._id)}>
                      <MdDelete className="text-red-500 text-xl" />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>Create Transaction</Modal.Header>
          <Modal.Body>
            <CreateTransaction />
          </Modal.Body>
        </Modal>

        <Modal
          show={currentTransaction !== null}
          onClose={() => setCurrentTransaction(null)}>
          <Modal.Header>Update Transaction</Modal.Header>
          <Modal.Body>
            <CreateTransaction />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}

export default Transactions
