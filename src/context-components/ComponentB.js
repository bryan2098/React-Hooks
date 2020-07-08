import React, { useContext } from 'react'
import {CountContext} from '../App';

function ComponentB() {
    const countContext = useContext(CountContext);

    return (
        <div>
            Component B: &nbsp;
            <button onClick={() => countContext.countDispatch('increment')} >Increment</button> &nbsp;
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button> &nbsp;
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentB
