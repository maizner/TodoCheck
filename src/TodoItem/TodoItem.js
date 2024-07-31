import React from 'react'; 
import { IoCloseOutline, IoRadioButtonOff, IoCheckmarkCircle } from "react-icons/io5";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li 
            className={`TodoItem ${props.completed && "TodoItem--active"}`}
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
            <span 
                className="Icon Icon-delete"
                onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic en eliminar también complete la tarea
                    props.onDelete();
                }}
            >
                <IoCloseOutline />
            </span>
        </li>
    );
}

export { TodoItem };
