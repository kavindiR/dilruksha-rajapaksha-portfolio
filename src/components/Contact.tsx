import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { Button } from './ui/button';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin.replace('www.', ''),
      href: `https://${personalInfo.linkedin}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#03045e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#03045e]/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-[#03045e] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or innovative data engineering projects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'LinkedIn' ? '_blank' : undefined}
                rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="group relative bg-white border border-[#03045e]/20 rounded-xl shadow-lg transition-all duration-300 overflow-hidden border-t-4 border-[#03045e] p-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-[#03045e] rounded-full flex items-center justify-center text-white mb-4"
                    >
                      <method.icon size={28} />
                    </motion.div>

                    <h3 className="font-display text-lg font-bold text-black mb-2">
                      {method.label}
                    </h3>

                    <p className="text-sm text-black break-all">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#03045e] text-white border border-[#03045e] rounded-xl p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Send size={40} />
              </motion.div>

              <h3 className="font-display text-3xl mb-4 text-center text-white font-bold">
                Ready to Start a Conversation?
              </h3>

              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-center">
                Whether you have a project in mind, need consultation on data engineering solutions,
                or just want to connect, I'd love to hear from you.
              </p>
              <div className="text-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                  className="bg-white text-[#03045e] hover:bg-white/90 shadow-lg"
                >
                  <Mail size={20} className="mr-2" />
                  Send Me an Email
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
