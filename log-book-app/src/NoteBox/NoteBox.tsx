import React, { useState, ChangeEvent } from 'react';
import './NoteBox.css'
import { setNoteData } from './noteDataUtils'


interface NoteBoxProps {
    note: string;
    onNoteChange: (newNote: string) => void;
}

const NoteBox: React.FC<NoteBoxProps> = ({note, onNoteChange}) =>  {
    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newNote = e.target.value;
        onNoteChange(newNote);
        setNoteData(newNote);
    };



    return(
        <textarea
        className="note-box"
        value={note}
        onChange={handleNoteChange}
        placeholder="Start typing your note here..."
        />
    );
};

export default NoteBox;