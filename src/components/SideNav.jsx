/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import { BiSolidUserAccount } from "react-icons/bi"
import { GrTransaction } from "react-icons/gr"
import { FcTodoList } from "react-icons/fc"
import { useAuthStore } from "../store/AuthStore"
import { BiLogOutCircle } from "react-icons/bi"
const SideNav = () => {
  const [user, setUser, logout] = useAuthStore((state) => [
    state.user,
    state.setUser,
    state.logout,
  ])
  const navigate = useNavigate()

  const signOut = () => {
    setUser(null)
    sessionStorage.removeItem("token")
    navigate("/login")
  }

  // styles for all links
  const linkStyle =
    "font-semibold flex gap-2 items-center text-black p-2 md:py-3 hover:text-slate-500 cursor-pointer md:p-3 text-sm  rounded-md"

  // styles for active and non-active links
  return (
    <nav className=" flex flex-col  md:p-1 md:py-2 md:pr-4 md:pl-1 gap-2 my-2  ">
      <Link to="/dashboard" className={linkStyle}>
        <svg
          className=" w-8 rounded-lg h-8 bg-[#FD9E9E] p-2 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
        <span className="hidden md:block">Overview</span>
      </Link>
      <Link to="/customers" className={linkStyle}>
        <BiSolidUserAccount className="w-8 h-8 bg-[#FD9E9E] p-2 rounded-lg" />
        <span className="hidden md:block">Customers</span>
      </Link>

      <Link to="/transactions" className={linkStyle}>
        <GrTransaction className="w-8 h-8 bg-[#FD9E9E] p-2 rounded-lg" />

        <span className="hidden md:block">Transactions</span>
      </Link>
      <Link to="/todos" className={linkStyle}>
        <FcTodoList className="w-8 h-8 bg-[#FD9E9E] p-2 rounded-lg" />

        <span className="hidden md:block">Todos</span>
      </Link>
      <div onClick={signOut} className={linkStyle + "cursor-pointer"}>
        <BiLogOutCircle className=" w-8 h-8  p-2 rounded-lg" />

        <span className=" hidden md:block hover:text-primary">SIGN OUT</span>
      </div>
    </nav>
  )
}

export default SideNav
