import React from 'react';
import withStorageListener from './withStorageListener';


function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios </p>
                <button 
                onClick={() => toggleShow(true)}
                >
                    Refrescar
                </button>
            </div>
        );
    } else {
        return (
            <>
                {console.log('No hubo cambios')}
               
               
            </>
        );
    }
    

}
export const ChangeAlertWSL = withStorageListener(ChangeAlert);