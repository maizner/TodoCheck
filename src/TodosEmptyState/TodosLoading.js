import React from 'react';
// import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-4 w-100 mt-5">
      <div className="h-20 bg-custom-dark w-full rounded-md"></div>
      <div className="h-20 bg-custom-dark w-full rounded-md"></div>
      <div className="h-20 bg-custom-dark w-full rounded-md"></div>
    </div>
  );
}

export { TodosLoading };
