/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import ManageTodos from "../components/ManageTodos"

test("renders add button", () => {
  render(<ManageTodos />)
  const addButton = screen.getByText(/add/i)
  expect(addButton).toBeInTheDocument()
})
