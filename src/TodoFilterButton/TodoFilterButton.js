    import React from "react";
    import { TodoFilterList } from '../TodoFilterList/TodoFilterList';
    import { TodoFilterItem } from '../TodoFilterItem/TodoFilterItem';
    import { ReactComponent as IconLinearFlag } from '../icon-linear-flag.svg';
    import { MdOutlineChevronRight } from "react-icons/md";
    import { TodoContext } from '../TodoContext/TodoContext';





    function TodoFilterButton(){
        const {
            priorities,  
            todos, 
            loading
        } = React.useContext(TodoContext);
        console.log('priorities', priorities); // Debugging
        console.log('todos', todos); // Debugging
        console.log('loading', loading); // Debugging



        if (loading) {
            return <div>Cargando...</div>; // o puedes mostrar un spinner o un mensaje de carga
        }
    

    // Asegúrate de que todos contenga elementos y que tengan la propiedad `priority`
    const uniquePriorities = [...new Set(todos?.map((todo) => todo.priority))];


        return(
            <div className="relative">

                <button className='flex flex-row content-center bg-transparent text-td-primary-2 hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[12px] leading-[12px]'>
                    <IconLinearFlag width="15" height="15"  className="mx-1" />
                        Prioridad
                    <MdOutlineChevronRight  className="mx-1" />
                </button>
                
                
            
                <TodoFilterList key="filterList">
                    {uniquePriorities.map((priority) => {
                        const priorityObject = priorities[priority];

                        if (priorityObject) {

                        return (
                            <TodoFilterItem
                            key={priority}
                            color={`text-${priorityObject.color}`}
                            onClick={() => handleFilter(priority)}
                            >
                            {priorityObject.name}
                            </TodoFilterItem>
                        );
                    } else {
                        console.warn(`No tienes tareas`);
                        return null;
                    }
                    })}
                </TodoFilterList>
                
            </div>
        );
    }

    
    function handleFilter(priorityName) {
        console.log('Filtro activado para la prioridad:', priorityName);
        // Aquí puedes implementar la lógica para activar el filtro correspondiente
    }

    export {TodoFilterButton};
