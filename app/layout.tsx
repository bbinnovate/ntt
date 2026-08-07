import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "NAVNEET TOPTECH | India's School Transformation Partner",
  description: "NAVNEET TOPTECH is India's School Transformation Partner — the EdTech arm of Navneet Education Limited.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
