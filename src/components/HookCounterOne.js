import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Click ${count}`;
        console.log("use effect");
    }, [count, name])


    // use Effect dùng như componentDidMount, (param1 = callback function, param2 = []: mảng chứa các thuộc tính cần thay đổi, mặc định là all);

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default HookCounterOne
