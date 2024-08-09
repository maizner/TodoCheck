import React from "react";
import { ReactComponent as Icon } from '../td-linear-icon-flag.svg';
import { MdOutlineChevronRight } from "react-icons/md";





function TodoFilterButton(){

    return(
        <div className="filter-button">
            <button className='flex flex-row content-center bg-transparent text-td-primary-2 hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-normal py-2 my-0 max-h-8 px-2 rounded-full text-[12px] leading-[12px]'>
                <Icon width="15" height="15"  className="mx-1" />
                Prioridad
                <MdOutlineChevronRight  className="mx-1"  />
            </button>
        </div>
    );
}

export {TodoFilterButton};
