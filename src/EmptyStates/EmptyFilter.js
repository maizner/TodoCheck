import React from 'react';
import { EmptyStateIllus } from './EmptyStateIllus';




function TodosEmptyFilter() {
  return (

    < EmptyStateIllus 
      iconName='NoFilter' 
      title='No hay resultados' 
      text='No hay filtros que coincidan con tu búsqueda' 
  />
   );
}

export { TodosEmptyFilter };
