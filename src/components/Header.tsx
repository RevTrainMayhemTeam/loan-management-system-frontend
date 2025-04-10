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
        background: "#F0F0F1",
        display: "flex",
        py: 1,
      }}
    >
      <Box sx={{ mx: 1, display: "flex", alignItems: "center", mr: "auto" }}>
        <Typography variant="subtitle1">Loan Management System __JENKINS TEST__</Typography>
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
          sx={{
            mx: 1,
            width: "12vw",
            background: "#D0D0D5",
            color: "black",
          }}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      ) : null}
    </Box>
  );
};
