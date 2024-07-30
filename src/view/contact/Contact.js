/* eslint-disable no-unused-vars */
import { Instagram, MailOutline, X } from "@mui/icons-material";
import { Container, FormLabel, IconButton, Paper, Stack, Typography } from "@mui/material";
import { ContainerContact, PaperContact } from "../../assets/theme/Style";

const Contact = () => {
  // Attach email on Gmail
  const email = "ranggay67@gmail.com";
  const sendEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <>
      <Typography pt={5} textAlign="center" fontSize="28px" fontWeight={800} fontFamily="-moz-initial">
        CONTACT
      </Typography>
      <Container sx={ContainerContact}>
        <Paper elevation={3} sx={PaperContact}>
          <Stack direction="column" spacing={1} sx={{ backgroundColor: "", padding: 2 }}>
            <Typography fontSize="20px" fontWeight={700} variant="caption">
              Get in Touch
            </Typography>
            <Typography fontSize="14px" variant="caption">
              I'm always excited to connect with like-minded professionals and explore new opportunities. Whether you have a project in mind, are looking for a creative collaborator. I’d like to hear
              from you! Let's build something amazing together. Drop me a message, and let's start the conversation.
            </Typography>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
                <MailOutline fontSize="small" />
                <Typography fontSize="14px" fontFamily="inherit" fontWeight={600}>
                  ranggay67@gmail.com
                </Typography>
              </Stack>
              <Typography fontSize="14px" pt={1}>
                Find me on Social Media!
              </Typography>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <FormLabel title="X">
                  <IconButton href="https://www.x.com/rrranggay/" target="_blank" rel="noopener noreferrer">
                    <X fontSize="small" />
                  </IconButton>
                </FormLabel>
                <FormLabel title="Instagram">
                  <IconButton href="https://www.instagram.com/ranggaydtm/" target="_blank" rel="noopener noreferrer">
                    <Instagram fontSize="small" />
                  </IconButton>
                </FormLabel>
              </Stack>
            </Stack>
            {/* <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <FormLabel title="Attach Email">
            <IconButton href={sendEmail} target="_blank" rel="noopener noreferrer">
            <AttachEmail />
            </IconButton>
            </FormLabel>
            </Stack> */}
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default Contact;
