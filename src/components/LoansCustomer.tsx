import { useState, useEffect, useContext } from "react";
import { Loan } from "../models/Loan";
import { getLoans } from "../services/LoanService";
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
import AuthContext from "../context/AuthContext";
import CreateLoanDialog from "./CreateLoanDialog";

type Props = {};

function LoansCustomer({}: Props) {
  const [loans, setLoans] = useState<Loan[]>([]);
  const { user } = useContext(AuthContext)!;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //code to submit the form
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        if (user) {
          const res = await getLoans(user.id);
          const data = await res.json();
          if (Array.isArray(data)) {
            setLoans(data);
          }
        } else {
          console.error("User is null");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchLoans();
  }, []);

  if (!loans || loans.length === 0) {
    return (
      <Box
        flex={1}
        display="flex"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          elevation={5}
          sx={{ padding: 1, minWidth: 600, textAlign: "left" }}
        >
          <Typography variant="h4">My loans</Typography>
          <Paper
            elevation={3}
            sx={{ padding: 4, minWidth: 300, alignContent: "center" }}
          >
            <Typography variant="h6">No Loans to show</Typography>
          </Paper>
        </Paper>
      </Box>
    );
  } else {
    console.log(loans);
    return (
      <Box
        flex={1}
        display="flex"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          elevation={5}
          sx={{ padding: 4, minWidth: 600, textAlign: "left" }}
        >
          <Typography variant="h4">My loans</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Loan id</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Term</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loans.map((loan, index) => (
                  <TableRow key={index}>
                    <TableCell>{loan.id}</TableCell>
                    <TableCell>{loan.amount}</TableCell>
                    <TableCell>{loan.term}</TableCell>
                    <TableCell size="medium">{loan.type}</TableCell>
                    <TableCell>{loan.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "white",
              color: "black",
              width: "300",
              alignSelf: "baseline",
            }}
            color="primary"
            onClick={handleClickOpen}
          >
            New Loan
          </Button>
          <CreateLoanDialog
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
          />
        </Paper>
      </Box>
    );
  }
}

export default LoansCustomer;
