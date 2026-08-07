import { notFound } from 'next/navigation';
import { LegacySite } from '@/components/LegacySite';
import { isLegacyPage } from '@/lib/routes';

type PageProps = { params: Promise<{ page: string }> };

/** Routes each section of the original single-document site independently. */
export default async function LegacySectionPage({ params }: PageProps) {
  const { page } = await params;
  if (!isLegacyPage(page) || ['home', 'support', 'conclaves', 'careers'].includes(page)) notFound();

  return <LegacySite sourceFile="NTT_Website_Complete_3.html" activePage={page} />;
}
