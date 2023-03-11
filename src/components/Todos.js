import './Todos.css';
import { useEffect, useState } from 'react';

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [isAllCompleted, setIsAllCompleted] = useState(false);
    const onChangeCompleted = (id)=> {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed:!todo.completed
                }
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const onChangeAllComplete = (todos) => {
        const chechedAll = todos.map((todo) => {
            if(todo.completed === false) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        })
        setTodos(chechedAll);
    }

    useEffect(() => {
        const isAllCompletedUpdate = todos.every(todo => todo.completed);
        setIsAllCompleted(isAllCompletedUpdate);
    },[todos])

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
                            <input type="checkbox" 
                            checked={todo.completed} 
                            onChange = {()=> onChangeCompleted(todo.id)}/>
                        </div>
                        <div>{todo.todo}</div>
                    </div>
                )
            })}
            <div className="todo all">
                <div>
                    <input type="checkbox" checked={isAllCompleted} onChange={() => onChangeAllComplete(todos)}/>
                </div>
                <div>Check all tasks as completed!</div>
            </div>
        </div>
    )
}