import { memo, useEffect, useRef, useState } from "react";
import { fade, makeStyles } from "@material-ui/core";
import { TERMINAL_DISPLAY, TERMINAL_FRAMEWORK } from "utils/constants";
import { FLASHING_PATTERN } from "./constants";
import { quadOut } from "./helper";

const useStyles = makeStyles(() => ({
  root: {
    animationDuration: '0.1s',
    animationTimingFunction: 'ease-in-out',
    animationName: '$vibration',
    animationIterationCount: props => parseInt(props.duration) * 10,
  },
  framework: {
    width: 150,
    height: 308,
    backgroundImage: `url(${TERMINAL_FRAMEWORK})`,
    backgroundSize: 'cover',
    padding: '50px 20px 56px 25px',
  },
  displayContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundImage: `url(${TERMINAL_DISPLAY})`,
    backgroundSize: '100% 100%',
  },
  display: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 9999,
  },
  clipPathSvg: {
    width: 0,
    height: 0,
    position: 'absolute',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    clipPath: `url(#clip-path)`,
    filter: 'blur(12px)',
    zIndex: 1,
    background: props => `url(${TERMINAL_DISPLAY}) 100% 100%, radial-gradient(ellipse at top 10% left 0, ${props.tColor1}, transparent 50%), radial-gradient(ellipse at bottom 10% left 0, ${props.bColor1}, transparent 50%),
      radial-gradient(ellipse at top 0px left 40%, ${props.tColor2}, transparent 60%), radial-gradient(ellipse at bottom 0px left 50%, ${props.bColor2}, transparent 60%),
      radial-gradient(ellipse at top 10% left 80%, ${props.tColor3}, transparent 50%), radial-gradient(ellipse at bottom 10% left 80px, ${props.bColor3}, transparent 50%)`,
  },
  '@keyframes vibration': {
    '0%': { transform: 'translate(0.5px, 0.5px) rotate(0deg)' },
    '10%': { transform: 'translate(-0.5px, -1px) rotate(-1deg)' },
    '20%': { transform: 'translate(-1.5px, 0px) rotate(1deg)' },
    '30%': { transform: 'translate(1.5px, 1px) rotate(0deg)' },
    '40%': { transform: 'translate(0.5px, -0.5px) rotate(1deg)' },
    '50%': { transform: 'translate(-0.5px, 1px) rotate(-1deg)' },
    '60%': { transform: 'translate(-1.5px, 0.5px) rotate(0deg)' },
    '70%': { transform: 'translate(1.5px, 0.5px) rotate(-1deg)' },
    '80%': { transform: 'translate(-0.5px, -0.5px) rotate(1deg)' },
    '90%': { transform: 'translate(0.5px, 1px) rotate(0deg)' },
    '100%': { transform: 'translate(0.5px, -1px) rotate(-1deg)' },
  }
}));

const FanbandTerminal = ({ duration, palette, children }) => {
  const [, setFlash] = useState({ counter: 0, intervalId: 0, timeoutId: 0, prevState: [0, 1, 1, 1, 1, 1, 1], palette });
  const [lightState, setLightState] = useState({ timer: 0 });
  const classes = useStyles({ ...lightState, duration });
  const rootRef = useRef(null);

  const flashLight = () => setFlash(({ counter, intervalId, prevState: [, pt1, pt2, pt3, pb1, pb2, pb3], palette }) => {
    clearInterval(intervalId);
    setLightState(state => ({ ...state, timer: 0 }))

    const [period, top1, top2, top3, bottom1, bottom2, bottom3] = FLASHING_PATTERN[counter];
    const miniStep = 20;
    const newIntervalId = setInterval(() => {
      setLightState(({ timer }) => ({
        tColor1: fade(palette.topLight1, pt1 - (pt1 - top1) * quadOut(timer / period)),
        tColor2: fade(palette.topLight2, pt2 - (pt2 - top2) * quadOut(timer / period)),
        tColor3: fade(palette.topLight3, pt3 - (pt3 - top3) * quadOut(timer / period)),
        bColor1: fade(palette.bottomLight1, pb1 - (pb1 - bottom1) * quadOut(timer / period)),
        bColor2: fade(palette.bottomLight2, pb2 - (pb2 - bottom2) * quadOut(timer / period)),
        bColor3: fade(palette.bottomLight3, pb3 - (pb3 - bottom3) * quadOut(timer / period)),
        timer: timer >= period ? 0 : timer + miniStep,
      }));
    }, miniStep);

    const timeoutId = setTimeout(flashLight, period);

    return {
      counter: counter === FLASHING_PATTERN.length - 1 ? 0 : counter + 1,
      intervalId: newIntervalId,
      prevState: FLASHING_PATTERN[counter],
      timeoutId,
      palette,
    }
  });

  useEffect(() => {
    setFlash(state => {
      if (!state.timeoutId) {
        flashLight();
      }
      return state;
    });

    return () => setFlash(state => {
      clearTimeout(state.timeoutId);
      return { ...state, timeoutId: 0 };
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => setFlash(state => ({ ...state, palette })), [palette]);

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.animation = 'none';
      setTimeout(() => rootRef.current.style.animation = '');
    }
  }, [duration]);

  return (
    <div className={classes.root} ref={rootRef}>
      <div className={classes.framework}>
        <div className={classes.displayContainer}>
          <div className={classes.display}>
            {children}
          </div>
          <div className={classes.gradient} />
        </div>
      </div>
      <svg className={classes.clipPathSvg}>
        <clipPath id="clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.332,0.996 C0.144,0.979,0.05,0.892,0.009,0.682 C0,0.633,0,0.376,0.009,0.325 C0.025,0.244,0.049,0.158,0.101,0.1 C0.176,0.007,0.372,0.001,0.386,0.001 C0.474,0,0.464,0,0.542,0 C0.74,0,0.851,0.03,0.918,0.119 C0.956,0.16,0.978,0.237,0.995,0.327 C1,0.376,1,0.63,0.995,0.679 C0.979,0.764,0.948,0.831,0.925,0.867 C0.905,0.893,0.841,0.984,0.623,0.999 L0.609,0.999 L0.494,1 C0.427,1,0.389,1,0.361,0.998"></path>
        </clipPath>
      </svg>
    </div>
  )
};

export default memo(FanbandTerminal);