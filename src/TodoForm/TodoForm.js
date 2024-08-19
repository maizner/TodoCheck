import React from 'react';
import { ReactComponent as IconCalendar } from '../icon-calendar.svg';
import { ReactComponent as IconFlag } from '../icon-fill-flag.svg';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm() {
    const { onCreateTodoAction, setOpenModal, priorities } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [priority, setPriority] = React.useState('baja'); // Estado para la prioridad
    const [error, setError] = React.useState(false); // Estado para el manejo del error


    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodoValue.trim() === '') { // Validación para asegurar que no esté vacío
            setError(true);
            return;
        }
        setError(false);
        onCreateTodoAction(newTodoValue, priority);  // Crear el TODO con la prioridad
        setOpenModal(false);
        
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    return (
        <div className="text-center">
            <form className="w-full flex flex-col items-start gap-6" onSubmit={onSubmit}>
                <h3 className="flex flex-row self-center font-raleway font-normal text-[22px] mb-8">Crear nueva tarea</h3>
                <div className="w-full flex flex-col items-start gap-1">
                    <label className="text-md font-normal text-white">Descripción</label>
                    <textarea
                        className={`bg-td-secondary-2 border-none w-full min-h-32 p-2 focus:outline-none focus:ring-2 focus:ring-td-primary-0 rounded-md focus:shadow-td-primary-0 focus:shadow-md
                            font-raleway font-normal placeholder:text-td-primary-2 text-white text-sm resize-none ${error ? ' border-1 border-td-error focus:ring-td-error focus:shadow-td-error' : ''}`}
                        placeholder="Escribí tu tarea acá"
                        value={newTodoValue}
                        onChange={onChange}
                    />
                     {error && (
                        <p className="text-td-error text-sm mt-1">La descripción de la tarea no puede estar vacía.</p>
                    )}
                </div>
                <div className="flex flex-col gap-1 items-start w-full">
                    <label className="text-md font-normal text-white">Prioridad</label>
                    <div className="flex flex-row gap-2 w-full flex-wrap lg:flex-nowrap">
                        {Object.entries(priorities).map(([key, { name, color }]) => {
                            const isSelected = priority === key;
                            const className = `
                                flex flex-row items-center justify-center border-2 font-normal py-2 px-4 max-h-9 rounded-full text-sm transition-colors duration-300 ease-out w-full
                                border-${color}
                                ${isSelected ? `bg-${color} bg-opacity-80` : 'bg-transparent'}
                                hover:bg-${color}
                                active:bg-${color}
                            `;
                            return (
                                <button
                                    type="button"
                                    key={key}
                                    className={className}
                                    onClick={() => setPriority(key)}
                                >
                                    <IconFlag width="16" height="16" className="mx-1" />
                                    {name}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full flex flex-col items-start gap-1">
                    <label className="text-md font-normal text-white">Tiempo</label>
                    <div className="flex flex-row justify-between bg-td-secondary-2 w-full rounded-md relative h-[43px]">
                        <IconCalendar className="flex p-2 mt-1 mb-1 text-gray-200 absolute top-0 left-0 bottom-0 z-10 w-9 h-9" />
                        <input
                            className="bg-transparent border-none w-full h-[43px] p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-td-primary-0 rounded-md focus:shadow-td-primary-0 focus:shadow-md
                            font-raleway font-normal placeholder:text-td-primary-2 text-white text-sm"
                            placeholder="4 Octubre 2024 ~ 5 Octubre 2024"
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-3 w-full">
                    <button
                        type="button"
                        className="bg-gray-600 font-raleway text-white font-semibold text-md rounded-md py-3 px-8 hover:bg-gray-700 transition-colors duration-300 ease-out min-w-[140px]"
                        onClick={onCancel}
                    >
                        Cerrar
                    </button>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-td-primary-emphasis to-td-primary-0 font-raleway text-white font-semibold text-md rounded-md py-3 px-8 hover:from-td-primary-0 hover:to-td-primary-emphasis transition-colors duration-300 ease-out text-center items-center"

                    >
                        Crear tarea
                    </button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };
