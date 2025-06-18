import type { Meta, StoryObj } from "@storybook/react";
import { RdsButton } from "../src/components/atoms";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Button",
  component: RdsButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof RdsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = "Hello world";

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children,
  },
};

export const Secondary: Story = {
  args: {
    _variant: "secondary",
    children,
  },
};

export const Accent: Story = {
  args: {
    _variant: "accent",
    children,
  },
};

export const Neutral: Story = {
  args: {
    _variant: "neutral",
    children,
  },
};

export const Info: Story = {
  args: {
    _variant: "info",
    children,
  },
};

export const Success: Story = {
  args: {
    _variant: "success",
    children,
  },
};

export const Warning: Story = {
  args: {
    _variant: "warning",
    children,
  },
};

export const Error: Story = {
  args: {
    _variant: "error",
    children,
  },
};
