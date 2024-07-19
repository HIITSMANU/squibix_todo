import React, { createContext, useState, useEffect, useContext } from 'react';

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const storedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
            setTodos(storedTodos);
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };

    const updateTodo = (id, newText) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text: newText };
            }
            return todo;
        }));
    };

    return (
        <TodoContext.Provider value={{ todos, loading, addTodo, deleteTodo, toggleTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
