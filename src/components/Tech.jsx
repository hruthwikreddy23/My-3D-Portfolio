import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { techCategories } from "../constants";
import { styles } from "../styles";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    whileHover={{ y: -6 }}
    className="flex flex-col items-center justify-center gap-2 rounded-xl
               px-3 py-4 cursor-default min-w-[90px]
               bg-gradient-to-b from-[#232048] to-[#1a1836]
               border border-white/[0.07] hover:border-[#915EFF]/60
               hover:shadow-[0_6px_22px_rgba(145,94,255,0.22)]
               transition-[border-color,box-shadow] duration-300"
  >
    <img
      src={icon}
      alt={name}
      className="w-12 h-12 object-contain drop-shadow-md"
    />
    <p className="text-[#aaa6c3] text-[10px] font-semibold text-center leading-snug tracking-wide">
      {name}
    </p>
  </motion.div>
);

const CategoryRow = ({ label, items, categoryIndex }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
    className="flex flex-col gap-3"
  >
    {/* Category label */}
    <div className="flex items-center gap-3">
      <span className="text-[#915EFF] text-xs font-bold uppercase tracking-[0.18em]">
        {label}
      </span>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#915EFF]/40 to-transparent" />
    </div>

    {/* Icon row */}
    <div className="flex flex-wrap gap-3">
      {items.map((tech, i) => (
        <TechCard
          key={tech.name}
          {...tech}
          index={categoryIndex * 7 + i}
        />
      ))}
    </div>
  </motion.div>
);

const Tech = () => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className={styles.sectionSubText}>Tools I build with</p>
      <h2 className={styles.sectionHeadText}>Technologies.</h2>
    </motion.div>

    <div className="mt-10 flex flex-col gap-8">
      {techCategories.map((cat, i) => (
        <CategoryRow
          key={cat.label}
          label={cat.label}
          items={cat.items}
          categoryIndex={i}
        />
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "");
