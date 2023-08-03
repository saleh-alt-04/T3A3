/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Table, Modal } from "flowbite-react"
import CreateCustomer from "../components/CreateCustomer"
import { useState, useEffect } from "react"

import { getCustomers } from "../libs/customerCrud"
import { MdCreate, MdDelete } from "react-icons/md"

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [openModal, setOpenModal] = useState()
  const props = { openModal, setOpenModal }
  useEffect(() => {
    const res = async () => {
      const data = await getCustomers()
      console.log(data)
      setCustomers(data)
    }

    res()
  }, [])

  return (
    <div className="relative h-full">
      <div className="z-50 fixed bottom-2 right-2 w-fit p-4  flex items-center ">
        <Button
          className="border bg-gray-700 border-primary hover:scale-105 transform transition-all duration-200 ease-in-out text-white"
          onClick={() => props.setOpenModal("default")}>
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
                        href="/tables">
                        <p>Edit</p>
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        href="/tables">
                        <p>Delete</p>
                      </span>
                    </Table.Cell>
                  </Table.Row>
                </>
              ))}
          </Table.Body>
        </Table>
      </div>

      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Create Customer</Modal.Header>
        <Modal.Body>
          <CreateCustomer />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Customers
