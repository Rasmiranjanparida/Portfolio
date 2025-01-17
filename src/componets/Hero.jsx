import { easeOut, motion, stagger } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import jason from "../assets/jason-Root.webp";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {
    clipPath: "inset(0 50% 0 50%)", // Initial clipped state
  },
  visible: {
    clipPath: "inset(0 0% 0 0%)", // Fully visible state
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg lg:text-xl mb-4 font-mono leading-relaxed" // Smaller text size and increased line spacing
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-sm md:text-lg lg:text-xl mb-6 font-mono leading-relaxed" // Smaller text size and increased line spacing
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          <motion.a
            className="bg-stone-50 text-black font-extrabold p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            href={HERO_CONTENT.resumeLink}
            download
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}
          >
            <span>{HERO_CONTENT.resumeLinkText}</span>
          </motion.a>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={jason}
            alt="Jason Root"
            width={650}
            height={650}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
