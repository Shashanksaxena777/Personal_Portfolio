import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#111111] border-t border-[#27272A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#A1A1AA] text-sm">
            © {new Date().getFullYear()} Shashank Saxena. Built with React, TypeScript & Framer
            Motion.
          </p>
          <p className="text-[#A1A1AA] text-xs mt-2">
            Designed & Developed with{' '}
            <span className="text-[#3B82F6]">passion</span> and{' '}
            <span className="text-[#8B5CF6]">precision</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}