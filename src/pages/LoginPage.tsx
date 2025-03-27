import { useContext, useState } from "react";
import Box from "@mui/system/Box";
import { Button, TextField } from "@mui/material";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <Box
        component="section"
        sx={{
          p: 2,
          border: "2px solid grey",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          mx: 5,
          my: 2,
        }}
      >
        <TextField
          variant="standard"
          label="E-mail"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          label="Password"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="contained" onClick={loginHandler}>
          Login
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          mx: 5,
        }}
      >
        <Button variant="contained" onClick={registerHandler}>
          Register
        </Button>
      </Box>
    </>
  );
};
