import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Header } from "../components/header";
import SideBar from "../components/SideBar";

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
    <>
      <Header />
      <SideBar />
    </>
  );
};
