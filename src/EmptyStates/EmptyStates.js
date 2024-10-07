import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodosInitState } from '../EmptyStates/InitState'; 
import {TodosEmptySearch } from '../EmptyStates/EmptySearch';
import {TodosEmptyFilter } from '../EmptyStates/EmptyFilter';


function TodosEmpty() {

    const {
        searchTerm,
        selectedPriority,
        completedFilter,
    } = React.useContext(TodoContext);

    const isSearchEmpty = searchTerm;
    const isFilterEmpty = selectedPriority || completedFilter
    
  return (
    isSearchEmpty ? <TodosEmptySearch /> :
    isFilterEmpty ? <TodosEmptyFilter /> :
    <TodosInitState />
  );
}

export { TodosEmpty };
