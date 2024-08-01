import React from 'react'; 
import './TodoCreateButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCreateButton(){
  const {
    setOpenModal,
} = React.useContext(TodoContext);

    return (
      <button 
      className="TodoCreateButton"
      onClick={
        (event)=> {
          console.log("le diste click")
          console.log(event.target)
          setOpenModal(true);
        }
      }
      >+</button>
    );
    
}

export { TodoCreateButton} ;