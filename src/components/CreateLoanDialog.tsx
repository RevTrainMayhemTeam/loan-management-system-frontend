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
import { createLoan } from "../services/LoanService";

interface CreateLoanDialogProps {
  open: boolean;
  onClose: () => void;
}

function CreateLoanDialog(props: CreateLoanDialogProps) {
  const { user } = useContext(AuthContext)!;
  const { open, onClose } = props;
  const [amount, setAmount] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);
  const [type, setType] = useState<number>(0);

  // Use useEffect to set userId when the user changes
  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }
  }, [user]);

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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Loan</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="standard"
            required
            label="Amount"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <TextField
            variant="standard"
            required
            label="Term"
            onChange={(e) => setTerm(Number(e.target.value))}
          />
          <Select
            value={type}
            required
            label="Type"
            onChange={(e) => setType(Number(e.target.value))}
          >
            <MenuItem value={1}>Mortgage</MenuItem>
            <MenuItem value={2}>Auto</MenuItem>
            <MenuItem value={3}>Personal</MenuItem>
            <MenuItem value={4}>Student</MenuItem>
            <MenuItem value={5}>Medical</MenuItem>
          </Select>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateLoanDialog;
