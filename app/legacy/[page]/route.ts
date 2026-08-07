import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { NextResponse } from 'next/server';

const sourceFiles: Record<string, string> = {
  home: 'NTT_Website_Complete_3.html',
  support: 'NTT_Support_Page.html',
  conclaves: 'NTT_Conclaves_Page.html',
  careers: 'NTT_Careers_Page.html',
};

export async function GET(_: Request, { params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const file = sourceFiles[page];
  if (!file) return new NextResponse('Not found', { status: 404 });

  const html = await readFile(join(process.cwd(), file), 'utf8');
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
