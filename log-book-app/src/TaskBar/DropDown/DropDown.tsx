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
    Select, Menu
} from '@mui/material';
import { fetchNoteTitles } from "./contentDropDownLogic";





export default function DropDown() {
    const [title, setTitle] = React.useState('');
    const [notes, setNotes] = useState<string[]>([]);


    React.useEffect(() => {
        const fetchedNotes = fetchNoteTitles();
        fetchedNotes.sort((a, b) => a.localeCompare(b));
        setNotes(fetchedNotes);
    }, []);


    const handleChange = (event: SelectChangeEvent) => {
        const selectedNote = event.target.value as string;

        setTitle(selectedNote);
        console.log()
    };

    const getShortenedTitle = (title: string) => {
        return title.length > 25 ? title.substring(0, 25) + "..." : title;
    };




    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Title</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={title}
                label="Title"
                onChange={handleChange}
                sx={{ color: 'white', '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}

            >
                {notes.map((note, index) => (
                    <MenuItem key={index} value={note}>
                        {getShortenedTitle(note)}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    );


}
