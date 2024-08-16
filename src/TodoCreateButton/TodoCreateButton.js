import React from 'react'; 
import { ReactComponent as IconPlus } from './icon-plus.svg';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCreateButton(){
  const {
    setOpenModal,
} = React.useContext(TodoContext);

    return (
      <button 
      className="w-16 h-16 bg-gradient-to-r from-td-primary-emphasis  to-td-primary-0 shadow-custom-purple fixed bottom-6 right-6 cursor-pointer rounded-full flex items-center justify-center rotate-0 hover:rotate-[224deg] transition-all"
      onClick={
        (event)=> {
          console.log("le diste click")
          console.log(event.target)
          setOpenModal(true);
        }
      }
      ><IconPlus  width="28" height="28" className='text-td-secondary-darken bg' /></button>
    );
    
}

export { TodoCreateButton} ;