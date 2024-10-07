import React from 'react'; 
import { TodoFilterButtons} from '../TodoFilterButtons/TodoFilterButtons';

function TodoList({error, loading, todosToRender, onError, onLoading, onEmpty, render, children}){

    if (error) return onError();
    if (loading) return onLoading();
    if (todosToRender.length === 0) return onEmpty();

    return (
        <section className='todolist-container'>
            <div className='flex flex-col md:flex-row items-end justify-between w-full'>
                <h2 className='hidden md:flex font-raleway font-normal text-[20px]'>Tareas</h2>
                <TodoFilterButtons />
            </div>
            {todosToRender.map(render)}
            <ul className='TodoList min-h-[150px]'>
                {children}
            </ul>
        </section>
        );
   
}

export {TodoList};