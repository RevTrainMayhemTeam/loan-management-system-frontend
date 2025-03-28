import { Box, Button } from "@mui/material";

interface SideBarProps {
  setSelectedOption: (option: number) => void;
}

export default function SideBar({ setSelectedOption }: SideBarProps) {
  return (
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
    </Box>
  );
}
