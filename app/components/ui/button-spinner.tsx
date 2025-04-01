import type { JSX } from "react";
import { cn } from "@/lib/utils";

interface ButtonSpinnerProps {
  size?: number;
}

export function ButtonSpinner(props: ButtonSpinnerProps): JSX.Element {
  const { size = 16 } = props;

  return (
    <div
      className="relative animate-[spin_1000ms_steps(12,end)_infinite]"
      style={{ width: size, height: size }}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "absolute top-1/2 right-0 -translate-y-1/2 origin-left transition-all duration-150 pointer-events-none",
            getRotationClass(index),
            getOpacityClass(index)
          )}
          style={{
            width: size / 2,
            height: size / 12,
          }}
        >
          <div className="absolute right-0 w-1/2 h-full rounded-full bg-current" />
        </div>
      ))}
    </div>
  );
}

function getRotationClass(index: number): string {
  const rotations = [
    "rotate-0",
    "rotate-30",
    "rotate-60",
    "rotate-90",
    "rotate-[120deg]",
    "rotate-[150deg]",
    "rotate-180",
    "rotate-[210deg]",
    "rotate-[240deg]",
    "rotate-[270deg]",
    "rotate-[300deg]",
    "rotate-[330deg]",
  ];
  return rotations[index];
}

function getOpacityClass(index: number): string {
  const opacities = [
    "opacity-10",
    "opacity-20",
    "opacity-30",
    "opacity-30",
    "opacity-40",
    "opacity-50",
    "opacity-50",
    "opacity-60",
    "opacity-70",
    "opacity-80",
    "opacity-90",
    "opacity-100",
  ];
  return opacities[index];
}
