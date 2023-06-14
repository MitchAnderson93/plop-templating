/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/*.mdx", 
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  logo: {
    src: "../src/assets/qg-coa.svg",
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
