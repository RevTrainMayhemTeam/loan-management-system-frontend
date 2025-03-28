import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import { Loan } from "../models/Loan";
import { useEffect, useState } from "react";
import { Type } from "../models/Type";
import { getTypes, updateLoan } from "../services/LoanService";

interface UpdateLoanDialogProps {
  open: boolean;
  handleClose: () => void;
  loan: Loan | null;
}

export const UpdateLoanDialog = ({
  open,
  handleClose,
  loan,
}: UpdateLoanDialogProps) => {
  // State variables to manage loan data and types
  const [types, setTypes] = useState<Type[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [status, setStatus] = useState<string>("");

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

  // Update state when the loan prop changes
  useEffect(() => {
    if (loan) {
      setAmount(loan.amount);
      setTerm(loan.term);
      setType(loan.type);
      setStatus(loan.status);
    }
  }, [loan]);

  const getTypeId = (type : string) => {
    return types.find((t) => t.type === type)?.id;
  }

  const handleUpdate = async () => {
    if(loan){
      try {
        await updateLoan(loan.id, {
          amount,
          term,
          loanTypes: {
            id: getTypeId(type),
          },
        })
        handleClose();
      } catch (error) {
        console.error(error);
        
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
    >
      <DialogTitle sx={{ p: 0, mb: 2 }}>
        Loan #{loan ? loan.id : null}
      </DialogTitle>
      <TextField
        variant="standard"
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="number" // Ensure the input is a number
        sx={{ mb: 4, width: "100%" }}
      />
      <TextField
        variant="standard"
        label="Term"
        value={term}
        onChange={(e) => setTerm(Number(e.target.value))}
        type="number" // Ensure the input is a number
        sx={{ mb: 4, width: "100%" }}
      />

      <FormControl
        variant="standard"
        sx={{
          width: "100%",
          mb: 2,
          mr: "auto",
        }}
      >
        <InputLabel variant="standard" htmlFor="type-select">
          Type
        </InputLabel>
        <NativeSelect
          value={type}
          onChange={(e) => setType(e.target.value)}
          inputProps={{
            name: "type",
            id: "type-select",
          }}
          sx={{
            mb: 2,
          }}
        >
          {types.map((type) => {
            return (
              <option key={type.id} value={type.type}>
                {type.type}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>

      <TextField
        disabled
        id="standard-disabled"
        label="Status"
        value={status}
        variant="standard"
        sx={{ mb: 4, width: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          mt: 2,
        }}
      >
        <Button
          sx={{ background: "#D0D0D5", color: "black" }}
          onClick={handleUpdate}
        >
          Update Loan Information
        </Button>
      </Box>
    </Dialog>
  );
};
