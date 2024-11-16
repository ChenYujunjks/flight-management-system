import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Flights",
  description: "Manage your journey in one app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <NavigationMenu />
        <div className="h-16" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
