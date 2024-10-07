import React from 'react';
import { EmptyStateIllus } from './EmptyStateIllus';




function TodosEmptySearch() {
  return (

    < EmptyStateIllus 
    iconName="NoSearch" 
    title="No hay resultados" 
    text="Prueba buscando algo diferente." 
  />
   );
}

export { TodosEmptySearch };
