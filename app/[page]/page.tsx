import { notFound } from 'next/navigation';
import { LegacySite } from '@/components/LegacySite';
import { isLegacyPage, legacyPages } from '@/lib/routes';

type PageProps = { params: Promise<{ page: string }> };

/**
 * The legacy page markup is extracted from a source HTML file.  Rendering the
 * known routes at build time keeps that source-file access out of the deployed
 * request handler, where serverless file tracing does not guarantee arbitrary
 * runtime file reads are available.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return legacyPages
    .filter((page) => !['home', 'support', 'conclaves', 'careers'].includes(page))
    .map((page) => ({ page }));
}

/** Routes each section of the original single-document site independently. */
export default async function LegacySectionPage({ params }: PageProps) {
  const { page } = await params;
  if (!isLegacyPage(page) || ['home', 'support', 'conclaves', 'careers'].includes(page)) notFound();

  return <LegacySite sourceFile="NTT_Website_Complete_3.html" activePage={page} />;
}
