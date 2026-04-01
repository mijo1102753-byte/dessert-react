import Lenis from "lenis";

const smooth = () => {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });
};
export default smooth;
