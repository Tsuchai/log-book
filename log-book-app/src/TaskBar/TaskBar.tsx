import React, {useState} from 'react';
import './TaskBar.css';
import '../NoteBox/localStorageUtils'
import '../NoteBox/NoteBox'
import {saveNoteToLocal} from "../NoteBox/localStorageUtils";
import {getNoteData} from "../NoteBox/noteDataUtils";
import {Flip, toast} from "react-toastify";
import DropDown from "./DropDown/DropDown";
import AboutLogBook from "./AboutLogBook";


const TaskBar: React.FC = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked', e)
    }

    const handleSave = () => {
        // Checker if title is not empty
        const trimmedTitle = title.trim();
        const existingTitle = localStorage.getItem("note_" + trimmedTitle)

        if (trimmedTitle !== '' && !existingTitle) {
            const noteData = getNoteData()
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

        }
        else {
            let errorMessage = 'Unknown Error!'
            if (trimmedTitle === '')
                errorMessage = 'Title cannot be empty!'
            else if (existingTitle)
                errorMessage = 'File exists with same name!'

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
    }

    return (
        <div className="taskbar">
            <div className="taskbar-left">
                <div><AboutLogBook></AboutLogBook></div>
                <div className="icon">New Note</div>
            </div>
            <div className="taskbar-center">

                {/*
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title..."
                />
                */}


                <DropDown></DropDown>


            </div>

            <div className="taskbar-right">
                <div className="icon">Settings</div>
                <div className="icon" onClick={handleSave}>Save</div>
            </div>
        </div>
    );
};

export default TaskBar;