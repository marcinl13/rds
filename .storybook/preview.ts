import "./all-themes.css";
import type { Preview } from "@storybook/react";

const availableThemes = ["default", "forest"] as const;

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: availableThemes,
      },
    },
  },
  initialGlobals: {
    theme: "default",
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || "default";
      document.documentElement.classList.remove(
        ...availableThemes.map((theme) => `theme-${theme}`)
      );

      document.documentElement.classList.add(`theme-${theme}`);

      return story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
