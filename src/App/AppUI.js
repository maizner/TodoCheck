import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import {TodosLoading} from '../TodosLoading/TodosLoading';
import {TodosError} from '../TodosError/TodosError';
import {TodosEmptyState} from '../TodosEmptyState/TodosEmptyState';

function AppUI({
    loading,
    error,
    completedTodosCount,
    totalTodosCount,
    searchTerm,
    setSearchTerm,
    searchedTodos,
    onCompleteTodoAction,
    onDeleteTodoAction,
}) {


    return (
        <>
            <TodoCounter 
                completed={completedTodosCount} 
                total={totalTodosCount} 
            />

            <TodoSearch 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <TodoList>
                {loading && < TodosLoading /> }
                {error && < TodosError />}
                {(!loading && searchedTodos.length === 0 ) && < TodosEmptyState />}

                {searchedTodos.map(todoElem=> (
                    <TodoItem 
                        key={todoElem.text} 
                        text={todoElem.text} 
                        completed={todoElem.completed} 
                        onComplete = {() => onCompleteTodoAction(todoElem.text)}
                        onDelete = {() => onDeleteTodoAction(todoElem.text)}

                    />
                ))}
            </TodoList>
            <TodoCreateButton />
        </>
    );
}

export { AppUI}