import React, { useState } from "react";
import Tab from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    isSelected: {
      control: { type: "boolean" },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['pills', 'underline'],
    },
    badgeVariant: {
      control: {
        type: 'select',
      },
      options: ['neutral', 'positive', 'negative'],
    },
  },
};

// Template function to create stories
const Template = (args) => {
  const [selected, setSelected] = useState(args.isSelected);

  const handleSelect = () => {
    setSelected((prev) => !prev);
  };

  return (
    <Tab
      {...args}
      isSelected={selected}
      onSelect={handleSelect}
      onKeydown={(event) => console.log(event.key)}
    />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  id: "tab-1",
  label: "Default Tab",
  badgeLabel: "",
  badgeVariant: "neutral",
  isSelected: false,
};

// Selected story
export const Selected = Template.bind({});
Selected.args = {
  id: "tab-2",
  label: "Selected Tab",
  badgeLabel: "",
  badgeVariant: "success",
  isSelected: true,
};

// Tab with Badge story
export const WithBadge = Template.bind({});
WithBadge.args = {
  id: "tab-3",
  label: "Tab with Badge",
  badgeLabel: "New",
  badgeVariant: "positive",
  isSelected: false,
};
