/**
 * Concatenate page title and site title
 * @param pageTitle
 * @param siteTitle
 * @returns
 */
export function convertPageTitle(pageTitle: string, siteTitle: string): string {
	let titleSeperator = " - ";
	return pageTitle + titleSeperator + siteTitle;
}
