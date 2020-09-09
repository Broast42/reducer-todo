export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    completeBy: "",
    completeOn: "",
    id: 3892987589
}]

export const todoReducer = (state, action) => {
    
    switch (action.type){
        case "ADD_TODO":
            return [...state, {item: action.payload, completed: false, id: new Date(), completeBy: "", completeOn: ""}]
            
        case "TOGGLE_TODO":
             
           return state.map(x => {
                if(action.payload === x.id){
                    if(x.completeOn === ""){
                        return {
                            ...x,
                            completed: !x.completed,
                            completeOn: Date()
                        };   
                    }else{
                        return {
                            ...x,
                            completed: !x.completed,
                            completeOn: ""
                        };  
                    }
                    
                }
                return x;
            })
        
        case "CLEAR_TODO":

            return state.filter(x => !x.completed);

        case "COMPLETE_BY":

            return state.map(x =>{
                if(action.payload.itemId === x.id){
                    return {
                        ...x,
                        completeBy: action.payload.comBy
                    };
                }
                return x;
            })
        
        default:
          return state;  
    }
    
};
