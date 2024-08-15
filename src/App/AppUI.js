import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodosError } from '../EmptyStates/Error';
import { TodosLoading } from '../EmptyStates/Loading';
import { TodosInitState } from '../EmptyStates/InitState'; 
import { TodosEmptyState } from '../EmptyStates/EmptySearch';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoNav } from '../TodoNav/TodoNav';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoFilterButton} from '../TodoFilterButton/TodoFilterButton';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';


        // Aprendemos a consumer de dos formas el contexto. Esta es con TodoContext.Consumer
        function AppUI() {
            const {
                loading,
                error,
                searchTerm,
                searchedTodos,
                selectedPriority,
                filteredTodos,
                onCompleteTodoAction,
                onDeleteTodoAction,
                openModal,
            } = React.useContext(TodoContext);

             // Determine which list to render based on the presence of `selectedPriority` or `searchTerm`
            const todosToRender = selectedPriority ? filteredTodos : searchedTodos;
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
                            
                            {!loading && todosToRender.length === 0 ? (
                                searchTerm ? (
                                    <TodosEmptyState />
                                ) : (
                                    <TodosInitState />
                                )
                            ) : (
                                todosToRender.map(todoElem => (
                                    <TodoItem 
                                        key={todoElem.text} 
                                        text={todoElem.text} 
                                        completed={todoElem.completed} 
                                        priority={todoElem.priority} 
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
