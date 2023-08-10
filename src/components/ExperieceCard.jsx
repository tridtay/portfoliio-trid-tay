import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Tilt from "react-parallax-tilt";
import { link } from "../assets";
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0, 0, 0, 0.0)",
        outline: `2px solid ${experience.iconMainColor}`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${experience.iconMainColor}`,
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        outline: `5px solid ${experience.iconMainColor}`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full hover:scale-110 ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[32px] font-bold">{experience.title}</h3>
        <div className="flex items-center gap-2">
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ color: experience.iconMainColor, margin: 0 }}
          >
            {experience.company_name}
          </p>
          <Tilt
            scale={1.5}
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className=" w-6 h-6 rounded-full flex justify-center items-center cursor-pointer hover:scale-150"
            style={{ background: experience.iconMainColor }}
          >
            <div onClick={() => window.open(experience.company_link, "_blank")}>
              <img
                src={link}
                alt="source code"
                className="object-scale-down p-1"
              />
            </div>
          </Tilt>
        </div>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
