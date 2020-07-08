import React, { useReducer } from 'react'


const initialState = {firstCounter: 0, secondCounter: 5};

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};

        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};


        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};

        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};

        case 'reset':
            return initialState;

        default:
            return state;
    }
}


function CounterTwo() {
    const [count, dispatch] =  useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState); 


    return (
        <div>
                <h1>{count.firstCounter}</h1>
            <button onClick={() => dispatch({type: 'increment', value: 1})} >Increment</button> &nbsp;
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button> &nbsp;
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>&nbsp;
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment + 5</button>&nbsp;
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement - 5</button>


            <h1>{count.secondCounter}</h1>
            <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment + 5</button>&nbsp;
            <button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement - 5</button>
        </div>
    )
}

export default CounterTwo
