import React from 'react';

//HOC
function withStorageListener(WrappedComponent) {

    return function WrappedWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {

            if (change.key ==='TODOS_V1'){ // es el nombre de mi localStorage
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
