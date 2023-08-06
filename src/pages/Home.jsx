import CustomerOV from "../components/CustomerOV"
import { Link } from "react-router-dom"
import TransactionsOv from "../components/TransactionsOv"
import ManageTodos from "../components/ManageTodos"

const Home = () => {
  return (
    <div className="p-4 bg-gray-700 text-white relative">
      <h1 className="font-bold text-4xl mb-4">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2"></div>
        <div className="p-4 rounded-md shadow-md bg-gray-900">
          <h2 className="font-bold text-2xl mb-2">Transactions</h2>
          <div>
            <TransactionsOv />
          </div>
          <div className="my-4  ">
            <Link
              to="/transactions"
              className="bg-gray-900 rounded-lg font-bold  px-4 py-2 my-4 text-primary">
              View all Transactions
            </Link>
          </div>
        </div>
        <div className="p-4 rounded-md shadow-md bg-gray-900">
          <h2 className="font-bold text-2xl mb-2">Todos</h2>
          <ManageTodos />
        </div>
        <div className=" rounded-md shadow-md bg-gray-900 md:col-span-2 p-10">
          <h2 className="font-bold text-2xl mb-2">Customers</h2>
          <div className="overflow-auto max-h-screen ">
            <CustomerOV />
          </div>
          <div className="my-4  ">
            <Link
              to="/customers"
              className="bg-gray-900 rounded-lg font-bold  px-4 py-2 my-4 text-primary">
              View all Customers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
