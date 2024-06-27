import React, { useState, ChangeEvent } from 'react';
import './NoteBox.css'
import { setNoteData } from './noteDataUtils'


const NoteBox: React.FC = () =>  {
    const [note, setNote] = useState<string>('');

    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newNote = e.target.value;
        setNote(newNote);
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