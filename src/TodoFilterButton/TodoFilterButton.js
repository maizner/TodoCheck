import React from "react";
import { TodoFilterList } from '../TodoFilterList/TodoFilterList';
import { TodoFilterItem } from '../TodoFilterItem/TodoFilterItem';
import { ReactComponent as IconLinearFlag } from '../icon-linear-flag.svg';
import { MdOutlineChevronRight } from "react-icons/md";
import { TodoContext } from '../TodoContext/TodoContext';

function TodoFilterButton() {
    const {
        priorities,  
        todos, 
        loading,
        setSelectedPriority,
    } = React.useContext(TodoContext);

    // function handleFilter(priorityName) {
    //     console.log("clic en filtro" + priorityName)
       
    // }

    if (loading) {
        return <div className="text-sm text-td-primary-2">Cargando...</div>; 
    }

    // Obtener prioridades únicas de las tareas
    const uniquePriorities = [...new Set(todos?.map((todo) => todo.priority))];

    return (
        <div className="relative">
            <button className='flex flex-row content-center bg-transparent text-td-primary-2 hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[12px] leading-[12px]'>
                <IconLinearFlag width="15" height="15" className="mx-1" />
                Prioridad
                <MdOutlineChevronRight className="mx-1" />
            </button>
            
            <TodoFilterList key="filterList">
                {uniquePriorities.map((priority) => {
                    const priorityObject = priorities[priority];

                    if (priorityObject) {
                        return (
                            <TodoFilterItem
                                key={priority}
                                color={`text-${priorityObject.color}`}
                                onClick={() => {
                                    setSelectedPriority(priority);
                                    console.log("clic en  prioridad "+ priority)
                                }}
                            >
                                {priorityObject.name}
                            </TodoFilterItem>
                        );
                    } else {
                        console.warn(`No tasks with priority: ${priority}`);
                        return null;
                    }
                })}
            </TodoFilterList>
        </div>
    );
}

export { TodoFilterButton };
