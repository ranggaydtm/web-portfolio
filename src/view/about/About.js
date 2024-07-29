/* eslint-disable no-unused-vars */
import { Box, Paper, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ textAlign: "center", backgroundColor: "" }}>
      <Typography fontSize="32px" fontWeight={700} sx={{ py: 3 }}>
        ABOUT
      </Typography>
      <Paper elevation={0} sx={{ maxWidth: "800px", margin: "auto", padding: 2, backgroundColor: "" }}>
        <Typography fontSize="16px" fontWeight={500}>
          Graduated of Informatics Engineering from Widyatama University. I'm a passionate Frontend Web Developer with 1 year experience in building visually appealing and highly functional web
          applications. My expertise lies in HTML, CSS and JavaScript, along with hands-on experience in experience in modern frameworks like React, Typescript and Vue. I thrive on turning complex
          problems into simple, and intuitive interfaces.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
