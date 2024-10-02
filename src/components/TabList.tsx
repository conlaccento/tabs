import React from "react";
import Tab from "./Tab";

type TabListProps = {
  titleId: string;
  tabs: {
    id: string;
    label: string;
    badgeLabel: string;
    badgeVariant: string;
  }[];
  selectedTabIndex: number;
  onTabSelect: (index: number) => void;
  onKeydown: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => void;
  tabRefs: React.RefObject<HTMLButtonElement>[];
  variant: string;
};

const TabList: React.FC<TabListProps> = ({
  titleId,
  tabs,
  selectedTabIndex,
  onTabSelect,
  onKeydown,
  tabRefs,
  variant
}) => {
  return (
    <div role="tablist" aria-labelledby={titleId} className="manual">
      <div className="tabs-wrapper">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            id={tab.id}
            label={tab.label}
            badgeLabel={tab.badgeLabel}
            badgeVariant={tab.badgeVariant}
            isSelected={selectedTabIndex === index}
            onSelect={() => onTabSelect(index)}
            onKeydown={(event) => onKeydown(event, index)}
            ref={(el) => (tabRefs.current[index] = el)}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;
