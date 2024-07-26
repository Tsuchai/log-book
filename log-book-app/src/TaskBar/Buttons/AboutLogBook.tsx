import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ButtonStyle.css';


export default function AboutLogBook() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className="button" onClick={handleOpen}>About LogBook</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className="modal">
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            What is LogBook?
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            LogBook is a notes app that is designed to emulate the Zettlekasten method in a simple interface.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}