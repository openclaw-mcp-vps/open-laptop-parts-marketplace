import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenParts — Marketplace for Open-Source Laptop Components",
  description: "Connect with component suppliers and design files for open hardware laptops. Built for hardware hackers, educational institutions, and repair shops."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ae24b94e-b015-4cd6-82d9-109fb9d6330d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
