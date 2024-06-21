import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from "./TaskBar"
import NoteBox from "./NoteBox";
import {ToastContainer} from "react-toastify"; // Library for pop-up notications
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
    const [noteState, changeNoteState] = useState('new')
    return (
        <div className = "App">

            <TaskBar/>
            <NoteBox/>
            <ToastContainer
            limit={10}/>

        </div>
  );
};

export default App;
