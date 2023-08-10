import { Fragment } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../constants/constants";
import ExperienceCard from "../components/ExperieceCard";
import LineGradient from "../components/LineGradient";
import "react-vertical-timeline-component/style.min.css";
const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <motion.div
        className="md:w-2/5 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Experience</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">Experience text</p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor={
            "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)"
          }
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
