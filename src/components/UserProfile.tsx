import { useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { TextField, Avatar, Button, Typography, Box} from "@mui/material";

export default function UserProfile() {
    const { user, updateUser } = useContext(AuthContext)!;
    //const{updateUser} = useContext(AuthContext)!;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    // const [user] = useState({
    //   id: 1,
    //   firstName: "Luis",
    //   lastName: "Momox",
    //   email: "email@gmail.com",
    //   phoneNumber: "5522113344",
    //   role: "Manager"
    // });

    const navigate = useNavigate();
    
    const updateUserHandler = async () => {
      if(user){
        try{
          await updateUser(user);
          console.log("Updated: " + user);
        } catch (error) {
          console.log(error);
        }
      }
    };

    if(user){
    return (
        <Box
          component="section"
          sx={{
            background: "#F0F0F1",
            display: "flex",
            width: 800,
            height: 600,
            alignItems: "center",
            py: 10,
            p: 2,
            border: "2px solid grey",
            borderRadius: 5,
            flexDirection: "column",
            mx: 10,
            my: 2,
          }}
        >
          <Box
            display="flex" justifyContent="center" marginTop={2}
          >
            <Avatar
              sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems:"left",
                  width: 90,
                  height: 90,
                  my:2, 
                  marginRight: 2,
                }}
            ></Avatar>
          </Box>
          <Typography variant="h4" align="center">{user.firstName + " " + user.lastName}</Typography>
          <Typography variant="h6" color="gray" align="center" marginBottom={3}>{user.email}</Typography>
            <TextField fullWidth
              variant="standard"
              label= "First Name"
              name = "firstName"
              sx={{ mb: 5 }}
              value={user.firstName}
              onChange={
                updateUserHandler
              }
            ></TextField>
          <TextField fullWidth
            variant="standard"
              label= "Last Name"
              name = "lastName"
              sx={{ mb: 5 }}
              value={user.lastName}
              onChange={
                updateUserHandler
              }
          ></TextField>
          <TextField fullWidth
              variant="standard"
              label= "Phone Number"
              name = "phoneNumber"
              sx={{ mb: 5 }}
              value={user.phoneNumber}
              onChange={
                updateUserHandler
              }
          ></TextField>
          <Box
            display="flex" justifyContent="center" marginTop={2}
          >
            <Button variant="contained" onClick={updateUserHandler}>
              Save Changes
            </Button>
          </Box>
        </Box>
      );
    }

}

