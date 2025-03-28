import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface CreateLoanDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
}

function CreateLoanDialog (props :CreateLoanDialogProps){
    const { open, onClose, onSubmit } = props;
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create Loan</DialogTitle>
            <DialogContent>
                {/* Add form fields here */}
                <p>Form content goes here.</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={onSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateLoanDialog;