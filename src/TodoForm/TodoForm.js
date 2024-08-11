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
            <label className="text-xl font-semibold text-white my-8">Crear nueva tarea</label>
                <textarea
                    className="bg-td-secondary-emphasis border-none w-full min-h-32 p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-td-primary-0 rounded-md focus:shadow-td-primary-0 focus:shadow-md
            font-raleway font-normal placeholder:text-td-primary-2 text-white text-[16px]"
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

