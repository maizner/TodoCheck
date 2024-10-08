import React from 'react';


function TodosLoading() {
  return (
    <div className='animate-pulse flex flex-col items-center gap-1 w-100 mt-5'>
      <div className='h-[72px] bg-td-secondary-2 w-full rounded-md'></div>
      <div className='h-[72px] bg-td-secondary-2 w-full rounded-md'></div>
      <div className='h-[72px] bg-td-secondary-2 w-full rounded-md'></div>
    </div>
  );
}

export { TodosLoading };
