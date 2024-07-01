import React, { useState, useEffect } from 'react';
import {Button, Popover, Typography, MenuItem} from '@mui/material';

interface DropDownProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    ariaDescribedBy?: string;
    variant?: 'text' | 'outlined' | 'contained';
}



const DropDown: React.FC<DropDownProps> = ({ onClick, children, ariaDescribedBy, variant = 'contained'}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuItems, setMenuItems] = useState<string[]>([]);

    useEffect(() => {
        const notes: string[] = [];
        // Retrieval of items from localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('note_')) {
                let dots = ""
                if(key.length > 30) {
                    let dots = "..."
                }
                const noteTitle = key.substring(30) + dots
                notes.push(noteTitle)
            }
            setMenuItems(notes);
        }

    })

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        if (onClick) {
            onClick(event);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={ariaDescribedBy} variant={variant} onClick={onClick}>
                {children}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{p: 2}}>DropDown Content</Typography>
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
                ))}


            </Popover>
        </div>





    )
};

export default DropDown;