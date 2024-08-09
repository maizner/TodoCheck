import React from 'react'; 
import { IoCloseOutline, IoRadioButtonOff, IoCheckmarkCircle } from "react-icons/io5";

function TodoItem(props) {
    return (
        <li 
            className={`TodoItem flex flex-row items-center justify-between bg-td-secondary-2 relative rounded-md mt-1 w-full cursor-pointer  hover:bg-td-secondary-emphasis
                ${props.completed && "bg-td-secondary-emphasis"}`}
            onClick={props.onComplete}
        >
            <span 
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            >
                {/* Esta es la forma de decir si completed es true. Con el signo fr pregunta y la igualación */}
                {props.completed ? <IoCheckmarkCircle /> : <IoRadioButtonOff />}
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <div className='max-w-9'>
                <span className="Icon Icon-edit">
                Edit
                </span>
                <span 
                    className="Icon Icon-delete"
                    onClick={(e) => {
                        e.stopPropagation(); // Evita que el clic en eliminar también complete la tarea
                        props.onDelete();
                    }}
                >
                    <IoCloseOutline />
                </span>
            </div>
           
        </li>
    );
}

export { TodoItem };
