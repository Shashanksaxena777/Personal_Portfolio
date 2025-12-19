import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Instagram, MessageCircle, Send } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: resumeData.personal.phone,
      href: `tel:${resumeData.personal.phone}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Profile',
      href: resumeData.personal.links.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect',
      href: resumeData.personal.links.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-[#A1A1AA] mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'GitHub' || item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={
                  item.label === 'GitHub' || item.label === 'LinkedIn'
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#27272A] rounded-lg hover:border-[#3B82F6] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0A0A0A] border border-[#27272A] rounded-lg group-hover:border-[#3B82F6] transition-all">
                    <item.icon size={24} className="text-[#3B82F6]" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm text-[#A1A1AA] mb-1">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-[#3B82F6] transition-colors">
                      {item.value}
                    </p>
                  </div>
                  {(item.label === 'GitHub' || item.label === 'LinkedIn') && (
                    <ExternalLink
                      size={20}
                      className="text-[#A1A1AA] group-hover:text-[#3B82F6] transition-colors"
                    />
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Social Contacts */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="mt-12 flex justify-center"
>
  <div className="flex gap-6">
    {/* Instagram */}
    <a
      href="https://instagram.com/meshashanksaxena"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-[#1A1A1A]/50 border border-[#27272A] rounded-full hover:scale-110 transition-all"
    >
      <Instagram size={26} className="text-pink-500" />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/919140317708"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-[#1A1A1A]/50 border border-[#27272A] rounded-full hover:scale-110 transition-all"
    >
      <MessageCircle size={26} className="text-green-500" />
    </a>

    {/* Telegram */}
    <a
      href="https://t.me/9140317708"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-[#1A1A1A]/50 border border-[#27272A] rounded-full hover:scale-110 transition-all"
    >
      <Send size={26} className="text-sky-400" />
    </a>
  </div>
</motion.div>

    </section>
  );
}