import { useEffect, useState } from "react"
import { getTransactions } from "../libs/transactionsCrud"
import { AiFillCalendar } from "react-icons/ai"
import { TbCategory } from "react-icons/tb"

const TransactionsOv = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const res = async () => {
      const data = await getTransactions()
      setTransactions(data)
    }

    res()
  }, [])

  const formatDate = (rawDate) => {
    const date = new Date(rawDate)
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div>
      {transactions &&
        transactions.map((transaction) => {
          return (
            <div
              className={`mb-2 flex p-4 flex-wrap bg-white drop-shadow-md border-l-8 ${
                transaction.type === "expense"
                  ? "border-red-500"
                  : "border-green-500"
              } text-black font-bold gap-2 justify-around  rounded-md`}
              key={transaction._id}>
              <p className="text-blue-500">${transaction.amount}</p>
              <p className="flex items-center gap-1">
                <AiFillCalendar className="" /> {formatDate(transaction.date)}
              </p>
              <p>{transaction.description}</p>
              <p className="flex items-center gap-1">
                <TbCategory /> {transaction.type}
              </p>
            </div>
          )
        })}
    </div>
  )
}

export default TransactionsOv
