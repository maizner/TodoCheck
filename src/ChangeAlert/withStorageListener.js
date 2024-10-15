import React from 'react';


function withStorageListener(WrappedComponent) {

return function WrappedWithStorageListener(props){
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {

        if (change.key ==='TODOS_V1'){
            console.log( 'hubo cambios en tdoos1');
            setStorageChange(true) 
        }

    });

    const onToggleShow = () => {
        props.synchronize();
        setStorageChange(false)
    }

    return (
        <WrappedComponent 
        show ={storageChange}
        toggleShow = {onToggleShow}
        {...props} 
    />
    )
};


}
export default withStorageListener;
