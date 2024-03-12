"use client";

import LandingNavbar from "@/components/Landing page/LandingNavbar";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import VideoSection from "@/components/Landing page/VideoSection";
import UpdateSection from "@/components/Landing page/UpdateSection";
import StartSection from "@/components/Landing page/StartSection";

function LandingPage() {
  const { isSignedIn } = useAuth();

  const text = "MidJourney";

  const [scrolled, setScrolled] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // window.scrollTo(0, 0);
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

      <section className="h-[100vh]">
        <motion.section animate={sectioncontrols} className="absolute">
          <div className="overflow-hidden h-full relative">
            <motion.img
              initial={{ rotate: "-15deg", scale: 1.5 }}
              animate={imgcontrols}
              transition={{ duration: 1, ease: "easeInOut" }}
              src="./test.png"
              alt=""
              className="w-full h-full object-cover relative z-10"
            />

            <div className="absolute top-[70%] left-1/2 -translate-x-1/2 z-50 text-center w-full">
              <h2 className="text-6xl font-bold text-white overflow-hidden h-[70px]">
                <motion.span
                  initial={{ marginTop: "4rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block"
                >
                  Endjourney is a research lab
                </motion.span>
              </h2>
              <h2 className="text-6xl font-bold text-white overflow-hidden h-[70px]">
                <motion.span
                  initial={{ marginTop: "4rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
                  className="block"
                >
                  focused on innovative
                </motion.span>
              </h2>
              <h2 className="text-6xl font-bold text-white overflow-hidden h-[70px]">
                <motion.span
                  initial={{ marginTop: "4rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
                  className="block"
                >
                  thinking and enhancing
                </motion.span>
              </h2>
              <h2 className="text-6xl font-bold text-white overflow-hidden h-[70px]">
                <motion.span
                  initial={{ marginTop: "4rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
                  className="block"
                >
                  human imagination.
                </motion.span>
              </h2>

              <p className="text-white mt-6 overflow-hidden h-[25px]">
                <motion.span
                  initial={{ marginTop: "1.5rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.8 }}
                  className="inline-block"
                >
                  We are a small self-funded team focused on design, human
                </motion.span>
              </p>
              <p className="text-white overflow-hidden h-[25px]">
                <motion.span
                  initial={{ marginTop: "1.5rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
                  className="inline-block"
                >
                  infrastructure, and AI. We have 11 full-time staff and an
                </motion.span>
              </p>
              <p className="text-white overflow-hidden h-[25px]">
                <motion.span
                  initial={{ marginTop: "1.5rem" }}
                  whileInView={{ marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 1.2 }}
                  className="inline-block"
                >
                  incredible set of advisors.
                </motion.span>
              </p>

              <motion.button
                initial={{ rotate: "-15deg", scale: 1.4, opacity: 0 }}
                whileInView={{ rotate: "0deg", scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 1.4 }}
                className="mt-6 font-semibold bg-[#cff935] py-3 px-4 rounded-full inline-block"
              >
                More info
              </motion.button>
            </div>
          </div>
        </motion.section>
      </section>

      <VideoSection />

      <UpdateSection />

      <StartSection />
    </>
  );
}

export default LandingPage;
