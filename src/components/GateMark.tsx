import { useId } from "react";

export default function GateMark({ size = 22 }: { size?: number }) {
  const gradientId = `gate-mark-gold-${useId()}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#f4dd9a" />
          <stop offset="55%" stopColor="#d9b45c" />
          <stop offset="100%" stopColor="#8a6a2a" />
        </linearGradient>
      </defs>
      <path
        d="M50 8 C56 8 56 18 50 22 C44 26 44 34 50 38 L74 62 C80 68 68 80 62 74 L50 62 L38 74 C32 80 20 68 26 62 L50 38 C56 34 56 26 50 22 C44 18 44 8 50 8 Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M50 30 L68 48 L50 66 L32 48 Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.2"
        fill="none"
      />
    </svg>
  );
}
