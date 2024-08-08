import React from 'react';
import logo from './logo.svg';
import signature from './signature.svg';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosInitState } from '../TodosInitState/TodosInitState'; 
import { TodosEmptyState } from '../TodosEmptyState/TodosEmptyState';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoNav } from '../TodoNav/TodoNav';
import { TodoContext } from '../TodoContext/TodoContext';

// Aprendemos a consumer de dos formas el contexto. Esta es con TodoContext.Consumer
function AppUI() {
    const {
        loading,
        error,
        searchTerm,
        searchedTodos,
        onCompleteTodoAction,
        onDeleteTodoAction,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <div className='w-full flex flex-row content-center justify-center py-6 px-8'>
                <img src={logo} className="" alt="logo" />
            </div>
            <div className='flex flex-col content-center justify-center max-w-[580px] w-full'>
                <TodoNav />
                <TodoCounter />

                <TodoList>  
                    {loading && 
                        <TodosLoading /> 
                    }
                    {error && 
                        <TodosError />
                    }
                    {/* Mejora en la condición para mostrar TodosInitState o TodosEmptyState */}
                    {!loading && searchedTodos.length === 0 ? (
                        searchTerm ? (
                            <TodosEmptyState />
                        ) : (
                            <TodosInitState />
                        )
                    ) : (
                        searchedTodos.map(todoElem => (
                            <TodoItem 
                                key={todoElem.text} 
                                text={todoElem.text} 
                                completed={todoElem.completed} 
                                onComplete={() => onCompleteTodoAction(todoElem.text)}
                                onDelete={() => onDeleteTodoAction(todoElem.text)}
                            />
                        ))
                    )}
                </TodoList>
                
                <TodoCreateButton />

                {openModal &&(
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            </div>
            <div className='w-full flex flex-row content-center justify-center py-6 px-8'>
                <a href="#">
                <img src={signature} className="" alt="contact me" />
                </a>
            </div>
        </>
    );
}

export { AppUI }
