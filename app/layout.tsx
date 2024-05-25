import '@/app/ui/global.css';
import { allura } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${allura.className} antialiased`}>{children}</body>
    </html>
  );
}
