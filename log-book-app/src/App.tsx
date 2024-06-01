import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from "./TaskBar"
import NoteBox from "./NoteBox";

const App: React.FC = () => {
  return (
      <div className = "App">
          <TaskBar/>
          <NoteBox/>
      </div>
  );
};

export default App;
