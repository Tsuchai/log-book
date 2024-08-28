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


interface DropDownProps {
    onTitleChange: (newTitle: string) => void;
    onContentChange: (newContent: string) => void;
}



const DropDown: React.FC<DropDownProps> = ({ onTitleChange, onContentChange }) => {
    const [title, setTitle] = useState<string>('');
    const [notes, setNotes] = useState<string[]>([]);




    React.useEffect(() => {
        const fetchedNotes = fetchNoteTitles();
        fetchedNotes.sort((a, b) => a.localeCompare(b));
        setNotes(fetchedNotes);
    }, []);

    const fetchNoteContent = (title: string) => {
        const key = `note_${title}`;
        const note = JSON.parse(localStorage.getItem(key) || '{}');
        return note.data || '';
    }


    const handleChange = (event: SelectChangeEvent) => {
        const selectedTitle = event.target.value as string;
        const noteContent = fetchNoteContent(selectedTitle);


        setTitle(selectedTitle);


        onTitleChange(selectedTitle);
        onContentChange(noteContent);
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

export default DropDown;
