import React, {useState} from 'react'
import useInput from './hooks/useInput';

function UserForm() {
    const[firstName, bindFirstName, resetFirstName] = useInput('');
    const[lastName, bindLastName, resetLastName] = useInput('');

    const submitHandle = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
        console.log("event", e);
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <div>
                    <label>First name: </label>
                    <input type="text" value={firstName} {...bindFirstName} />
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" value={lastName} {...bindLastName} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
