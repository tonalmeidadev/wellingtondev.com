"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  return (
    <span className="text-sm leading-3.25 text-neutral-400 lowercase">
      SP, BRA — {isClient ? formattedTime : "00:00:00"}
    </span>
  );
}
