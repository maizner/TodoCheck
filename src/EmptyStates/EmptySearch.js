import React from 'react';
import { EmptyStateIllus } from './EmptyStateIllus';


function TodosEmptySearch({searchText}) {
  
  return (
    <>
      < EmptyStateIllus 
        iconName='NoSearch' 
        title='No hay resultados' 
        text ={`Prueba buscando algo diferente a ${(searchText)} .`}
      />
    </>
   );
}

export { TodosEmptySearch };
