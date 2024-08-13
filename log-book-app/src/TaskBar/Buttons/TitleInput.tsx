import React, { useState, ChangeEvent } from 'react';
import {Button} from "@mui/material";

function TextInput() {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="text-input"></label>
            <input
                id="text-input"
                type="text"
                value={value}
                onChange={handleChange}
                style={{
                    width: '300px',
                    padding: '10px',
                    margin: '10px 0',
                    border: '2px solid #444',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#333',
                    backgroundColor: '#f9f9f9',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                }}

            />
            <Button
                sx={{
                backgroundColor: '#777',
                padding: '6px',
                margin: '0 5px',
                cursor: 'pointer',
                borderRadius: '5px',
                color: 'white',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '16px',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#999',
                },
            }}

            >Save</Button>
        </div>
    );
}

export default TextInput;