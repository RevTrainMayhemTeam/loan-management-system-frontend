import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const API_BASE_URL = "http://localhost:9898/api";
//const { user } = useContext(AuthContext)!;

export const getLoans = async () => {
  //return fetch(`${API_BASE_URL}/user/${user?.id}`);
  return fetch(`${API_BASE_URL}/loans/all`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
};

/*if (!data || data.length === 0){
  return (
    <Box
      flex={1}
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        elevation={5}
        sx={{ padding: 4, minWidth: 300, textAlign: "left" }}
      >
        <Typography variant="h4">My loans</Typography>
        <Paper
          elevation={3}
          sx={{ padding: 4, minWidth: 300, alignContent: "center" }}
        >
          <Typography variant="h6">No Loans to show</Typography>
        </Paper>
      </Paper>
    </Box>
  );


  


              
}*/
