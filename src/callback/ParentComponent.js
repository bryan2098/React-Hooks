import React, {useState, useCallback} from 'react';
import Count from './CountComponent';
import Button from './ButtonComponent';
import Title from './TitleComponents';

function ParentComponent() {

    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(500);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback (() => {
        setSalary(salary + 100);
    }, [salary]);

    return (
        <div>
            <Title></Title>
            <Count text="Age" count={age}></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}></Count>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
