import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function ImageSection({
  scrolled,
  screenWidth,
}: {
  scrolled: boolean;
  screenWidth: number;
}) {
  const imgcontrols = useAnimation();
  const sectioncontrols = useAnimation();

  useEffect(() => {
    if (scrolled) {
      imgcontrols.start({ rotate: 0, scale: 1 });
      sectioncontrols.start({ position: "absolute", top: 0 });
    } else if (!scrolled && screenWidth < 1300) {
      imgcontrols.start({ rotate: "0deg", scale: 1.3 });
      sectioncontrols.start({ position: "relative" });
    } else {
      imgcontrols.start({ rotate: "-15deg", scale: 1.5 });
      sectioncontrols.start({ position: "relative" });
    }
  }, [scrolled]);

  return (
    <section className="h-[150vh]">
      <motion.section
        animate={sectioncontrols}
        className="absolute h-full w-full"
      >
        <div className="overflow-hidden h-[250vh] relative">
          <motion.img
            initial={{ rotate: "-15deg", scale: 1.5 }}
            animate={imgcontrols}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="./sculpture.webp"
            alt=""
            className="w-full h-full object-cover relative z-10 mt-[10rem] xl:mt-0"
          />

          <div className="absolute top-[70%] left-1/2 -translate-x-1/2 z-50 text-center w-full">
            <div className="text-6xl font-bold text-white max-[1110px]:text-3xl">
              <h2 className="overflow-hidden h-[70px] max-[1110px]:h-[40px]">
                <motion.span
                  initial={{
                    marginTop: screenWidth > 1110 ? "4rem" : "2.1rem",
                  }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block"
                >
                  Endjourney is a research lab
                </motion.span>
              </h2>
              <h2 className="overflow-hidden h-[70px] max-[1110px]:h-[40px]">
                <motion.span
                  initial={{
                    marginTop: screenWidth > 1110 ? "4rem" : "2.1rem",
                  }}
                  whileInView={{ marginTop: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="block"
                >
                  focused on innovative
                </motion.span>
              </h2>
              <h2 className="overflow-hidden h-[70px] max-[1110px]:h-[40px]">
                <motion.span
                  initial={{
                    marginTop: screenWidth > 1110 ? "4rem" : "2.1rem",
                  }}
                  whileInView={{ marginTop: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="block"
                >
                  thinking and enhancing
                </motion.span>
              </h2>
              <h2 className="overflow-hidden h-[70px] max-[1110px]:h-[40px]">
                <motion.span
                  initial={{
                    marginTop: screenWidth > 1110 ? "4rem" : "2.1rem",
                  }}
                  whileInView={{ marginTop: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  className="block"
                >
                  human imagination.
                </motion.span>
              </h2>
            </div>

            <div className="text-white text-sm max-[1110px]:text-base">
              <p className="mt-6 overflow-hidden h-[25px]">
                <motion.span
                  initial={{ marginTop: "1.5rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="inline-block"
                >
                  We are a small self-funded team focused on design, human
                </motion.span>
              </p>
              <p className="overflow-hidden h-[25px]">
                <motion.span
                  initial={{ marginTop: "1.5rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
                  className="inline-block"
                >
                  infrastructure, and AI. We have 11 full-time staff and an
                </motion.span>
              </p>
              <p className="overflow-hidden h-[25px]">
                <motion.span
                  initial={{ marginTop: "1.5rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                  className="inline-block"
                >
                  incredible set of advisors.
                </motion.span>
              </p>
            </div>

            <motion.button
              initial={{ rotate: "-15deg", scale: 1.4, opacity: 0 }}
              whileInView={{ rotate: "0deg", scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 1.4 }}
              className="mt-6 font-semibold bg-[#cff935] max-[1110px]:py-3 max-[1110px]:px-4 max-[1110px]:text-base py-2 px-3 text-sm rounded-full inline-block "
            >
              More info
            </motion.button>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default ImageSection;
