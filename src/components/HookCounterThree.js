import React, {useState} from 'react'

function HookCounterThree() {
    
    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
        <form>
            <div>
                First name: <input type="text" value={name.firstName} onChange={(e) =>  setName({...name, firstName: e.target.value})}/>
            </div>
            <div>
                Last name: <input type="text" value={name.lastName} onChange={(e) =>  setName({...name, lastName: e.target.value})}/>
            </div>


            <div>
                <p>
                    <b>My first name is: {name.firstName}</b>
                </p>
                <p>
                    <b>My last name is: {name.lastName}</b>
                </p>
            </div>


            <h2>
                {JSON.stringify(name)};
            </h2>
        </form>
    )
}

export default HookCounterThree
