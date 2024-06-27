import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from "./TaskBar/TaskBar"
import NoteBox from "./NoteBox/NoteBox";
import {ToastContainer} from "react-toastify"; // Library for pop-up notications
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {

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
