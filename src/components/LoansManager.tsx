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
import { getAllLoans } from "../services/LoanService";
import { Loan } from "../models/Loan";
import { User } from "../models/User";
import { getAllUsers } from "../services/UserService";
import { LoanDialog } from "./LoanDialog";

export const LoansManager = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>(0);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const handleRowClick = () => {
    console.log("Row clicked");
  };

  useEffect(() => {
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

    fetchAllLoans();
    fetchAllUsers();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          padding: 2,
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
            mb: 2,
            mr:"auto"
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
        <TableContainer component={Paper} >
          <Table >
            <TableHead sx={{ bgcolor: "#F0F0F1"}}>
              <TableRow >
                <TableCell>Client</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Term</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loans.map((loan, i) => (
                <TableRow key={i} onClick={handleRowClick}>
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
    </>
  );
};
