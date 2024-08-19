import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();


function TodoProvider({ children }) {
    

    const [priorities, setPriorities] = React.useState({
        baja: { name: 'Baja', color: 'gray-500' },
        normal: { name: 'Normal', color: 'blue-200' },
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
    //Inicialmente los filtros tendran un estado nulo
    const [selectedPriority, setSelectedPriority] = React.useState(null);
    const [filterIsVisible, setFilterIsVisible] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState([]);
    const [completedFilter, setCompletedFilter] = React.useState(null);

    

    
    const toggleFilters = () => {
        setFilterIsVisible((prevState) => !prevState);

    }

    const clearFilters = () => {
        setActiveFilter([]);
        setSelectedPriority(null);  // Reiniciar la prioridad seleccionada
        setCompletedFilter(null);  // Limpiar el filtro de completado
        setFilterIsVisible(false);  // Cerrar el listado
        console.log('Filtros limpiados');
    }

  

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

   
    const prioritizedTodos = todos.filter((todoElem) => {
        const priorityMatch = 
        !selectedPriority || todoElem.priority === selectedPriority;
        const completedMatch = 
        completedFilter === "completed" ? todoElem.completed :
        completedFilter === "uncompleted" ? !todoElem.completed :
        true;
        return priorityMatch && completedMatch;;
    });

    const completedTodos = todos.filter((todoElem) => {
        const completedMatch = 
            completedFilter === "completed" ? todoElem.completed :
            completedFilter === "uncompleted" ? !todoElem.completed :
            true;
        return  completedMatch;
    });

    const handleSelectCompletedFilter = (filter) => {

         // Verificamos si la prioridad ya está seleccionada o no
         if (!activeFilter.includes(filter)) {

            setActiveFilter((prevFilters) => [...prevFilters, filter]);

        }
        setCompletedFilter(filter);  // filter puede ser "completed", "uncompleted" o null
        setFilterIsVisible(false);  // Cerrar el menú si es necesario
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
            todos,
            priorities, 
            selectedPriority,
            setSelectedPriority,
            filterIsVisible,
            toggleFilters,
            activeFilter,
            setActiveFilter,
            clearFilters,
            handleSelectPriority,
            handleSelectCompletedFilter,
            prioritizedTodos, //Filtrar por prioridad
            completedTodos, //Filtrar por completitud
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
            
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
