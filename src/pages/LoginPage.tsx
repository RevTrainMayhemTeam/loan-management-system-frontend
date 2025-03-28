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
          border: "2px solid #D0D0D5",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          my: 2,
          p: 2,
          maxWidth: 500,
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
          type="password"
          variant="standard"
          label="Password"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          sx={{ backgroundColor: "#D0D0D5", color: "black" }}
          variant="contained"
          onClick={loginHandler}
        >
          Login
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          mx: "auto",
          my: 2,
          maxWidth: 500,
        }}
      >
        <Button
          sx={{
            backgroundColor: "#D0D0D5",
            color: "black",
          }}
          variant="contained"
          onClick={registerHandler}
        >
          Register
        </Button>
      </Box>
    </>
  );
};
