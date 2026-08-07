import { LegacyRuntime } from '@/components/LegacyRuntime';
import { loadLegacySource } from '@/lib/legacy-source';

type LegacySiteProps = { sourceFile: string; activePage?: string };

/** Server-rendered bridge that keeps every source selector and DOM node intact. */
export async function LegacySite({ sourceFile, activePage }: LegacySiteProps) {
  const { body, styles } = await loadLegacySource(sourceFile, activePage);
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <LegacyRuntime />
    </main>
  );
}
