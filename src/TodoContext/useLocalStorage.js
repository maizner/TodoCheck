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
//     { text: 'La información de la completitud debe estar fija', completed: false },
//     { text: 'Poder destildar un TODO si te arrepentís', completed: true },
//     { text: 'Que la selección se pueda manejar desde el item', completed: true },
//     { text: 'Mensaje de empty state cuando hayas completado todos los TODOS', completed: false },
//     { text: 'Mensaje popup bloqueante antes de eliminar un TODO', completed: false },
//     { text: 'Agregar astilla de porcentaje de completitud', completed: false },
//     { text: 'Edición de TODOs (TODOs editables con lapicito)', completed: false },
//     { text: 'Tomar curso : https://platzi.com/cursos/arrays/', completed: false },
//     { text: 'Los TODOs completos pasen visualmente a otro lado para ser eliminados', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')
