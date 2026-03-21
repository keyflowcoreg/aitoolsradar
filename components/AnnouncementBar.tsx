'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnnouncementBarProps {
  items: string[];
  separator?: string;
  duration?: number;
  className?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  items,
  separator = '\u2022',
  duration = 20,
  className = '',
}) => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden py-2 relative z-50 ${className}`}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
        }}
        className="whitespace-nowrap flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]"
      >
        {repeated.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span>{separator}</span>}
            <span>{item}</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
