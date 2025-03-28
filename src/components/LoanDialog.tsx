import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Loan } from "../models/Loan";
import { approveLoan, rejectLoan } from "../services/LoanService";

interface LoanDialogProps {
  open: boolean;
  handleClose: () => void;
  loan: Loan | null;
}

export const LoanDialog = ({ open, handleClose, loan }: LoanDialogProps) => {

  const handleApprove = async () => {
    if(loan){
      const response = await approveLoan(loan.id);
      if (response.ok) {
        console.log("Loan approved successfully!");
      } else {
        console.error("Failed to approve loan.");
      }
    }
    handleClose();
  };
   
  const handleReject = async () => {
    if(loan){
      const response = await rejectLoan(loan.id);
      if (response.ok) {
        console.log("Loan approved successfully!");
      } else {
        console.error("Failed to approve loan.");
      }
    }
    handleClose();
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
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ width: "50%" }}>Client:</TableCell>
              <TableCell sx={{ width: "50%" }}>{loan ? loan.clientName : null}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Amount:</TableCell>
              <TableCell>{loan ? loan.amount : null}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Term:</TableCell>
              <TableCell>{loan ? loan.term : null}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type:</TableCell>
              <TableCell>{loan ? loan.type : null}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status:</TableCell>
              <TableCell>{loan ? loan.status : null}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Button
          sx={{ background: "#D0D0D5", color: "black", mr: 2, width: "50%" }}
          onClick={handleApprove}
          {...loan?.status !== "Pending" ? { disabled: true } : {}}
        >
          Approve
        </Button>
        <Button
          sx={{ background: "#D0D0D5", color: "black", ml: 2, width: "50%" }}
          onClick={handleReject}
          {...loan?.status !== "Pending" ? { disabled: true } : {}}
        >
          Reject
        </Button>
      </Box>
    </Dialog>
  );
};
