import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {fetchNoteTitles} from "./contentDropDownLogic";
import {Select} from "@mui/material";


interface DropDownTitleElementsProps {
    notes: string[];
    onNoteSelect: (noteTitle: string) => void;
}

const DropDownTitleElements:React.FC<DropDownTitleElementsProps> = ({notes, onNoteSelect}) => {
    const handleMenuItemClick = (noteTitle: string) => {
        onNoteSelect(noteTitle);
    };
    console.log(notes)
    return (
        <>
            {notes.map((note, index) => (
                <MenuItem key={index} value={note}>
                    {note}
                </MenuItem>
            ))}
        </>
    );
};

export default DropDownTitleElements;