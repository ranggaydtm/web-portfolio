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
