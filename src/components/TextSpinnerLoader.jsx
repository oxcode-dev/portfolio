import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const yearVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear", 
    },
  },
}

export default function TextSpinnerLoader() {
  const text = "Oxcode . Frontend developer";
  const characters = text.split("");

  const radius = 80;
  const fontSize = "16px";
  const letterSpacing = 10;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      animate(letterAnimation, {
        ease: "linear",
        repeat: Infinity,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 3, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, []);

  return (
    <div className="relative"> 
      <motion.div variants={yearVariant} initial="hidden" animate="animate" className="absolute top-10 left-12 inline-flex flex-col items-center justify-center w-16">
        <h2>
          <span className="text-2xl md:text-4xl">5</span>
          <sup className="text-xl">+</sup>
        </h2>
        <span className="text-sm">Years</span>
        <span className="text-sm">Experience</span>
      </motion.div>
      <motion.div ref={scope} className="relative aspect-[1] border rounded-full" style={{ width: radius * 2 }}>
        <p aria-label={text} />
        <p aria-hidden="true" className="text">
          {characters.map((ch, i) => (
            <motion.span
              key={i}
              className={`absolute top-0 left-[50%] uppercase letter letter-${i}`}
              style={{
                transformOrigin: `0 ${radius}px`,
                transform: `rotate(${i * letterSpacing}deg)`,
                fontSize,
              }}
            >
              {ch}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
   
  );
}