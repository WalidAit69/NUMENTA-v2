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

  return (
    <section className="h-full relative w-full text-white">
      <LandingNavbar/>
    </section>
  );
}

export default LandingPage;
