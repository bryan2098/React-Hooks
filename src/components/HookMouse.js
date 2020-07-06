import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const LogMousePosition = e => {
        console.log("Mouse event");

        setX(e.clientX);
        setY(e.clientY);
    }


    useEffect(() => {
        window.addEventListener('mousemove', LogMousePosition);

        return () => {
            console.log("call removeEventListener");
            window.removeEventListener('mousemove', LogMousePosition);
        }
    }, [])

    return (
        <div>
            Hooks <b>X</b> - {x} / <b>Y</b> - {y}
        </div>
    )
}

export default HookMouse
