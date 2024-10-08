import React from 'react';
import logo from './logo.svg';


function Header(){
    return (
        <div className='w-full flex flex-row content-center justify-center py-6 px-8'>
            <img src={logo} width='150'  alt='logo' />
        </div>
    );
}

export{Header};