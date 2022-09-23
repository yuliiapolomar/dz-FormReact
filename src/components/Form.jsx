import React from "react";
import { useContext } from "react";
import { useState } from "react";
import MyContext from "../providers/MyContext";

const Form = () => {

    const {addTask} = useContext(MyContext)

    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onClick = () => {
        addTask(value)
        setValue('')
    }
    
    return (
        <form>
            <input 
                type="text" 
                placeholder="Enter a task..."
                value={value}
                onChange={onChange} 
                className='form-input'              
            />
            <button className="form-button" type="button" onClick={onClick} disabled={!value}>
                Save task
            </button>
        </form>
    )
}

export default Form;