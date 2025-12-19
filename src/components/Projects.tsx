import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import resumeData from '../data/resume.json';
import TerminalModal from './TerminalModal';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<{
    name: string;
    description: string;
  } | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() =>
                  setSelectedProject({
                    name: project.name,
                    description: project.terminalDescription,
                  })
                }
                className="group relative p-6 bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#27272A] rounded-lg hover:border-[#3B82F6] transition-all cursor-pointer overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/0 to-[#8B5CF6]/0 group-hover:from-[#3B82F6]/10 group-hover:to-[#8B5CF6]/10 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Code size={32} className="text-[#3B82F6]" />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink
                        size={20}
                        className="text-[#A1A1AA] group-hover:text-[#3B82F6] transition-colors"
                      />
                    </a>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                    {project.name.split('–')[0].trim()}
                  </h3>

                  <p className="text-sm text-[#8B5CF6] font-medium mb-3">{project.subtitle}</p>

                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0A0A0A] border border-[#27272A] rounded text-xs text-[#A1A1AA]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-[#A1A1AA]">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-4 text-sm text-[#3B82F6] group-hover:text-[#8B5CF6] transition-colors">
                    Click to view details →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <TerminalModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        content={selectedProject?.description || ''}
        projectName={selectedProject?.name || ''}
      />
    </section>
  );
}