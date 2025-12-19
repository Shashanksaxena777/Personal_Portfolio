import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 p-6 bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#27272A] rounded-lg hover:border-[#3B82F6]/50 transition-all hover:shadow-lg hover:shadow-[#3B82F6]/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                    <Briefcase size={24} className="text-[#3B82F6]" />
                    {exp.position}
                  </h3>
                  <p className="text-xl text-[#8B5CF6] font-medium mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-[#A1A1AA] text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                    className="text-[#A1A1AA] leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[#3B82F6] mt-1.5 flex-shrink-0">▹</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}