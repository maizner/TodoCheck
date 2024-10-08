import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodosError } from '../EmptyStates/Error';
import { TodosLoading } from '../EmptyStates/Loading';
import { TodosEmpty } from '../EmptyStates/EmptyStates';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoNav } from '../TodoNav/TodoNav';
import { TodoContext } from '../TodoContext/TodoContext';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { TodoFilters} from '../TodoFilters/TodoFilters';

function AppUI() {

    const {
        todos,
        loading,
        error,
        searchTerm,
        searchedTodos,
        selectedPriority,
        prioritizedTodos,
        completedTodos,
        totalTodosCount,
        handleComplete,
        handleDelete,
        setEditingTodo,
        setOpenModal,
        openModal,
    } = React.useContext(TodoContext);

    // Determine which list to render based on filters applied
    let todosToRender  = todos;
    if (selectedPriority) {
        todosToRender = prioritizedTodos;
    } else if (searchTerm) {
        todosToRender = searchedTodos;
    } else if(completedTodos) {
        todosToRender = completedTodos;
    }else{
        todosToRender = todos;
    }
    
    const handleEdit = (todo) => {
        setEditingTodo(todo);
        setOpenModal(true);
    };
        
    return (
        <>
            < Header />
            <div className='flex flex-col content-center justify-center max-w-[580px] w-full px-3 py-3 md:px-8 md:py-10 bg-td-secondary-1 rounded-lg shadow-lg shadow-td-secondary-darken/10 '>
                <TodoNav />
                <TodoCounter />
                <TodoFilters />
                <TodoList 
                    error = {error}
                    loading = {loading}
                    todosToRender = {todosToRender}
                    totalTodosCount = {totalTodosCount}
                    onError = { () => <TodosError />}
                    onLoading = { () => <TodosLoading />}
                    onEmpty = { () => <TodosEmpty />}
                    render = {todoElem => (
                    <TodoItem 
                        key={todoElem.text} 
                        text={todoElem.text} 
                        completed={todoElem.completed} 
                        priority={todoElem.priority} 
                        onComplete={() => handleComplete(todoElem.text)}
                        onDelete={() => handleDelete(todoElem.text)}
                        onEdit={() => handleEdit(todoElem)} 
                    />
                )}
                />
                <TodoCreateButton />
                {openModal &&(
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            </div>
            < Footer />
        </>
    );
}

export { AppUI }
