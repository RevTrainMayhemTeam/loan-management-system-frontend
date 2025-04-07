import { Box, Typography } from '@mui/material'

export const Welcome = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    }}>
      <Typography sx={{textAlign: "center", color:"grey"}}>
        Select an option from the sidebar to get started
        </Typography>
    </Box>
  )
}
