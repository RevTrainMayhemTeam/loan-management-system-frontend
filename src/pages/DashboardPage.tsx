import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import SideBar from "../components/SideBar";
import { LoansManager } from "../components/LoansManager";
import { LoansCustomer } from "../components/LoansCustomer";
import { Box } from "@mui/material";
import { UserProfile } from "../components/UserProfile";
import { Welcome } from "../components/Welcome";

export const Dashboard = () => {
  const [selectedOption, setselectedOption] = useState<number | null>(0);
  const navigate = useNavigate();
  const { user, checkSession } = useContext(AuthContext)!;

  const renderComponent = (userRole: string) => {
    switch (selectedOption) {
      case 0:
        return <Welcome />;
      case 1:
        if (userRole === "Customer") {
          return <LoansCustomer />;
        } else if (userRole === "Manager") {
          return <LoansManager />;
        }
        return null;
      case 2:
        return <UserProfile />;
      default:
        return null;
    }
  };

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        <SideBar setSelectedOption={setselectedOption} />
        {renderComponent(user?.role ?? "")}
      </Box>
    </Box>
  );
};
