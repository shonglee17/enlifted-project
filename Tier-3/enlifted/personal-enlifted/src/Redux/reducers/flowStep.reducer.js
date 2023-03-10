
const flowStepReducer = (state = ['This'], action) => {
    switch(action.type){
        case 'GET_FLOW_EMPTY':
            return[state]
        case 'ADD_FLOW_REDUCER':
            return [...state, action.payload];
    }
}

export default flowStepReducer