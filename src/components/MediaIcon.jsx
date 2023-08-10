import { motion } from "framer-motion";

const MediaIcon = ({ name, image, link }) => {
  return (
    <a
      className="hover:opacity-50 transition duration-500"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img alt={`${name}-link`} src={image} />
    </a>
  );
};

export default MediaIcon;
