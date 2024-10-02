import React, {forwardRef} from "react";
import Badge from "./Badge";

type TabProps = {
  id: string;
  label: string;
  variant: string;
  badgeLabel?: string;
  badgeVariant?: string;
  isSelected: boolean;
  onSelect: () => void;
  onKeydown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ id, label, variant, isSelected, onSelect, onKeydown, badgeLabel, badgeVariant }, ref) => {
    return (
      <button
        id={id}
        className={`tab--variant-${variant}`}
        role="tab"
        aria-selected={isSelected}
        aria-controls={`${id}-panel`}
        onClick={onSelect}
        onKeyDown={onKeydown}
        ref={ref}
      >
        <span>{label}</span>
        {badgeLabel && badgeLabel.trim() !== '' && (
          <Badge
            label={badgeLabel}
            variant={badgeVariant}
          />
        )}
      </button>
    );
  }
);

export default Tab;
