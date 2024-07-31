import React from 'react';
import './TodoSearch.css';
import { IoSearchOutline } from "react-icons/io5";
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {
  const {
    searchTerm,
    setSearchTerm,
  } = React.useContext(TodoContext);
  
  return (
    <div className="TodoSearchContainer">
      <IoSearchOutline className="Icon Icon-search" />
      <input
            placeholder="¿Qué tarea estás buscando?"
            className="TodoSearch"
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
