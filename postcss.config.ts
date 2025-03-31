import type { ProcessOptions } from "postcss";

const config: {
  plugins: Record<string, ProcessOptions | boolean>;
} = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
