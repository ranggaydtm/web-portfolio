/* eslint-disable no-unused-vars */
import { Box, Button, Container, IconButton, Stack, Typography, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, LightMode, DarkMode, FileDownload } from "@mui/icons-material";

import Logo from "../../assets/image/logo-rounded.png";
import TypewriterComponent from "typewriter-effect";

const Hero = ({ themeMode, toggleTheme }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        justifyContent: "center",
        alignItems: { md: "center" },
        gap: 2,
        height: "100dvh",
        minHeight: "500px",
        textAlign: "center",
        "@media (min-width: 800px)": {
          justifyContent: "space-evenly",
        },
      }}
    >
      <Box sx={{ backgroundColor: "" }}>
        <img src={Logo} alt="Logo" style={{ maxWidth: "250px", position: "relative" }} />
        <Tooltip title="Change Theme">
          <IconButton onClick={toggleTheme} sx={{ position: "absolute", width: "40px", marginLeft: -4 }}>
            {themeMode === "light" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ backgroundColor: "" }}>
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
          <IconButton href="https://github.com/ranggaydtm" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/ranggaydtm/" target="_blank">
            <LinkedIn />
          </IconButton>
        </Stack>
        <Button
          variant="contained"
          endIcon={<FileDownload fontSize="small" />}
          sx={{
            borderRadius: "20px",
            color: "black",
            backgroundColor: "#f2f2f2",
            transition: "transform 200ms ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          Resume
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
