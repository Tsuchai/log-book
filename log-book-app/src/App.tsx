import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoteBox from "./NoteBox";

const App: React.FC = () => {
  return (
      <div className = "app">
        <NoteBox/>
      </div>
  );
};

export default App;
