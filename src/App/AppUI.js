import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodosError } from '../TodosEmptyStates/TodosError';
import { TodosLoading } from '../TodosEmptyStates/TodosLoading';
import { TodosInitState } from '../TodosEmptyStates/TodosInitState'; 
import { TodosEmptyState } from '../TodosEmptyStates/TodosEmptySearch';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoNav } from '../TodoNav/TodoNav';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoFilterButton} from '../TodoFilterButton/TodoFilterButton';
import { TodoFilterList } from '../TodoFilterList/TodoFilterList';
import { TodoFilterItem } from '../TodoFilterItem/TodoFilterItem';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';


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
           < Header />
            <div className='flex flex-col content-center justify-center max-w-[580px] w-full px-8 py-10 bg-td-secondary-1 rounded-lg shadow-lg shadow-td-secondary-darken/10 '>


                <TodoNav />

                <div className='flex flex-col md:flex-row justify-center md:justify-between my-8'>
                    <TodoCounter />
                    <TodoFilterButton />
                    
                    
                </div>

                <TodoList>  
                    {loading && 
                        <TodosLoading /> 
                    }
                    {error && 
                        <TodosError />
                    }
                    
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
           < Footer />
        </>
    );
}

export { AppUI }
