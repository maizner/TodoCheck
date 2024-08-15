import React from "react";
import { ReactComponent as IconFill } from '../icon-fill-flag.svg';

function TodoFilterItem(props) {
    

    return (
       
        <li 
            className='flex flex-row items-center px-3 py-2 hover:bg-td-secondary-emphasis cursor-pointer'
            onClick={props.onClick}
        >
            <IconFill width="15" height="15" className={`${props.color} mr-2`} />
            {props.children}
        </li>

    );
}

export { TodoFilterItem };
