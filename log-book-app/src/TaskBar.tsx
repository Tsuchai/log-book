import React, { useState } from 'react';
import './TaskBar.css';
import './localStorageUtils'
import './NoteBox'
import {saveNoteToLocal} from "./localStorageUtils";
import getNoteData from "./NoteBox"


const TaskBar: React.FC = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    const handleSave = () => {
        // Checker if title is not empty
        if (title.trim() !== '') {
            const noteData = getNoteData;
            const note = {
                title: title,
                data: noteData.toString()
            };
            saveNoteToLocal(note);
        }
        else {
            alert ("Title cannot be empty!")
        }
    }

    return (
        <div className="taskbar">
            <div className="taskbar-left">
                <div className="icon">Log Book</div>
                <div className="icon">New Note</div>
            </div>
            <div className="taskbar-center">
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title..."
                />
            </div>
            <div className="taskbar-right">
                <div className="icon">Settings</div>
                <div className="icon" onClick={handleSave}>Save</div>
            </div>
        </div>
    );
};

export default TaskBar;