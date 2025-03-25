import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Header } from "../components/header";

export const Dashboard = () => {
  const navigate = useNavigate();
  // Access user from our AuthContext
  const auth = useContext(AuthContext);
  const user = auth?.user; // ? marks it as optional since user may be null if not logged in

  useEffect(() => {
    if (user) {
      console.log("a");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
    <Header/>
    <p>dashboard</p>
    </>
  );
};
