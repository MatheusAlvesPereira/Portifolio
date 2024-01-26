// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://astrostarter.zank.studio";
export const SITE_TITLE: string = "Matheus Alves";
export const SITE_DESCRIPTION: string = "Welcome to my website!";

// SEO metadata
export const TWITTER_CREATOR: string = "@xxx";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "sobre",
		href: "/",
	},
	{
		title: "projetos",
		href: "/blog",
	},
	{
		title: "redes sociais",
		href: "/about",
	},
];


