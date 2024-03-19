import { ThemeProvider } from "@/Components/ThemeProvider";
import { Toaster } from "@/Components/ui/sonner";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimistic UI",
  description: "Next.JS Optimistic UI"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            richColors
            theme="light"
            closeButton
          />
        </ThemeProvider>
      </body>
    </html>
  );
};