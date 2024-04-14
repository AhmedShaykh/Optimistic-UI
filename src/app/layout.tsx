import { ThemeProvider } from "@/Components/ThemeProvider";
import { Toaster } from "@/Components/ui/sonner";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optimistic UI & Admin Dashboard",
  description: "Next.JS Optimistic UI & Admin Dashboard"
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