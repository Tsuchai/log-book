import React, { useState, ChangeEvent } from 'react';

function TextInput() {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="text-input">Text Input:</label>
            <input
                id="text-input"
                type="text"
                value={value}
                onChange={handleChange}
            />
            <p>Current Value: {value}</p>
        </div>
    );
}

export default TextInput;