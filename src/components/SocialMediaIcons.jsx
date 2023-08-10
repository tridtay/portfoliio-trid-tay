import { icons } from "../constants/constants";
import MediaIcon from "./MediaIcon";
import { motion } from "framer-motion";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {icons.map((icon, index) => (
        <motion.div
          key={`project-${icon.name}`}
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
            repeatDelay: 5,
          }}
        >
          <MediaIcon image={icon.image} link={icon.link} />
        </motion.div>
      ))}
    </div>
  );
};
export default SocialMediaIcons;
