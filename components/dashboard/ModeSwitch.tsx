import useSwitch from "@/store/Switch";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function ModeSwitch() {
  const { isDark, setisDark } = useSwitch();

  const handleLightClick = () => {
    setisDark(false);
  };

  const handleDarkClick = () => {
    setisDark(true);
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isDark) {
      controls.start({ right: "2%" });
    } else {
      controls.start({ right: "48%" });
    }
  }, [isDark]);


  return (
    <div className="relative flex w-[90%] mx-auto bg-[#232627df] rounded-lg text-white">
      <div
        onClick={handleLightClick}
        className="w-1/2 text-center flex items-center justify-center gap-1 h-[45px] z-10 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={`${!isDark ? "#ffff" : "none"}`}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
        Light
      </div>

      <div
        onClick={handleDarkClick}
        className="w-1/2 text-center flex items-center justify-center gap-1 z-10 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={`${isDark ? "#ffff" : "none"}`}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
        Dark
      </div>

      <motion.div
        initial={{ right: "2%" }}
        animate={controls}
        transition={{ duration: 0.4, ease: [0.8, 0, 0, 0.8] }}
        className="absolute top-1/2 -translate-y-1/2 bg-[#141718] h-[35px] w-1/2 rounded-lg"
      ></motion.div>
    </div>
  );
}

export default ModeSwitch;
