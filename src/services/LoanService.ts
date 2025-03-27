import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const API_BASE_URL = "http://localhost:9898";
const { user } = useContext(AuthContext)!;

export const getLoans = async () => {
  return fetch(`${API_BASE_URL}/user/${user?.id}`);
};
