import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchTerm, 
    setSearchTerm,
  } = React.useContext(TodoContext);
  
  return (
    <div className=' mb-4 flex flex-row justify-between bg-td-secondary-2 w-full rounded-md relative max-w-[400px] h-[43px]'>
      <IoSearchOutline 
      className='flex p-2 mt-1 mb-1 text-gray-200 absolute top-0 left-0 bottom-0 z-10 w-9 h-9' />
    
      <input
            className='bg-transparent border-none w-full h-[43px] p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-td-primary-0 rounded-md focus:shadow-td-primary-0 focus:shadow-md
            font-raleway font-normal placeholder:text-td-primary-2 text-white text-sm'
            placeholder='Busca Tareas Aquí...'
            value={searchTerm}
            onChange={(event) => {

            setSearchTerm(event.target.value);
        }}
      />
      
      
    </div>
    
  );
}

export { TodoSearch };
