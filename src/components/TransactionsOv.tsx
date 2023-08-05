import React, { useEffect } from "react"
import { getTransactions } from "../libs/transactionsCrud"
import { AiFillCalendar } from "react-icons/ai"
import { TbCategory } from "react-icons/tb"

const TransactionsOv = () => {
  const [transactions, setTransactions] = React.useState([])

  useEffect(() => {
    const res = async () => {
      const data = await getTransactions()
      setTransactions(data)
    }

    res()
  }, [])
  return (
    <div>
      {transactions &&
        transactions.map((transaction: any) => {
          return (
            <div
              className={`mb-2 flex p-4 bg-white drop-shadow-md border-l-8 ${
                transaction.type === "expense"
                  ? "border-red-500"
                  : "border-green-500"
              } text-primary font-bold gap-2 justify-around  rounded-md`}
              key={transaction._id}>
              <p>${transaction.amount}</p>
              <p className="flex items-center gap-1">
                <AiFillCalendar className="" /> {transaction.date}
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
