import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import SideBar from "../components/SideBar";
import { LoansManager } from "../components/LoansManager";
import { Box } from "@mui/material";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { checkSession } = useContext(AuthContext)!;

  useEffect(() => {
    const validateSession = async () => {
      const isValid = await checkSession();
      if (isValid) {
        console.log("Session valid");
      } else {
        navigate("/");
      }
    };

    validateSession();
  }, []);

  return (
    <Box sx={{
      display: "flex",
      flexDirection:"column",
      height:"100vh"
    }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flex:1,
        }}
      >
        <SideBar />
        <LoansManager />
      </Box>
    </Box>
  );
};
