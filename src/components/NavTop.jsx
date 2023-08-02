"use client"

import { Button, Navbar } from "flowbite-react"

export default function NavTop() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="bg-primary px-4 py-1 drop-shadow-lg rounded-2xl  text-white self-center whitespace-nowrap text-xl font-black">
          Customer Manager Portal
        </span>
      </Navbar.Brand>
      <div className="flex  md:order-2 ">
        <Button className="bg-primary">Sign-In</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="/login">Login</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
