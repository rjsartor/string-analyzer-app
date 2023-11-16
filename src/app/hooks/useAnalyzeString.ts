import axios from 'axios';
import { useState, useEffect } from 'react';
import { StreakDetails } from '../types';

interface UseAnalyzeStringReturn {
  maxStreak: number | null;
  streakDetails: StreakDetails[] | null;
  error: string | null;
}

const useAnalyzeString = (input: string): UseAnalyzeStringReturn => {
  const [maxStreak, setMaxStreak] = useState<number | null>(null);
  const [streakDetails, setStreakDetails] = useState<StreakDetails[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeString = async (inputValue: string) => {
    try {
      const response = await axios.post('/analyze-string', { inputValue });
      setMaxStreak(response.data.maxStreak);
      setStreakDetails(response.data.maxStreakDetails);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => { 
    if (input.length) analyzeString(input); 
  }, [input]);

  return { maxStreak, streakDetails, error };
};

export default useAnalyzeString;