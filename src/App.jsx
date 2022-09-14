import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {
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

  return (
    <div className='todo'>
      <Form addTask={addTask}/>
      
      {
      todos.map((todo) => {
        return(
          <List
           todo={todo}
           key={todo.id}
           deleteTask={deleteTask}
           handleToggle={handleToggle} 
          />
           
        )
      })
    }
    </div>
  )
}

export default App;
