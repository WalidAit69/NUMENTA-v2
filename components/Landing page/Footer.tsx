import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const join = ["J", "o", "i", "n"];
  const us = ["U", "s"];

  return (
    <section className="flex w-full items-end relative overflow-hidden">
      <div className="w-full bg-[#dbff58] rounded-t-3xl">
        <div className="flex w-full h-fit flex-col items-center justify-center">
          <div className="text-[20rem] max-[630px]:text-[15rem] max-[470px]:text-[9rem] font-bold leading-[17rem] max-[470px]:leading-[8rem] flex flex-wrap">
            <span>
              {join.map((char, index) => (
                <span
                  key={index}
                  className="overflow-hidden h-[280px] max-[470px]:h-[140px] inline-flex"
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
            </span>
            <span>
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
            </span>
          </div>

          <div className="w-full">
            <div className="w-full flex justify-center text-center">
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: [0.8, 0, 0, 0.8] }}
                className="max-w-lg font-medium mt-20 max-[630px]:mt-10 max-[630px]:px-2"
              >
                For product support or questions please{" "}
                <span className="underline">join our Discord</span> and ask
                questions in our #support chatrooms.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.8, 0, 0, 0.8] }}
              className="mt-20 max-[630px]:mt-10 flex flex-col items-center font-normal text-2xl max-[630px]:text-lg"
            >
              <span>Developed by:</span>
              <a
                href="mailto:aitwalid2000@gmail.com"
                className="text-5xl max-[630px]:text-3xl max-[470px]:text-2xl font-bold"
              >
                aitwalid2000@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.8, 0, 0, 0.8] }}
              className="mt-20 max-[630px]:mt-10 mb-20 flex flex-col items-center font-normal text-2xl max-[630px]:text-lg"
            >
              <span>Designed by:</span>
              <a
                href="mailto:hello@fulcrum.rocks"
                className="text-5xl max-[630px]:text-3xl max-[470px]:text-2xl font-bold"
              >
                hello@fulcrum.rocks
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
