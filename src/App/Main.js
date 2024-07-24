import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage'

// const defaultTodos = [
//     { text: 'La información de la completitud debe estar fija', completed: false },
//     { text: 'Poder destildar un TODO si te arrepentís', completed: true },
//     { text: 'Que la selección se pueda manejar desde el item', completed: true },
//     { text: 'Mensaje de empty state cuando hayas completado todos los TODOS', completed: false },
//     { text: 'Mensaje popup bloqueante antes de eliminar un TODO', completed: false },
//     { text: 'Agregar astilla de porcentaje de completitud', completed: false },
//     { text: 'Edición de TODOs (TODOs editables con lapicito)', completed: false },
//     { text: 'Tomar curso : https://platzi.com/cursos/arrays/', completed: false },
//     { text: 'Los TODOs completos pasen visualmente a otro lado para ser eliminados', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')


function App() {
   
    //El segundo argumento savePersistedItem retornado del custom hook pero lo nombramos como queremos
    const {
        item: todos, 
        savePersistedItem: savePersistedTodo,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    /*
        *searchTerm es una variable de estado que almacena el valor actual del término de búsqueda ingresado por el usuario.
        *Se inicializa con una cadena vacía '', lo que significa que inicialmente no hay ningún término de búsqueda. */
    const [searchTerm, setSearchTerm] = React.useState('');

    //Verificando con log
    console.log("Initial todos:", todos);


    // Filtrar los todos completados
    const completedTodosCount = todos.filter(
        todoElem=> !!todoElem.completed
    ).length;
    // Obtiene el total de todos en la lista
    const totalTodosCount = todos.length;

    const searchedTodos = todos.filter(

        (todoElem) => { 
            const lowerCaseTodoText = todoElem.text.toLowerCase();
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return lowerCaseTodoText.includes(lowerCaseSearchTerm)
        }
    );

    
    //Acción de completar todos
    const onCompleteTodoAction = (text)=> {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.text === text
        );
        // newTodos[todoIndex].completed = true;
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Alternar el estado

        savePersistedTodo(newTodos);
    }

    //Acción de borrar todos
    const onDeleteTodoAction = (text)=> {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todoElem) => todoElem.text === text
        );
        newTodos.splice(todoIndex, 1);
        savePersistedTodo(newTodos);
    }


    return (
       <AppUI 
       loading = {loading}
       error = {error}
       completedTodosCount = {completedTodosCount}
        totalTodosCount = {totalTodosCount}
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
        searchedTodos = {searchedTodos}
        onCompleteTodoAction = {onCompleteTodoAction}
        onDeleteTodoAction = {onDeleteTodoAction}
       
       />
    );
}

export default App;
