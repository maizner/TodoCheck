import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosInitState } from '../TodosInitState/TodosInitState'; 
import { TodosEmptyState } from '../TodosEmptyState/TodosEmptyState';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
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
            <TodoCounter />
            <TodoSearch />

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
        </>
    );
}

export { AppUI }
