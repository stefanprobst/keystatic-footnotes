import { config, fields, singleton } from "@keystatic/core";
import { mark } from "@keystatic/core/content-components";
import { SuperscriptIcon } from "lucide-react";

export default config({
	storage: {
		kind: "local",
	},
	singletons: {
		homePage: singleton({
			label: "Home page",
			path: "./content/index-page/",
			format: { contentField: "content" },
			schema: {
				title: fields.text({
					label: "Title",
					validation: { isRequired: true },
				}),
				content: fields.mdx({
					label: "Content",
					components: {
						Footnote: mark({
							label: "Footnote",
							icon: <SuperscriptIcon />,
							className: "underline decoration-dotted align-super text-xs",
							schema: {},
						}),
					},
				}),
			},
		}),
	},
});
