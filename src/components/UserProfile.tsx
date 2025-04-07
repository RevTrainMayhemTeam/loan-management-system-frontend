<<<<<<< HEAD
import { useContext, useState, useEffect} from "react";
import AuthContext from "../context/AuthContext";
import { TextField, Avatar, Button, Typography, Box} from "@mui/material";
import { updateUserInfo } from "../services/UserService";


function UserProfile() {
  //Retrieve the user
  const {user} = useContext(AuthContext)!;

  //Hook useState for the initial state of the user
  const [updateData, setUpdateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
=======
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { TextField, Avatar, Button, Typography, Box } from "@mui/material";

export const UserProfile = () => {

  const { user, updateUser } = useContext(AuthContext)!;
  const [updateData, setUpdateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
>>>>>>> origin/main
  });

  //Hook useEffect for setting the original information of the user
  useEffect(() => {
<<<<<<< HEAD
    if(user) {
      setUpdateData({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber
=======
    if (user) {
      setUpdateData({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
>>>>>>> origin/main
      });
    }
  }, [user]);

<<<<<<< HEAD
  //Changes the information in the field / stores the new information
  const changeInfoField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData(prev => ({
      ...prev,
      [name]: value
=======
  //Changes the information in the field
  const changeInfoField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
>>>>>>> origin/main
    }));
  };

  //Updates the user info
<<<<<<< HEAD
  const updateUserHandler = async () =>{
    if(user){
      try {
        const updatedData = {
          id: user.id,
          firstName: updateData.firstName,
          lastName: updateData.lastName,
          phoneNumber: updateData.phoneNumber,
          email: user.email,
          role: user.role
        };
          await updateUserInfo(updatedData);  
=======
  const updateUserHandler = async () => {
    if (user) {
      try {
        const updatedData = {
          firstName: updateData.firstName,
          lastName: updateData.lastName,
          phoneNumber: updateData.phoneNumber
        };
        await updateUser(user.id, updatedData);
>>>>>>> origin/main
      } catch (error) {
        console.log(error);
      }
    }
<<<<<<< HEAD

  };

    if(user){
      return (
        <Box
          component="section"
          sx={{
            background: "#F0F0F1",
            display: "flex",
            maxWidth: 800,
            minHeight: 600,
            alignItems: "center",
            py: 10,
            p: 2,
            border: "2px solid grey",
            borderRadius: 5,
            flexDirection: "column",
            mx: "auto",
            my: 2,
=======
  };

  if (user) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch", // Ensures children take full width
          justifyContent: "flex-start",
          height: "calc(100vh - 53px)", // Adjust to available height (subtract for header if needed)
          width: "100%",
          padding: 2,
          overflow: "hidden",
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",            
            flexDirection: "column",
            alignItems: "center",
            py: 10,
            p: 2,
            borderRadius: 5,
            mx: "auto",
            background: "#F0F0F1",
>>>>>>> origin/main
          }}
        >
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Avatar
              sx={{
                width: 90,
                height: 90,
                my: 2,
                marginRight: 2,
<<<<<<< HEAD
                bgcolor: "primary.main",
                fontSize: 36
=======
                bgcolor: "#D0D0D5",
                fontSize: 36,
>>>>>>> origin/main
              }}
            >
              {user.firstName?.charAt(0)}
              {user.lastName?.charAt(0)}
            </Avatar>
          </Box>

<<<<<<< HEAD
          <Typography variant="h4" align="center">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="h6" color="gray" align="center" marginBottom={3}>{user.email}</Typography>

          <Box component="form" sx={{ width: '100%', maxWidth: 500 }}>
=======
          <Typography
            variant="h4"
            align="center"
          >{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="h6" color="gray" align="center" marginBottom={3}>
            {user.email}
          </Typography>

          <Box component="form" sx={{ width: "100%", maxWidth: 500 }}>
>>>>>>> origin/main
            <TextField
              fullWidth
              variant="standard"
              label="First Name"
              name="firstName"
              sx={{ mb: 5 }}
              value={updateData.firstName}
              onChange={changeInfoField}
            />

            <TextField
              fullWidth
              variant="standard"
              label="Last Name"
              name="lastName"
              sx={{ mb: 5 }}
              value={updateData.lastName}
              onChange={changeInfoField}
            />

            <TextField
              fullWidth
              variant="standard"
              label="Phone Number"
              name="phoneNumber"
              sx={{ mb: 5 }}
              value={updateData.phoneNumber}
              onChange={changeInfoField}
            />

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button
<<<<<<< HEAD
                variant="contained"
                type="submit"
=======
                sx={{ bgcolor: "#D0D0D5", color: "black" }}
                variant="contained"
>>>>>>> origin/main
                onClick={updateUserHandler}
              >
                Save changes
              </Button>
            </Box>
          </Box>
        </Box>
<<<<<<< HEAD
      );
    }
}
export default UserProfile;

=======
      </Box>
    );
  }
};
>>>>>>> origin/main
