import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Folder, Tag, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-12 bg-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-[#03045e] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-black">
            Innovative solutions across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
              className="group relative bg-white border border-[#03045e]/20 rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#03045e]" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    animate={{
                      rotate: selectedProject === project.id ? 15 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-[#03045e] rounded-lg flex items-center justify-center text-white"
                  >
                    <Folder size={24} />
                  </motion.div>
                  <span className="px-3 py-1 bg-[#03045e]/10 text-[#03045e] border border-[#03045e]/20 rounded-full text-xs font-medium">
                    {project.domain}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-black mb-3 group-hover:text-[#03045e] transition-colors">
                  {project.title}
                </h3>

                <p className="text-black text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Tag size={16} className="text-[#03045e]" />
                    <span className="text-sm font-semibold text-black">
                      Technologies:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-white border border-[#03045e]/20 text-black rounded text-xs font-medium shadow-sm hover:bg-[#03045e] hover:text-white transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-white border border-[#03045e]/20 text-black rounded text-xs font-medium shadow-sm hover:bg-[#03045e] hover:text-white transition-colors">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-[#03045e]/20 pt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle size={16} className="text-[#03045e]" />
                    <span className="text-sm font-semibold text-black">
                      Key Achievements:
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-black flex items-start"
                      >
                        <span className="inline-block w-1 h-1 bg-[#03045e] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: selectedProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#03045e] origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
