import React from 'react';
import signature from './signature.svg';


function Footer(){
    return (
        <div className='footer w-full flex flex-row content-center justify-center py-6 px-8'>
            <a rel='noreferrer' target='_blank' href='https://linktr.ee/maiaaizner'>
                <img src={signature} width='200' className='block' alt='contact me' />
            </a>
        </div>
    );
}

export{Footer};