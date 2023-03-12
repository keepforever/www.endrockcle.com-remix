import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const EndRockGradientText: React.FC<Props> = ({
  children,
  className,
}) => {
  return (
    <span
      className="inline-block bg-gradient-to-r from-erc-red to-erc-yellow font-extrabold tracking-tight text-transparent leading-relaxed"
      style={{
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
};
