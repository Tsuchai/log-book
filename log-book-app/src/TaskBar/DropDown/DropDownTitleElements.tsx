import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {fetchNoteTitles} from "./contentDropDownLogic";
import {Select} from "@mui/material";


const DropDownTitleElements = () => {
    const notes = fetchNoteTitles()
    console.log(notes)

    return (
        <Select>
            {notes.map((note, index) => (
                <MenuItem key={index} value={note}>
                    {note}
                </MenuItem>
            ))}
        </Select>
    );
};

export default DropDownTitleElements;