import type { Metadata } from "next";
import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarWrapper from "@/components/sidebar-wrapper";

export const metadata: Metadata = {
  title: "Lyst",
  description: "Lyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} bg-secondary`}>
        <SidebarProvider>
          <SidebarWrapper />
          <main className="rounded-xl  ml-0.5 my-2 mr-2 bg-background w-full h-fit overflow-hidden">
            {children}
          </main>
        </SidebarProvider>{" "}
      </body>
    </html>
  );
}
