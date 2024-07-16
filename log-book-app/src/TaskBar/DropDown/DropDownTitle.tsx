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
    const [notes, setNotes] = useState<string[]>([]);


    useEffect(() => {
        // Fetch notes when the component mounts
        const fetchNotes = () => {
            const fetchedNotes = fetchNoteTitles();
            setNotes(fetchedNotes);
        };
        fetchNotes();
    }, []);

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
                <DropDownTitleElements notes={notes}></DropDownTitleElements>
            </Select>
        </FormControl>
    );


}
