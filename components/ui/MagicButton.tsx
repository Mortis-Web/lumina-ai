import React, { ReactNode } from 'react';

interface MagicButtonProps {
  title: string;
  icon?: ReactNode;
  containerClass?: string;
  position?:string;
  handleClick?: ()=> void;
  otherClasses?:string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  containerClass = '',
  handleClick,
  otherClasses
}) => {
  return (
    <button
    onClick={handleClick}
      className={`font-[jura] relative z-1000 inline-flex h-12 w-fit overflow-hidden rounded-xl p-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${containerClass} ${otherClasses}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-xl px-3 py-1 text-lg font-bold text-white backdrop-blur-3xl">
        {title} {icon}
      </span>
    </button>
  );
};

export default MagicButton;
