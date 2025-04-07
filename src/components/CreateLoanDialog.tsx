<<<<<<< HEAD
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
=======
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import AuthContext from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { createLoan, getTypes } from "../services/LoanService";
import { Type } from "../models/Type";

interface CreateLoanDialogProps {
  open: boolean;
  onClose: () => void;
}

function CreateLoanDialog(props: CreateLoanDialogProps) {
  const [types, setTypes] = useState<Type[]>([]);
  const { user } = useContext(AuthContext)!;
  const { open, onClose } = props;
  const [amount, setAmount] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);
  const [type, setType] = useState<number>(0);

  useEffect(() => {
    if (open) {
      setAmount(0);
      setTerm(0);
      setType(0); // Reset type to 0
    }
  }, [open]);

  // Use useEffect to set userId when the user changes
  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await getTypes();
        const data = await response.json();
        if (Array.isArray(data)) {
          setTypes(data);
        }
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };
    fetchTypes();
  }, []);

  const loan = {
    amount,
    term,
    userId,
    type,
  };

  const handleSubmit = async () => {
    try {
      const res = await createLoan(loan);
      if (res.ok) {
        onClose();
      } else {
        console.error("Failed to create loan");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          p: 2,
          borderRadius: 5,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Create Loan</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { width: "100%", mb: 2 } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="standard"
            required
            label="Amount"
            type="number" // Ensure the input is a number
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <TextField
            variant="standard"
            required
            label="Term"
            type="number" // Ensure the input is a number
            onChange={(e) => setTerm(Number(e.target.value))}
          />
          <Select
            sx={{ width: "100%", mt: 1 }}
            value={type}
            required
            onChange={(e) => setType(Number(e.target.value))}
          >
            <MenuItem disabled value={0}>
              Select your type of loan
            </MenuItem>
            {types.map((type) => {
              return (
                <MenuItem key={type.id} value={type.id}>
                  {type.type}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: "Black" }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} sx={{ color: "Black" }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateLoanDialog;
>>>>>>> origin/main
