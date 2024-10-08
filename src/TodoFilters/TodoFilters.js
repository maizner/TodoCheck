import React from 'react';
import { TodoFilterList } from '../TodoFilterList/TodoFilterList';
import { TodoFilterItem } from '../TodoFilterItem/TodoFilterItem';
import { ReactComponent as IconLinearFlag } from '../icon-linear-flag.svg';
import { ReactComponent as IconFillFlag } from '../icon-fill-flag.svg';
import { ReactComponent as IconRemoveFilter } from '../icon-remove-filters.svg';
import { MdOutlineChevronRight } from 'react-icons/md';
import { IoRadioButtonOff, IoCheckmarkCircle } from 'react-icons/io5';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoFilters() {
    const {
        priorities,  
        todos, 
        loading,
        selectedPriority,
        handleSelectPriority,
        activeFilter,
        toggleFilters,
        clearFilters,
        completedFilter,
        handleSelectCompletedFilter,
    } = React.useContext(TodoContext);

   
    if (loading) {
        return <div className='text-sm text-td-primary-2'>Cargando...</div>; 
    }

    const priorityColor = priorities[selectedPriority]?.color;
    const uniquePriorities = [...new Set(todos?.map((todo) => todo.priority))];
    return (
        <div className='filters flex flex-col md:flex-row items-end justify-between w-full'>
            <h2 className='hidden md:flex font-raleway font-normal text-[20px]'>Tareas</h2>
            <div className='relative w-full md:w-fit'>
                <div className='flex flex-row justify-between md:justify-normal gap-1 my-4 md:my-0 w-full '>
                
                    <button 
                        onClick={() => handleSelectCompletedFilter(true)}
                        className={`flex flex-row items-center ${completedFilter === true ? 'bg-td-primary-2 text-td-secondary-2' : 'bg-transparent text-td-primary-2'}  hover:bg-td-primary-2 border-0 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[10px] leading-[10px]`}                    
                    >
                        <IoCheckmarkCircle className='mx-1 text-sm' />
                        Completas
                    </button>

                    <button 
                        onClick={() => handleSelectCompletedFilter(false)}
                        className={`flex flex-row items-center ${completedFilter === false ? 'bg-td-primary-2 text-td-secondary-2' : 'bg-transparent text-td-primary-2'}  hover:bg-td-primary-2 border-0 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[10px] leading-[10px] `}
                    >
                        <IoRadioButtonOff className='mx-1 text-sm' />
                        Incompletas
                    </button>

                    <div className='relative'>
                        <button 
                            className={`${selectedPriority ? `border-${priorityColor} bg-td-secondary-2 text-td-primary-2` : 'bg-td-secondary-2 text-td-primary-2 font-bold '} flex flex-row items-center hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[10px] leading-[10px]`}
                            onClick={toggleFilters}
                        >
                           
                                { selectedPriority ? 
                                    <IconFillFlag width='15' height='15' className= {`mx-1 text-${priorityColor}`} /> :
                                    <IconLinearFlag width='15' height='15' className= {`mx-1`} />
                                }
                                {selectedPriority ? selectedPriority :'Prioridad'}
                          
                                 <MdOutlineChevronRight className= {`mx-1`}  />
                           
                        </button>
                    
                        <TodoFilterList key='filterList'>
                            {uniquePriorities.map((priority) => {
                                const priorityObject = priorities[priority];
                                if (priorityObject) {
                                    return (
                                        <TodoFilterItem
                                            key={priority}
                                            color={`text-${priorityObject.color}`}
                                            isSelected={selectedPriority === priority}
                                            onClick={() => handleSelectPriority(priority)}
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

                    {activeFilter.length > 0 && (
                        <button
                            className='flex flex-row items-center justify-center text-td-secondary-0 bg-td-warning hover:opacity-80 border-2 border-td-warning hover:text-td-secondary-0 hover:border-td-warning font-semibold py-2 my-0 max-h-8 px-[7px] rounded-full text-[10px] leading-[10px]'
                            onClick={clearFilters}
                            title='Limpiar filtros' 
                        >
                            <IconRemoveFilter width='15' height='15' />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export { TodoFilters };
