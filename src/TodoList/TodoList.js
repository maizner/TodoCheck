import React from 'react'; 


function TodoList(props){
    return (
        <div>
            <h2 className='font-raleway font-normal text-[22px]'>Tareas</h2>
            <ul className='TodoList min-h-[400]'>
                {props.children}
            </ul>
        </div>
        );
   
}

export {TodoList};