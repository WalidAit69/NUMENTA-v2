import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const join = ["J", "o", "i", "n"];
  const us = ["U", "s"];

  return (
    <section className="footer-h h-screen flex items-end relative overflow-hidden">
      <motion.div
        initial={{ height: "0%" }}
        whileInView={{ height: "95%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full absolute top-[5%] bg-[#dbff58] rounded-t-3xl"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-[20rem] font-bold leading-[17rem]">
            {join.map((char, index) => (
              <span
                key={index}
                className="overflow-hidden h-[280px] inline-flex"
              >
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.8, 0, 0, 0.8],
                    delay: index * 0.2,
                  }}
                  className="inline-flex"
                >
                  {char}
                </motion.span>
              </span>
            ))}
            {us.map((char, index) => (
              <span key={index}>
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.8, 0, 0, 0.8],
                    delay: index * 1,
                  }}
                  className="inline-flex"
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </div>

          <div className="footer">
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.8, 0, 0, 0.8] }}
              className="max-w-lg text-center font-medium mt-20"
            >
              For product support or questions please{" "}
              <span className="underline">join our Discord</span> and ask
              questions in our #support chatrooms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.8, 0, 0, 0.8] }}
              className="mt-20 flex flex-col items-center font-normal text-2xl"
            >
              <span>Developed by:</span>
              <a
                href="mailto:aitwalid2000@gmail.com"
                className="text-5xl font-bold"
              >
                aitwalid2000@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.8, 0, 0, 0.8] }}
              className="mt-20 flex flex-col items-center font-normal text-2xl"
            >
              <span>designed by:</span>
              <a
                href="mailto:hello@fulcrum.rocks"
                className="text-5xl font-bold"
              >
                hello@fulcrum.rocks
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Footer;
