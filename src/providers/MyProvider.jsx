import { useState } from "react"
import MyContext from "./MyContext"


const MyProvider = ({children}) => {
    let[todos, setTodos] = useState([])

    const addTask = (value) => {
      if(value) {
        let newTask = {
          id: Math.random(),
          task: value,
          complete: false
        }
  
        setTodos([...todos, newTask])
      } 
    }
  
    const deleteTask = (id) => {
      setTodos([...todos.filter(todo => todo.id !== id)])
    }
  
    const handleToggle = (id) => {
      setTodos([...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
    }

    return(
        <MyContext.Provider value={{todos, setTodos, deleteTask, handleToggle, addTask}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;