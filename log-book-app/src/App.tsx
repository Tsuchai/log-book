import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from "./TaskBar"
import NoteBox from "./NoteBox";
import {ToastContainer} from "react-toastify"; // Library for pop-up notications
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {

    return (
        <div className = "App">

            <TaskBar/>
            <NoteBox/>
            <ToastContainer
            limit={1}/>

        </div>
  );
};

export default App;
