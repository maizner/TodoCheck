import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();


function TodoProvider({ children }) {
    

    const [priorities, setPriorities] = React.useState({
        baja: { name: 'Baja', color: 'gray-500' },
        normal: { name: 'Normal', color: 'blue-500' },
        alta: { name: 'Alta', color: 'yellow-500' },
        urgente: { name: 'Urgente', color: 'red-500' },
    });
    
    const {
        item: todos,
        savePersistedItem: savePersistedTodo,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchTerm, setSearchTerm] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    

    const completedTodosCount = todos.filter(
        todoElem => !!todoElem.completed
    ).length;

    const totalTodosCount = todos.length;

    const searchedTodos = todos.filter(
        (todoElem) => {
            const lowerCaseTodoText = todoElem.text.toLowerCase();
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return lowerCaseTodoText.includes(lowerCaseSearchTerm);
        }
    );

    const onCompleteTodoAction = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Alternar el estado

        savePersistedTodo(newTodos);
    }

    const onDeleteTodoAction = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.text === text
        );
        newTodos.splice(todoIndex, 1);
        savePersistedTodo(newTodos);
    }

    const onCreateTodoAction = (text, priority) => {

        if (!priorities[priority]) {
            console.error('Prioridad inválida:', priority);
            return;
        }
       
        const newTodos = [...todos];
        
        newTodos.push({
            text: text, 
            completed: false,
            priority: priority 
        });
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
            onCreateTodoAction,
            openModal,
            setOpenModal,
            priorities, 
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
