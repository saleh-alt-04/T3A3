import { useState, useEffect } from "react"
import { getCustomers } from "../libs/customerCrud"
import { Table } from "flowbite-react"
const CustomerOV = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const res = async () => {
      const data = await getCustomers()
      console.log(data)
      setCustomers(data)
    }

    res()
  }, [])
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Address</Table.HeadCell>
        <Table.HeadCell>Phone</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
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
              </Table.Row>
            </>
          ))}
      </Table.Body>
    </Table>
  )
}

export default CustomerOV
