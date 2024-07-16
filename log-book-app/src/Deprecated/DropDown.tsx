import React, { useState, useEffect } from 'react';
import { Button, Popover, Typography, MenuItem} from '@mui/material';
import { fetchNoteTitles } from "../TaskBar/DropDown/contentDropDownLogic";

interface DropDownProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    ariaDescribedBy?: string;
    variant?: 'text' | 'outlined' | 'contained';
}



const DropDown: React.FC<DropDownProps> = ({ onClick, children, ariaDescribedBy, variant = 'contained'}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuItems, setMenuItems] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
       const notes = fetchNoteTitles();
       setMenuItems(notes);
       setIsLoading(false); // no longer loading after data is retrieved

    }, []);

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

    console.log(children)

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
                {isLoading ? (
                    <Typography sx={{p: 2}}>Loading...</Typography>
                ) : (menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
                    ))
                )}
            </Popover>
        </div>
    )
};

export default DropDown;