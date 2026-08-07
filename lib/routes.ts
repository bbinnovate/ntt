/**
 * Canonical URLs for the sections authored in the supplied HTML prototype.
 * Keeping this mapping in one place means client interactions and App Router
 * routes always agree.
 */
export const legacyPages = [
  'home',
  'about',
  'topschool',
  'topclass',
  'topassess',
  'topseries',
  'ifp',
  'contact',
  'conclaves',
  'news',
  'blogs',
  'locations',
  'support',
  'careers',
] as const;

export type LegacyPage = (typeof legacyPages)[number];

export function legacyPagePath(page: string): string {
  return page === 'home' ? '/' : `/${page}`;
}

export function isLegacyPage(page: string): page is LegacyPage {
  return legacyPages.includes(page as LegacyPage);
}
