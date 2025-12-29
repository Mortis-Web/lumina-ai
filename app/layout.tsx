import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import ClientOnly from "@/components/ui/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuminaDevEg - Software Development Startup",
  description: "LuminaDevEg is a dynamic software development startup specializing in creating innovative digital solutions. Our expert team leverages cutting-edge technologies to deliver high-quality, scalable applications tailored to meet the unique needs of our clients.",
  keywords: ["AI chatbot", "SaaS", "Lumina AI", "Software Development", "Lumina Development Egypt", "LuminaDevEg", "Lumina Egypt","ChatGPT", "AI assistant", "AI solutions", "Custom software", "Web development", "Mobile apps", "Tech startup", "Digital innovation"],
  authors: [{ name: "Amr Khaled Eissa", url: "https://linkedin.com/in/amr-khaled-eissa" }, ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
