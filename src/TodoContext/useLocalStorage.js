import React from 'react';


function useLocalStorage(itemName, initialValue){
    
    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
    const {synchroStorage,item,loading,error} = state;

    //Action Creators
    const onError = (error) => dispatch({
        type: actionTypes.error, 
        payload: error,
    });
    const onSuccess = (item) => dispatch({
        type: actionTypes.success,
        payload: item,
    });
    const onSave = (item) => dispatch({
        type: actionTypes.save,
        payload: item,
    });
    const onSynchronize = () => dispatch({
        type: actionTypes.triggerSynchro
    });
   
    //trigger synchro storage
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
                    onSave(parsedItem);
            
                }

                onSuccess(parsedItem)

            } catch(error) {
                onError(error);
            }

       }, 2000);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [synchroStorage]);


    const savePersistedItem = (newItem) => {
        localStorage.setItem(
            itemName, JSON.stringify(newItem)
        );
        onSave(newItem);
    };

    
    return {
        item, 
        savePersistedItem,
        loading,
        error,
        onSynchronize,
    }

}

const initialState = ({ initialValue}) => ({
    synchroStorage:true,
    item:initialValue,
    loading:true,
    error:false
});

const actionTypes = {
    error:'ERROR', 
    success: 'SUCCESS',
    save: 'SAVE',
    triggerSynchro: 'TRIGGERSYNCHRO'
   
}
const reducerObject = ( state, payload) =>({

    [actionTypes.error]: {
        ...state,
        error:true, 
        loading: false,
    },
    [actionTypes.success]: {
        ...state,
        error:false,
        loading: false,
        synchroStorage:true, 
        item: payload, 
    },
    [actionTypes.save]: {
        ...state,
        item: payload,
    },
    [actionTypes.triggerSynchro]: {
        ...state,
        loading: true,
        synchroStorage:false, 
    },

})

const reducer = ( state, action ) => {
    return reducerObject(state, action.payload)[action.type] || state; 
}


export { useLocalStorage }

// const defaultTodos = [
//     { text: 'Mobile App Research', completed: false, priority: 'urgente'},
//     { text: 'Prepare Wireframe for Main Flow', completed: true, priority: 'alta' },
//     { text: 'Website Research', completed: true, priority: 'normal' },
//     { text: 'Prepare Screens', completed: false, priority: 'baja' },
//     { text: 'Blocking popup message', completed: false, priority: 'normal' },
//     { text: 'Add a datepicker to this project', completed: true, priority: 'alta' },
//     { text: 'Make editable all tasks', completed: false, priority: 'baja' },

//   ];
  
//   localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')
