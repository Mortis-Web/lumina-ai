import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import ClientOnly from "@/components/ui/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumina AI",
  description: "AI Chatbot SaaS Platform – Intelligent, Fast, and Conversational",
  keywords: ["AI chatbot", "SaaS", "Lumina AI", "ChatGPT", "AI assistant"],
  authors: [{ name: "mortis-web", url: "https://lumina-ai-1eua-43ixgfi0w-mortis-webs-projects.vercel.app/" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ClientOnly>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
          </ClientOnly>
      </body>
    </html>
  );
}
