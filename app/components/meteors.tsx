"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorProps {
  left: number;
  delay: number;
  duration: number;
}

export const Meteors = ({
  number,
  className
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<MeteorProps[]>([]);

  useEffect(() => {
    const count = number || 20;
    const meteorArray = Array.from({ length: count }, () => ({
      left: Math.floor(Math.random() * (400 - -400) + -400),
      delay: Math.random() * (0.8 - 0.2) + 0.2,
      duration: Math.floor(Math.random() * (10 - 2) + 2)
    }));
    setMeteors(meteorArray);
  }, [number]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-white/10 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-white/50 before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: 0,
            left: `${meteor.left}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`
          }}
        />
      ))}
    </>
  );
};
