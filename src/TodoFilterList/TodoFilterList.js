import React from "react";

function TodoFilterList(props) {
    return (
        <ul className='w-28 min-h-28 pb-3 pt-2 text-[12px] text-td-primary-2 bg-td-secondary-2 absolute z-50 top-9 rounded-md shadow-md shadow-td-secondary-darken/30'>
            {props.children}
        </ul>
    );
}

export { TodoFilterList };