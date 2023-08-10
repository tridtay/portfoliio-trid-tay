import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
// export const fadeIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index / 4 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-opacity-0 opacity-90 p-5 rounded-2xl max-w-[400px]  bg-gradient-rainblue py-0.5 px-0.5"
      >
        <div className="bg-deep-blue rounded-2xl w-full h-full p-5 ">
          <div className="relative w-full h-[250px]">
            <img
              src={image}
              alt={`project-${name}`}
              className="w-full h-full object-cover rounded-xl"
            />

            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-r from-indigo-900 to-gray-900 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.div
                key={`${name}-icon-${tag.name}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 0.75,
                  delay: index,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatDelay: 10,
                }}
              >
                <img src={tag.image} alt={`icon-${tag.name}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
