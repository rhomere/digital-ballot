import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Ballot Guide",
  description: "A UI-forward ballot explainer with scroll and flip interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
