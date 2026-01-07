import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  cursorColor?: string;
}

export default function TypewriterText({
  text,
  speed = 100,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
  cursorColor = '#03045e',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const currentChar = text[currentIndex];
      // Add slight pause after spaces for more natural typing
      const charSpeed = currentChar === ' ' ? speed * 1.5 : speed;
      
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentChar);
        setCurrentIndex((prev) => prev + 1);
      }, currentIndex === 0 ? delay : charSpeed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="inline-block w-[3px] h-[1em] ml-1.5 align-middle rounded-sm"
          style={{ 
            backgroundColor: cursorColor,
            boxShadow: `0 0 8px ${cursorColor}40`,
          }}
        />
      )}
    </span>
  );
}

