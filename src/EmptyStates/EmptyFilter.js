import React from 'react';
import { EmptyState } from './EmptyState';




function TodosEmptyFilter() {
  return (

    < EmptyState 
    iconName="NoFilter" 
    title="No hay resultados" 
    text="No hay filtros que coincidan con tu búsqueda" 
  />
   );
}

export { TodosEmptyFilter };
