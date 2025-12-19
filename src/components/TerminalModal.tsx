import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  projectName: string;
}

export default function TerminalModal({ isOpen, onClose, content, projectName }: TerminalModalProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setDisplayedText('');
      setCurrentIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + content[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, currentIndex, content]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[80vh] bg-[#0A0A0A] border border-[#27272A] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-[#27272A]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-3 text-sm font-mono text-[#A1A1AA]">{projectName}</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-md hover:bg-[#27272A] transition-colors"
              >
                <X className="w-5 h-5 text-[#A1A1AA]" />
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-60px)] font-mono text-sm">
              <pre className="text-[#10B981] whitespace-pre-wrap leading-relaxed">
                {displayedText}
                <span className="inline-block w-2 h-4 ml-1 bg-[#10B981] animate-pulse"></span>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}