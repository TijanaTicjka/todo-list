import './Todos.css';
import { useEffect, useState } from 'react';

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
          .then((response) => response.json())
          .then((data) => {
            setTodos(data.todos);
          });
        },[]);

    return (
        <div className='main'>
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className="todo">
                        <div>
                            <input type="checkbox" checked={todo.completed}></input>
                        </div>
                        <div>{todo.todo}</div>
                    </div>
                )
            })}
        </div>
    )
}