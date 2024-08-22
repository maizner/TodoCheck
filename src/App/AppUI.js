import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodosError } from '../EmptyStates/Error';
import { TodosLoading } from '../EmptyStates/Loading';
import { TodosInitState } from '../EmptyStates/InitState'; 
import {TodosEmptySearch } from '../EmptyStates/EmptySearch';
import {TodosEmptyFilter } from '../EmptyStates/EmptyFilter';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoNav } from '../TodoNav/TodoNav';
import { TodoContext } from '../TodoContext/TodoContext';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';


        
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
                completedFilter,
                onCompleteTodoAction,
                onDeleteTodoAction,
                openModal,
            } = React.useContext(TodoContext);

             // Determine which list to render based on the presence of `selectedPriority` or `searchTerm` or `completed`
            let todosToRender;

            if (selectedPriority) {
                todosToRender = prioritizedTodos;
            } else if (searchTerm) {
                todosToRender = searchedTodos;
            } else if(completedTodos) {
                todosToRender = completedTodos;
            }else{
                todosToRender = todos;
            }
          
                
            return (
                <>
                < Header />
                    <div className='flex flex-col content-center justify-center max-w-[580px] w-full px-8 py-10 bg-td-secondary-1 rounded-lg shadow-lg shadow-td-secondary-darken/10 '>


                        <TodoNav />

                        <div className='flex flex-col md:flex-row justify-center md:justify-between my-4'>
                            <TodoCounter />
                            
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

                                    <TodosEmptySearch />

                                ) : selectedPriority ?(

                                    <TodosEmptyFilter />// or a custom message for priority filter

                                ) : completedFilter ? (

                                    <TodosEmptyFilter /> // or a custom message for completed filter

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
