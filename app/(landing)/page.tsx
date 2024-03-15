"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import VideoSection from "@/components/Landing page/VideoSection";
import UpdateSection from "@/components/Landing page/UpdateSection";
import StartSection from "@/components/Landing page/StartSection";
import Footer from "@/components/Landing page/Footer";
import TitleSection from "@/components/Landing page/TitleSection";
import ImageSection from "@/components/Landing page/ImageSection";

function LandingPage() {
  const { isSignedIn } = useAuth();

  const [scrolled, setScrolled] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [screenWidth, setscreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setscreenWidth(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <>
      <TitleSection scrolled={scrolled} screenWidth={screenWidth} />

      <ImageSection scrolled={scrolled} screenWidth={screenWidth} />

      <VideoSection />

      <UpdateSection />

      <StartSection screenWidth={screenWidth} />

      <Footer />
    </>
  );
}

export default LandingPage;
