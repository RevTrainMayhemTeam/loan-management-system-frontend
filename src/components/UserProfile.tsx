import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { TextField, Avatar, Button, Typography, Box } from "@mui/material";

export const UserProfile = () => {

  const { user, updateUser } = useContext(AuthContext)!;
  const [updateData, setUpdateData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  //Hook useEffect for setting the original information of the user
  useEffect(() => {
    if (user) {
      setUpdateData({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
      });
    }
  }, [user]);

  //Changes the information in the field
  const changeInfoField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Updates the user info
  const updateUserHandler = async () => {
    if (user) {
      try {
        const updatedData = {
          firstName: updateData.firstName,
          lastName: updateData.lastName,
          phoneNumber: updateData.phoneNumber
        };
        await updateUser(user.id, updatedData);
      } catch (error) {
        console.log(error);
      }
    }
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
          }}
        >
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Avatar
              sx={{
                width: 90,
                height: 90,
                my: 2,
                marginRight: 2,
                bgcolor: "#D0D0D5",
                fontSize: 36,
              }}
            >
              {user.firstName?.charAt(0)}
              {user.lastName?.charAt(0)}
            </Avatar>
          </Box>

          <Typography
            variant="h4"
            align="center"
          >{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="h6" color="gray" align="center" marginBottom={3}>
            {user.email}
          </Typography>

          <Box component="form" sx={{ width: "100%", maxWidth: 500 }}>
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
                sx={{ bgcolor: "#D0D0D5", color: "black" }}
                variant="contained"
                onClick={updateUserHandler}
              >
                Save changes
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};