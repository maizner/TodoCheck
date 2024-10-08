import React from 'react';
import { Avatar } from '../Avatar';
import { TodoSearch } from '../TodoSearch';

function TodoNav() {

    return(
        <div className='flex flex-col items-center justify-center w-full h-full md:flex-row md:justify-between'>
            <Avatar />
            <TodoSearch />
            
        </div>
    );
}

export { TodoNav };

