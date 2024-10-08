import React from 'react'; 

function TodoList({error, loading, todosToRender,onError, onLoading, onEmpty, render}){

        // if (error) return onError();
        // if (loading) return onLoading();
        // if (todosToRender.length === 0) return onEmpty();
        console.log( todosToRender)
    return (
        <section className='todolist-container'>
            {error && onError()}  
            {loading && onLoading()} 
            {todosToRender.length === 0 && onEmpty()} 

            {todosToRender.length > 0 && 
                <ul className='TodoList min-h-[200px]'>
                    {todosToRender.map(render)}
                </ul>
            } 
            
            
        </section>
        );
   
}

export {TodoList};