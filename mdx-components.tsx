import type { MDXComponents } from "mdx/types";

import { FootnoteContent, FootnoteReference, FootnotesSection } from "@/components/footnote";

const shared = {
	FootnoteContent,
	FootnoteReference,
	FootnotesSection,
} as MDXComponents;

export function useMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...shared,
		...components,
	};
}
