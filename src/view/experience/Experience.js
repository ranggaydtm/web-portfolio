/* eslint-disable no-unused-vars */
import { Box, Card, CardContent, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { PaperStyle, StackStyle, TechStyle } from "../../assets/theme/Style";

const Experience = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography textAlign="center" fontSize="28px" fontWeight={800} fontFamily="serif">
        EXPERIENCE
      </Typography>
      <Paper elevation={3} sx={PaperStyle}>
        <Stack spacing={1} padding={2} sx={StackStyle}>
          <Typography textAlign="center" fontWeight={600}>
            Frontend Developer - Digital Informasi Futuristik
          </Typography>
          <Typography textAlign="center" fontSize="14px">
            August 2023 - Present
          </Typography>
          <Typography textAlign="center" variant="caption" fontSize="13px">
            I contributed to the Ministry of Foreign Affairs of the Republic of Indonesia project. I developed and fixed bugs in the Payroll Management System project. Furthermore, I created E-Layanan
            Administrasi and E-Tugas Belajar projects.
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={TechStyle}>
            <Chip variant="filled" size="small" clickable label="Javascript" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Typescript" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="ReactJS" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Redux" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Material-UI" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Postman" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Github Action (CI/CD)" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Agile / Scrum" sx={{ fontSize: "12px" }} />
          </Stack>
        </Stack>
      </Paper>
      <Paper elevation={3} sx={PaperStyle}>
        <Stack spacing={1} padding={2} sx={StackStyle}>
          <Typography textAlign="center" fontWeight={600}>
            Frontend Developer - BAS-IT Studio
          </Typography>
          <Typography textAlign="center" fontSize="14px">
            June 2022 - September 2022
          </Typography>
          <Typography textAlign="center" variant="caption" fontSize="13px">
            I contributed to the Ministry of Foreign Affairs of the Republic of Indonesia project. I developed and fixed bugs in the Payroll Management System project. In addition, I created
            E-administration services and E-Study Tasks projects.
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={TechStyle}>
            <Chip variant="filled" size="small" clickable label="ReactJS" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Redux" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="VueJS" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Tailwind CSS" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Git" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Postman" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Agile / Scrum" sx={{ fontSize: "12px" }} />
          </Stack>
        </Stack>
      </Paper>
      <Paper elevation={3} sx={PaperStyle}>
        <Stack spacing={1} padding={2} sx={StackStyle}>
          <Typography textAlign="center" fontWeight={600}>
            Frontend Developer - Elektronik Virtual Asisten
          </Typography>
          <Typography textAlign="center" fontSize="14px">
            September 2021 - December 2021
          </Typography>
          <Typography textAlign="center" variant="caption" fontSize="13px">
            I contributed to the Ministry of Foreign Affairs of the Republic of Indonesia project. I developed and fixed bugs in the Payroll Management System project. In addition, I created
            E-administration services and E-Study Tasks projects.
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={TechStyle}>
            <Chip variant="filled" size="small" clickable label="PHP" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Laravel" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="HTML" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="CSS" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="Balsamiq" sx={{ fontSize: "12px" }} />
            <Chip variant="filled" size="small" clickable label="JSON" sx={{ fontSize: "12px" }} />
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Experience;
