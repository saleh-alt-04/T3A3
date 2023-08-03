import { useState, useEffect } from "react"
import { getCustomers } from "../libs/customerCrud"

const Dashboard = () => {
  useEffect(() => {
    const res = async () => {
      const data = await getCustomers()
      console.log(data)
    }

    res()
  }, [])

  return <div>+ Dashboard</div>
}

export default Dashboard
