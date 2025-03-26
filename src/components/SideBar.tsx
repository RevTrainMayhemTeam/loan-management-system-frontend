import { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

//type Props = {}    {}: Props

export default function SideBar() {
  const [content, setContent] = useState<string | null>(null); //The "(null)" is to set the default state

  return (
    <Box display="flex" height="100vh" onClick={() => setContent(null)}>
      {/* Here we use the onClick event to close the paper when the user clicks anywhere besides from the paper, the side bar or the buttons */}

      {/* Blue side bar */}
      <Box
        width={200}
        bgcolor="#0d47a1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            setContent("Option #1");
          }}
          sx={{ mb: 4, bgcolor: "white", color: "black" }}
        >
          Option #1
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            setContent("Option #2");
          }}
          sx={{ bgcolor: "white", color: "black" }}
        >
          Option #2
        </Button>
      </Box>

      {/* Floating paper */}
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        {content && (
          <Paper
            elevation={5}
            sx={{ padding: 4, minWidth: 300, textAlign: "center" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Typography variant="h6">{content}</Typography>
            <Typography variant="body1">
              This is a placeholder for some content that el Jefazo is still
              designing
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
