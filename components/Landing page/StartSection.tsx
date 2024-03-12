import React from "react";
import { motion } from "framer-motion";

function StartSection() {
  const words = ["Create", "your", "first", "AI", "image"];

  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center relative">
        <div className="text-white text-9xl font-bold max-w-4xl text-center flex flex-wrap items-center justify-center gap-5 z-50">
          {words.map((word, index) => (
            <span
              key={index}
              className="h-[145px] inline-block overflow-hidden"
            >
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>
        <div className="text-white max-w-lg text-center opacity-50 flex flex-col z-50">
          <span className="overflow-hidden h-[25px] inline-flex">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.7,
                ease: "easeInOut",
              }}
              className="inline-flex"
            >
              Be explicit about what you want. It may be less vibey but if you
              are
            </motion.span>
          </span>

          <span className="overflow-hidden h-[25px]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.9,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              explicit it's now MUCH better at understanding you.
            </motion.span>
          </span>
        </div>

        <motion.button
          initial={{ rotate: "-15deg", scale: 1.4, opacity: 0 }}
          whileInView={{ rotate: "0deg", scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="mt-6 font-semibold bg-[#1c2540] text-white py-3 px-4 rounded-full inline-block z-50"
        >
          Let's start
        </motion.button>

        <motion.img
          initial={{ scale: 0.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          src="./neo.webp"
          alt=""
          className="absolute left-1/2 bottom-[-10%]"
        />
      </div>
    </section>
  );
}

export default StartSection;
