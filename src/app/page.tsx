'use client';
import { useState } from 'react';
import Legend from './components/Legend';
import Input from './components/Input';
import StringDisplay from './components/StringDisplay';
import useAnalyzeString from './hooks/useAnalyzeString';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const { maxStreak, streakDetails, error } = useAnalyzeString(input);

  const showStreakDeatils = input && maxStreak !== null;

  return (
    <div className="flex justify-center pt-20 bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-md" style={{ minHeight: 250 }}>
        <p className="mt-1 mb-4 text-xl text-center font-bold text-black">Character Streak Analyzer</p>
        <StringDisplay input={input} streakDetails={streakDetails} />
        <Input value={input} onChange={setInput} />
        {showStreakDeatils && (
          <div>
            <p className="text-center text-black">Max streak is: {maxStreak}</p>
            <Legend />
          </div>
        )}
        {error && <p className="text-red-500 text-center">Oops! Something is broken. Please try again later.</p>}
      </div>
    </div>
  );
}
