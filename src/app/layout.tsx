import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from '@/components/Navbar';
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Container } from '@mui/material';
import "./globals.css";

export const metadata: Metadata = {
  title: "Donatello-app",
  description: "SaaS Small Food Businesses",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <AppRouterCacheProvider>
        <body className='flex bg-bg_100'>
          <Navbar />
          <Container>
            {children}
          </Container>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
