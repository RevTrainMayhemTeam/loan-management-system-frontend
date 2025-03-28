import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const API_BASE_URL = "http://localhost:8080/api";

export const getLoans = async (userId:number) => {
  
  
  return fetch(`${API_BASE_URL}/loans/user/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
};
