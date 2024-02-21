// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://astrostarter.zank.studio";
export const SITE_TITLE: string = "Portifolio";
export const SITE_DESCRIPTION: string = "Anoto website";

// Repo info
export const REPO: string = "zankhq/astro-starter"; // TODO: Update dynamically
export const DEFAULT_BRANCH: string = "main"; // TODO: Update dynamically

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
		title: "Sobre",
		href: "/",
	},
	{
		title: "Projetos",
		href: "/blog",
	},
	{
		title: "Contato",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	it: "it",
};

// Hosting
export const HOSTING_SERVICE: "cloudflare" | "netlify" | "none" = "cloudflare";
