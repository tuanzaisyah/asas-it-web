import React, { useEffect, useState } from "react";

const Timer = ({ stopTimer, restartTimer }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval;

    if (!stopTimer) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [stopTimer]);

  useEffect(() => {
    if (restartTimer) {
      setTimer(60);
    }
  }, [restartTimer]);

  return (
    <div className="flex flex-row justify-center items-center gap-4 bg-orange px-3 py-2 rounded-lg">
      <h5 className="font-medium text-xl">Masa</h5>

      <span className="text-xl bg-slate-900 text-white-200 px-2  py-1 rounded-md">
        {timer}
      </span>
    </div>
  );
};

export default Timer;
