import React from 'react'; // Importa React desde la librería de React
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter(){
    const {
        completedTodosCount,
        totalTodosCount,

    }= React.useContext(TodoContext);
    return (
        //En jsx cuando queremos pasar una propiedad se hace con llaves. 
        //Como queremos pasar un objeto lo hacemos con doble llave
        // <h1 style={{
        //     fontSize: '24px',
        //     textAlign: 'center',
        //     margin: 0,
        //     padding: '48px', 


        // }}>
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodosCount} </span> 
            / <span>{totalTodosCount}</span> TODOs
        </h1>
    );
    
}

export { TodoCounter};