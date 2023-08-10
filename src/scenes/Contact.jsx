import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { mail } from "../assets";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // when submit want to see form is format
    const isValid = await trigger();
    // submit before go to other page
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      <motion.div
        className="flex md:justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & I<AGE*/}
      <div className="md:flex md:justify-between gap-16">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 5,
            }}
            src={mail}
            alt="contact"
          ></motion.img>
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/585ad6e2ccc256ecac987a5b6e80c00b"
            method="POST"
          >
            <div className="bg-gradient-rainblue py-0.5 px-0.5 justify-center ">
              <input
                className="w-full  bg-deep-blue font-semibold placeholder-gray-200 p-3 "
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </div>
            {errors?.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "this field is required"}
                {errors.name.type === "maxLength" && "Max length is 100 char"}
              </p>
            )}
            <div className="bg-gradient-rainblue py-0.5 px-0.5 justify-center mt-5">
              <input
                className="w-full  bg-deep-blue font-semibold placeholder-gray-200 p-3"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
            </div>
            {errors?.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "this field is required"}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <div className="bg-gradient-rainblue py-0.5 px-0.5 justify-center mt-5">
              <textarea
                className="w-full  bg-deep-blue font-semibold placeholder-gray-200 p-3"
                type="text"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
            </div>
            {errors?.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "this field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char"}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-[#d69bf3] font-semibold text-deep-blue mt-5 hover:bg-cyan-500 hover:scale-110
              hover:text-white transition duration-500 rounded-full"
            >
              SEND A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
