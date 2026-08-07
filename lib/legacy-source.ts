import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type LegacySource = { body: string; styles: string };

/** Extracts the supplied prototype's document fragments for React ownership. */
export async function loadLegacySource(fileName: string, activePage = 'home'): Promise<LegacySource> {
  const html = await readFile(join(process.cwd(), fileName), 'utf8');
  const styles = Array.from(html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi))
    .map((match) => match[1])
    .join('\n');
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const pageAwareBody = body.replace(
    /(<div\s+id=["']page-)([^"']+)(["']\s+class=["']page)(?:\s+active)?(["'])/gi,
    (_, prefix: string, id: string, classPrefix: string, suffix: string) =>
      `${prefix}${id}${classPrefix}${id === activePage ? ' active' : ''}${suffix}`,
  );
  // Script tags are intentionally replaced with typed client-side handlers.
  return { body: pageAwareBody.replace(/<script[\s\S]*?<\/script>/gi, ''), styles };
}
