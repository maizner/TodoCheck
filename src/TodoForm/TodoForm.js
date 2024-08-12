import React from 'react';
import { ReactComponent as IconCalendar } from '../icon-calendar.svg';
import { ReactComponent as IconFlag } from '../icon-fill-flag.svg';
import { TodoContext } from '../TodoContext/TodoContext';


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
            
            <form className="w-full flex flex-col items-start gap-6" onSubmit={onSubmit}>
                <h3 class="flex flex-row self-center font-raleway font-normal text-[22px] mb-8 ">Crear nueva tarea</h3>
                <div className="w-full flex flex-col items-start gap-1"> 
                    <label className="text-md font-normal text-white ">Descripción</label>
                    <textarea
                        className="bg-td-secondary-2 border-none w-full min-h-32 p-2 focus:outline-none focus:ring-2 focus:ring-td-primary-0 rounded-md focus:shadow-td-primary-0 focus:shadow-md
                font-raleway font-normal placeholder:text-td-primary-2 text-white text-sm resize-none"
                        placeholder="Escribí tu tarea acá"
                        value={newTodoValue}
                        onChange ={onChange}
                    />
                </div>
                <div className="flex flex-col gap-1 items-start w-full">
                    <label className="text-md font-normal text-white ">Prioridad</label>
                    <div className="flex flex-row gap-2 w-full">
                        <button
                            type="button"
                            className="flex flex-row items-center justify-center bg-transparent border-gray-500 text-white border-2 hover:bg-gray-500 active:bg-gray-500 font-normal py-2 px-4 max-h-9 rounded-full text-sm transition-colors duration-300 ease-out w-full">
                            <IconFlag width="16" height="16" className="mx-1"/>
                            Baja</button>

                            <button
                            type="button"
                            className="flex flex-row items-center justify-center bg-transparent  border-blue-200 text-white border-2 hover:bg-blue-200 active:bg-blue-200 font-normal py-2 px-4 max-h-9 rounded-full text-sm transition-colors duration-300 ease-out w-full">
                            <IconFlag width="16" height="16" className="mx-1"/>
                            Normal</button>
                            
                            <button
                            type="button"
                            className="flex flex-row items-center justify-center bg-transparent  border-yellow-500 text-white border-2 hover:bg-yellow-500 active:bg-yellow-500 font-normal py-2 px-4 max-h-9 rounded-full text-sm transition-colors duration-300 ease-out w-full">
                            <IconFlag width="16" height="16" className="mx-1"/>
                            Alta</button>

                            <button
                            type="button"
                            className="flex flex-row items-center justify-center bg-transparent  border-red-500 text-white border-2 hover:bg-red-500 active:bg-red-500 font-normal py-2 px-4 max-h-9 rounded-full text-sm transition-colors duration-300 ease-out w-full">
                            <IconFlag width="16" height="16" className="mx-1"/>
                            Urgente</button>
                    </div>

                    
                </div>
                <div className="w-full flex flex-col items-start gap-1"> 
                    <label className="text-md font-normal text-white ">Tiempo</label>
                   
                    <div className="flex flex-row justify-between bg-td-secondary-2 w-full rounded-md relative h-[43px]">
                    <IconCalendar 
                    className="flex p-2 mt-1 mb-1 text-gray-200 absolute top-0 left-0 bottom-0 z-10 w-9 h-9" />
                    
                    <input
                            className="bg-transparent border-none w-full h-[43px] p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-td-primary-0 rounded-md focus:shadow-td-primary-0 focus:shadow-md
                            font-raleway font-normal placeholder:text-td-primary-2 text-white text-sm"
                            placeholder="4 Octubre 2024 ~ 5 Octubre 2024" />
                    
                    
                    </div>
                </div>
                
                <div className="flex flex-row gap-3 w-full">
                    <button
                        type="button"
                        className=" bg-gray-600 font-raleway text-white font-semibold text-md rounded py-2 px-4 hover:bg-gray-700 transition-colors duration-300 ease-out"
                        onClick = {onCancel}
                       
                    >Cerrar</button>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-td-primary-emphasis to-td-primary-0 font-raleway text-white font-semibold text-md rounded py-2 px-4 hover:from-td-primary-0  hover:to-td-primary-emphasis transition-colors duration-300 ease-out text-center items-center "
                       
                    >Crear tarea</button>
                </div>
            </form>
        </div>
    );

};

export { TodoForm };

