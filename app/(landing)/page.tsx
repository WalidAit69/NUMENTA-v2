"use client";

import LandingNavbar from "@/components/Landing page/LandingNavbar";
import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

function LandingPage() {
  const { isSignedIn } = useAuth();

  const text = "EndJourney";

  return (
    <section className="h-screen relative w-full text-white">
      <LandingNavbar />

      <div className="w-full h-[90%] absolute top-[10%] overflow-hidden">
        <h1 className="landing-h1 font-extrabold absolute w-full m-0 p-0 flex">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: "3rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.04 * index }}
              style={{ display: "flex" }}
              className="sm:tracking-[2.5rem] tracking-[1.5rem] max-[450px]:tracking-[1rem]"
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
}

export default LandingPage;
