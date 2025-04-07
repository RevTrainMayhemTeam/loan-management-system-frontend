import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getAllUserLoans } from "../services/LoanService";
import { Loan } from "../models/Loan";
import { UpdateLoanDialog } from "./UpdateLoanDialog";
import AuthContext from "../context/AuthContext";
import CreateLoanDialog from "./CreateLoanDialog";

export const LoansCustomer = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const { user } = useContext(AuthContext)!;

  const handleRowClick = (loan: Loan) => {
    setSelectedLoan(loan);
    setOpenUpdateDialog(true);
  };

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
    if (user) {
      fetchAllUserLoans(user.id);
    }
  };


  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
    setSelectedLoan(null);
    if (user) {
      fetchAllUserLoans(user.id);
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
    if (user?.id !== undefined) {
      fetchAllUserLoans(user.id);
    }
  }, []);

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
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            borderBottom: "2px solid #D0D0D5",
            pb: 1,
          }}
        >
          My loans
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            maxHeight: "80%",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Loan #</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Amount</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Term</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Type</TableCell>
                <TableCell sx={{ bgcolor: "#F0F0F1" }}>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loans.map((loan, i) => (
                <TableRow key={i} onClick={() => handleRowClick(loan)}>
                  <TableCell>{loan.id}</TableCell>
                  <TableCell>{loan.amount}</TableCell>
                  <TableCell>{loan.term}</TableCell>
                  <TableCell>{loan.type}</TableCell>
                  <TableCell>{loan.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "left", mr: "auto" }}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: "100%",
              background: "#D0D0D5",
              color: "black",
            }}
            onClick={() => setOpenCreateDialog(true)}
          >
            Apply for a Loan
          </Button>
        </Box>
      </Box>
      <UpdateLoanDialog
        open={openUpdateDialog}
        handleClose={handleCloseUpdateDialog}
        loan={selectedLoan}
      />
      <CreateLoanDialog open={openCreateDialog} onClose={handleCloseCreateDialog} />
    </>
  );
};