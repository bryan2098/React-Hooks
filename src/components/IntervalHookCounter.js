import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, SetCount] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => SetCount(previousCount => previousCount + 1), 1000);
       
        return () => {
             clearInterval(interval);
        }
    })

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
