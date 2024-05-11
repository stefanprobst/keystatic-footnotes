import createMdxPlugin from "@next/mdx";
import { config as mdxConfig } from "./lib/mdx.js";

/** @type {import('next').NextConfig} */
const config = {};

const withMdx = createMdxPlugin({
	options: mdxConfig,
});

export default withMdx(config);
