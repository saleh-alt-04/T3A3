const API_URL = "http://localhost:5000/customers"

export const getCustomers = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}

export const getCustomer = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  const data = await response.json()
  return data
}

export const createCustomer = async (customer) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  })
  const data = await response.json()
  return data
}

export const updateCustomer = async (id, customer) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  })
  const data = await response.json()
  return data
}

export const deleteCustomer = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
  const data = await response.json()
  return data
}
