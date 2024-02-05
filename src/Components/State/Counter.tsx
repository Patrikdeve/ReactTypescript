import { useReducer } from "react";
type Counterstate  = {
    count: number
}
type UpdateAction = {
    type: `increment`|`decrement`, 
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type Counteraction = UpdateAction | ResetAction; 
const initialstate = {count: 0}; 

const reducer =(state:Counterstate, action:Counteraction) => {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload}
        
        case 'decrement': 
            return {count: state.count - action.payload}
        case 'reset': 
            return {count: initialstate.count}
        default: 
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type:'increment', payload: 10})}>Increment 10</button>
            <button onClick={() => dispatch({type:'decrement',  payload:5})}>Decrement 5</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}