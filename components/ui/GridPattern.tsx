'use client';
import { cn } from '@/lib/utils';
import { useId, useState, SVGProps } from 'react';

interface GridPatternProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
  squares?: [number, number][];
  className?: string;
}

export function GridPattern({
  width = 70,
  height = 70,
  x = -1,
  y = -1,
  strokeDasharray = '0',
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper to determine if a square is in the center
  const isCenter = (sx: number, sy: number) => {
    if (!squares) return false;
    const centerX = Math.floor(Math.max(...squares.map(([sx]) => sx)) / 2);
    const centerY = Math.floor(Math.max(...squares.map(([, sy]) => sy)) / 2);
    return sx === centerX && sy === centerY;
  };

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30',
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />

      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              key={`${sx}-${sy}-${index}`}
              strokeWidth={0}
              width={width - 1}
              height={height - 1}
              x={sx * width + 1}
              y={sy * height + 1}
              fill={
                hoveredIndex === index
                  ? 'transparent'
                  : isCenter(sx, sy)
                  ? 'transparent'
                  : 'rgba(255,255,255,0.25)' // colored squares
              }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transition: 'fill 0.3s ease',
              }}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
