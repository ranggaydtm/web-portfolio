import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  fadeIn: {
    opacity: 1,
    transition: "opacity 1s ease-in",
  },
  fadeOut: {
    opacity: 0,
    transition: "opacity 1s ease-out",
  },
}));

const Transition = ({ children }) => {
  const classes = useStyles();
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [fadeClass, setFadeClass] = useState(classes.fadeOut);

  useEffect(() => {
    if (inView) {
      setFadeClass(classes.fadeIn);
    }
  }, [inView, classes.fadeIn]);

  return (
    <div ref={inViewRef} className={fadeClass}>
      {children}
    </div>
  );
};

export default Transition;
