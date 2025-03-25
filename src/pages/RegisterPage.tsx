import Box from "@mui/system/Box";
import { Button, TextField } from "@mui/material";
import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { register } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const registerHandler = async () => {
    try {
      await register(email, password, firstName, lastName, phoneNumber);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = () => {
    navigate("/login");
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
          label="Email"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          label="First name"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          label="Last name"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          label="Phone number"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
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
        <Button variant="contained" onClick={registerHandler}>
          Register
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          mx: 5,
        }}
      >
        <Button variant="contained" onClick={loginHandler}>
          Login
        </Button>
      </Box>
    </>
  );
};
