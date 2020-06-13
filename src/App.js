import React, {useState} from "react"

const App = () => {
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    
    const handleChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const addTodo = (event) => {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
    
    return (
        <div>
            <form>
                <input
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