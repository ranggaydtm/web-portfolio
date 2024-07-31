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
  const [inViewRef, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  // const [fadeClass, setFadeClass] = useState(classes.fadeOut);
  // useEffect(() => {
  //   if (inView) {
  //     setFadeClass(classes.fadeIn);
  //   } else {
  //     setFadeClass(classes.fadeOut);
  //   }
  // }, [inView, classes.fadeIn, classes.fadeOut]);

  return (
    <div ref={inViewRef} className={isVisible ? classes.fadeIn : classes.fadeOut}>
      {children}
    </div>
  );
};

export default Transition;
