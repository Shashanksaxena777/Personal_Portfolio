import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import resumeData from '../data/resume.json';
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiExpress, SiGraphql, SiRedux,
  SiFastapi, SiDjango, SiPostgresql, SiRedis,
  SiDocker, SiGit, SiPostman, SiSocketdotio,
  SiApachekafka
} from "react-icons/si";
import { FaCode, FaSitemap, FaLaptopCode, FaServer, FaDatabase, FaTools, FaBrain } from "react-icons/fa";
import { IconType } from 'react-icons';

// Map skill names to icons
const skillIcons: Record<string, IconType> = {
  "C++": SiCplusplus,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "GraphQL": SiGraphql,
  "Redux": SiRedux,
  "FastAPI": SiFastapi,
  "Django REST Framework": SiDjango,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Docker": SiDocker,
  "Git": SiGit,
  "Postman API": SiPostman,
  "WebSocket.io": SiSocketdotio,
  "Visual Studio": FaLaptopCode,
  "Apache Kafka": SiApachekafka,
  "Data Structures Algorithms": FaCode,
  "System Design": FaSitemap
};

// Map skill names to specific colors
const skillColors: Record<string, string> = {
  "C++": "#00599C",
  "Python": "#3776AB",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "React.js": "#61DAFB",
  "Node.js": "#339933",
  "Express.js": "#0f8404ff",
  "GraphQL": "#E10098",
  "Redux": "#764ABC",
  "FastAPI": "#009688",
  "Django REST Framework": "#008150ff",
  "PostgreSQL": "#4169E1",
  "Redis": "#DC382D",
  "Docker": "#2496ED",
  "Git": "#F05032",
  "Postman API": "#FF6C37",
  "WebSocket.io": "#ffffffff",
  "Visual Studio": "#5C2D91",
  "Apache Kafka": "#ffffffff",
  "Data Structures Algorithms": "#F05032", // Generic orange
  "System Design": "#8B5CF6" // Purple
};

// Map categories to icons
const categoryIcons: Record<string, IconType> = {
  "Programming Languages": FaLaptopCode,
  "Frameworks / Libraries": FaServer,
  "Databases": FaDatabase,
  "Tools / Platforms": FaTools,
  "Problem Solving": FaBrain
}

const SkillCategory = ({ category, skills, index }: { category: string, skills: any[], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const CategoryIcon = categoryIcons[category] || FaTools;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#111111]/50 backdrop-blur-sm border border-[#27272A] rounded-xl p-6 hover:border-[#3B82F6]/30 transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-3 mb-6 border-b border-[#27272A] pb-4">
        <CategoryIcon className="text-[#3B82F6]" size={24} />
        <h3 className="text-xl font-semibold text-white">
          {category}
        </h3>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => {
          const Icon = skillIcons[skill] || FaCode;
          const color = skillColors[skill] || "#A1A1AA";

          return (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.05, borderColor: color, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="group flex items-center gap-2 px-3 py-2 bg-[#1A1A1A] rounded-lg border border-[#27272A] transition-all duration-300 cursor-default"
              style={{
                '--skill-color': color
              } as React.CSSProperties}
            >
              <div
                className="text-[#A1A1AA] transition-colors duration-300"
                style={{ color: 'var(--skill-color)' }}
              >
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium text-[#D4D4D8] group-hover:text-white transition-colors">
                {skill}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = Object.entries(resumeData.skills);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-[#A1A1AA] text-base max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and conceptual knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(([category, skills], categoryIndex) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills as any[]}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}