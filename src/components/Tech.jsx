import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechIcon = ({ name, icon }) => (
  <div className="w-28 h-28 flex flex-col items-center justify-center gap-2 group cursor-default">
    <div className="w-20 h-20 bg-tertiary rounded-full flex items-center justify-center p-4
                    shadow-[0_0_18px_rgba(145,94,255,0.12)]
                    group-hover:shadow-[0_0_28px_rgba(145,94,255,0.35)]
                    group-hover:scale-110
                    transition-all duration-300">
      <img src={icon} alt={name} className="w-full h-full object-contain" />
    </div>
    <p className="text-secondary text-[11px] text-center leading-tight">{name}</p>
  </div>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <TechIcon key={technology.name} name={technology.name} icon={technology.icon} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
