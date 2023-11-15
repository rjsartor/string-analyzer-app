import React from 'react';
import { StreakDetails } from '../types';

interface StringDisplayProps {
  input: string;
  streakDetails: StreakDetails[] | null;
}

const oddHighlight = 'bg-yellow-400';
const evenHighlight = 'bg-green-400';

const StringDisplay: React.FC<StringDisplayProps> = ({ input, streakDetails }) => {
  const characters = input.split('');
  const highlightColor = (index: number): string => {
    for (let sd of streakDetails || []) {
      if (sd.indexes.includes(index)) {
        return (sd.isEven ? evenHighlight : oddHighlight);
      }
    }
    return '';
  };

  return (
    <div className="mb-2" style={{ minHeight: '2.5rem' }}>
      <div className="flex flex-wrap text-black text-lg font-semibold" style={{ whiteSpace: 'pre-wrap' }}>
        {characters.map((char, index) => {
          const color = highlightColor(index);
          return (
            <span key={index} className={`${color} inline-block`}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StringDisplay;
