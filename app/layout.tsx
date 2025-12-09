import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaxxMaade",
  description: "Emotional alchemy, mixed media, and controlled chaos by Maxx Slater.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

