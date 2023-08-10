import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skills, icons_skill } from "../constants/constants";
import { purple_computer } from "../assets";
import Skillcard from "../components/SkillCard";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-24 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">SKILLS text</p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                  before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src={purple_computer} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={purple_computer} />
          )}
        </div>
      </div>
      <div className=" flex flex-wrap gap-7 mt-16 justify-center">
        {skills.map((skill, index) => (
          <Skillcard key={`project-${index}`} index={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
