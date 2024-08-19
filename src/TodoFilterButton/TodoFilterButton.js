import React from "react";
import { TodoFilterList } from '../TodoFilterList/TodoFilterList';
import { TodoFilterItem } from '../TodoFilterItem/TodoFilterItem';
import { ReactComponent as IconLinearFlag } from '../icon-linear-flag.svg';
import { MdOutlineChevronRight } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";


import { TodoContext } from '../TodoContext/TodoContext';

function TodoFilterButton() {
    const {
        priorities,  
        todos, 
        loading,
        handleSelectPriority,
        activeFilter,
        toggleFilters,
        clearFilters,
    } = React.useContext(TodoContext);


    if (loading) {
        return <div className="text-sm text-td-primary-2">Cargando...</div>; 
    }

    // Obtener prioridades únicas de las tareas
    const uniquePriorities = [...new Set(todos?.map((todo) => todo.priority))];

    return (
        <div className="relative">
            <div className="flex flex-row gap-2">
                <button 
                className='flex flex-row content-center bg-transparent text-td-primary-2 hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[12px] leading-[12px]'
                onClick = {toggleFilters}>
                    
                    <IconLinearFlag width="15" height="15" className="mx-1" />Prioridad
                    <MdOutlineChevronRight className="mx-1" />
                </button>
                {activeFilter.length > 0 && (
                    <button 
                    className='flex flex-row content-center bg-td-primary-0 text-td-secondary-0 hover:bg-td-warning border-2 border-td-primary-0 hover:text-td-secondary-0 hover:border-td-warning font-semibold py-2 my-0 max-h-8 px-2 rounded-full text-[12px] leading-[12px]'
                    onClick = {clearFilters}
                     title="Limpiar filtros" >
                        
                        <MdCleaningServices />
                        
                    </button>
                    
                
                )}
            </div>
            
            <TodoFilterList key="filterList">
                {uniquePriorities.map((priority) => {
                    const priorityObject = priorities[priority];

                    if (priorityObject) {
                        return (
                            <TodoFilterItem
                                key={priority}
                                color={`text-${priorityObject.color}`}
                                onClick={() => {
                                    handleSelectPriority(priority);
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
