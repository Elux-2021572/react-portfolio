import { gsap, Power3 } from "gsap";

// Esta línea es la que soluciona el error
gsap.registerPlugin(Power3);

export const stagger = (target, fromvVars, toVars) => {
  return gsap.fromTo(
    target,
    { opacity: 0, ...fromvVars },
    { opacity: 1, ...toVars, stagger: 0.2, ease: Power3.easeOut }
  );
};