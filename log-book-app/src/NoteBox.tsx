import React, { useState, ChangeEvent } from 'react';
import './NoteBox.css'

const NoteBox: React.FC = () =>  {
    const [note, setNote] = useState<string>('');

    const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {setNote(e.target.value)};

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