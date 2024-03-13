import React from "react";
import { motion } from "framer-motion";

function UpdateSection() {
  return (
    <section className="pb-10 overflow-hidden">
      <div className="flex flex-col items-center text-center text-white">
        <h2 className="text-[3rem] sm:text-[5rem] leading-[6rem] sm:leading-[4.5rem] font-bold overflow-hidden w-full h-[165px] relative">
          <motion.span
            initial={{ top: "100%", opacity: 0 }}
            whileInView={{ top: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-0 w-full"
          >
            Stay Ahead with
          </motion.span>
          <br />
          <motion.span
            initial={{ bottom: "-40%", opacity: 0 }}
            whileInView={{ bottom: "10%", opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            className="absolute left-0 w-full"
          >
            Updates:V6.0
          </motion.span>
        </h2>

        <p className="font-light mt-6 h-[50px] relative w-full overflow-hidden">
          <motion.span
            initial={{ top: "90%", opacity: 0 }}
            whileInView={{ top: "0", opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            className="absolute left-0 top-0 w-full"
          >
            The new version improved accuracy. greater coherance,
          </motion.span>
          <br />
          <motion.span
            initial={{ bottom: "-40%", opacity: 0 }}
            whileInView={{ bottom: "1%", opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            className="absolute left-0 bottom-0 w-full"
          >
            and a range of new advanced features
          </motion.span>
        </p>
      </div>

      <div className="flex items-center max-[380px]:w-[100%] w-[90%] justify-center gap-3 my-10 mx-auto flex-row max-[1050px]:flex-col">
        <motion.div
          initial={{ rotate: "-15deg", scale: 1.5, y: -200, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          className="bg-[#27272763] w-full h-[600px] rounded-3xl max-[380px]:rounded-none flex flex-col items-center justify-between"
        >
          <div className="text-white text-center mt-10 flex flex-col items-center gap-5">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              className="text-4xl font-bold max-w-xs sm:max-w-lg sm:text-6xl"
            >
              Much more accurate prompt
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
              className="sm:max-w-[22rem] max-w-[20rem] font-light"
            >
              Midjourney is an independent research lab exploring new mediums of
              thought and expanding the imaginative powers of the human species.
            </motion.p>
          </div>

          <div className="mb-16 relative">
            <motion.div
              initial={{ scale: 0.2, opacity: 0, rotate: "45deg" }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            >
              <img
                src="./medium1.webp"
                className="sm:w-[180px] w-[150px] sm:h-[180px] h-[150px] max-[380px]:w-[120px] max-[380px]:h-[120px] rounded-xl inline-block object-cover rotate-[-5deg]"
                alt=""
              />
              <img
                src="./medium2.webp"
                className="sm:w-[190px] sm:h-[220px] w-[160px] h-[190px] max-[380px]:w-[130px] max-[380px]:h-[160px] rounded-xl inline-block object-cover rotate-[5deg]"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{
                y: -60,
                x: -60,
                opacity: 0,
                rotate: "-15deg",
                scale: 1.2,
              }}
              whileInView={{
                y: 0,
                x: 0,
                opacity: 1,
                rotate: "-5deg",
                scale: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
              className="bg-[#cdb0a5] text-[#8c5a45] text-xl font-bold py-3 px-7 rounded-full absolute top-[-10%] left-[22%]"
            >
              New
            </motion.div>

            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                rotate: "15deg",
                scale: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                rotate: "5deg",
                scale: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
              className="bg-[#febf01] text-[#886202] text-xl font-bold py-3 px-7 rounded-full absolute bottom-0 left-[30%]"
            >
              Prompt
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ rotate: "-25deg", scale: 1.4, y: -200, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          className="bg-[#27272763] w-full h-[600px] rounded-3xl max-[380px]:rounded-none flex flex-col items-center justify-between"
        >
          <div className="text-white text-center mt-10 flex flex-col items-center gap-5">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              className="text-4xl font-bold max-w-xs sm:max-w-lg sm:text-6xl"
            >
              Minor text drawing ability
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
              className="sm:max-w-[22rem] max-w-[20rem] font-light"
            >
              you must write your text in quotations and --style raw or lower
              --stylize values may help
            </motion.p>
          </div>

          <div className="mb-16 relative">
            <motion.div
              initial={{ scale: 0.2, opacity: 0, rotate: "-45deg" }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            >
              <img
                src="./medium5.webp"
                className="sm:w-[190px] sm:h-[220px] w-[160px] h-[190px] max-[380px]:w-[130px] max-[380px]:h-[160px] rounded-xl inline-block object-cover rotate-[-5deg]"
                alt=""
              />
              <img
                src="./medium4.webp"
                className="sm:w-[180px] w-[150px] sm:h-[180px] h-[150px] max-[380px]:w-[120px] max-[380px]:h-[120px] rounded-xl inline-block object-cover rotate-[5deg]"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{
                y: -60,
                x: -60,
                opacity: 0,
                rotate: "-15deg",
                scale: 1.2,
              }}
              whileInView={{
                y: 0,
                x: 0,
                opacity: 1,
                rotate: "-5deg",
                scale: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
              className="bg-[#f2baff] text-[#b378bf] text-xl font-bold py-3 px-7 rounded-full absolute top-[-10%] left-[50%]"
            >
              UPD
            </motion.div>

            <motion.div
              initial={{
                y: 60,
                opacity: 0,
                rotate: "15deg",
                scale: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                rotate: "5deg",
                scale: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
              className="bg-[#94a7bb] text-[#4c5e75] text-xl font-bold py-3 px-7 rounded-full absolute bottom-[-10%] left-[0%]"
            >
              Text
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default UpdateSection;
