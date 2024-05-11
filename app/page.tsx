import Content, { frontmatter } from "@/content/index-page/index.mdx";

export default async function Homepage() {
	return (
		<main className="p-8 grid gap-4">
			<h1 className="text-2xl font-bold">{frontmatter.title}</h1>
			<Content />
		</main>
	);
}
