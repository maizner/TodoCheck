import React from 'react'; 

function TodoCounter({totalTodosCount, completedTodosCount}){
    return (
        <>
            { totalTodosCount > 0 && 
                <div className='flex flex-col md:flex-row justify-center md:justify-between my-4'>
                    <h1 className='font-raleway font-semibold text-[22px] md:text-[24px] leading-[24px] md:max-w-48 my-4 md:my-0 text-center md:text-left'>
                        Has completado <span >{completedTodosCount} </span> 
                        / <span>{totalTodosCount}</span> tareas
                     
                    </h1>
                </div>
            }
        </>
    );
    
}

export { TodoCounter};