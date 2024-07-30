export const ContainerHero = () => {
  return {
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
  };
};

export const ContainerContact = () => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: { md: "center" },
    gap: 4,
    pt: 2,
    pb: 5,
    textAlign: "center",
  };
};

export const ButtonResume = () => {
  return {
    borderRadius: "20px",
    color: "black",
    backgroundColor: "#f2f2f2",
    transition: "transform 200ms ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#f2f2f2",
    },
  };
};

export const PaperStyle = () => {
  return {
    maxWidth: "800px",
    margin: "auto",
    mb: 2,
    mt: 1,
    borderRadius: "20px",
    transition: "transform 200ms ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };
};

export const PaperContact = () => {
  return {
    width: { xs: "100%", md: "50%" },
    borderRadius: "20px",
    transition: "transform 200ms ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };
};

export const StackStyle = () => {
  return {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "800px",
    margin: "auto",
  };
};

export const TechStyle = () => {
  return {
    flexWrap: "wrap",
    gap: 1,
    "@media (max-width:600px)": {
      justifyContent: "center",
    },
  };
};

export const ChipStyle = () => {
  return {
    fontSize: "12px",
  };
};
