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
  });

  //Hook useEffect for setting the original information of the user
  useEffect(() => {
    if(user) {
      setUpdateData({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber
      });
    }
  }, [user]);

  //Changes the information in the field / stores the new information
  const changeInfoField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //Updates the user info
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
          }}
        >
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Avatar
              sx={{
                width: 90,
                height: 90,
                my: 2,
                marginRight: 2,
                bgcolor: "primary.main",
                fontSize: 36
              }}
            >
              {user.firstName?.charAt(0)}
              {user.lastName?.charAt(0)}
            </Avatar>
          </Box>

          <Typography variant="h4" align="center">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="h6" color="gray" align="center" marginBottom={3}>{user.email}</Typography>

          <Box component="form" sx={{ width: '100%', maxWidth: 500 }}>
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
                variant="contained"
                type="submit"
                onClick={updateUserHandler}
              >
                Save changes
              </Button>
            </Box>
          </Box>
        </Box>
      );
    }
}
export default UserProfile;

