import React from 'react';
import { EmptyState } from './EmptyState';




function TodosInitState() {
  return (
    <EmptyState 
      iconName="NoTask" 
      title="No hay Tareas" 
      text="No tienes pendientes 💪. ¡Crea una tarea!" 
    />

  );
}

export { TodosInitState };
