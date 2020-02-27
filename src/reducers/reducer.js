export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const todoReducer = (state, action) => {
    
    switch (action.type){
        case "ADD_TODO":
            return [...state, {item: action.payload, completed: false, id: new Date()}]
            
        case "TOGGLE_TODO":
             
           return state.map(x => {
                if(action.payload === x.id){
                    return {
                        ...x,
                        completed: !x.completed
                    };
                }
                return x;
            })
        
        case "CLEAR_TODO":

            return state.filter(x => !x.completed);
        
        default:
          return state;  
    }
    
};
