/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Table, Modal, Tooltip } from "flowbite-react"
import CreateCustomer from "../components/CreateCustomer"
import { useState, useEffect } from "react"

import { deleteCustomer, getCustomers } from "../libs/customerCrud"
import { MdCreate, MdDelete } from "react-icons/md"
import UpdateCustomer from "../components/UpdateCustomer"

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)

  useEffect(() => {
    const res = async () => {
      const data = await getCustomers()
      console.log(data)
      setCustomers(data)
    }

    res()
  }, [])

  const handleDelete = async (id) => {
    const res = await deleteCustomer(id)
    console.log(res)
  }

  const handleEdit = (customer) => {
    setCurrentCustomer(customer)
    setOpenUpdateModal(true)
  }

  return (
    <div className="relative h-full">
      <div className="z-50 fixed bottom-2 right-2 w-fit p-4  flex items-center ">
        <Button
          className="border bg-gray-700 border-primary hover:scale-105 transform transition-all duration-200 ease-in-out text-white"
          onClick={() => setOpenCreateModal(true)}>
          <MdCreate className="inline-block mr-2 text-2xl " />
          New Customer
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {customers &&
              customers.map((customer) => (
                <>
                  <Table.Row
                    key={customer.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {customer.name}
                    </Table.Cell>
                    <Table.Cell>{customer.email}</Table.Cell>
                    <Table.Cell>{customer.address}</Table.Cell>
                    <Table.Cell>{customer.phone}</Table.Cell>
                    <Table.Cell>{customer.description}</Table.Cell>
                    <Table.Cell>
                      <span
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        onClick={() => handleEdit(customer)}>
                        <p>Edit</p>
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Tooltip content="Delete Customer">
                        <button onClick={() => handleDelete(customer._id)}>
                          <MdDelete className="text-red-500 text-xl" />
                        </button>
                      </Tooltip>
                    </Table.Cell>
                  </Table.Row>
                </>
              ))}
          </Table.Body>
        </Table>
      </div>

      <Modal show={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <CreateCustomer />
        </Modal.Body>
      </Modal>

      <Modal show={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          {currentCustomer && <UpdateCustomer customer={currentCustomer} />}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Customers
