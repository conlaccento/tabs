import Badge from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['neutral', 'positive', 'negative'],
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Neutral Badge",
  variant: "neutral", // Default variant
};

export const Positive = Template.bind({});
Positive.args = {
  label: "Positive Badge",
  variant: "positive",
};

export const Negative = Template.bind({});
Negative.args = {
  label: "Negative Badge",
  variant: "negative",
};
