import Box from "@mui/system/Box";
import { Button, TextField } from "@mui/material";
import { Header } from "../components/Header";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const { register } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const registerHandler = async () => {
    try {
      await register(email, password, firstName, lastName, phoneNumber);
      navigate("/");
    } catch (error) {
      setError(true);
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
          error={error}
          variant="standard"
          label="Email"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          error={error}
          variant="standard"
          label="First name"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          error={error}
          variant="standard"
          label="Last name"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          error={error}
          variant="standard"
          label="Phone number"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <TextField
          error={error}
          variant="standard"
          label="Password"
          sx={{ mb: 4 }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          sx={{ background: "#D0D0D5", color: "black" }}
          variant="contained"
          onClick={registerHandler}
        >
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
        <Button
          sx={{ background: "#D0D0D5", color: "black" }}
          variant="contained"
          onClick={loginHandler}
        >
          Login
        </Button>
      </Box>
    </>
  );
};
