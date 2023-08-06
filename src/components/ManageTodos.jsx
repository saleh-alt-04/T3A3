/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../libs/todoCrud"
import { Button, TextInput } from "flowbite-react"
import { FcTodoList } from "react-icons/fc"
import { MdDone, MdRemoveDone } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"

const ManageTodos = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({})

  useEffect(() => {
    const res = async () => {
      const data = await getTodos()
      setTodos(data)
    }
    res()
  }, [])

  const formatDate = (rawDate) => {
    const date = new Date(rawDate)
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const handleTodoSubmit = async (e) => {
    e.preventDefault()
    await createTodos({
      task: todo,
      isComplete: false,
    })
      .then((res) => {
        console.log(res)
        setTodos([...todos, res])
      })
      .catch((err) => console.log(err))
  }

  const handleTodoState = async (id, state) => {
    await updateTodos(id, { isComplete: state })
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isComplete: state } : todo
      )
    )
  }

  const handleTodoDelete = async (id) => {
    await deleteTodos(id)
    setTodos(todos.filter((todo) => todo._id !== id))
  }

  return (
    <div className=" rounded-xl p-4 max-w-3xl">
      {todos &&
        todos.map((todo) => (
          <div
            key={todo._id}
            className={`bg-gray-900 my-4 w-full text-white flex-wrap font-bold  md:justify-evenly gap-8 border-2 border-l-8 drop-shadow-lg p-6 rounded flex items-center  ${
              todo.isComplete ? "border-blue-400" : "border-yellow-400"
            }`}>
            <p>{todo.task}</p>
            <p>{todo.isComplete}</p>
            <p>{formatDate(todo.dateAdded)}</p>
            <div className="flex ">
              <Button
                onClick={() => handleTodoState(todo._id, !todo.isComplete)}
                className={`${
                  todo.isComplete ? "bg-green-500" : "bg-yellow-500"
                }`}>
                {todo.isComplete ? <MdRemoveDone /> : <MdDone />}
              </Button>

              <Button onClick={() => handleTodoDelete(todo._id)}>
                <RiDeleteBin6Line className="text-2xl text-red-500 font-black" />
              </Button>
            </div>
          </div>
        ))}

      <div className="">
        <form className="flex items-center gap-4" onSubmit={handleTodoSubmit}>
          <TextInput
            onChange={(e) => setTodo(e.target.value)}
            rightIcon={FcTodoList}
            type="text"
            name="task"
            id="task"
            required
            className="w-full"
          />

          <Button type="submit" className="bg-green-500 ">
            add
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ManageTodos
