import React from "react";
import { useContext } from "react";
import MyContext from "../providers/MyContext";


const List = () => {

    const {todos, deleteTask, handleToggle} = useContext(MyContext)

    return (
        <ul className="list">
            {todos.map((todo) => {
                return(
                    <li key={todo.id} className='list-item'>
                        <div>
                            <input className="list-checkbox" type="checkbox" onClick={() => handleToggle(todo.id)} />
                            <span className={todo.complete ? 'done' : ''} >{todo.task}</span>
                        </div>
                        <button className="list-button" onClick={() => deleteTask(todo.id) } disabled={!todo.complete} >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPgtqrh4PdWU9WxUtsmEvvoV7NhhJLvNTvA&usqp=CAU" width={15} alt="delete"/>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;