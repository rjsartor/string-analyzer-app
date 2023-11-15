type streakDetails = { indexes: number[], isEven: boolean | null };

function isEven(char: string): boolean {
  return (char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)) % 2 === 0;
}

function isValidChar(char: string): boolean {
  return char.match(/[a-z]/i) !== null;
}

export function calculateStreak(inputString: string): { maxStreak: number, maxStreakDetails: streakDetails[] } {
  let maxStreak = 0;
  let currentStreak = 0;
  let lastEvenness: boolean | null = null;
  let currentStreakIndexes: number[] = [];
  let maxStreakDetails: streakDetails[] = [];

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char === ' ') continue;
    else if (isValidChar(char)) {
      const currentEvenness = isEven(char);
      if (currentEvenness === lastEvenness) {
        currentStreak += 1;
        currentStreakIndexes.push(i);
      } else {
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
          maxStreakDetails = [{ indexes: currentStreakIndexes, isEven: lastEvenness }];
        } else if (currentStreak === maxStreak) {
          maxStreakDetails.push({ indexes: currentStreakIndexes, isEven: lastEvenness });
        }
        currentStreak = 1;
        currentStreakIndexes = [i];
      }
      lastEvenness = currentEvenness;
    } else {
      if (currentStreak > 0) {
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
          maxStreakDetails = [{ indexes: currentStreakIndexes, isEven: lastEvenness }];
        } else if (currentStreak === maxStreak) {
          maxStreakDetails.push({ indexes: currentStreakIndexes, isEven: lastEvenness });
        }
      }
      currentStreak = 0;
      lastEvenness = null;
      currentStreakIndexes = [];
    }
  }

  if (currentStreak) {
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
      maxStreakDetails = [{ indexes: currentStreakIndexes, isEven: lastEvenness }];
    } else if (currentStreak === maxStreak) {
      maxStreakDetails.push({ indexes: currentStreakIndexes, isEven: lastEvenness });
    }
  }

  return {
    maxStreak,
    maxStreakDetails,
  };
}
