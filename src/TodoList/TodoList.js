import React from 'react'; 
import { TodoFilterButtons} from '../TodoFilterButtons/TodoFilterButtons';


function TodoList(props){
    return (
        <div >
            <div className='flex flex-row items-end justify-between'>
                <h2 className='font-raleway font-normal text-[20px]'>Tareas</h2>
                <TodoFilterButtons />
            </div>
            <ul className='TodoList min-h-[150px]'>
                {props.children}
            </ul>
        </div>
        );
   
}

export {TodoList};