import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodosError } from '../EmptyStates/Error';
import { TodosLoading } from '../EmptyStates/Loading';
import { TodosEmpty } from '../EmptyStates';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Avatar } from '../Avatar';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from '../TodoContext';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { TodoFilters } from '../TodoFilters';
import { ChangeAlertWSL } from '../ChangeAlert';

function AppUI() {
    const {
        todos,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        searchedTodos,
        selectedPriority,
        prioritizedTodos,
        completedTodos,
        completedTodosCount,
        onCreateTodoAction,
        totalTodosCount,
        onUpdateTodoAction,
        handleComplete,
        handleDelete,
        editingTodo,
        setEditingTodo,
        setOpenModal,
        openModal,
        priorities
    } = React.useContext(TodoContext);

    let todosToRender = todos;
    if (selectedPriority) {
        todosToRender = prioritizedTodos;
    } else if (searchTerm) {
        todosToRender = searchedTodos;
    } else if (completedTodos) {
        todosToRender = completedTodos;
    } else {
        todosToRender = todos;
    }
    
    const handleEdit = (todo) => {
        setEditingTodo(todo);
        setOpenModal(true);
    };

    return (
        <>
            <Header />
            <div className='flex flex-col content-center justify-center max-w-[580px] w-full px-3 py-3 md:px-8 md:py-10 bg-td-secondary-1 rounded-lg shadow-lg shadow-td-secondary-darken/10 '>
                <div className='flex flex-col items-center justify-center w-full h-full md:flex-row md:justify-between'>
                    <Avatar 
                        completedTodosCount={completedTodosCount} 
                        totalTodosCount={totalTodosCount} 
                    />
                    <TodoSearch 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm} 
                        loading={loading} 
                    />
                </div>
                <TodoCounter 
                    totalTodosCount={totalTodosCount} 
                    completedTodosCount={completedTodosCount} 
                    loading={loading} 
                />
                 
                <TodoFilters />
                <TodoList 
                    error={error} 
                    loading={loading} 
                    todosToRender={todosToRender} 
                    totalTodosCount={totalTodosCount} 
                    onError={() => <TodosError />} 
                    onLoading={() => <TodosLoading />} 
                    onEmpty={() => <TodosEmpty />} 
                    render={todoElem => (
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
                <TodoCreateButton setOpenModal={setOpenModal} />
                {openModal && (
                    <Modal>
                        <TodoForm
                            onCreateTodoAction={onCreateTodoAction} 
                            onUpdateTodoAction={onUpdateTodoAction} 
                            setOpenModal={setOpenModal}  
                            setEditingTodo={setEditingTodo} 
                            priorities={priorities}  
                            editingTodo={editingTodo} 
                        />
                    </Modal>
                )}
                 <ChangeAlertWSL /> 
            </div>
            <Footer />
        </>
    );
}

export { AppUI };
