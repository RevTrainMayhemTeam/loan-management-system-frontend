<<<<<<< HEAD
import { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import LoansCustomer from "./LoansCustomer";
import UserProfile from "./UserProfile";

export default function SideBar() {
  const [content, setContent] = useState<React.ReactNode | null>(null); //The "(null)" is to set the default state
=======
import { Box, Button } from "@mui/material";

interface SideBarProps {
  setSelectedOption: (option: number) => void;
}
>>>>>>> origin/main

export default function SideBar({ setSelectedOption }: SideBarProps) {
  return (
<<<<<<< HEAD
    <Box display="flex" height="100vh">
      {/* Here we use the onClick event to close the paper when the user clicks anywhere besides from the paper, the side bar or the buttons */}

      {/* Blue side bar */}
      <Box
        width={200}
        bgcolor="#0d47a1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            setContent(<LoansCustomer />);
          }}
          sx={{ mb: 4, bgcolor: "white", color: "black", minWidth: "30vh" }}
        >
          Loans
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            setContent(<UserProfile/>);
          }}
          sx={{ mb: 4, bgcolor: "white", color: "black", minWidth: "30vh" }}
        >
          User Profile
        </Button>
      </Box>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        {content && <Box>{content}</Box>}
      </Box>
=======
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 2,
        bgcolor: "#F0F0F1",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, bgcolor: "#D0D0D5", color: "black", width: "100%" }}
        onClick={() => setSelectedOption(1)}
      >
        Loans
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, bgcolor: "#D0D0D5", color: "black", width: "100%" }}
        onClick={() => setSelectedOption(2)}
      >
        User Profile
      </Button>
>>>>>>> origin/main
    </Box>
  );
}
