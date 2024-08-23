import React from 'react'; 
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter(){
    const {
        completedTodosCount,
        totalTodosCount,

    }= React.useContext(TodoContext);
    return (

 
        <h1 className='font-raleway font-semibold text-[22px] md:text-[24px] leading-[24px] md:max-w-48 my-4 md:my-0 text-center md:text-left'>
            Has completado <span >{completedTodosCount} </span> 
            / <span>{totalTodosCount}</span> tareas
        </h1>
    );
    
}

export { TodoCounter};