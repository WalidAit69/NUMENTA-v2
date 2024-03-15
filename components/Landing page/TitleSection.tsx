import React, { useEffect } from "react";
import LandingNavbar from "./LandingNavbar";
import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";

function TitleSection({
  scrolled,
  screenWidth,
}: {
  scrolled: boolean;
  screenWidth: number;
}) {
  const controls = useAnimation();
  const text = "MidJourney";

  const layerclass = twMerge(
    scrolled
      ? "h-[100%] top-0 overflow-hidden absolute w-full"
      : "w-full h-[90%] absolute top-[10%] overflow-hidden"
  );

  useEffect(() => {
    if (scrolled && screenWidth > 1500) {
      controls.start({ bottom: "65%" });
    } else if (scrolled && screenWidth < 1500) {
      controls.start({ bottom: "70%" });
    } else if (scrolled && screenWidth < 1024) {
      controls.start({ bottom: "80%" });
    } else if (!scrolled && screenWidth > 1500) {
      controls.start({ bottom: "-10%" });
    } else {
      controls.start({ bottom: "0%" });
    }
  }, [scrolled]);

  return (
    <section className="h-screen relative w-full text-white bg-black">
      {!scrolled && <LandingNavbar />}

      <div className={layerclass}>
        <motion.div
          animate={controls}
          initial={{ bottom: "-10%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="landing-h1 font-extrabold absolute w-full p-0 flex"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.05 * index,
                duration: 0.3,
                ease: "easeInOut",
              }}
              style={{ display: "flex" }}
              className="sm:tracking-[2.5rem] tracking-[1.5rem] max-[450px]:tracking-[1rem]"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TitleSection;
