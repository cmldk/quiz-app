import { useEffect, useState } from 'react';

interface UseTimerProps {
  duration: number;
  notClickableDuration: number;
  onTimeUp: () => void;
}

/**
 * useTimer - Provides a timer that runs for a specified duration.
 * @param duration - The total duration of the timer (in seconds).
 * @param notClickableDuration - The duration during which the answer is not clickable (in seconds).
 * @param onTimeUp - A function to be called when the timer expires.
 */
export const useTimer = ({
  duration,
  notClickableDuration,
  onTimeUp,
}: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [isClickable, setIsClickable] = useState<boolean>(false);

  const resetTimer = () => {
    setTimeLeft(duration);
    setIsClickable(false);
  };

  useEffect(() => {
    if (timeLeft === duration - notClickableDuration) {
      setIsClickable(true);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 0) {
      setTimeout(() => {
        onTimeUp();
        resetTimer();
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, duration, notClickableDuration, onTimeUp]);

  return { timeLeft, isClickable, resetTimer };
};
