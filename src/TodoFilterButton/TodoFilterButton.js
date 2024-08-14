import React from "react";
import { TodoFilterList } from '../TodoFilterList/TodoFilterList';
import { TodoFilterItem } from '../TodoFilterItem/TodoFilterItem';
import { ReactComponent as IconLinearFlag } from '../icon-linear-flag.svg';
import { MdOutlineChevronRight } from "react-icons/md";
import { TodoContext } from '../TodoContext/TodoContext';





function TodoFilterButton(){
    const {priorities} = React.useContext(TodoContext)

    return(
        <div className="relative">
            <button className='flex flex-row content-center bg-transparent text-td-primary-2 hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[12px] leading-[12px]'>
                <IconLinearFlag width="15" height="15"  className="mx-1" />
                    Prioridad
                <MdOutlineChevronRight  className="mx-1" />
            </button>
            
            
                <TodoFilterList key='filterList'>
                    {Object.entries(priorities).map(([key, { name, color }]) => (
                        <TodoFilterItem
                            key={key}
                            color={`text-${color}`}
                            >
                            {name}
                        </TodoFilterItem>
                    ))}
                </TodoFilterList>
            
        </div>
    );
}

export {TodoFilterButton};
