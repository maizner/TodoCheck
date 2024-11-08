import React from 'react';

function useStorageListener({ onSynchronize }) {

    const [storageChange, setStorageChange] = React.useState(false);


    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true);
        }
    });

    const onToggleShow = () => {
        onSynchronize();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow: onToggleShow,
    };
}

export default useStorageListener;
