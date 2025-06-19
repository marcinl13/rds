import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RdsInputNumber } from "../src/components/molecules";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Molecules/InputNumber",
  component: RdsInputNumber,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    _size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof RdsInputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  value: 10,
  _size: "medium",
  placeholder: "Placeholder",
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    ...defaultArgs,
    _size: "large",
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    _size: "medium",
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    _size: "small",
  },
};
