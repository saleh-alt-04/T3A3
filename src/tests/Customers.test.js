/* eslint-disable no-undef */
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import Customers from "../Customers"
import { getCustomers, deleteCustomer } from "../libs/customerCrud"

// Mocking API calls
jest.mock("../libs/customerCrud", () => ({
  getCustomers: jest.fn(),
  deleteCustomer: jest.fn(),
}))

describe("Customers component", () => {
  beforeEach(() => {
    getCustomers.mockResolvedValue([
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        address: "123 Main St",
        phone: "555-555-5555",
        description: "Test customer",
      },
    ])

    deleteCustomer.mockResolvedValue(true)
  })

  it("renders customer information", async () => {
    render(<Customers />)

    await waitFor(() => {
      expect(getCustomers).toHaveBeenCalled()
    })

    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("johndoe@example.com")).toBeInTheDocument()
    expect(screen.getByText("123 Main St")).toBeInTheDocument()
    expect(screen.getByText("555-555-5555")).toBeInTheDocument()
    expect(screen.getByText("Test customer")).toBeInTheDocument()
  })

  it("deletes a customer when delete button is clicked", async () => {
    render(<Customers />)

    await waitFor(() => {
      expect(getCustomers).toHaveBeenCalled()
    })

    fireEvent.click(screen.getByTestId("delete-customer-button"))

    await waitFor(() => {
      expect(deleteCustomer).toHaveBeenCalledWith(1)
    })

    expect(screen.queryByText("John Doe")).not.toBeInTheDocument()
  })
})
