import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { projects } from "../constants/constants";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="py-24 ">
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">PROJECTS text</p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
