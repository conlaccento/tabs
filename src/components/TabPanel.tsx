import React from "react";

type TabPanelProps = {
  id: string;
  isSelected: boolean;
  children: React.ReactNode;
};

const TabPanel: React.FC<TabPanelProps> = ({ id, isSelected, children }) => {
  return (
    <div
      id={`${id}-panel`}
      role="tabpanel"
      aria-labelledby={id}
      className={isSelected ? "" : "is-hidden"}
    >
      {children}
    </div>
  );
};

export default TabPanel;
