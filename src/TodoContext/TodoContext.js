import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();

function TodoProvider ({children}) {
   

    const {
        item: todos, 
        savePersistedItem: savePersistedTodo,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    
     // Define searchTerm and setSearchTerm at the beginning
     const [searchTerm, setSearchTerm] = React.useState('');
     const [openModal, setOpenModal] = React.useState(false);

    // Filtrar los todos completados
    const completedTodosCount = todos.filter(
        todoElem => !!todoElem.completed
    ).length;

    // Obtiene el total de todos en la lista
    const totalTodosCount = todos.length;

    const searchedTodos = todos.filter(
        (todoElem) => { 
            const lowerCaseTodoText = todoElem.text.toLowerCase();
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return lowerCaseTodoText.includes(lowerCaseSearchTerm);
        }
    );

    // Verificando con log
    console.log("Initial todos:", todos);

    // Acción de completar todos
    const onCompleteTodoAction = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Alternar el estado

        savePersistedTodo(newTodos);
    }

    // Acción de borrar todos
    const onDeleteTodoAction = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.text === text
        );
        newTodos.splice(todoIndex, 1);
        savePersistedTodo(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodosCount,
            totalTodosCount,
            searchTerm,
            setSearchTerm,
            searchedTodos,
            onCompleteTodoAction,
            onDeleteTodoAction,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
