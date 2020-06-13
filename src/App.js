import React, {useState, useRef} from "react"

const App = () => {
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    const inputRef = useRef(null)
    
    const handleChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const addTodo = (event) => {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
        inputRef.current.focus()
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
    
    return (
        <div>
            <form>
                <input
                ref = {inputRef}
                type="text" 
                name="todo"  
                value={newTodoValue} 
                onChange={handleChange}>
                </input>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}

export default App