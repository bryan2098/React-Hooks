import React from 'react'
import { useState, useMemo } from 'react'

function CountComponent() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEvent = useMemo(() => {
        let i = 0; 
        while(i < 2000) {
            i++;
        }
        return counterOne % 2 == 0;
    }, [counterOne]);   

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                <span>{isEvent ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default CountComponent
