"use client";

import LandingNavbar from "@/components/Landing page/LandingNavbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

function LandingPage() {
  const { isSignedIn } = useAuth();

  const variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      color: "#333",
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay:2.5,
      },
    },
  };

  return (
    <div className="h-full relative md:mx-4">
      <motion.div initial={{ height: "100%" }} animate={{ height: 0 }}>
        <motion.img
          initial={{ top: "-100%" }}
          animate={{ top: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.74, 0.06, 0.4, 0.92],
            fill: "forwards",
          }}
          className="w-full h-full absolute z-20"
          src="https://ucarecdn.com/acaa440a-89d7-45ed-9c6c-75a4cc1073b8/"
          alt=""
        />

        <motion.img
          initial={{ top: "-100%" }}
          animate={{ top: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.74, 0.06, 0.4, 0.92],
            fill: "forwards",
            delay: 0.5,
          }}
          className="w-full h-full absolute z-20"
          src="https://ucarecdn.com/1d9cde84-8ac3-41aa-bccc-8dcf832b03b3/"
          alt=""
        />

        <motion.img
          initial={{ top: "-100%" }}
          animate={{ top: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.74, 0.06, 0.4, 0.92],
            fill: "forwards",
            delay: 1,
          }}
          className="w-full h-full absolute z-20"
          src="https://ucarecdn.com/379da444-0526-4b8e-a71b-d530c0b5d841/"
          alt=""
        />
      </motion.div>

      <motion.section
        className="w-full h-[100vh] relative z-30 bg-[#dfdfe0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.74, 0.06, 0.4, 0.92],
          fill: "forwards",
          delay: 2.2,
        }}
      >
        <LandingNavbar></LandingNavbar>

        <div className="md:mt-2 mt-20">
          <motion.h1
            initial="initial"
            animate="animate"
            variants={variants}
            className="lg:text-[15rem] md:text-[10rem] text-[5rem]"
          >
            Better AI
          </motion.h1>

          <p className="lg:ml-40 md:ml-5 ml-0 md:text-xl text-muted-foreground">
            The potential of your ideas coming to life. <br /> Create content
            using AI 10x faster
          </p>

          <h2 className="lg:ml-40 md:ml-5 ml-0 md:text-xl mt-4">
            <TypewriterComponent
              options={{
                strings: [
                  "Chatbot.",
                  "Photo Generation.",
                  "Music Generation",
                  "Code Generation.",
                  "Video Generation.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>

        <div className="absolute bottom-56 md:bottom-48 right-0 flex items-center gap-2 mt-10 z-50">
          <p className="text-sm">No Credit Card required</p>
          <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
            <Button
              variant={"ghost"}
              className="bg-[#948576] h-28 w-28 text-sm md:w-48 md:h-48 rounded-full md:text-lg text-[#eae5e0]"
            >
              Start Generating
            </Button>
          </Link>
        </div>

        <div className="h-[17rem]">
          <motion.img
            initial={{ bottom: "100%", height: "100%" }}
            animate={{ bottom: 0, height: "17rem" }}
            transition={{
              duration: 0.7,
              ease: [0.74, 0.06, 0.4, 0.92],
              fill: "forwards",
              delay: 2,
            }}
            className="w-full h-full object-cover absolute bottom-0 z-40"
            src="https://ucarecdn.com/1a60e0fa-2733-42a2-8612-ab8a410ae5ec/"
            alt="background"
          ></motion.img>
        </div>
      </motion.section>
    </div>
  );
}

export default LandingPage;
