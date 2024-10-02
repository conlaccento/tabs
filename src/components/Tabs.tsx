import React, { useState, useRef } from "react";
import TabList from "./TabList";
import TabPanel from "./TabPanel";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  title: string;
  titleId: string;
  tabs: Tab[];
  variant?: string;
};

const Tabs: React.FC<TabsProps> = ({ title, titleId, tabs, variant = "pill" }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeydown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {

    let newIndex = index;
    switch (event.key) {
      case "ArrowRight":
        newIndex = (index + 1) % tabs.length;
        break;
      case "ArrowLeft":
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    if (tabRefs.current[newIndex]) {
      tabRefs.current[newIndex]?.focus();
    }
    event.preventDefault();
  };

  return (
    <div className={`tabs tabs--variant-${variant}`}>
      <h2 id={titleId}>{title}</h2>
      <TabList
        tabs={tabs}
        titleId={titleId}
        selectedTabIndex={selectedTabIndex}
        onTabSelect={setSelectedTabIndex}
        onKeydown={handleKeydown}
        tabRefs={tabRefs}
        variant={variant}
      />
      {tabs.map((tab, index) => (
        <TabPanel
          key={tab.id}
          id={tab.id}
          isSelected={selectedTabIndex === index}
        >
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

export default Tabs;
