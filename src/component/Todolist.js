import React, { useState } from 'react';
import Todo from './List';


export default function Todolist() {
    const [Todo, setTodo] = useState([]);
    const [input, setinput] = useState("")

    const tiklama = () => {
        setTodo([...Todo, input])
    }
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>ToDo List</h1>
                <div style={{ paddingTop: '20px' }}>
                    <input style={{ marginRight: '10px' }} value={input}
                        onChange={event => setinput(event.target.value)}
                    />
                    <button disabled={!input} type="submit" onClick={tiklama}>Add Todo</button>
                </div>
                {Todo.map((todo) =>
                    <Todo text={todo} />
                )}
            </div>
        </div>
    )
}




