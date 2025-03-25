import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export const Header = () => {
  const {user} = useContext(AuthContext)!;

  const logoutHandler = () => {
    
  }


  return (
    <Box sx={{
      background: "grey",
      display:"flex",
      height: 50
    }}>
      <p>Loan Management System</p>
      {user ? <p>Welcome {user?.firstName +" "+ user?.lastName}</p> : null}
      {user ? <Button onClick={logoutHandler}>Logout</Button> : null}
    </Box>
  )
}
