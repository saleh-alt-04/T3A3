/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom" // Needed for <Link /> components
import Home from "../Home"
import CustomerOV from "../../components/CustomerOV"
import TransactionsOv from "../../components/TransactionsOv"
import ManageTodos from "../../components/ManageTodos"

// Mock child components
jest.mock("../components/CustomerOV", () => () => <div>CustomerOV</div>)
jest.mock("../components/TransactionsOv", () => () => <div>TransactionsOv</div>)
jest.mock("../components/ManageTodos", () => () => <div>ManageTodos</div>)

describe("Home component", () => {
  it("renders and displays the right elements", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    // Check for header
    const headerElement = screen.getByText("Welcome to your Dashboard")
    expect(headerElement).toBeInTheDocument()

    // Check if child components are rendered
    expect(screen.getByText("CustomerOV")).toBeInTheDocument()
    expect(screen.getByText("TransactionsOv")).toBeInTheDocument()
    expect(screen.getByText("ManageTodos")).toBeInTheDocument()

    // Check for links
    const transactionLinkElement = screen.getByText("View all Transactions")
    expect(transactionLinkElement).toBeInTheDocument()
    const customerLinkElement = screen.getByText("View all Customers")
    expect(customerLinkElement).toBeInTheDocument()
  })
})
