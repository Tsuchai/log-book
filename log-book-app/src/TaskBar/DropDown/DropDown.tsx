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
        setNotes(fetchedNotes);
    }, []);

    const handleNoteSelect = (selectedNoteTitle: string) => {
        setTitle(selectedNoteTitle); // Update the selected note title
    };

    const handleChange = (event: SelectChangeEvent) => {
        const selectedNote = event.target.value as string;
        setTitle(selectedNote);
    };




    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Title</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={title}
                label="Title"
                onChange={handleChange}
            >
                {notes.map((note, index) => (
                    <MenuItem key={index} value={note}>
                        {note}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    );


}
