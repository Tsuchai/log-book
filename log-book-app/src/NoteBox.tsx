import React, { useState, ChangeEvent } from 'react';
import './NoteBox.css'


const NoteBox: React.FC = () =>  {
    const [note, setNote] = useState<string>('');

    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {setNote(e.target.value)};

    const getNoteData = (): string => {
        return note;
    }

    const logNoteData = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        handleNoteChange(e);
        console.log(getNoteData())
    }




    return(
        <textarea
        className="note-box"
        value={note}
        onChange={logNoteData}
        placeholder="Start typing your note here..."
        />
    );
};

export default NoteBox;