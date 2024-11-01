import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarWrapper from "@/components/sidebar-wrapper";

export const metadata: Metadata = {
  title: "Keepit",
  description: "Keepit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} bg-secondary  dark`}>
        <SidebarProvider>
          <SidebarWrapper />
          <div className="w-full flex flex-col  justify-center ">
            <main className="rounded-xl  ml-0.5  mr-1 p-4 box-border bg-background h-[98vh] overflow-auto">
              <SidebarTrigger className="hidden max-sm:block" />
              {children}
            </main>
          </div>
        </SidebarProvider>{" "}
      </body>
    </html>
  );
}
