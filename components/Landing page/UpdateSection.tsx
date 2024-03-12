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

      <div className="flex items-center w-[90%] justify-center gap-3 my-10 mx-auto">
        <motion.div
          initial={{ rotate: "-15deg", scale: 1.5, y: -200, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          className="bg-[#27272763] w-full h-[600px] rounded-3xl flex flex-col items-center"
        >
          <div className="text-white text-center mt-10 flex flex-col items-center gap-5">
            <h2 className="text-6xl font-bold max-w-lg">Much more accurate prompt</h2>
            <p className="max-w-[22rem] opacity-50 font-light">
              Midjourney is an independent research lab exploring new mediums of
              thought and expanding the imaginative powers of the human species.
            </p>
          </div>
          
          <div>

          </div>
        </motion.div>

        <motion.div
          initial={{ rotate: "-25deg", scale: 1.4, y: -200, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          className="bg-[#27272763] w-full h-[600px] rounded-3xl"
        ></motion.div>
      </div>
    </section>
  );
}

export default UpdateSection;
