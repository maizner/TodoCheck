import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const [priorities] = React.useState({
        baja: { name: 'Baja', color: 'gray-500' },
        normal: { name: 'Normal', color: 'blue-200' },
        alta: { name: 'Alta', color: 'yellow-500' },
        urgente: { name: 'Urgente', color: 'red-500' },
    });

    const {
        item: todos,
        savePersistedItem: savePersistedTodo,
        onSynchronize,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    // console.log('Todos:', todos);

    const [searchTerm, setSearchTerm] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedPriority, setSelectedPriority] = React.useState(null);
    const [filterIsVisible, setFilterIsVisible] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState([]);
    const [completedFilter, setCompletedFilter] = React.useState(null);
    const [editingTodo, setEditingTodo] = React.useState(null);

    const toggleFilters = () => {
        setFilterIsVisible((prevState) => !prevState);

    }

    const clearFilters = () => {
        setActiveFilter([]);
        setSelectedPriority(null);  // Reiniciar la prioridad seleccionada
        setCompletedFilter(null);  // Limpiar el filtro de completado
        setFilterIsVisible(false);  // Cerrar el listado
    
    }

    const completedTodosCount = todos.filter(
        todoElem => !!todoElem.completed
    ).length;

    //Estados derivados o derived states = def:States created in base on other states 
    const totalTodosCount = todos.length;

    const searchedTodos = todos.filter(
        (todoElem) => {
            const lowerCaseTodoText = todoElem.text.toLowerCase();
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return lowerCaseTodoText.includes(lowerCaseSearchTerm);
        }
    );

    const completedTodos = todos.filter((todoElem) => {
        const completedMatch = 
            completedFilter === true ? todoElem.completed :
            completedFilter === false ? !todoElem.completed :
            true;
        return  completedMatch;
    });

    const prioritizedTodos = todos.filter((todoElem) => {
        const priorityMatch = 
        !selectedPriority || todoElem.priority === selectedPriority;

        const completedMatch = 
        completedFilter === true ? todoElem.completed :
        completedFilter === false ? !todoElem.completed :
        true;
        return priorityMatch && completedMatch;
    });
    const handleSelectCompletedFilter = (filter) => {
        if (filter === true) {
          setCompletedFilter(true);
        } else if (filter === false) {
          setCompletedFilter(false);
        } else {
          setCompletedFilter(null);
        }
        setActiveFilter((prevFilters) => [...prevFilters, filter]);
        setFilterIsVisible(false); // Cerrar el menú si es necesario
        
    };
  
    const handleSelectPriority = (priority) => {

        // Verificamos si la prioridad ya está seleccionada o no
        if (!activeFilter.includes(priority)) {

            setActiveFilter((prevFilters) => [...prevFilters, priority]);

        }
        setSelectedPriority(priority);
        setFilterIsVisible(false);  // Cerrar el menú
        console.log('Prioridad seleccionada:', priority);
    }

    const handleComplete = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Alternar el estado

        savePersistedTodo(newTodos);
    }

    const handleDelete = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.id === id
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

    const onUpdateTodoAction = (oldText, newText, priority) => {
        
        if (!priorities[priority]) {
            console.error('Prioridad inválida:', priority);
            return;
        }
       
        const updatedTodos = todos.map(todo => 
            todo.text === oldText 
                ? { ...todo, text: newText, priority: priority } 
                : todo
        );
        savePersistedTodo(updatedTodos);
        setEditingTodo(null)
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            priorities, 
            selectedPriority,
            setSelectedPriority,
            filterIsVisible,
            toggleFilters,
            activeFilter,
            completedFilter,
            setActiveFilter,
            clearFilters,
            handleSelectPriority,
            handleSelectCompletedFilter,
            prioritizedTodos, 
            completedTodos,
            completedTodosCount,
            totalTodosCount,
            searchTerm,
            setSearchTerm,
            searchedTodos,
            editingTodo,
            setEditingTodo,
            handleComplete,
            handleDelete,
            onCreateTodoAction,
            onUpdateTodoAction,
            openModal,
            setOpenModal,
            onSynchronize,
            
        }}>
            {children}
           
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
