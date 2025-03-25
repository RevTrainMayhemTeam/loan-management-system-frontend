import { Box, Button } from "@mui/material";
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
        height: 50,
      }}
    >
      <Box sx={{ mx: 1, display: "flex", alignItems: "center" }}>
        Loan Management System
      </Box>
      {user ? (
        <Box sx={{ mx: 1, display: "flex", alignItems: "center" }}>
          Welcome {user?.firstName + " " + user?.lastName}
        </Box>
      ) : null}
      {user ? (
        <Button variant="text" sx={{ mx: 1 }} onClick={logoutHandler}>
          Logout
        </Button>
      ) : null}
    </Box>
  );
};
