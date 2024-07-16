import React, { useState, useEffect } from 'react';
import {
    Button,
    Popover,
    Typography,
    MenuItem,
    SelectChangeEvent,
    Box,
    FormControl,
    InputLabel,
    Select
} from '@mui/material';
import { fetchNoteTitles } from "./contentDropDownLogic";
import DropDownTitleElements from "./DropDownTitleElements";




export default function DropDownTitle() {
    const [title, setTitle] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTitle(event.target.value as string);
    };

    let notes = fetchNoteTitles()


    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={title}
                onChange={handleChange}
                label="Title"
            >
                <DropDownTitleElements></DropDownTitleElements>
            </Select>
        </FormControl>

    );


}
