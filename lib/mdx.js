import withFrontmatter from "remark-frontmatter";
import withGfm from "remark-gfm";
import withMdxFrontmatter from "remark-mdx-frontmatter";
import { withMdxFootnotes } from "./footnotes.js";

export const config = {
	remarkPlugins: [withFrontmatter, withMdxFrontmatter, withGfm, withMdxFootnotes],
};
