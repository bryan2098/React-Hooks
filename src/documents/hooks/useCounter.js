import {useState} from 'react'

function useCounter(initalCount = 0) {

    const [count, setCount] = useState(initalCount);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(initalCount);
    }

    return [count, increment, decrement, reset];
}

export default useCounter
