const API_URL = "http://localhost:5000/transactions"

export const createTransactions = async (transactions) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...transactions,
    }),
  })
  const data = await response.json()
  return data
}

export const getTransactions = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}

export const getTransaction = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  const data = await response.json()
  return data
}

export const updateTransactions = async (id, transactions) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transactions),
  })
  const data = await response.json()
  return data
}

export const deleteTransactions = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
  const data = await response.json()
  return data
}
