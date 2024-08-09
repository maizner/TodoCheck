import React from 'react'; 
import { ReactComponent as IconFlag } from '../icon-fill-flag.svg';
import { ReactComponent as IconCalendar } from '../icon-calendar.svg';
import { ReactComponent as IconDelete } from '../icon-delete.svg';
import { ReactComponent as IconEdit} from '../icon-edit.svg';
import { IoRadioButtonOff, IoCheckmarkCircle } from "react-icons/io5";

function TodoItem(props) {
    return (
        <li 
            className={`TodoItem flex flex-row items-center justify-between bg-td-secondary-2 relative rounded-md mt-1 w-full cursor-pointer  hover:bg-td-secondary-emphasis border-l-[15px] py-3 px-3
                ${props.completed && "bg-td-secondary-emphasis"}`}
            onClick={props.onComplete}
        >
            <span 
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            >
                {/* Esta es la forma de decir si completed es true. Con el signo fr pregunta y la igualación */}
                {props.completed ? 
                <IoCheckmarkCircle className='w-6 h-6 text-td-primary-0'/>
                 : 
                <IoRadioButtonOff className='w-6 h-6 text-td-primary-0'/>}
            </span>
            <div className='flex flex-col text-left w-full px-2'>
                <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                    {props.text}
                </p>
                <div className='flex flex-row text-left w-full px-2'>
                    <IconCalendar width="15" height="15"  className="mx-1" />
                    <p>4 Oct</p>
                    <IconFlag width="15" height="15"  className="mx-1" />
                </div>
            </div>

            <div className='flex flex-row'>
                <span className="Icon Icon-edit">
                <IconEdit width="24" height="24"  className="mx-1" />
                </span>
                <span 
                    className="Icon Icon-delete"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        props.onDelete();
                    }}
                >
                    <IconDelete width="24" height="24"  className="mx-1" />
                </span>
            </div>
           
        </li>
    );
}

export { TodoItem };
