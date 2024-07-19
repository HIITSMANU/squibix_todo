import React, { useEffect, useRef, useState } from 'react';
import TodoList from './TodoList';
import SkeletonLoading from './SkeletonLoading';
import InputLoading from './InputLoading';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../Contexts/ThemeContext';

const Todo = () => {
    const nameRef = useRef();
    const categoryRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const { theme } = useTheme();

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
    }, []);

    const add = () => {
        const todoref = nameRef.current.value;
        const category = categoryRef.current.value;
        const date = dateRef.current.value;
        const time = timeRef.current.value;

        if (todoref === "" || category === "" || date === "" || time === "") {
            return null;
        }

        const newtodo = {
            id: Date.now(),
            text: todoref,
            completed: false,
            category: category,
            deadline: `${date} ${time}`
        };

        settodo([...todo, newtodo]);
        nameRef.current.value = "";
        dateRef.current.value = "";
        timeRef.current.value = "";
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
        <div className={`w-full overflow-y-auto mb-[10%] p-4 max-w-lg mx-auto flex flex-col  rounded shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            {/* <div className="flex flex-row justify-between items-center">
                <div className="flex items-center justify-center gap-2 p-2">
                    <h1 className='text-3xl font-semibold text-center'><i className="fa-solid fa-table-list"></i> My Todo</h1>
                </div>
                <div>
                    <ThemeSwitcher />
                </div>  
            </div> */}

            {loading ? (
                <>
                    <InputLoading/>
                </>
            ) :(
                <>
                    <div className="flex flex-col sm:flex-row my-2 gap-4 justify-between">
                        <div className="flex flex-col flex-1">
                            <p className='text-gray-400 text-[14px] italic'><span className='text-red-600'>*</span>Enter Your Task Here</p>
                            <div className='flex flex-row flex-1 items-center'>
                                <input ref={nameRef} className={`w-full px-4 py-2 rounded border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-orange-400'} focus:outline-none focus:ring-2 focus:ring-orange-500`} type="text" placeholder='Add Your Task' />
                                <button onClick={add} className='w-10 h-10 flex items-center justify-center bg-orange-600 text-white rounded hover:bg-orange-700 cursor-progress -ml-10'>
                                    <i className="fa-solid fa-plus mx-1"></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-1 flex-col">
                                <p className='text-gray-400 text-[14px] italic'><span className='text-red-600'>*</span>Please Choose Category </p>
                                <select ref={categoryRef} className={`w-full px-1 py-2 rounded border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-orange-400'} focus:outline-none focus:ring-2 focus:ring-orange-500`}>
                                    <option value="">Select Category</option>
                                    <option value="work">Work</option>
                                    <option value="personal">Personal</option>
                                    <option value="sports">Sports</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row my-5 gap-4 justify-between">
                        <div className="flex flex-1 flex-col">
                            <p className='text-gray-400 text-[14px] italic'><span className='text-red-600'>*</span>Select Due Date</p>
                            <input ref={dateRef} className={`w-full px-4 py-2 rounded border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-orange-400'} focus:outline-none focus:ring-2 focus:ring-orange-500`} type="date" />
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className='text-gray-400 text-[14px] italic'><span className='text-red-600'>*</span>Select Due Time</p>
                            <input ref={timeRef} className={`w-full px-4 py-2 rounded border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-orange-400'} focus:outline-none focus:ring-2 focus:ring-orange-500`} type="time" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
                        <div className="flex flex-col flex-1">
                            <p className='text-gray-400 text-[14px] italic'><span className='text-red-600'>*</span>Filter By Status</p>
                            <select onChange={(e) => setFilter(e.target.value)} className={`flex-1 px-4 py-2 rounded border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-orange-400'} focus:outline-none focus:ring-2 focus:ring-orange-500`}>
                                <option value="all">All</option>
                                <option value="uncompleted">Active</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className='text-gray-400 text-[14px] italic'><span className='text-red-600'>*</span>Filter By Category</p>
                            <select onChange={(e) => setCategoryFilter(e.target.value)} className={`flex-1 px-4 py-2 rounded border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-orange-400'} focus:outline-none focus:ring-2 focus:ring-orange-500`}>
                                <option value="all">All Categories</option>
                                <option value="work">Work</option>
                                <option value="personal">Personal</option>
                                <option value="sports">Sports</option>
                            </select>
                        </div>
                    </div>
                </>
            )}

            <div className="flex flex-col gap-2 overflow-y-auto">
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
                                deadline={item.deadline} // Pass deadline to TodoList component
                            />
                        ))
                    )
                )}
            </div>
        </div>
    );
}

export default Todo;
