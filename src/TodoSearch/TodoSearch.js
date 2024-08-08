import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {
  const {
    searchTerm, 
    setSearchTerm,
  } = React.useContext(TodoContext);
  
  return (
    <div className=" flex flex-row justify-between bg-td-secondary-2 w-full h-full rounded-md relative min-h-[43]">
      <IoSearchOutline className="flex p-2 text-gray-200 absolute top-0 left-0 bottom-0 z-10 w-9 h-9" />

      <input
            className="flex bg-transparent border-none w-full  p-2 pl-10 absolute left-0 max-w-[400px] "
            placeholder="¿Qué tarea estás buscando?"
            value={searchTerm}
            onChange={(event) => {
            console.log("El usuario escribió: " + event.target.value);
            setSearchTerm(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
