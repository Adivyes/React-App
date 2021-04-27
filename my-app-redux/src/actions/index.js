export const increment = numb  => {
    return{
        type: 'INCREMENT',
        payload:numb

    };
};

export const decrement = ()  => {
    return{
        type: 'DECREMENT'
    };
};

export const addItem =(text) =>{
    return { 
        type: 'ADD_ITEM', 
        payload: text };
    };