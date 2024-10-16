import React from 'react';
import withStorageListener from './withStorageListener';
import { ReactComponent as IconReload } from '../icon-reload.svg';
import './alert.css';


function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div className='wrapper fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                <div className='sm-alert bg-td-secondary-2 p-4 flex flex-col items-center justify-between rounded-lg shadow-sm z-50'>
                    <h2 className='alert__title text-md font-bold text-white text-center'>Hemos detectado cambios</h2>
                    <p className='alert__message text-xs font-normal text-white text-center'>Se han realizado cambios en otra pestaña o ventana.</p>
                    <button 
                    className='alert__button bg-td-secondary-2 text-td-primary-2 flex flex-row items-center hover:bg-td-primary-2 border-2 hover:text-td-secondary-0 font-bold py-2 my-0 max-h-8 px-2 rounded-full text-[10px] leading-[10px] tracking-wider' 
                    onClick={() => toggleShow(true)}>
                        < IconReload className='w-4 h-4 mr-2'/>
                        Actualizar 
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
    

}
export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);