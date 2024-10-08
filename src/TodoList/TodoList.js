import React from 'react'; 

function TodoList({error, loading, todosToRender,onError, onLoading, onEmpty, render}){

        // if (error) return onError();
        // if (loading) return onLoading();
        // if (todosToRender.length === 0) return onEmpty();
    
    return (
        <section className='todolist-container'>
            {error && onError()}  
            {loading && onLoading()} 
            {todosToRender.length === 0 && onEmpty()} 

            <ul className='TodoList min-h-[170px]'>

                {todosToRender.map(render)}
            </ul>
        </section>
        );
   
}

export {TodoList};