import { Box, Button} from "@mui/material";

export default function SideBar() {
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 2,
        bgcolor: "#F0F0F1"
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, bgcolor: "#D0D0D5", color: "black", width: "100%" }}
      >
        Loans
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, bgcolor: "#D0D0D5", color: "black", width: "100%" }}
      >
        User Profile
      </Button>
    </Box>
  );
}
