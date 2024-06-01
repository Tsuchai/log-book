import React, { useState } from 'react';
import './TaskBar.css';

const TaskBar: React.FC = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);



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
                <div className="icon">Save</div>
            </div>
        </div>
    );
};

export default TaskBar;