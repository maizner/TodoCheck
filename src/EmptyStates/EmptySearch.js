import React from 'react';
import { EmptyState } from './EmptyState';




function TodosEmptyState() {
  return (

    < EmptyState 
    iconName="NoSearch" 
    title="No hay resultados" 
    text="Prueba buscando algo diferente." 
  />
   );
}

export { TodosEmptyState };
