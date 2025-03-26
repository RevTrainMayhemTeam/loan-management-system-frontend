import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { teal } from "@mui/material/colors";

export const Header = () => {
  const { user, logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const logoutHandler = async () => {
    if (user) {
      try {
        await logout();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      sx={{
        background: "grey",
        display: "flex",
        justifyContent: "space-around",
        alignItems:"center",
        height: 50,
      }}
    >
      <Box sx={{ mx: 1, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle1">Loan Management System</Typography>
      </Box>
      {user ? (
        <Box sx={{ mx: 1, display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1">
            Welcome {user?.firstName + " " + user?.lastName}
          </Typography>
        </Box>
      ) : null}
      {user ? (
        <Button
          variant="contained"
          sx={{ mx: 1, width:"15vh", height:"6vh", background:"teal"}}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      ) : null}
    </Box>
  );
};
