

 const ListReducers = (state ={items: []}, action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
        return {item: [...state.item, action.payload]};
        default:
        return state;
        }
}
export default ListReducers