import { useEffect, useState } from 'react'
import { ToDoContextProvider } from './contexts'
import { TodoForm, TodoItem } from './components';

function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {// keep the names same as mentioned in context then only the functionalities will be added to them.
        setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]); // 
    }

    const updateTodo = (id, todo) => {
        setTodos((prevTodos) => prevTodos.map((prevTodo) => (prevTodo.id === id) ? todo : prevTodo))// if id matches then insert new todo
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodo) => (prevTodo.id !== id)))// if id doesn't matches then only push the element.
    }

    const toggleComplete = (id) => {
        setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)) // if id matches then toggle it's variable 'completed (overwriting hence first we have to dereference)
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos && todos.length && setTodos(todos);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <ToDoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => ( //avoid indices as keys and use must unique id's to prevent degradation of performance also rounded braces by default return the value.
                            <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ToDoContextProvider>
    )
}

export default App
