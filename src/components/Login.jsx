/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { Button, TextInput } from "flowbite-react"
import { HiMail, HiKey } from "react-icons/hi"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/AuthStore"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const Navigate = useNavigate()
  const [user, setUser] = useAuthStore((state) => [state.user, state.setUser])
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      // Successful login
      if (response.status === 200) {
        // You could update app state here with user data and redirect
        console.log("Login successful!")
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("token", password)
        setUser({ email, token: password })

        Navigate("/dashboard")
        return
      }

      // Invalid credentials
      if (response.status === 401) {
        setError("Invalid email or password")
        return
      }

      // Bad request
      if (response.status === 400) {
        setError("Bad request, please check your input")
        return
      }

      // Internal server error
      if (response.status >= 500) {
        setError("Internal server error, please try again later")
        return
      }

      throw new Error("Unknown error occurred")
    } catch (err) {
      console.error(err.message)
      setError(err.message)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4  ">
      <h1 className="font-black text-center text-4xl capitalize mb-4">
        Sign in
      </h1>
      <p className="font-semibold">login email:example@example.com </p>
      <p className="font-semibold">password:examplePassowrd</p>
      <p className="text-center text-gray-500 mb-8">
        Sign in to your account to continue
      </p>
      <form className="grid gap-2" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Email
          </label>
          <TextInput
            type="email"
            name="email"
            id="email"
            rightIcon={HiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-2">
            Password
          </label>
          <TextInput
            type="password"
            name="password"
            id="password"
            value={password}
            rightIcon={HiKey}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <h3 className="text-gray-500 text-xs">
            forgot password?
            <span className="font-bold hover:text-cyan-600 cursor-pointer">
              Click here to reset you password
            </span>
          </h3>
        </div>
        <Button type="submit" className="w-full bg-primary ">
          Login
        </Button>
      </form>

      <p className="text-red-500 text-xs mt-4">{error}</p>

      {/* <p className="text-center text-gray-500 mb-8">
        You don &apos t have an account?{" "}
        <Link to="/authentication/sign-up/" className="font-bold">
          Sign up here
        </Link>
      </p> */}
    </div>
  )
}

export default Login
