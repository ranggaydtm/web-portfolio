/* eslint-disable no-unused-vars */
import { Box, Button, Container, IconButton, Stack, Typography, Tooltip, FormLabel } from "@mui/material";
import { GitHub, LinkedIn, LightMode, DarkMode, FileDownload } from "@mui/icons-material";
import { ButtonResume, ContainerHero } from "../../assets/theme/Style";

import Logo from "../../assets/image/logo-rounded.png";
import TypewriterComponent from "typewriter-effect";
import Resume from "../../assets/file/resume.pdf";

const Hero = ({ themeMode, toggleTheme }) => {
  return (
    <Container sx={ContainerHero}>
      <Box>
        <img src={Logo} alt="Logo" style={{ maxWidth: "250px", position: "relative" }} />
        <Tooltip title="Change Theme">
          <IconButton onClick={toggleTheme} sx={{ position: "absolute", width: "40px", marginLeft: -4 }}>
            {themeMode === "light" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box>
        <Typography fontSize="32px" fontFamily="serif" fontWeight={700}>
          MOHAMMAD
        </Typography>
        <Typography fontSize="32px" fontFamily="serif" fontWeight={700}>
          RANGGA
        </Typography>
        <Typography fontSize="32px" fontFamily="serif" fontWeight={700}>
          YUDITAMA
        </Typography>
        <Typography fontSize="20px" fontFamily="monospace">
          <TypewriterComponent
            options={{
              strings: "Frontend Developer",
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              fontFamily: "monospace",
            }}
          />
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" py={1}>
          <FormLabel title="Github">
            <IconButton href="https://github.com/ranggaydtm" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </IconButton>
          </FormLabel>
          <FormLabel title="LinkedIn">
            <IconButton href="https://www.linkedin.com/in/ranggaydtm/" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </IconButton>
          </FormLabel>
        </Stack>
        <FormLabel title="Download Resume">
          <a href={Resume} download>
            <Button variant="contained" endIcon={<FileDownload fontSize="small" />} sx={ButtonResume}>
              Resume
            </Button>
          </a>
        </FormLabel>
      </Box>
    </Container>
  );
};

export default Hero;
