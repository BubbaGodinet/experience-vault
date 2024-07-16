import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Experience Vault",
  description: "Code Experiences by Bubba Godinet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
