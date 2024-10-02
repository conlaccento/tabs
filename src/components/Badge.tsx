import React from "react";

type BadgeProps = {
  label: string;
  variant?: string;
};

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "neutral",
}) => {
  return <span className={`tab-badge tab-badge--${variant}`}>{label}</span>;
};

export default Badge;
