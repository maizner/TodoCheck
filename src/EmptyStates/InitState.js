import React from 'react';
import { EmptyStateIllus } from './EmptyStateIllus';




function TodosInitState() {
  return (
    <EmptyStateIllus 
      iconName="NoTask" 
      title="No hay Tareas" 
      text="¡Crea una tarea!" 
    />

  );
}

export { TodosInitState };
