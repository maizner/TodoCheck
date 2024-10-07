import React from 'react';
import { ReactComponent as IllustrationNoSearch } from './EmptyState-NoSearch.svg';
import { ReactComponent as IllustrationNoTask } from './EmptyState-NoTask.svg';
import { ReactComponent as IllustrationFilter } from './EmptyState-NoFilter.svg';
import { ReactComponent as IllustrationError } from './EmptyState-Error.svg';

const icons = {
  NoSearch: IllustrationNoSearch,
  NoTask: IllustrationNoTask,
  NoFilter: IllustrationFilter,
  Error: IllustrationError,
};

function EmptyStateIllus({ iconName, title, text }) {
  const IconComponent = icons[iconName];

  return (
    <div className="block mx-auto max-w-[200px]">
      <div className="flex flex-col items-center justify-center">
        {IconComponent ? (
          <IconComponent className="my-10" />
        ) : (
          <p className="text-red-500 text-sm">Icono no encontrado</p> // Mensaje de error si no se encuentra el icono
        )}
        <h2 className="text-td-primary-1 text-md font-bold text-center">{title}</h2>
        <p className="text-td-primary-1 text-sm font-normal text-center">{text}</p>
      </div>
    </div>
  );
}

export { EmptyStateIllus };
