import React, { useState } from 'react';
import { useTheme } from '../Contexts/ThemeContext';

const TodoList = ({ text, id, isDone, deleteTodo, toggle, updateTodo, deadline }) => {
    const [isEditing, setIsEditing] = useState(false);
    const {theme} = useTheme()
    const [newText, setNewText] = useState(text);

    const handleUpdate = () => {
        updateTodo(id, newText);
        setIsEditing(false);
    };

    return (
        <>
            <div className='flex-1 flex flex-row sm:flex-row items-center justify-between my-1 p-2 border rounded sm:flex sm:justify-between'>
                {isEditing ? (
                    <input 
                        type="text" 
                        value={newText} 
                        onChange={(e) => setNewText(e.target.value)} 
                        className={`flex-1 px-1 w-20 py-2 m-1.5 ${theme === 'light' ? ' bg-white':'focus:bg-gray-800 bg-gray-900'}  border-2 border-orange-400 outline-orange-400 dark:bg-gray-800`}
                    />
                ) : (
                    <div className="max-w-[200px] flex items-center flex-1 ">
                        <i className={`w-5 h-5 rounded border-2 border-orange-500 ${isDone ? 'fa-solid fa-check' : ''}`}></i>
                        <div className='w-full mx-2'>
                            <p className={`${isDone ? 'line-through' : ''} max-w-md break-words overflow-wrap`}>{text}</p>
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-2 mt-2 sm:mt-0 ">
                    {isEditing ? (
                        <button title='update' onClick={handleUpdate} className='px-2 py-1 bg-green-500 text-white rounded'><i className="fa-regular fa-floppy-disk"></i></button>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className='px-2 py-1 bg-blue-500 text-white rounded'><i className="fa-solid fa-pen-to-square"></i></button>
                    )}
                    <button onClick={() => toggle(id)} className='px-2 py-1 bg-yellow-500 text-white rounded'>
                        <i className={`${isDone ? 'fa-solid fa-rotate-left' : 'fa-solid fa-check'}`}></i>
                    </button>
                    <button onClick={() => deleteTodo(id)} className='px-2 py-1 bg-red-500 text-white rounded'><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            {deadline && (
                <div className='text-sm text-gray-500'>
                    Deadline: {deadline}
                </div>
            )}
        </>
    );
}

export default TodoList;
