import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import resumeData from '../data/resume.json';
import resumePdf from '../assets/resume.pdf';
import profileImage from '../assets/profile.png';

export default function Hero() {
    const { personal, summary } = resumeData;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
            {/* Background Gradient */}
            <div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(circle at 50% 85%, rgba(34,197,94,0.25), transparent 45%),
      radial-gradient(circle at 20% 30%, rgba(34,197,94,0.12), transparent 40%),
      linear-gradient(180deg, #020617 0%, #000000 100%)
    `
  }}
>
  <div className="absolute inset-0 bg-grid-white/[0.03]" />
</div>



            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium mb-6"
                        >
                            Available for work
                        </motion.div>

                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent animate-gradient">
                                {personal.name}
                            </span>
                        </motion.h1>

                        <motion.h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {personal.title}
                        </motion.h2>

                        <motion.p
                            className="text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {summary}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <a
                                href={resumePdf}
                                download="SHASHANK_SAXENA_CV.pdf"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/25 group"
                            >
                                <Download size={20} className="group-hover:animate-bounce" />
                                <span>Download Resume</span>
                            </a>

                            <div className="flex items-center gap-4">
                                <a
                                    href={personal.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-[#1A1A1A] border border-[#27272A] rounded-xl hover:border-[#3B82F6] hover:bg-[#1A1A1A]/80 transition-all hover:scale-110 group"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} className="text-white group-hover:text-[#3B82F6] transition-colors" />
                                </a>
                                <a
                                    href={personal.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-[#1A1A1A] border border-[#27272A] rounded-xl hover:border-[#3B82F6] hover:bg-[#1A1A1A]/80 transition-all hover:scale-110 group"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} className="text-white group-hover:text-[#3B82F6] transition-colors" />
                                </a>
                                <a
                                    href={`mailto:${personal.email}`}
                                    className="p-4 bg-[#1A1A1A] border border-[#27272A] rounded-xl hover:border-[#3B82F6] hover:bg-[#1A1A1A]/80 transition-all hover:scale-110 group"
                                    aria-label="Email"
                                >
                                    <Mail size={24} className="text-white group-hover:text-[#3B82F6] transition-colors" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-sm p-4">
                                <img
                                    src={profileImage}
                                    alt={personal.name}
                                    className="w-full h-full rounded-full object-cover border-4 border-[#1A1A1A] shadow-2xl"
                                />
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-[#1A1A1A]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-sm font-medium text-white">Open to Work</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -left-8 bg-[#1A1A1A]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500/20 rounded-lg">
                                        <span className="text-blue-400 font-bold">2+</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">Years of</span>
                                        <span className="text-sm font-medium text-white">Experience</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-[#3B82F6] rounded-full flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-[#3B82F6] rounded-full"></motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}