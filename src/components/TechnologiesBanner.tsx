import { motion } from 'framer-motion';

export default function TechnologiesBanner() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Full Screen Animated Text Banner */}
      <div className="relative flex items-center justify-center overflow-hidden pointer-events-none z-10" style={{ height: '200px' }}>
        {/* Continuous Horizontal Scrolling Text - Right to Left */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: '200%',
          }}
        >
          <div className="text-[6rem] md:text-[10rem] lg:text-[16rem] font-black uppercase tracking-tighter text-[#03045e]/10 select-none whitespace-nowrap">
            DILRUKSHA RAJAPAKSHA
          </div>
          <div className="text-[6rem] md:text-[10rem] lg:text-[16rem] font-black uppercase tracking-tighter text-[#03045e]/10 select-none whitespace-nowrap ml-32">
            DILRUKSHA RAJAPAKSHA
          </div>
        </motion.div>
      </div>
    </section>
  );
}

