import React from 'react';
import { EmptyState } from './EmptyState';





function TodosError() {
  return (
    <EmptyState 
      iconName="Error" 
      title="Ups, algo salió mal" 
      text="Estamos experimentando un problema inesperado. Por favor, vuelve a intentarlo más tarde." 
    />

  );
}

export { TodosError };
