import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from "./TaskBar/TaskBar"
import NoteBox from "./NoteBox/NoteBox";
import {ToastContainer} from "react-toastify"; // Library for pop-up notications
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
    const [note, setNote] = useState<string>('');

    const handleNoteChange = (newNote: string) => {
        setNote(newNote);
    };



    return (
        <div className = "App">

            <TaskBar onNoteChange={handleNoteChange}/>
            <NoteBox note={note} onNoteChange={handleNoteChange}/>
            <ToastContainer
            limit={10}/>

        </div>
  );
};

export default App;
