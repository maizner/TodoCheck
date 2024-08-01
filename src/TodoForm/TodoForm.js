import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';

function TodoForm(){

    const {
        onCreateTodoAction,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        onCreateTodoAction(newTodoValue); // Crear el TODO aquí
        setOpenModal(false);
       //setOpenModal(state => !state);  Es una forma de alternar el estado. Es el toggle.
    };
    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    return(
        <div className="text-center">
            
            <form className="todoform" onSubmit={onSubmit}>
            <label className="text-xl font-bold mb-4 text-black">Escribe tu nuevo TODO</label>
                <textarea
                    className="border border-gray-300 rounded w-full py-2 px-4 mb-4"
                    placeholder="Animate y agregá tu nueva tarea"
                    value={newTodoValue}
                    onChange ={onChange}
                />
                <div className="todoform-btn-container">
                    <button
                        type="button"
                        className="todoform-btn todoform-btn--cancel bg-gray-500 text-white rounded py-2 px-4 hover:bg-gray-600"
                        onClick = {onCancel}
                       
                    >X</button>

                    <button
                        type="submit"
                        className="todoform-btn todoform-btn--add bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
                       
                    >Add TODO</button>
                </div>
            </form>
        </div>
    );

};

export { TodoForm };

