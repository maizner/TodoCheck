import React from 'react';
import ReactDOM from 'react-dom';


function Modal ({children}){
    
    return ReactDOM.createPortal(
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-td-secondary-1 rounded-lg shadow-lg px-8 py-10 w-11/12 md:w-1/2 lg:w-1/2 max-w-[520px]'>
                {children}
            </div>
        </div>, 
        document.getElementById('modal')
    );

};

export { Modal }