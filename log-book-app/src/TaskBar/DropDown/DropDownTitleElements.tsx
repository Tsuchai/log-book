import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {fetchNoteTitles} from "./contentDropDownLogic";
import {Select} from "@mui/material";


interface DropDownTitleElementsProps {
    notes: string[];

}

const DropDownTitleElements:React.FC<DropDownTitleElementsProps> = ({notes}) => {
    const handleMenuItemClick = (noteTitle: string) => {

    }

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