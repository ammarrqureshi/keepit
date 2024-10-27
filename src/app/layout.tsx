import type { Metadata } from "next";
import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarWrapper from "@/components/sidebar-wrapper";
import { AppSidebar } from "@/components/app-sidebar";

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
      <body className={GeistMono.className}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          {children}
        </SidebarProvider>{" "}
      </body>
    </html>
  );
}
