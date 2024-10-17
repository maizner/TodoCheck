import React from 'react';

function useStorageListener({ triggerStorageSynchro }) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true);
        }
    });

    const onToggleShow = () => {
        // Llamamos a la función pasada por props
        triggerStorageSynchro();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow: onToggleShow,
    };
}

export default useStorageListener;
