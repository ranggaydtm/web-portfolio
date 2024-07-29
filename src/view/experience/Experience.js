/* eslint-disable no-unused-vars */
import { Box, Card, CardContent, Grid, Paper, Stack, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Box sx={{ backgroundColor: "" }}>
      <Typography textAlign="center" fontSize="32px" fontWeight={700} paddingBottom={3} paddingTop={3}>
        EXPERIENCE
      </Typography>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "800px",
          margin: "auto",
          mb: 2,
          borderRadius: "20px",
          cursor: "pointer",
          transition: "transform 200ms ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Grid direction="column" maxWidth="800px" spacing={2} sx={{ padding: 2, margin: "auto", justifyContent: "center", alignItems: "center" }}>
          <Typography textAlign="center" fontWeight={600}>
            Frontend Developer - Digital Informasi Futuristik
          </Typography>
          <Typography textAlign="center">August 2023 - Present</Typography>
          <Typography textAlign="center" fontSize="15px">
            I contributed to the Ministry of Foreign Affairs of the Republic of Indonesia project. I developed and fixed bugs in the Payroll Management System project. Furthermore, I created
            E-administration services and E-Study Tasks projects.
          </Typography>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ maxWidth: "800px", margin: "auto", mb: 2, borderRadius: "20px", cursor: "pointer" }}>
        <Grid direction="column" maxWidth="800px" spacing={2} sx={{ padding: 2, margin: "auto", justifyContent: "center", alignItems: "center" }}>
          <Typography textAlign="center" fontWeight={600}>
            Frontend Developer - BAS-IT Studio
          </Typography>
          <Typography textAlign="center">June 2022 - September 2022</Typography>
          <Typography textAlign="center" fontSize="15px">
            I contributed to the Ministry of Foreign Affairs of the Republic of Indonesia project. I developed and fixed bugs in the Payroll Management System project. In addition, I created
            E-administration services and E-Study Tasks projects.
          </Typography>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ maxWidth: "800px", margin: "auto", borderRadius: "20px", cursor: "pointer" }}>
        <Grid direction="column" maxWidth="800px" spacing={2} sx={{ padding: 2, margin: "auto", justifyContent: "center", alignItems: "center" }}>
          <Typography textAlign="center" fontWeight={600}>
            Frontend Developer - Elektronik Virtual Asisten
          </Typography>
          <Typography textAlign="center">September 2021 - December 2021</Typography>
          <Typography textAlign="center" fontSize="15px">
            I contributed to the Ministry of Foreign Affairs of the Republic of Indonesia project. I developed and fixed bugs in the Payroll Management System project. In addition, I created
            E-administration services and E-Study Tasks projects.
          </Typography>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Experience;
