import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, Calendar, Award, Star } from 'lucide-react';
import { education } from '../data/portfolio';

interface EducationCardProps {
  edu: typeof education[0];
  index: number;
  isInView: boolean;
}

function EducationCard({ edu, index, isInView }: EducationCardProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-white border border-[#03045e]/20 rounded-xl shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#03045e]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-[#03045e] p-8 flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl" />
            </div>
            
            {/* University Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="relative z-10 w-24 h-24 bg-white rounded-xl p-3 mb-4 shadow-lg flex items-center justify-center"
            >
              {!logoError && edu.logo ? (
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <GraduationCap size={40} className="text-[#03045e]" />
              )}
            </motion.div>
            
            <div className="text-center relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star size={20} className="text-white" />
                <span className="text-2xl font-bold">{edu.gpa}</span>
              </div>
              <div className="text-sm opacity-90">{edu.grade || edu.status}</div>
            </div>
          </div>

          <div className="md:w-2/3 p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-xl font-bold text-black pr-4">
                {edu.degree}
              </h3>
              {edu.status === 'Reading' && (
                <span className="px-3 py-1 bg-[#03045e]/10 text-[#03045e] border border-[#03045e]/20 rounded-full text-xs font-medium flex-shrink-0">
                  In Progress
                </span>
              )}
            </div>

            <h4 className="font-display text-lg font-semibold text-[#03045e] mb-3">
              {edu.institution}
            </h4>

            <div className="flex items-center space-x-2 text-sm text-black mb-4">
              <Calendar size={16} />
              <span>{edu.period}</span>
            </div>

            <div className="space-y-2">
              {edu.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2 + idx * 0.1 }}
                  className="flex items-start text-sm text-black"
                >
                  <Award size={16} className="mr-2 mt-0.5 text-[#03045e] flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      ref={ref}
      className="py-12 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#03045e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#03045e]/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
            Education
          </h2>
          <div className="w-32 h-1 bg-[#03045e] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-black">
            Academic excellence and continuous learning
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
