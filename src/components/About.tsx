import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code, Database, Cloud, Award, Briefcase, Cpu, Layers, Palette, Terminal, Zap, ExternalLink } from 'lucide-react';
import { skills, certifications, personalInfo } from '../data/portfolio';
import { ApacheSparkLogo, CloudSolutionsLogo, ApacheAirflowLogo, TensorFlowLogo, DatabricksLogo, PerformanceLogo, MicrosoftLogo, AWSLogo } from './CompanyLogos';

// Custom hook for counting animation
function useCountUp(end: number, start: number = 0, duration: number = 2000, isInView: boolean = false) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = start;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, start, duration]);

  return count;
}

// Highlight Card Component with counting animation
function HighlightCard({ 
  icon: Icon, 
  value, 
  suffix, 
  label, 
  subtitle, 
  index, 
  isInView 
}: { 
  icon: any; 
  value: number; 
  suffix: string; 
  label: string; 
  subtitle: string; 
  index: number; 
  isInView: boolean;
}) {
  const count = useCountUp(value, 0, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="text-center bg-white border border-[#03045e]/20 rounded-xl shadow-lg transition-all duration-300 p-6 border-t-4 border-[#03045e]">
        <Icon className="w-8 h-8 mx-auto mb-3 text-[#03045e]" />
        <div className="text-3xl font-bold text-black mb-1">
          {count}{suffix} {label}
        </div>
        <p className="text-sm text-black">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

const highlights = [
  { icon: Briefcase, value: 6, suffix: '+', label: 'Years', subtitle: 'Experience' },
  { icon: Cloud, value: 20, suffix: '+', label: '', subtitle: 'Cloud Projects' },
  { icon: Database, value: 50, suffix: '+', label: '', subtitle: 'Data Pipelines' },
  { icon: Award, value: 3, suffix: '+', label: '', subtitle: 'Certifications' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#03045e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#03045e]/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
            About Me
          </h2>
          <div className="w-32 h-1 bg-[#03045e] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <HighlightCard
              key={item.subtitle}
              icon={item.icon}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              subtitle={item.subtitle}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-[#03045e]/20 rounded-xl shadow-xl transition-all duration-300 p-6 border-t-4 border-[#03045e]">
              <h3 className="font-display text-xl font-bold text-black mb-6">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: 'Data Architecture & Engineering', Logo: ApacheSparkLogo },
                  { name: 'Cloud Data Solutions (Azure, GCP, AWS)', Logo: CloudSolutionsLogo },
                  { name: 'ETL/ELT Pipeline Development', Logo: ApacheAirflowLogo },
                  { name: 'Machine Learning & AI Integration', Logo: TensorFlowLogo },
                  { name: 'Data Warehousing & Lakehouse', Logo: DatabricksLogo },
                  { name: 'Performance Optimization', Logo: PerformanceLogo },
                ].map((expertise, index) => {
                  const LogoComponent = expertise.Logo;
                  return (
                    <motion.div
                      key={expertise.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="bg-gradient-to-br from-white to-[#03045e]/5 border border-[#03045e]/20 rounded-lg p-4 hover:border-[#03045e]/40 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white group-hover:bg-[#03045e]/5 flex items-center justify-center transition-all duration-300 p-1.5">
                            <LogoComponent className="w-full h-full" />
                          </div>
                          <span className="text-black text-sm font-medium leading-relaxed pt-2">
                            {expertise.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-[#03045e]/20 rounded-xl shadow-xl transition-all duration-300 p-6 border-t-4 border-[#03045e]">
              <h3 className="font-display flex items-center text-xl font-bold text-black mb-6">
                <Award className="mr-3 text-[#03045e]" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => {
                  // Map logo names to components
                  const logoMap: Record<string, React.ComponentType<{ className?: string }>> = {
                    'microsoft': MicrosoftLogo,
                    'aws': AWSLogo,
                    'databricks': DatabricksLogo,
                  };
                  
                  const LogoComponent = logoMap[cert.logo] || Award;
                  
                  return (
                    <motion.a
                      key={cert.name}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="block"
                    >
                      <div className="bg-gradient-to-br from-white to-[#03045e]/5 border border-[#03045e]/20 rounded-lg p-4 hover:border-[#03045e]/40 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-[#03045e]/10 group-hover:border-[#03045e]/20 flex items-center justify-center transition-all duration-300 p-2 shadow-sm">
                            <LogoComponent className="w-full h-full" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-black mb-1 group-hover:text-[#03045e] transition-colors">
                              {cert.name}
                            </p>
                            <p className="text-xs text-black/60 mb-2">
                              {cert.issuer}
                            </p>
                            <div className="flex items-center text-xs text-[#03045e] font-medium">
                              View Credential
                              <ExternalLink className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-2">
              Technical Skills
            </h3>
            <p className="text-black text-sm md:text-base">
              Comprehensive expertise across modern data engineering stack
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, techs], categoryIndex) => {
                // Map categories to icons
                const categoryIcons: Record<string, any> = {
                  'Programming Languages': Code,
                  'Cloud Technologies': Cloud,
                  'Database Systems': Database,
                  'Data Visualization': Palette,
                  'Web Development': Layers,
                  'Machine Learning & AI': Cpu,
                  'DevOps & Tools': Terminal,
                };

                const Icon = categoryIcons[category] || Zap;

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.6 + categoryIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <div className="relative h-full bg-white border border-[#03045e]/20 rounded-xl p-5 hover:border-[#03045e]/40 transition-all duration-300 overflow-hidden">
                      {/* Category Header */}
                      <div className="relative flex items-center space-x-3 mb-4 pb-4 border-b border-[#03045e]/20">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#03045e]/10 flex items-center justify-center group-hover:bg-[#03045e]/20 transition-all duration-300">
                          <Icon className="text-[#03045e]" size={20} />
                        </div>
                        <h4 className="font-display text-lg font-bold text-black leading-tight">
                          {category}
                        </h4>
                        <div className="ml-auto px-2 py-0.5 rounded-full bg-[#03045e]/10 text-[#03045e] text-xs font-semibold">
                          {techs.length}
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="relative flex flex-wrap gap-2">
                        {techs.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{ 
                              delay: 0.7 + categoryIndex * 0.1 + techIndex * 0.03,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="inline-flex items-center"
                          >
                            <span className="px-3 py-1.5 bg-white border border-[#03045e]/20 text-black rounded-lg text-xs font-medium shadow-sm hover:bg-[#03045e] hover:text-white hover:border-[#03045e] transition-all duration-200">
                              {tech}
                            </span>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
