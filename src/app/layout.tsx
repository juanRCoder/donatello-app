import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donatello-app",
  description: "SaaS Small Food Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className='flex'>
          {children}
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
