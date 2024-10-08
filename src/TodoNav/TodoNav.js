import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { TodoSearch } from '../TodoSearch/TodoSearch';

function TodoNav() {

    return(
        <div className='flex flex-col items-center justify-center w-full h-full md:flex-row md:justify-between'>
            <Avatar />
            <TodoSearch />
            
        </div>
    );
}

export { TodoNav };

