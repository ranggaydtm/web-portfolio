/* eslint-disable no-unused-vars */
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { ChipStyle, PaperStyle, StackStyle, TechStyle } from "../../assets/theme/Style";

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
            <Chip variant="filled" size="small" clickable label="Javascript" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Typescript" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="ReactJS" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Redux" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Material-UI" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Postman" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Github Action (CI/CD)" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Agile / Scrum" sx={ChipStyle} />
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
            <Chip variant="filled" size="small" clickable label="ReactJS" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Redux" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="VueJS" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Tailwind CSS" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Git" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Postman" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Agile / Scrum" sx={ChipStyle} />
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
            <Chip variant="filled" size="small" clickable label="PHP" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Laravel" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="HTML" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="CSS" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="Balsamiq" sx={ChipStyle} />
            <Chip variant="filled" size="small" clickable label="JSON" sx={ChipStyle} />
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Experience;
