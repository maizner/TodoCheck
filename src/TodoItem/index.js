import React from 'react'; 
import { ReactComponent as IconFlag } from '../icon-fill-flag.svg';
import { ReactComponent as IconDelete } from '../icon-delete.svg';
import { ReactComponent as IconEdit } from '../icon-edit.svg';
import { IoRadioButtonOff, IoCheckmarkCircle } from "react-icons/io5";
import { TodoContext } from '../TodoContext';

function TodoItem(props) {

    
    const { 
        priorities,
    } = React.useContext(TodoContext);
    
    const priorityColor = priorities[props.priority]?.color;
    const priorityName = priorities[props.priority]?.name;

    


    return (
        <li 
            className={`TodoItem flex flex-row items-center justify-between bg-td-secondary-2 relative rounded-md mt-1 w-full cursor-pointer  hover:bg-td-secondary-emphasis py-3 px-3 border-l-[15px]
                ${props.completed ? 
                    'border-green-500 bg-td-secondary-emphasis' 
                    : 
                    `border-${priorityColor}`
                } `}
            onClick={props.onComplete}
        >
            <span >

                {props.completed ? 
                    <IoCheckmarkCircle className='w-6 h-6 text-td-primary-0'/>
                    : 
                    <IoRadioButtonOff className='w-6 h-6 text-td-primary-0'/>
                }
            </span>
            <div className='flex flex-col text-left w-full px-2 py-1 text-md '>
                <p className={`f-letter-capitalize ${props.completed && "line-through text-green-500"}`}>
                    {props.text}
                </p>
                <div className='flex flex-row text-left w-full pr-2 items-center'>

                    {/* <div className='flex flex-row mr-1'>
                        <IconCalendar width="15" height="15"  className="mx-1 text-td-primary-2" />
                        <p className='font-raleway font-medium text-sm text-td-primary-2'>4 Oct</p>
                    </div> */}
                    <div className='flex flex-row mr-1'>
                        <IconFlag width="12" height="12"  className= {`mx-1 text-${priorityColor}`} />

                       
                        <p className={`font-raleway font-medium text-[10px] text-${priorityColor}`}>{priorityName}</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center '>
                <span className="group"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        props.onEdit();
                    }}>
                    <IconEdit width="24" height="24"  className="mx-1 text-td-primary-1 group-hover:text-td-primary-0" />
                </span>

                <span className="group"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        props.onDelete();
                    }}>
                    <IconDelete width="24" height="24"  className="mx-1 text-td-primary-1 group-hover:text-td-warning" />
                </span>
            </div>
           
        </li>
    );
}

export { TodoItem };
