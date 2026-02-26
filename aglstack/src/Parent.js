import React, { useState } from 'react';

export default function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
            <p>Clicked {count} times</p>
        </div>
    );
}