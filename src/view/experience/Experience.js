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
            I've developed and maintained web applications using React JS with Redux in government-scaled web applications, ensuring robust state management and seamless user interactions. I
            implemented UI/UX designs into the web interface, translating design specifications into functional and visually appealing components. To enhance the user experience, I customized the
            display using Material-UI, creating a consistent and modern look across the application. Additionally, I developed CI/CD pipelines with GitHub Actions to streamline the deployment process,
            ensuring rapid and reliable releases. My work also involved debugging and enhancing application performance, optimizing code and resolving issues to deliver a smooth user experience.
            {/* I contributed to the Ministry of Foreign Affairs of the Republic of Indonesia project. I
            developed and fixed bugs in the Payroll Management System project. In addition, I created E-administration services and E-Study Tasks projects. */}
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
            June 2022 - July 2023
          </Typography>
          <Typography textAlign="center" variant="caption" fontSize="13px">
            I've developed a Real Estate Management website project using both React JS and Vue JS, leveraging the strengths of each framework to create a dynamic and responsive application. I
            implemented UI/UX designs into the web interface, ensuring an intuitive and user-friendly experience. To achieve a polished and unique look, I customized the display using Tailwind CSS,
            allowing for rapid and flexible styling. Additionally, I focused on debugging and enhancing application performance, ensuring the site runs smoothly and efficiently for all users.
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
            I created a mock-up dashboard application chatbot design using Balsamiq, laying the groundwork for a user-friendly interface. I then developed the dashboard application with PHP, utilizing
            the Laravel framework and Argon Dashboard Template to ensure a robust and visually appealing end product. Additionally, I created graphic designs and illustrations for marketing and
            promotion purposes, enhancing the visual appeal and effectiveness of promotional materials.
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
