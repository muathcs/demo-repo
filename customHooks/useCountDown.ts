import { useEffect, useState } from "react";

/**
 *
 * @param initialTime initial countdown in seconds
 */

export function useCountDown(initialTime: any) {
  const [time, setTime] = useState(() => {
    return initialTime;
  });

  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    const inerval = setInterval(() => {
      if (time > 0 && !isPaused) setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(inerval);
  }, [time, isPaused]);

  function pauseTimer() {
    setIsPaused(true);
  }

  function startTimer() {
    setIsPaused(false);
  }

  return [time, setTime, pauseTimer, startTimer, initialTime];
}
