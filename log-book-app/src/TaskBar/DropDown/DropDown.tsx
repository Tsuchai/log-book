import React, { useState } from 'react';
import {Button, Popover, Typography} from '@mui/material';

interface DropDownProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    ariaDescribedBy?: string;
    variant?: 'text' | 'outlined' | 'contained';
}



const DropDown: React.FC<DropDownProps> = ({ onClick, children, ariaDescribedBy, variant = 'contained'}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
                //add menu item functionality (via ContentLogic file)


            </Popover>
        </div>





    )
};

export default DropDown;