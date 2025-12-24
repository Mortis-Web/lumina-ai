import React from 'react';

interface InfoBulletProps {
  text: string;
  icon?: React.ReactNode;
}

const InfoBullet: React.FC<InfoBulletProps> = ({ text, icon }) => {
  return (
    <span
      className="
      bullet
      tilt
      relative isolate
      overflow-hidden
        w-fit py-1 px-4
        flex items-center justify-center gap-2
        bg-[#bc61f8]/10
        rounded-2xl
        backdrop-blur-xl
        text-white
        border border-(--primary_color)
        shadow-[inset_0px_0px_10px_var(--primary_color)]
      "
    >
      {icon && <span className="flex text-[#bc61f8]/40 items-center">{icon}</span>}
      <span>{text}</span>
    </span>
  );
};

export default InfoBullet;
