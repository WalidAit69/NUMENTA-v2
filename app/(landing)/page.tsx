"use client";

import LandingNavbar from "@/components/Landing page/LandingNavbar";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function LandingPage() {
  const { isSignedIn } = useAuth();

  const text = "EndJourney";

  const [scrolled, setScrolled] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollPosition]);

  const layerclass = twMerge(
    scrolled
      ? "h-[100%] top-0 overflow-hidden absolute w-full"
      : "w-full h-[90%] absolute top-[10%] overflow-hidden"
  );

  const controls = useAnimation();
  const imgcontrols = useAnimation();
  const sectioncontrols = useAnimation();

  useEffect(() => {
    if (scrolled) {
      controls.start({ bottom: "65%" });
      imgcontrols.start({ rotate: 0, scale: 1 });
      sectioncontrols.start({ position: "absolute", top: 0 });
    } else {
      controls.start({ bottom: "-10%" });
      imgcontrols.start({ rotate: "-15deg", scale: 1.5 });
      sectioncontrols.start({ position: "relative" });
    }
  }, [scrolled]);

  return (
    <>
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

      <motion.section animate={sectioncontrols} className="absolute">
        <div className="overflow-hidden h-full">
          <motion.img
            initial={{ rotate: "-15deg", scale: 1.5 }}
            animate={imgcontrols}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="https://ucarecdn.com/2049fd82-e34a-4ea2-b66a-034d49c19f08/"
            alt=""
            className="w-full h-full object-cover relative z-50"
          />
        </div>
      </motion.section>
    </>
  );
}

export default LandingPage;
