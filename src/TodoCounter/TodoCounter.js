import React from 'react'; 
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter(){
    const {
        completedTodosCount,
        totalTodosCount,

    }= React.useContext(TodoContext);
    return (

 
        <h1 className='TodoCounter font-raleway font-semibold  text-[24px] leading-[24px] md:max-w-48 '>
            Has completado <span >{completedTodosCount} </span> 
            / <span>{totalTodosCount}</span> tareas
        </h1>
    );
    
}

export { TodoCounter};