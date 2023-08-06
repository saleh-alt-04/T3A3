/* eslint-disable no-undef */
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import Transactions from "../Transactions"
import { getTransactions, deleteTransactions } from "../libs/transactionsCrud"

// Mocking API calls
jest.mock("../libs/transactionsCrud", () => ({
  getTransactions: jest.fn(),
  deleteTransactions: jest.fn(),
}))

describe("Transactions component", () => {
  beforeEach(() => {
    getTransactions.mockResolvedValue([
      {
        _id: "1234",
        description: "Test transaction",
        amount: "100",
        date: "2023-07-31",
        type: "income",
      },
    ])

    deleteTransactions.mockResolvedValue(true)
  })

  it("renders transaction information", async () => {
    render(<Transactions />)

    await waitFor(() => {
      expect(getTransactions).toHaveBeenCalled()
    })

    expect(screen.getByText("Test transaction")).toBeInTheDocument()
    expect(screen.getByText("100")).toBeInTheDocument()
    expect(screen.getByText(/2023-07-31/i)).toBeInTheDocument()
    expect(screen.getByText("income")).toBeInTheDocument()
  })

  it("deletes a transaction when delete button is clicked", async () => {
    render(<Transactions />)

    await waitFor(() => {
      expect(getTransactions).toHaveBeenCalled()
    })

    fireEvent.click(screen.getByTestId("delete-transaction-button"))

    await waitFor(() => {
      expect(deleteTransactions).toHaveBeenCalledWith("1234")
    })

    expect(screen.queryByText("Test transaction")).not.toBeInTheDocument()
  })
})
