import React from "react";
import { TodoFilterList } from '../TodoFilterList/TodoFilterList';
import { TodoFilterItem } from '../TodoFilterItem/TodoFilterItem';
import { ReactComponent as IconLinearFlag } from '../icon-linear-flag.svg';
import { MdOutlineChevronRight } from "react-icons/md";





function TodoFilterButton(props){

    return(
        <div className="filter-button relative">
            <button className='flex flex-row content-center bg-transparent text-td-primary-2 hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[12px] leading-[12px]'>
                <IconLinearFlag width="15" height="15"  className="mx-1" />
                {props.proprity}
                <MdOutlineChevronRight  className="mx-1"  />
            </button>
            <TodoFilterList>
                <TodoFilterItem color="text-red-500">
                    Urgente
                </TodoFilterItem>
                <TodoFilterItem color="text-yellow-500">
                    Alta
                </TodoFilterItem>
                <TodoFilterItem color="text-sky-500">
                    Normal
                </TodoFilterItem>
                <TodoFilterItem color="text-baja">
                    Baja
                </TodoFilterItem>
            </TodoFilterList>
        </div>
    );
}

export {TodoFilterButton};
