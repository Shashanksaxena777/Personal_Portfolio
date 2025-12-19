import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Awards & Education
            </span>
          </h2>

          {/* Awards Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Award size={28} className="text-[#3B82F6]" />
              Honors & Awards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#27272A] rounded-lg hover:border-[#3B82F6]/50 transition-all"
                >
                  <p className="text-[#A1A1AA] leading-relaxed flex items-start gap-3">
                    <span className="text-[#3B82F6] mt-1 flex-shrink-0">🏆</span>
                    <span>{award}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <GraduationCap size={28} className="text-[#8B5CF6]" />
              Education
            </h3>
            <div className="p-6 bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#27272A] rounded-lg hover:border-[#8B5CF6]/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {resumeData.education.institution}
                  </h4>
                  <p className="text-[#8B5CF6] font-medium">{resumeData.education.degree}</p>
                </div>
                <div className="text-[#A1A1AA] text-sm mt-2 sm:mt-0 sm:text-right">
                  <p>{resumeData.education.period}</p>
                  <p className="text-[#3B82F6] font-semibold mt-1">
                    CGPA: {resumeData.education.cgpa}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}   