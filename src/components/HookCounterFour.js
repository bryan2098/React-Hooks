import React, {useState} from 'react';

function HookCounterFour() {

    const [items, setItems] = useState([]);


    const AddItem = () => {
        setItems([
            ...items, {id: items.concat.length, value: Math.floor(Math.random() * 10)}
        ])
    }

    return (
        <div>
            <button onClick={AddItem}>Add Item</button>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>

    )
}

export default HookCounterFour
