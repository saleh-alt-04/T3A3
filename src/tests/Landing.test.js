/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Landing from "../Landing"
import Login from "../components/Login"

jest.mock("../components/Login", () => () => (
  <div data-testid="login-component">Login</div>
))

describe("Landing component", () => {
  it("renders Login component", () => {
    render(<Landing />)
    const loginElement = screen.getByTestId("login-component")
    expect(loginElement).toBeInTheDocument()
  })
})
