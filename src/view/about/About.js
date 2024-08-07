import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import Pics from "../../assets/image/photo.png";

const About = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Paper elevation={0} sx={{ maxWidth: "800px", margin: "auto", padding: 2, backgroundColor: "inherit" }}>
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Avatar src={Pics} alt="Photo of Mohammad Rangga Yuditama" sx={{ width: 300, height: "auto" }} />
        </Stack>
        <Typography fontSize="28px" fontWeight={800} fontFamily="-moz-initial">
          ABOUT
        </Typography>
        <Typography variant="caption" fontSize="14px">
          a Frontend Developer with a Bachelor's degree in Informatics Engineering from Widyatama University. Over one year of professional experience in frontend development, proficient in HTML, CSS,
          JavaScript, and Node.js. Adept at using modern frameworks and libraries such as React.js, Vue.js, and TypeScript to build dynamic and responsive web applications. Proven ability to deliver
          high-quality, user-friendly, and performant web solutions. Constantly seeking opportunities for learning and growth.
          {/* Graduated of Informatics Engineering from Widyatama University. I'm a passionate Frontend Web Developer with 1 year experience in building visually appealing and highly functional web
          applications. My expertise lies in HTML, CSS and JavaScript, along with hands-on experience in experience in modern frameworks like React, Typescript and Vue. I thrive on turning complex
          problems into simple, and intuitive interfaces. */}
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
