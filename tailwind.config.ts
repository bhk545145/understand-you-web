import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "oklch(0.58 0.14 240)",
          hover: "oklch(0.51 0.16 240)",
          active: "oklch(0.45 0.17 240)",
          soft: "oklch(0.93 0.05 240)",
          muted: "oklch(0.96 0.025 240)",
          surface: "oklch(0.975 0.015 240)",
        },
        surface: {
          DEFAULT: "oklch(0.996 0.002 240)",
          hover: "oklch(0.986 0.004 240)",
        },
        ink: {
          DEFAULT: "oklch(0.17 0.014 240)",
          secondary: "oklch(0.30 0.012 240)",
        },
        muted: "oklch(0.52 0.01 240)",
        border: {
          DEFAULT: "oklch(0.915 0.006 240)",
          strong: "oklch(0.855 0.008 240)",
        },
      },
      spacing: {
        "4pt": "0.25rem",
        "8pt": "0.5rem",
        "12pt": "0.75rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      boxShadow: {
        sm: "0 1px 3px oklch(0.17 0.01 240 / 0.06)",
        md: "0 4px 16px oklch(0.17 0.01 240 / 0.08)",
        lg: "0 12px 40px oklch(0.17 0.01 240 / 0.10)",
        xl: "0 24px 64px oklch(0.17 0.01 240 / 0.12)",
      },
      fontFamily: {
        sans: [
          '"Avenir Next"',
          '"SF Pro Text"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Noto Sans CJK SC"',
          "system-ui",
          "sans-serif",
        ],
        serif: [
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          '"Book Antiqua"',
          '"Songti SC"',
          '"STSong"',
          "Georgia",
          "serif",
        ],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        fast: "150ms",
      },
    },
  },
  plugins: [],
};

export default config;
