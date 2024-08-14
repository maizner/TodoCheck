import React from 'react';


function useLocalStorage(itemName, initialValue){
    
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);



    React.useEffect( ()=> {

       setTimeout(() => {

            try {

                const localStorageItem = localStorage.getItem(itemName)

                let parsedItem;

                if (!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
            
                }

            setLoading(false);

            } catch(error) {
                
                // setError(error);
                setError(true);
                setLoading(false);

            }

       }, 2000);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    

    //funcion para persistir los cambios. Esta se la pasaremos a accion de completar y borrar todos
    const savePersistedItem = (newItem) => {
        localStorage.setItem(
            itemName, JSON.stringify(newItem)
        );
        setItem(newItem);
    };
    return {
        item, 
        savePersistedItem,
        loading,
        error,
    }

}
export { useLocalStorage }

// const defaultTodos = [
//     { text: 'Mobile App Research', completed: false, priority: 'baja'},
//     { text: 'Poder destildar un TODO si te arrepentís', completed: true, priority: 'normal' },
//     { text: 'Que la selección se pueda manejar desde el item', completed: true, priority: 'alta' },
//     { text: 'Mensaje de empty state cuando hayas completado todos los TODOS', completed: false, priority: 'urgente' },
//     { text: 'Mensaje popup bloqueante antes de eliminar un TODO', completed: false, priority: 'normal' },
//     { text: 'Agregar astilla de porcentaje de completitud', completed: true, priority: 'alta' },
//     { text: 'Edición de TODOs (TODOs editables con lapicito)', completed: false, priority: 'baja' },

//   ];
  
//   localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')
