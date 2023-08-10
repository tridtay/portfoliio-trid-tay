import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const Skillcard = ({
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
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index / 2 }}
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
        className="rounded-2xl  md:w-[450px]   h-[350px] bg-gradient-rainblue py-0.5 px-0.5 mt-5 "
      >
        <div className="bg-deep-blue rounded-2xl w-full h-full p-5 flex flex-wrap justify-center">
          <div className=" h-1/4 w-full">
            <h3 className="text-white text-3xl md:text-4xl font-bold text-center">
              {name}
            </h3>
          </div>
          <div className="w-2/3 grid grid-rows-2 grid-flow-col gap-7">
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
                <img
                  src={tag.image}
                  alt={`icon-${tag.name}`}
                  className="h-[50px] w-[50px] object-scale-down"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Skillcard;
