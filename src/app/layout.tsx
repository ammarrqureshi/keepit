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
          <div className="rounded-xl  m-2 bg-background w-full h-full overflow-hidden">
            {children}
          </div>
        </SidebarProvider>{" "}
      </body>
    </html>
  );
}
