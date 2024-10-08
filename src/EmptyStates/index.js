import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodosInitState } from './InitState'; 
import { TodosEmptySearch } from './EmptySearch';
import { TodosEmptyFilter } from './EmptyFilter';


function TodosEmpty() {

    const {
        searchTerm,
        selectedPriority,
        completedFilter,
    } = React.useContext(TodoContext);

    const isSearchEmpty = searchTerm;
    const isFilterEmpty = selectedPriority || completedFilter;
    
  return (
    isSearchEmpty ? 
    <TodosEmptySearch searchText = {searchTerm} /> :
    isFilterEmpty ? <TodosEmptyFilter /> :
    <TodosInitState />
  );
}

export { TodosEmpty };
