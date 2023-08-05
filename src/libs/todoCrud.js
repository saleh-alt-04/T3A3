const API_URL = "http://localhost:5000/todos"

export const getTodos = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}
export const createTodos = async (todos) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...todos,
    }),
  })
  const data = await response.json()
  return data
}
export const getTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  const data = await response.json()
  return data
}
export const updateTodos = async (id, todos) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todos),
  })
  const data = await response.json()
  return data
}
export const deleteTodos = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
  const data = await response.json()
  return data
}
