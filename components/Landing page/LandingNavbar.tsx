"use client";

import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const [MenuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();
  const controls2 = useAnimation();

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (MenuOpen && screenWidth > 500) {
      controls.start({ height: "400px", width: "300px" });
      controls2.start({ display: "flex", transition: { delay: 0.3 } });
    } else if (MenuOpen && screenWidth < 500) {
      controls.start({ height: "100vh", width: "100vw" });
      controls2.start({ display: "flex", transition: { delay: 0.3 } });
    } else {
      controls.start({ height: 0, width: 0 });
      controls2.start({ display: "none" });
    }
  }, [MenuOpen, screenWidth]);

  return (
    <div className="flex items-center justify-between p-4 min-[500px]:px-10 z-50">
      <div className="overflow-hidden relative sm:h-[40px] h-[30px]">
        <motion.h1
          initial={{ marginTop: "3rem" }}
          animate={{ marginTop: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="sm:text-3xl text-xl font-[200] cursor-pointer"
        >
          Mid
          <span className="font-extrabold">Journey</span>
        </motion.h1>
      </div>

      <div className="hidden lg:flex">
        <ul className="items-center gap-x-20 opacity-80 text-[.9rem] hidden sm:flex overflow-hidden relative h-[30px]">
          <motion.li
            initial={{ marginTop: "3rem" }}
            animate={{ marginTop: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
            className="landing-li relative cursor-pointer"
          >
            ABOUT
          </motion.li>
          <motion.li
            initial={{ marginTop: "3rem" }}
            animate={{ marginTop: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
            className="landing-li relative cursor-pointer"
          >
            SERVICES
          </motion.li>
          <motion.li
            initial={{ marginTop: "3rem" }}
            animate={{ marginTop: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
            className="landing-li relative cursor-pointer"
          >
            PRICING
          </motion.li>
          <motion.li
            initial={{ marginTop: "3rem" }}
            animate={{ marginTop: 0 }}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
            className="landing-li relative cursor-pointer hidden xl:flex"
          >
            FAQ
          </motion.li>
          <motion.li
            initial={{ marginTop: "3rem" }}
            animate={{ marginTop: 0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
            className="landing-li relative cursor-pointer hidden xl:flex"
          >
            CONTACT
          </motion.li>
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
        className="flex items-center font-bold"
      >
        {!isSignedIn ? (
          <>
            <Link
              href={isSignedIn ? "/dashboard" : "sign-in"}
              className="hidden xl:flex"
            >
              <Button
                className="flex items-center text-base text-[#caef84] hover:opacity-80"
                variant={"default"}
              >
                SIGN IN
              </Button>
            </Link>
            <Link href={isSignedIn ? "/dashboard" : "sign-up"} className="flex">
              <button className="flex items-center text-xs sm:text-base bg-[#dbff58] text-black sm:px-4 px-2 rounded-full hover:opacity-80 h-[25px] sm:h-[35px] xl:h-[40px]">
                GET STARTED
              </button>
            </Link>
          </>
        ) : (
          <div className="">
            <UserButton afterSignOutUrl="https://better-ai-five.vercel.app" />
          </div>
        )}

        <div className="relative">
          <div
            onClick={() => {
              setMenuOpen(!MenuOpen);
            }}
            className="z-10 text-sm sm:text-base flex items-center justify-center sm:ml-5 ml-1 relative h-[25px] w-[50px] overflow-hidden cursor-pointer lg:hidden"
          >
            <span
              className={`absolute menu-transition ${
                MenuOpen ? "mt-11" : "mt-0"
              }`}
            >
              Menu
            </span>
            <span
              className={`absolute text-black opacity-80 menu-transition ${
                MenuOpen ? "mb-0" : "mb-11"
              }`}
            >
              Close
            </span>
          </div>

          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={controls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute -top-5 -right-[1.1rem] min-[500px]:-right-4 min-[500px]:-top-3 bg-[#b6e75a] z-0 text-black lg:hidden min-[500px]:rounded-[.6rem]"
          >
            <motion.ul
              initial={{ display: "none" }}
              animate={controls2}
              className="pl-5 justify-center h-full gap-y-8 flex flex-col opacity-80 text-[.9rem]"
            >
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                className="landing-li relative w-fit cursor-pointer"
              >
                ABOUT
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                className="landing-li relative cursor-pointer w-fit"
              >
                SERVICES
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                className="landing-li relative cursor-pointer w-fit"
              >
                PRICING
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                className="landing-li relative cursor-pointer w-fit"
              >
                FAQ
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
                className="landing-li relative cursor-pointer w-fit"
              >
                CONTACT
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingNavbar;
