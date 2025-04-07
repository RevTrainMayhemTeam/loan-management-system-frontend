import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllLoans, getAllUserLoans } from "../services/LoanService";
import { getAllUsers } from "../services/UserService";
import { Loan } from "../models/Loan";
import { User } from "../models/User";
import { LoanDialog } from "./LoanDialog";

export const LoansManager = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number>(0);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleRowClick = (loan: Loan) => {
    setSelectedLoan(loan);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedLoan(null);
    if (selectedUserId !== 0) {
      fetchAllUserLoans(selectedUserId);
    } else {
      fetchAllLoans();
    }
  };

  const fetchAllLoans = async () => {
    try {
      const response = await getAllLoans();
      const data = await response.json();
      if (Array.isArray(data)) {
        setLoans(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllUserLoans = async (userId: number) => {
    try {
      const response = await getAllUserLoans(userId);
      const data = await response.json();
      if (Array.isArray(data)) {
        setLoans(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await getAllUsers();
        const data = await response.json();
        if (Array.isArray(data)) {
          setUsers(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (selectedUserId === 0) {
      fetchAllLoans();
    } else {
      fetchAllUserLoans(selectedUserId);
    }
  }, [selectedUserId]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch", // Ensures children take full width
          justifyContent: "flex-start",
          height: "calc(100vh - 53px)", // Adjust to available height (subtract for header if needed)
          width: "100%",
          padding: 2,
          overflow: "hidden",
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
            mb: 2,
            mr: "auto",
          }}
        >
          <InputLabel id="user-select-label">Loans: </InputLabel>
          <Select
            id="user-select"
            label="Users"
            value={selectedUserId}
            onChange={(e) => {
              setSelectedUserId(Number(e.target.value));
            }}
          >
            <MenuItem value={0}>All</MenuItem>
            {users.map((user, i) => (
              <MenuItem key={i} value={user.id}>
                {user.firstName} {user.lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TableContainer
          component={Paper}
          sx={{
            flexGrow: 1, // Fills remaining space in the Box
            overflowY: "auto", // Enables vertical scrolling inside the table
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Client</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Amount</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Term</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Type</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loans.map((loan, i) => (
                <TableRow key={i} onClick={() => handleRowClick(loan)}>
                  <TableCell>{loan.clientName}</TableCell>
                  <TableCell>{loan.amount}</TableCell>
                  <TableCell>{loan.term}</TableCell>
                  <TableCell>{loan.type}</TableCell>
                  <TableCell>{loan.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <LoanDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        loan={selectedLoan}
      />
    </>
  );
};
