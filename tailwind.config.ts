import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./keystatic.config.tsx",
		"./app/**/*.@(css|js|ts|tsx)",
		"./components/**/*.@(css|js|ts|tsx)",
		"./content/**/*.mdx",
	],
};

export default config;
