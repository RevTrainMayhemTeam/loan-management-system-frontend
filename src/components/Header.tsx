import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";

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
        height: 70,
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
          color="error"
          sx={{ mx: 1 }}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      ) : null}
    </Box>
  );
};
