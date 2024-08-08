import React from 'react'; // Importa React desde la librería de React
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter(){
    const {
        completedTodosCount,
        totalTodosCount,

    }= React.useContext(TodoContext);
    return (

        
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodosCount} </span> 
            / <span>{totalTodosCount}</span> TODOs
        </h1>
    );
    
}

export { TodoCounter};