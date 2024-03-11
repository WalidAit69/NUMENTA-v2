import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

function VideoSection() {
  const [IsPlayed, setIsPlayed] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlayed(true);
    } else {
      videoRef.current?.pause();
      setIsPlayed(false);
    }
  };

  const controls = useAnimation();

  useEffect(() => {
    if (!IsPlayed) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [IsPlayed]);

  return (
    <section>
      <div className="h-[75vh]"></div>
      <div className="h-[100vh] flex items-center justify-center">
        <motion.div
          initial={{ width: "55%", scale: 0.1, rotate: "15deg", opacity: 0 }}
          whileInView={{ width: "95%", scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="video-astro relative"
        >
          <video
            className="h-full w-full object-cover rounded-3xl"
            autoPlay
            muted
            loop
            ref={videoRef}
            src="./astro.mp4"
          ></video>

          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute right-6 top-14 bg-black text-white font-semibold px-7 py-1 rounded-full"
          >
            <span>Prompt: Astronaut Walking in Mars</span>
          </motion.div>

          <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 1.2 }}
            className="absolute bg-black h-20 w-20 rounded-full top-4 left-4 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            {IsPlayed ? (
              <FaPause color="white" size={30} />
            ) : (
              <FaPlay color="white" size={25} className="ml-1"/>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection;
