import React, { useState } from 'react';
import './TaskBar.css';
import { saveNoteToLocal } from "../NoteBox/localStorageUtils";
import { getNoteData } from "../NoteBox/noteDataUtils";
import { Flip, toast } from "react-toastify";
import DropDown from "./DropDown/DropDown";
import AboutLogBook from "./Buttons/AboutLogBook";
import Rename from "./Buttons/Rename";

interface TaskBarProps {
    onNoteChange: (newNote: string) => void;
}

const TaskBar: React.FC<TaskBarProps> = ({ onNoteChange }) => {
    const [title, setTitle] = useState<string>('');

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
    };

    const handleContentChange = (newContent: string) => {
        onNoteChange(newContent);
    };

    const handleSave = () => {
        const trimmedTitle = title.trim();
        const existingTitle = localStorage.getItem("note_" + trimmedTitle);

        if (trimmedTitle !== '' && !existingTitle) {
            const noteData = getNoteData();
            const note = {
                title: trimmedTitle,
                data: noteData
            };
            saveNoteToLocal(note);
            toast('Saved successfully!', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
            });
        } else {
            let errorMessage = 'Unknown Error!';
            if (trimmedTitle === '') {
                errorMessage = 'Title cannot be empty!';
            } else if (existingTitle) {
                errorMessage = 'File exists with same name!';
            }

            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
            });
        }
    };

    return (
        <div className="taskbar">
            <div className="taskbar-left">
                <div><AboutLogBook /></div>
                <div><Rename /></div>
            </div>
            <div className="taskbar-center">
                <DropDown onContentChange={handleContentChange} onTitleChange={handleTitleChange} />
            </div>
            <div className="taskbar-right">
                <div className="icon">New Note</div>
                <div className="icon" onClick={handleSave}>Save</div>
            </div>
        </div>
    );
};

export default TaskBar;