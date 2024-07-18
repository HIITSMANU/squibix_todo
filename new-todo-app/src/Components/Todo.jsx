import React, { useEffect, useRef, useState } from 'react';
import TodoList from './TodoList';
import SkeletonLoading from './SkeletonLoading';
import InputLoading from './InputLoading';

const Todo = () => {
    const nameRef = useRef();
    const categoryRef = useRef();

    const [todo, settodo] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');

    useEffect(() => {
        setTimeout(() => {
            const storedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
            settodo(storedTodos);
            setLoading(false);
        }, 1500); // Simulate a delay
    }, [todo]);

    const add = () => {
        const todoref = nameRef.current.value;
        const category = categoryRef.current.value;

        if (todoref === "" || category === "") {
            return null;
        }

        const newtodo = {
            id: Date.now(),
            text: todoref,
            completed: false,
            category: category
        };

        settodo([...todo, newtodo]);
        nameRef.current.value = "";
    }

    const deleteTodo = (id) => {
        const newtodo = todo.filter((todo) => todo.id !== id);
        settodo(newtodo);
    }

    const toggle = (id) => {
        settodo(todo.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    }

    const updateTodo = (id, newText) => {
        settodo(todo.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text: newText };
            }
            return todo;
        }));
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo]);

    const filteredTodos = todo.filter(item => {
        if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
        if (filter === 'completed') return item.completed;
        if (filter === 'uncompleted') return !item.completed;
        return true;
    });

    return (
        <div className='w-full bg-white p-4 max-w-lg mx-auto flex flex-col max-h-max rounded shadow-lg'>
            <div className="flex items-center justify-center gap-2 p-2 mb-5">
                <h1 className='text-3xl font-semibold text-center'><i className="fa-solid fa-table-list"></i> My Todo</h1>
            </div>

            {loading ? (
                <>
                    <InputLoading/>
                </>
            ) :(
                <>
                    <div className="flex flex-col sm:flex-row items-center my-5 gap-2">
                <input ref={nameRef} className='flex-1 px-4 py-2 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500' type="text" placeholder='Add Your Task' />
                <select ref={categoryRef} className='flex-1 px-4 py-2 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500'>
                    <option value="">Select Category</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="sports">Sports</option>
                </select>
                <button onClick={add} className='w-14 h-11 flex items-center justify-center bg-orange-600 text-white rounded-xl hover:bg-orange-700'>
                    Add<i className="fa-solid fa-plus mx-1"></i>
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <select onChange={(e) => setFilter(e.target.value)} className='flex-1 px-4 py-2 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500'>
                    <option value="all">All</option>
                    <option value="uncompleted">Active</option>
                    <option value="completed">Completed</option>
                </select>
                <select onChange={(e) => setCategoryFilter(e.target.value)} className='flex-1 px-4 py-2 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500'>
                    <option value="all">All Categories</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="sports">Sports</option>
                </select>
            </div>
                </>
            )}

            <div className="flex flex-col gap-2">
                {loading ? (
                    <>
                        <SkeletonLoading />
                        <SkeletonLoading />
                        <SkeletonLoading />
                    </>
                ) : (
                    filteredTodos.length === 0 ? (
                        <p className='text-center text-gray-500'>No todos yet</p>
                    ) : (
                        filteredTodos.map((item, id) => (
                            <TodoList 
                                key={id} 
                                text={item.text} 
                                id={item.id} 
                                isDone={item.completed} 
                                deleteTodo={deleteTodo} 
                                toggle={toggle} 
                                updateTodo={updateTodo} 
                            />
                        ))
                    )
                )}
            </div>
        </div>
    );
}

export default Todo;
