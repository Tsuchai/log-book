import React from 'react';
import { Button } from '@mui/material';

interface DropDownProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    ariaDescribedBy?: string;
    variant?: 'text' | 'outlined' | 'contained';
}

const DropDown: React.FC<DropDownProps> = ({ onClick, children, ariaDescribedBy, variant = 'contained'}) => {
    return (
        <Button aria-describedby={ariaDescribedBy} variant={variant} onClick={onClick}>
            {children}
        </Button>
    )
};

export default DropDown;