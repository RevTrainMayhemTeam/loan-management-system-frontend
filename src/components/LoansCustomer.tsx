import { useState } from "react";
import { Loan } from "../models/Loan";
import { getLoans } from "../services/LoanService";
import {
  Box,
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type Props = {};

function LoansCustomer({}: Props) {
  const [loans, setLoans] = useState<Loan[]>([]);

  const fetchLoans = async () => {
    try {
      const res = await getLoans();
      const data = await res.json();
      if (Array.isArray(data)) {
        setLoans(data);
      } else {
        setLoans(data.loan);
      }
    } catch (err) {
      console.error(err);
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
            sx={{ padding: 4, minWidth: 300, textAlign: "left" }}
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
    }
  };

  const headers = Object.keys(loans[0]).slice(0, -1);

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
        sx={{ padding: 4, minWidth: 300, textAlign: "left" }}
      >
        <Typography variant="h4">My loans</Typography>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((row, index) => (
              <TableRow key={index}>
                {headers.map((header) => (
                  <TableCell key={header}>{row[header]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default LoansCustomer;
