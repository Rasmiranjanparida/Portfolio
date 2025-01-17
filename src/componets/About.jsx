import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const strongWordVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.4, duration: 0.7, ease: "easeOut" },
    }),
  };

  const parseParagraph = (paragraph) => {
    const parts = paragraph.split(/(<strong>.*?<\/strong>)/g); // Split text by <strong> tags
    return parts.map((part, index) =>
      part.startsWith("<strong>") ? (
        <motion.span
          key={index}
          className="font-bold text-yellow-500"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={strongWordVariants}
        >
          {part.replace(/<\/?strong>/g, "")}
        </motion.span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <section className="px-6 py-10" id="about">
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
        About
      </h1>
      <div className="h-1 w-20 mb-6 bg-white"></div>
      <div className="max-w-4xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-sm md:text-base lg:text-lg mb-10 leading-loose font-mono" // Adjusted font size and line height
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {parseParagraph(paragraph)}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
