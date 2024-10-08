import React from 'react';
import { EmptyStateIllus } from './EmptyStateIllus';





function TodosError() {
  return (
    <EmptyStateIllus 
      iconName='Error' 
      title='Ups, algo salió mal' 
      text='Estamos experimentando un problema inesperado. 
      Por favor, vuelve a intentarlo más tarde.' 
    />

  );
}

export { TodosError };
